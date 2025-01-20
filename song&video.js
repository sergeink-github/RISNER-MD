const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "play",
    desc: "download songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*කරුණාකර Link එකක් හො නමක් ලබා දෙන්න 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `╭━❮◆ RISNER MD SONG DOWNLOADER ◆❯━╮

┃➤✰ 𝚃𝙸𝚃𝙻𝙴 : ${data.title}

┃➤✰ 𝚅𝙸𝙴𝚆𝚂 : ${data.views}

┃➤✰ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 : ${data.description}

┃➤✰𝚃𝙸𝙼𝙴 : ${data.timestamp}

┃➤  𝙰𝙶𝙾 :  ${data.ago}
╰━━━━━━━━━━━━━━━⪼


> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ SERGE RISNER
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"©ᴘᴏᴡᴇʀᴇᴅ ʙʏ SERGE RISNER"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})

//===========video-dl===========

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    react: "🎥",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*කරුණාකර Link එකක් හො නමක් ලබා දෙන්න 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `╭━❮◆ RISNER MD VIDEO DOWNLOADER ◆❯━╮

┃➤✰ 𝚃𝙸𝚃𝙻𝙴 : ${data.title}

┃➤✰ 𝚅𝙸𝙴𝚆𝚂 : ${data.views}

┃➤✰ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 : ${data.description}

┃➤✰𝚃𝙸𝙼𝙴 : ${data.timestamp}

┃➤  𝙰𝙶𝙾 :  ${data.ago}
╰━━━━━━━━━━━━━━━⪼


> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ SERGE RISNER 
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await conn.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"©ᴘᴏᴡᴇʀᴇᴅ ʙʏ SERGE RISNER"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})
