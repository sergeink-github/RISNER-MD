const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭───────────────◎◎▷
👋𝐇𝐄𝐋𝐋𝐎 ........................🔰

> ᗯᗴᒪᑕOᗰ TO RIsner ᗰᗪ ᗰᑌᒪTIᗪᗴᐯIᑕᗴ ᗯᕼᗩTՏᗩᑭᑭ ᗷOT☢︎︎

☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎
𝗟𝗢𝗢𝗞𝗜𝗡𝗚 𝗡𝗢𝗪 ☟︎︎︎☟︎︎︎☟︎︎︎☟︎︎︎

> RISNER MD »

> ➪𝐌𝐘 𝐑𝐄𝐀𝐋 𝐍𝐀𝐌𝐄☞︎︎︎ SERGE RISNER

> ➪𝐈'𝐌 𝐅𝐑𝐎𝐌☞︎︎︎ Togo

> ➪𝐌𝐘 𝐀𝐆𝐄☞︎︎︎ ♕︎18 TO 20.♕︎


> 𝗠𝗬 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗡𝗨𝗠𝗕𝗘𝗥☟︎︎︎☟︎︎︎☟︎︎︎☟︎︎︎

 https://wa.me/22890786778?text=_♕︎Serge-Risner♕︎_𝙸_𝚕𝚒𝚔𝚎_𝚖𝚎𝚎𝚝_𝚢𝚘𝚞👻👋_

> 𝐨𝐰𝐞𝐧𝐞𝐫 : RISNER-MD OᖴIᑕIᗩᒪ
╰───────────────◎◎▷
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ serge Risner
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/n5vvij.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
