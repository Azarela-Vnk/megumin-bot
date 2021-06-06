const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `❀:ཻུ۪۪⸙ -----[ *SOUND MENU* ]----- ❀:ཻུ۪۪⸙
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
╭════〘 *ITSMAZGH BOT* 〙════⊱❁۪۪۪
┃□╭─────────────────
┃□│⊱❥ NAMA : ${pushname}
┃□│⊱❥ LEVEL : ${getLevelingLevel(sender)}
┃□│⊱❥ USER ${botName} : ${_registered.length}
┃□╰─────────────────
╰══════════════════⊱❁۪۪۪
Berikut adalah fitur yang ada pada bot ini!✨
┏══════════════════⊱❁۪۪۪
┃╭──────────────────
┃│➸ *${prefix}iri*
┃│➸ *${prefix}pale*
┃│➸ *${prefix}yamate*
┃│➸ *${prefix}bot*
┃│➸ *${prefix}sound*
┃│➸ *${prefix}sound1*
┃│➸ *${prefix}sound2*
┃│➸ *${prefix}sound3*
┃│➸ *${prefix}sound4*
┃│➸ *${prefix}sound5*
┃│➸ *${prefix}sound6*
┃│➸ *${prefix}sound7*
┃│➸ *${prefix}sound8*
┃│➸ *${prefix}sound9*
┃│➸ *${prefix}sound[10-25]*
┃│➸ *${prefix}shalawat[1-10]*
┃╰──────────────────
┗══════════════════⊱❁۪۪۪
❀:ཻུ۪۪⸙ -----[ *POWERED BY ${ownerName}* ]----- ❀:ཻུ۪۪⸙`
}
exports.sound = sound