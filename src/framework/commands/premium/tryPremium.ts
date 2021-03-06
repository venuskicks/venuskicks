import { Message } from 'eris';
import moment from 'moment';

import { IMClient } from '../../../client';
import { BotCommand, CommandGroup, PromptResult } from '../../../types';
import { Command, Context } from '../Command';

export default class extends Command {
	public constructor(client: IMClient) {
		super(client, {
			name: BotCommand.tryPremium,
			aliases: ['try', 'try-premium'],
			group: CommandGroup.Premium,
			guildOnly: true,
			defaultAdminOnly: true
		});
	}

	public async action(
		message: Message,
		args: any[],
		flags: {},
		{ guild, settings, t, isPremium }: Context
	): Promise<any> {
		const prefix = settings.prefix;

		const embed = this.createEmbed();

		const trialDuration = moment.duration(1, 'week');
		const validUntil = moment().add(trialDuration);

		embed.title = t('cmd.tryPremium.title');
		if (isPremium) {
			embed.description = t('cmd.tryPremium.currentlyActive');
		} else if (await this.guildHadTrial(guild.id)) {
			embed.description = t('cmd.tryPremium.alreadyUsed', {
				prefix
			});
		} else {
			const promptEmbed = this.createEmbed();

			promptEmbed.description = t('cmd.tryPremium.text', {
				duration: trialDuration.humanize()
			});

			await this.sendReply(message, promptEmbed);

			const [keyResult] = await this.client.msg.prompt(message, t('cmd.tryPremium.prompt'));
			if (keyResult === PromptResult.TIMEOUT) {
				return this.sendReply(message, t('prompt.timedOut'));
			}
			if (keyResult === PromptResult.FAILURE) {
				return this.sendReply(message, t('prompt.canceled'));
			}

			const subId = await this.client.db.savePremiumSubscription({
				amount: 0,
				maxGuilds: 1,
				isFreeTier: true,
				validUntil: validUntil.toDate(),
				memberId: message.author.id,
				reason: '!try-premium'
			});
			await this.client.db.savePremiumSubscriptionGuild({
				guildId: guild.id,
				subscriptionId: subId
			});

			this.client.cache.premium.flush(guild.id);

			embed.description = t('cmd.tryPremium.started', {
				prefix
			});
		}

		return this.sendReply(message, embed);
	}

	private async guildHadTrial(guildId: string): Promise<boolean> {
		const sub = await this.client.db.getFreePremiumSubscriptionGuildForGuild(guildId);
		return !!sub;
	}
}
