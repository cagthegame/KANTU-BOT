import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*ββ ππππΎππΈπ°π» ππ΄ππΌππ*:
NO YT
*ββ π²πΎπΌπ°π½π³πΎπ ππ΄ππΌππ*
> cd
> termux-setup-storage
> apt update 
> pkg upgrade 
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/cagthegame/KANTU-BOT
> cd DORRAT-TERMUX
> yarn install 
> npm install
> npm update
> npm install 
> npm start
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ - πΈπ½πππ°π»π°ππ±πΎπ',
body: 'β πππ‘π§π¨ - ππ’π§β ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/DIEGO-OFC/DORRAT-BOT-MD`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
