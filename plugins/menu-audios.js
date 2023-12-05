import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *𝐊𝐀𝐍𝐓𝐔 - 𝐁𝐎𝐓* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *<𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*
┣ ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
┣ ඬ⃟🔊 _Te diagnostico con gay_
┣ ඬ⃟🔊 _No digas eso papu_
┣ ඬ⃟🔊 _A nadie le importa_
┣ ඬ⃟🔊 _Fiesta del admin_
┣ ඬ⃟🔊 _Fiesta del administrador_ 
┣ ඬ⃟🔊 _Vivan los novios_
┣ ඬ⃟🔊 _Feliz cumpleaños_
┣ ඬ⃟🔊 _Noche de paz_
┣ ඬ⃟🔊 _Buenos dias_
┣ ඬ⃟🔊 _Buenos tardes_
┣ ඬ⃟🔊 _Buenos noches_
┣ ඬ⃟🔊 _Audio hentai_
┣ ඬ⃟🔊 _Chica lgante_
┣ ඬ⃟🔊 _Feliz navidad_
┣ ඬ⃟🔊 _Vete a la vrg_
┣ ඬ⃟🔊 _Pasa pack Bot_
┣ ඬ⃟🔊 _Atencion grupo_
┣ ඬ⃟🔊 _Marica quien_
┣ ඬ⃟🔊 _Murio el grupo_
┣ ඬ⃟🔊 _Oh me vengo_
┣ ඬ⃟🔊 _tio que rico_
┣ ඬ⃟🔊 _Viernes_
┣ ඬ⃟🔊 _Baneado_
┣ ඬ⃟🔊 _Sexo_
┣ ඬ⃟🔊 _Hola_
┣ ඬ⃟🔊 _Un pato_
┣ ඬ⃟🔊 _Nyanpasu_
┣ ඬ⃟🔊 _Te amo_
┣ ඬ⃟🔊 _Yamete_
┣ ඬ⃟🔊 _Bañate_
┣ ඬ⃟🔊 _Es puto_
┣ ඬ⃟🔊 _La biblia_
┣ ඬ⃟🔊 _Onichan_
┣ ඬ⃟🔊 _Mierda de Bot_
┣ ඬ⃟🔊 _Siuuu_
┣ ඬ⃟🔊 _Epico_
┣ ඬ⃟🔊 _Shitpost_
┣ ඬ⃟🔊 _Rawr_
┣ ඬ⃟🔊 _UwU_
┣ ඬ⃟🔊 _:c_
┣ ඬ⃟🔊 _a_
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
