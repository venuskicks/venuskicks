# Configs

There are many config options that can be set. You don't have to set all of them. If you just added the bot, just run `!setup`, which will guide you through the most important ones.

## Overview

### Genel

| Setting                              | Description                                                |
| ------------------------------------ | ---------------------------------------------------------- |
| [Prefix](#prefix)                    | The prefix used to trigger bot commands.                   |
| [Dil](#lang)                         | The language of the bot                                    |
| [Log Channel](#logchannel)           | The channel where bot actions are logged.                  |
| [Yükselt.](#getupdates)              | Enable to receive development updates about InviteManager. |
| [Command channels](#channels)        | The channels in which the bot will react to commands.      |
| [Ignored channels](#ignoredchannels) | The channels in which the bot will ignore commands.        |

### davetler

#### gelenler

| Setting                                | Description                                      |
| -------------------------------------- | ------------------------------------------------ |
| [Message](#joinmessage)                | The message sent when someone joins the server.  |
| [Message Channel](#joinmessagechannel) | The channel that the message on join is sent to. |

#### ayrılanlar

| Setting                                                | Description                                                                               |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| [Message](#leavemessage)                               | The message sent when someone leaves the server.                                          |
| [Message Channel](#leavemessagechannel)                | The channel that the leave message is sent to.                                            |
| [Auto Subtract](#autosubtractleaves)                   | Automatically remove invites from the inviter when the invited user leaves.               |
| [Auto Subtract Threshold](#autosubtractleavethreshold) | Davetiyenin sayması için bir kullanıcının sunucuda kalması gereken saniye cinsinden süre. |

#### Liderlik Tablosu

| Setting                                              | Description                                             |
| ---------------------------------------------------- | ------------------------------------------------------- |
| [Style](#leaderboardstyle)                           | The display style of the leaderboard.                   |
| [Hide left members](#hideleftmembersfromleaderboard) | Hide members that left the server from the leaderboard. |

#### Sahte

| Setting                             | Description                          |
| ----------------------------------- | ------------------------------------ |
| [Auto Subtract](#autosubtractfakes) | Automatically subtract fake invites. |

#### rütbe

| Setting                                          | Description                                                 |
| ------------------------------------------------ | ----------------------------------------------------------- |
| [Assignment Style](#rankassignmentstyle)         | How ranks are rewarded to users.                            |
| [Announcement Channel](#rankannouncementchannel) | The channel where users receiving a new rank are announced. |
| [Announcement Message](#rankannouncementmessage) | The message that is sent when a user receives a new rank.   |

### Moderation

#### Doğrulama

| Setting                                               | Description                                                                                   |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [Etkin](#captchaverificationonjoin)                   | Captcha doğrulamanın etkin olup olmadığı.                                                     |
| [Welcome Message](#captchaverificationwelcomemessage) | The message a user will get after joining a server and instructing them to enter the captcha. |
| [Success Message](#captchaverificationsuccessmessage) | The welcome message that will be sent to the user after he successfully verifies.             |
| [Başarısız Mesaj](#captchaverificationfailedmessage)  | Geçersiz bir captcha girerse, kullanıcıya mesaj gönderilir.                                   |
| [Verification Timeout](#captchaverificationtimeout)   | The time within which the captcha has to be entered successfully.                             |
| [log etkin](#captchaverificationlogenabled)           | Doğrulama girişimlerinin yapılıp yapılmadığı günlüğe kaydedilir.                              |

#### General

| Setting                                                         | Description                                                |
| --------------------------------------------------------------- | ---------------------------------------------------------- |
| [Enabled](#automodenabled)                                      | settings.autoModEnabled.description                        |
| [Moderated Channels](#automodmoderatedchannels)                 | settings.autoModModeratedChannels.description              |
| [Moderatör Rolü](#automodmoderatedroles)                        | settings.autoModModeratedRoles.description                 |
| [Ignored Channels](#automodignoredchannels)                     | settings.autoModIgnoredChannels.description                |
| [Ignored Roles](#automodignoredroles)                           | settings.autoModIgnoredRoles.description                   |
| [Muted Role](#mutedrole)                                        | settings.mutedRole.description                             |
| [Disabled for Old Members](#automoddisabledforoldmembers)       | settings.autoModDisabledForOldMembers.description          |
| [Old Members Threshold](#automoddisabledforoldmembersthreshold) | settings.autoModDisabledForOldMembersThreshold.description |

#### Logging

| Setting                                                                | Description                                                               |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Log Enabled](#automodlogenabled)                                      | settings.autoModLogEnabled.description                                    |
| [Mod Log Channel](#modlogchannel)                                      | The channel where moderation logs will be posted in.                      |
| [Bot Mesajlarını Sil](#automoddeletebotmessage)                        | settings.autoModDeleteBotMessage.description                              |
| [Delete Bot Message Timeout](#automoddeletebotmessagetimeoutinseconds) | settings.autoModDeleteBotMessageTimeoutInSeconds.description              |
| [Yasaklama Mesajını Sil](#modpunishmentbandeletemessage)               | Whether or not "Ban" pushment messages will be deleted automatically.     |
| [Kick Mesajını Sil](#modpunishmentkickdeletemessage)                   | Whether or not "Kick" pushment messages will be deleted automatically.    |
| [Delete Softban Messages](#modpunishmentsoftbandeletemessage)          | Whether or not "Softban" pushment messages will be deleted automatically. |
| [Uyarı Mesajlarını Sil.](#modpunishmentwarndeletemessage)              | Whether or not "Warn" pushment messages will be deleted automatically.    |
| [Susturma Mesajlarını Sil.](#modpunishmentmutedeletemessage)           | Whether or not "Mute" pushment messages will be deleted automatically.    |

#### Invites

| Setting                           | Description                                |
| --------------------------------- | ------------------------------------------ |
| [Enabled](#automodinvitesenabled) | settings.autoModInvitesEnabled.description |

#### Links

| Setting                                          | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ |
| [Enabled](#automodlinksenabled)                  | settings.autoModLinksEnabled.description         |
| [Betaz liste](#automodlinkswhitelist)            | settings.autoModLinksWhitelist.description       |
| [Blacklist](#automodlinksblacklist)              | settings.autoModLinksBlacklist.description       |
| [Follow Redirects](#automodlinksfollowredirects) | settings.autoModLinksFollowRedirects.description |

#### Yasaklı Kelimeler.

| Setting                              | Description                                             |
| ------------------------------------ | ------------------------------------------------------- |
| [Enabled](#automodwordsenabled)      | Whether or not blacklisted words will be automoderated. |
| [Kara liste](#automodwordsblacklist) | A list of words that are banned.                        |

#### Büyük Harfler

| Setting                                          | Description                                       |
| ------------------------------------------------ | ------------------------------------------------- |
| [Etkin](#automodallcapsenabled)                  | settings.autoModAllCapsEnabled.description        |
| [Min. Characters](#automodallcapsmincharacters)  | settings.autoModAllCapsMinCharacters.description  |
| [Percentage CAPs](#automodallcapspercentagecaps) | settings.autoModAllCapsPercentageCaps.description |

#### Çift Mesajlar

| Setting                                                         | Description                                                 |
| --------------------------------------------------------------- | ----------------------------------------------------------- |
| [Enabled](#automodduplicatetextenabled)                         | settings.autoModDuplicateTextEnabled.description            |
| [Timeframe in Seconds](#automodduplicatetexttimeframeinseconds) | settings.autoModDuplicateTextTimeframeInSeconds.description |

#### Spam

| Setting                                                         | Description                                                 |
| --------------------------------------------------------------- | ----------------------------------------------------------- |
| [Etkin](#automodquickmessagesenabled)                           | settings.autoModQuickMessagesEnabled.description            |
| [# of Messages](#automodquickmessagesnumberofmessages)          | settings.autoModQuickMessagesNumberOfMessages.description   |
| [Timeframe in Seconds](#automodquickmessagestimeframeinseconds) | settings.autoModQuickMessagesTimeframeInSeconds.description |

#### Mentions

| Setting                                                      | Description                                                 |
| ------------------------------------------------------------ | ----------------------------------------------------------- |
| [Enabled](#automodmentionusersenabled)                       | settings.autoModMentionUsersEnabled.description             |
| [Max # of Mentions](#automodmentionusersmaxnumberofmentions) | settings.autoModMentionUsersMaxNumberOfMentions.description |
| [Enabled](#automodmentionrolesenabled)                       | settings.autoModMentionRolesEnabled.description             |
| [Max # of Mentions](#automodmentionrolesmaxnumberofmentions) | settings.autoModMentionRolesMaxNumberOfMentions.description |

#### Emojiler

| Setting                                            | Description                                         |
| -------------------------------------------------- | --------------------------------------------------- |
| [Enabled](#automodemojisenabled)                   | settings.autoModEmojisEnabled.description           |
| [Max # of Emojis](#automodemojismaxnumberofemojis) | settings.autoModEmojisMaxNumberOfEmojis.description |
| [Dehoist Enabled](#automodhoistenabled)            | settings.autoModHoistEnabled.description            |

### Music

#### Music

| Setting                          | Description                                                        |
| -------------------------------- | ------------------------------------------------------------------ |
| [Müzik Ses Düzeyi](#musicvolume) | The default volume that is set when the bot joins a voice channel. |

#### settings.groups.music.announcement.title

| Setting                                     | Description                                                            |
| ------------------------------------------- | ---------------------------------------------------------------------- |
| [Sıradaki Şarkıyı Duyur](#announcenextsong) | Whether or not the next song should be announced in the voice channel. |
| [Announcement Voice](#announcementvoice)    | The voice used in the next song announcements.                         |

#### settings.groups.music.fadeMusic.title

| Setting                                    | Description                                                                               |
| ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| [Fade Music On Talk](#fademusicontalk)     | If enabled, the music will fade down while people are talking.                            |
| [Fade Music End Delay](#fademusicenddelay) | The delay of how many seconds noone has to speak for the volume to return back to normal. |

#### settings.groups.music.platform.title

| Setting                                                          | Description                                 |
| ---------------------------------------------------------------- | ------------------------------------------- |
| [settings.defaultMusicPlatform.title](#defaultmusicplatform)     | settings.defaultMusicPlatform.description   |
| [settings.disabledMusicPlatforms.title](#disabledmusicplatforms) | settings.disabledMusicPlatforms.description |

<a name=prefix></a>

---

## Prefix

The prefix used to trigger bot commands.

Type: `String`

Default: `!`

Reset to default:
`!config prefix default`

Examples:

`!config prefix +`

`!config prefix >`

<a name=lang></a>

---

## Dil

The language of the bot

Type: `Enum<Lang>`

Default: `en`

Reset to default:
`!config lang default`

Possible values: `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ro`, `sv`

Example:

`!config lang de`

<a name=logChannel></a>

---

## Log Channel

The channel where bot actions are logged.

Type: `Channel`

Default: `null`

Reset to default:
`!config logChannel default`

Examples:

`!config logChannel #channel`

<a name=getUpdates></a>

---

## Yükselt.

Enable to receive development updates about InviteManager.

Type: `Boolean`

Default: `true`

Reset to default:
`!config getUpdates default`

Enable:

`!config getUpdates true`

Disable:

`!config getUpdates false`

<a name=channels></a>

---

## Command channels

The channels in which the bot will react to commands.

Type: `Channel[]`

Default: ``

Reset to default:
`!config channels default`

<a name=ignoredChannels></a>

---

## Ignored channels

The channels in which the bot will ignore commands.

Type: `Channel[]`

Default: ``

Reset to default:
`!config ignoredChannels default`

<a name=joinMessage></a>

---

## Message

The message sent when someone joins the server.

Type: `String`

Default: `{memberMention} **joined**; Invited by **{inviterName}** (**{numInvites}** invites)`

Reset to default:
`!config joinMessage default`

<a name=joinMessageChannel></a>

---

## Message Channel

The channel that the message on join is sent to.

Type: `Channel`

Default: `null`

Reset to default:
`!config joinMessageChannel default`

Examples:

`!config joinMessageChannel #general`

`!config joinMessageChannel #joins`

<a name=leaveMessage></a>

---

## Message

The message sent when someone leaves the server.

Type: `String`

Default: `{memberName} **left**; Invited by **{inviterName}**`

Reset to default:
`!config leaveMessage default`

Examples:

`!config leaveMessage`

`!config leaveMessage`

<a name=leaveMessageChannel></a>

---

## Message Channel

The channel that the leave message is sent to.

Type: `Channel`

Default: `null`

Reset to default:
`!config leaveMessageChannel default`

Examples:

`!config leaveMessageChannel #general`

`!config leaveMessageChannel #leaves`

<a name=leaderboardStyle></a>

---

## Style

The display style of the leaderboard.

Type: `Enum<LeaderboardStyle>`

Default: `normal`

Reset to default:
`!config leaderboardStyle default`

Possible values: `normal`, `table`, `mentions`

Example:

`!config leaderboardStyle normal`

<a name=hideLeftMembersFromLeaderboard></a>

---

## Hide left members

Hide members that left the server from the leaderboard.

Type: `Boolean`

Default: `true`

Reset to default:
`!config hideLeftMembersFromLeaderboard default`

Enable:

`!config hideLeftMembersFromLeaderboard true`

Disable:

`!config hideLeftMembersFromLeaderboard false`

<a name=autoSubtractFakes></a>

---

## Auto Subtract

Automatically subtract fake invites.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoSubtractFakes default`

Enable:

`!config autoSubtractFakes true`

Disable:

`!config autoSubtractFakes false`

<a name=autoSubtractLeaves></a>

---

## Auto Subtract

Automatically remove invites from the inviter when the invited user leaves.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoSubtractLeaves default`

Enable:

`!config autoSubtractLeaves true`

Disable:

`!config autoSubtractLeaves false`

<a name=autoSubtractLeaveThreshold></a>

---

## Auto Subtract Threshold

Davetiyenin sayması için bir kullanıcının sunucuda kalması gereken saniye cinsinden süre.

Type: `Number`

Default: `600`

Reset to default:
`!config autoSubtractLeaveThreshold default`

Examples:

`!config autoSubtractLeaveThreshold 60`

`!config autoSubtractLeaveThreshold 3600`

<a name=rankAssignmentStyle></a>

---

## Assignment Style

How ranks are rewarded to users.

Type: `Enum<RankAssignmentStyle>`

Default: `all`

Reset to default:
`!config rankAssignmentStyle default`

Possible values: `all`, `highest`

Example:

`!config rankAssignmentStyle all`

<a name=rankAnnouncementChannel></a>

---

## Announcement Channel

The channel where users receiving a new rank are announced.

Type: `Channel`

Default: `null`

Reset to default:
`!config rankAnnouncementChannel default`

Examples:

`!config rankAnnouncementChannel`

`!config rankAnnouncementChannel`

<a name=rankAnnouncementMessage></a>

---

## Announcement Message

The message that is sent when a user receives a new rank.

Type: `String`

Default: `Congratulations, **{memberMention}** has reached the **{rankName}** rank!`

Reset to default:
`!config rankAnnouncementMessage default`

Examples:

`!config rankAnnouncementMessage`

`!config rankAnnouncementMessage`

<a name=captchaVerificationOnJoin></a>

---

## Etkin

Captcha doğrulamanın etkin olup olmadığı.

Type: `Boolean`

Default: `false`

Reset to default:
`!config captchaVerificationOnJoin default`

Enable:

`!config captchaVerificationOnJoin true`

Disable:

`!config captchaVerificationOnJoin false`

<a name=captchaVerificationWelcomeMessage></a>

---

## Welcome Message

The message a user will get after joining a server and instructing them to enter the captcha.

Type: `String`

Default: `Welcome to the server **{serverName}**! For extra protection, new members are required to enter a captcha.`

Reset to default:
`!config captchaVerificationWelcomeMessage default`

Examples:

`!config captchaVerificationWelcomeMessage Welcome, please enter the captcha below!`

<a name=captchaVerificationSuccessMessage></a>

---

## Success Message

The welcome message that will be sent to the user after he successfully verifies.

Type: `String`

Default: `You have successfully entered the captcha. Welcome to the server!`

Reset to default:
`!config captchaVerificationSuccessMessage default`

Examples:

`!config captchaVerificationSuccessMessage Thanks for entering the captcha, enjoy our server!`

<a name=captchaVerificationFailedMessage></a>

---

## Başarısız Mesaj

Geçersiz bir captcha girerse, kullanıcıya mesaj gönderilir.

Type: `String`

Default: `You did not enter the captha right within the specified time.We're sorry, but we have to kick you from the server. Feel free to join again.`

Reset to default:
`!config captchaVerificationFailedMessage default`

Examples:

`!config captchaVerificationFailedMessage Looks like you are not human :(. You can join again and try again later if this was a mistake!`

<a name=captchaVerificationTimeout></a>

---

## Verification Timeout

The time within which the captcha has to be entered successfully.

Type: `Number`

Default: `180`

Reset to default:
`!config captchaVerificationTimeout default`

Examples:

`!config captchaVerificationTimeout 60`

`!config captchaVerificationTimeout 600`

<a name=captchaVerificationLogEnabled></a>

---

## log etkin

Doğrulama girişimlerinin yapılıp yapılmadığı günlüğe kaydedilir.

Type: `Boolean`

Default: `true`

Reset to default:
`!config captchaVerificationLogEnabled default`

Enable:

`!config captchaVerificationLogEnabled true`

Disable:

`!config captchaVerificationLogEnabled false`

<a name=autoModEnabled></a>

---

## Enabled

settings.autoModEnabled.description

Type: `Boolean`

Default: `false`

Reset to default:
`!config autoModEnabled default`

Enable:

`!config autoModEnabled true`

Disable:

`!config autoModEnabled false`

<a name=autoModModeratedChannels></a>

---

## Moderated Channels

settings.autoModModeratedChannels.description

Type: `Channel[]`

Default: ``

Reset to default:
`!config autoModModeratedChannels default`

Examples:

`!config autoModModeratedChannels #general`

`!config autoModModeratedChannels #support,#help`

<a name=autoModModeratedRoles></a>

---

## Moderatör Rolü

settings.autoModModeratedRoles.description

Type: `Role[]`

Default: ``

Reset to default:
`!config autoModModeratedRoles default`

Examples:

`!config autoModModeratedRoles @NewMembers`

`!config autoModModeratedRoles @Newbies,@Starters`

<a name=autoModIgnoredChannels></a>

---

## Ignored Channels

settings.autoModIgnoredChannels.description

Type: `Channel[]`

Default: ``

Reset to default:
`!config autoModIgnoredChannels default`

Examples:

`!config autoModIgnoredChannels #general`

`!config autoModIgnoredChannels #off-topic,#nsfw`

<a name=autoModIgnoredRoles></a>

---

## Ignored Roles

settings.autoModIgnoredRoles.description

Type: `Role[]`

Default: ``

Reset to default:
`!config autoModIgnoredRoles default`

Examples:

`!config autoModIgnoredRoles @TrustedMembers`

`!config autoModIgnoredRoles @Moderators,@Staff`

<a name=mutedRole></a>

---

## Muted Role

settings.mutedRole.description

Type: `Role`

Default: `null`

Reset to default:
`!config mutedRole default`

Examples:

`!config mutedRole @muted`

<a name=autoModDisabledForOldMembers></a>

---

## Disabled for Old Members

settings.autoModDisabledForOldMembers.description

Type: `Boolean`

Default: `false`

Reset to default:
`!config autoModDisabledForOldMembers default`

Enable:

`!config autoModDisabledForOldMembers true`

Disable:

`!config autoModDisabledForOldMembers false`

<a name=autoModDisabledForOldMembersThreshold></a>

---

## Old Members Threshold

settings.autoModDisabledForOldMembersThreshold.description

Type: `Number`

Default: `604800`

Reset to default:
`!config autoModDisabledForOldMembersThreshold default`

Examples:

`!config autoModDisabledForOldMembersThreshold 604800` (1 week)``

`!config autoModDisabledForOldMembersThreshold 2419200` (1 month)``

<a name=autoModLogEnabled></a>

---

## Log Enabled

settings.autoModLogEnabled.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModLogEnabled default`

Enable:

`!config autoModLogEnabled true`

Disable:

`!config autoModLogEnabled false`

<a name=modLogChannel></a>

---

## Mod Log Channel

The channel where moderation logs will be posted in.

Type: `Channel`

Default: `null`

Reset to default:
`!config modLogChannel default`

Examples:

`!config modLogChannel #channel`

`!config modLogChannel #logs`

<a name=autoModDeleteBotMessage></a>

---

## Bot Mesajlarını Sil

settings.autoModDeleteBotMessage.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModDeleteBotMessage default`

Enable:

`!config autoModDeleteBotMessage true`

Disable:

`!config autoModDeleteBotMessage false`

<a name=autoModDeleteBotMessageTimeoutInSeconds></a>

---

## Delete Bot Message Timeout

settings.autoModDeleteBotMessageTimeoutInSeconds.description

Type: `Number`

Default: `5`

Reset to default:
`!config autoModDeleteBotMessageTimeoutInSeconds default`

Examples:

`!config autoModDeleteBotMessageTimeoutInSeconds 5`

`!config autoModDeleteBotMessageTimeoutInSeconds 10`

<a name=modPunishmentBanDeleteMessage></a>

---

## Yasaklama Mesajını Sil

Whether or not "Ban" pushment messages will be deleted automatically.

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentBanDeleteMessage default`

Enable:

`!config modPunishmentBanDeleteMessage true`

Disable:

`!config modPunishmentBanDeleteMessage false`

<a name=modPunishmentKickDeleteMessage></a>

---

## Kick Mesajını Sil

Whether or not "Kick" pushment messages will be deleted automatically.

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentKickDeleteMessage default`

Enable:

`!config modPunishmentKickDeleteMessage true`

Disable:

`!config modPunishmentKickDeleteMessage false`

<a name=modPunishmentSoftbanDeleteMessage></a>

---

## Delete Softban Messages

Whether or not "Softban" pushment messages will be deleted automatically.

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentSoftbanDeleteMessage default`

Enable:

`!config modPunishmentSoftbanDeleteMessage true`

Disable:

`!config modPunishmentSoftbanDeleteMessage false`

<a name=modPunishmentWarnDeleteMessage></a>

---

## Uyarı Mesajlarını Sil.

Whether or not "Warn" pushment messages will be deleted automatically.

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentWarnDeleteMessage default`

Enable:

`!config modPunishmentWarnDeleteMessage true`

Disable:

`!config modPunishmentWarnDeleteMessage false`

<a name=modPunishmentMuteDeleteMessage></a>

---

## Susturma Mesajlarını Sil.

Whether or not "Mute" pushment messages will be deleted automatically.

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentMuteDeleteMessage default`

Enable:

`!config modPunishmentMuteDeleteMessage true`

Disable:

`!config modPunishmentMuteDeleteMessage false`

<a name=autoModInvitesEnabled></a>

---

## Enabled

settings.autoModInvitesEnabled.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModInvitesEnabled default`

Enable:

`!config autoModInvitesEnabled true`

Disable:

`!config autoModInvitesEnabled false`

<a name=autoModLinksEnabled></a>

---

## Enabled

settings.autoModLinksEnabled.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModLinksEnabled default`

Enable:

`!config autoModLinksEnabled true`

Disable:

`!config autoModLinksEnabled false`

<a name=autoModLinksWhitelist></a>

---

## Betaz liste

settings.autoModLinksWhitelist.description

Type: `String[]`

Default: ``

Reset to default:
`!config autoModLinksWhitelist default`

Examples:

`!config autoModLinksWhitelist discordbots.org`

`!config autoModLinksWhitelist youtube.com,twitch.com`

<a name=autoModLinksBlacklist></a>

---

## Blacklist

settings.autoModLinksBlacklist.description

Type: `String[]`

Default: ``

Reset to default:
`!config autoModLinksBlacklist default`

Examples:

`!config autoModLinksBlacklist google.com`

`!config autoModLinksBlacklist twitch.com,youtube.com`

<a name=autoModLinksFollowRedirects></a>

---

## Follow Redirects

settings.autoModLinksFollowRedirects.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModLinksFollowRedirects default`

Enable:

`!config autoModLinksFollowRedirects true`

Disable:

`!config autoModLinksFollowRedirects false`

<a name=autoModWordsEnabled></a>

---

## Enabled

Whether or not blacklisted words will be automoderated.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModWordsEnabled default`

Enable:

`!config autoModWordsEnabled true`

Disable:

`!config autoModWordsEnabled false`

<a name=autoModWordsBlacklist></a>

---

## Kara liste

A list of words that are banned.

Type: `String[]`

Default: ``

Reset to default:
`!config autoModWordsBlacklist default`

Examples:

`!config autoModWordsBlacklist gay`

`!config autoModWordsBlacklist stupid,fuck`

<a name=autoModAllCapsEnabled></a>

---

## Etkin

settings.autoModAllCapsEnabled.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModAllCapsEnabled default`

Enable:

`!config autoModAllCapsEnabled true`

Disable:

`!config autoModAllCapsEnabled false`

<a name=autoModAllCapsMinCharacters></a>

---

## Min. Characters

settings.autoModAllCapsMinCharacters.description

Type: `Number`

Default: `10`

Reset to default:
`!config autoModAllCapsMinCharacters default`

Examples:

`!config autoModAllCapsMinCharacters 5`

`!config autoModAllCapsMinCharacters 15`

<a name=autoModAllCapsPercentageCaps></a>

---

## Percentage CAPs

settings.autoModAllCapsPercentageCaps.description

Type: `Number`

Default: `70`

Reset to default:
`!config autoModAllCapsPercentageCaps default`

Examples:

`!config autoModAllCapsPercentageCaps 50`

`!config autoModAllCapsPercentageCaps 90`

<a name=autoModDuplicateTextEnabled></a>

---

## Enabled

settings.autoModDuplicateTextEnabled.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModDuplicateTextEnabled default`

Enable:

`!config autoModDuplicateTextEnabled true`

Disable:

`!config autoModDuplicateTextEnabled false`

<a name=autoModDuplicateTextTimeframeInSeconds></a>

---

## Timeframe in Seconds

settings.autoModDuplicateTextTimeframeInSeconds.description

Type: `Number`

Default: `60`

Reset to default:
`!config autoModDuplicateTextTimeframeInSeconds default`

Examples:

`!config autoModDuplicateTextTimeframeInSeconds 5`

`!config autoModDuplicateTextTimeframeInSeconds 20`

<a name=autoModQuickMessagesEnabled></a>

---

## Etkin

settings.autoModQuickMessagesEnabled.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModQuickMessagesEnabled default`

Enable:

`!config autoModQuickMessagesEnabled true`

Disable:

`!config autoModQuickMessagesEnabled false`

<a name=autoModQuickMessagesNumberOfMessages></a>

---

## # of Messages

settings.autoModQuickMessagesNumberOfMessages.description

Type: `Number`

Default: `5`

Reset to default:
`!config autoModQuickMessagesNumberOfMessages default`

Examples:

`!config autoModQuickMessagesNumberOfMessages 5`

`!config autoModQuickMessagesNumberOfMessages 10`

<a name=autoModQuickMessagesTimeframeInSeconds></a>

---

## Timeframe in Seconds

settings.autoModQuickMessagesTimeframeInSeconds.description

Type: `Number`

Default: `3`

Reset to default:
`!config autoModQuickMessagesTimeframeInSeconds default`

Examples:

`!config autoModQuickMessagesTimeframeInSeconds 2`

`!config autoModQuickMessagesTimeframeInSeconds 10`

<a name=autoModMentionUsersEnabled></a>

---

## Enabled

settings.autoModMentionUsersEnabled.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModMentionUsersEnabled default`

Enable:

`!config autoModMentionUsersEnabled true`

Disable:

`!config autoModMentionUsersEnabled false`

<a name=autoModMentionUsersMaxNumberOfMentions></a>

---

## Max # of Mentions

settings.autoModMentionUsersMaxNumberOfMentions.description

Type: `Number`

Default: `5`

Reset to default:
`!config autoModMentionUsersMaxNumberOfMentions default`

Examples:

`!config autoModMentionUsersMaxNumberOfMentions 2`

`!config autoModMentionUsersMaxNumberOfMentions 5`

<a name=autoModMentionRolesEnabled></a>

---

## Enabled

settings.autoModMentionRolesEnabled.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModMentionRolesEnabled default`

Enable:

`!config autoModMentionRolesEnabled true`

Disable:

`!config autoModMentionRolesEnabled false`

<a name=autoModMentionRolesMaxNumberOfMentions></a>

---

## Max # of Mentions

settings.autoModMentionRolesMaxNumberOfMentions.description

Type: `Number`

Default: `3`

Reset to default:
`!config autoModMentionRolesMaxNumberOfMentions default`

Examples:

`!config autoModMentionRolesMaxNumberOfMentions 2`

`!config autoModMentionRolesMaxNumberOfMentions 5`

<a name=autoModEmojisEnabled></a>

---

## Enabled

settings.autoModEmojisEnabled.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModEmojisEnabled default`

Enable:

`!config autoModEmojisEnabled true`

Disable:

`!config autoModEmojisEnabled false`

<a name=autoModEmojisMaxNumberOfEmojis></a>

---

## Max # of Emojis

settings.autoModEmojisMaxNumberOfEmojis.description

Type: `Number`

Default: `5`

Reset to default:
`!config autoModEmojisMaxNumberOfEmojis default`

Examples:

`!config autoModEmojisMaxNumberOfEmojis 5`

`!config autoModEmojisMaxNumberOfEmojis 10`

<a name=autoModHoistEnabled></a>

---

## Dehoist Enabled

settings.autoModHoistEnabled.description

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModHoistEnabled default`

Enable:

`!config autoModHoistEnabled true`

Disable:

`!config autoModHoistEnabled false`

<a name=musicVolume></a>

---

## Müzik Ses Düzeyi

The default volume that is set when the bot joins a voice channel.

Type: `Number`

Default: `100`

Reset to default:
`!config musicVolume default`

<a name=announceNextSong></a>

---

## Sıradaki Şarkıyı Duyur

Whether or not the next song should be announced in the voice channel.

Type: `Boolean`

Default: `true`

Reset to default:
`!config announceNextSong default`

Enable:

`!config announceNextSong true`

Disable:

`!config announceNextSong false`

<a name=announcementVoice></a>

---

## Announcement Voice

The voice used in the next song announcements.

Type: `Enum<AnnouncementVoice>`

Default: `Joanna`

Reset to default:
`!config announcementVoice default`

Possible values: `Joanna`, `Salli`, `Kendra`, `Kimberly`, `Ivy`, `Matthew`, `Justin`, `Joey`

Example:

`!config announcementVoice Joanna`

<a name=fadeMusicOnTalk></a>

---

## Fade Music On Talk

If enabled, the music will fade down while people are talking.

Type: `Boolean`

Default: `true`

Reset to default:
`!config fadeMusicOnTalk default`

Enable:

`!config fadeMusicOnTalk true`

Disable:

`!config fadeMusicOnTalk false`

<a name=fadeMusicEndDelay></a>

---

## Fade Music End Delay

The delay of how many seconds noone has to speak for the volume to return back to normal.

Type: `Number`

Default: `1`

Reset to default:
`!config fadeMusicEndDelay default`

<a name=defaultMusicPlatform></a>

---

## settings.defaultMusicPlatform.title

settings.defaultMusicPlatform.description

Type: `Enum<MusicPlatformTypes>`

Default: `soundcloud`

Reset to default:
`!config defaultMusicPlatform default`

<a name=disabledMusicPlatforms></a>

---

## settings.disabledMusicPlatforms.title

settings.disabledMusicPlatforms.description

Type: `Enum<MusicPlatformTypes>[]`

Default: ``

Reset to default:
`!config disabledMusicPlatforms default`
