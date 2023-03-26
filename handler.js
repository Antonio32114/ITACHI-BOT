process.on('uncaughtException', console.error) //Safe Log Error
const { generateMessageID, downloadContentFromMessage, proto, generateWAMessageFromContent, prepareWAMessageMedia, areJidsSameUser, getLastMessageInChat, jidDecode } = require('@adiwajshing/baileys');
const colors = require('colors');
const axios = require('axios');
const util = require('util');
const chalk = require('chalk');
const { times, fetchJson, isUrl, getBuffer, getRandom, sleep, getGroupAdmins, downloadMediaMessage, runtime, jsonformat, formatDate, tanggal, formatp } = require('./utils/smsg');
const { y2mateV, y2mateA } = require('./utils/ytdl');
const fs = require('fs');
const os = require('os');
const { color, mylog, infolog } = require("./lib/color")
const moment = require('moment-timezone');
const ytdl = require('ytdl-core');
const hentai = require('nhentai');
const fdl = require("caliph-api");
const hikki = require("hikki-me");
const TD = require('better-tord');
const yts = require("yt-search")
const ffmpeg = require('fluent-ffmpeg');
const PhoneNumber = require('awesome-phonenumber');
const readline = require('readline');
const { performance } = require('perf_hooks');
const speed = require('performance-now')
const { exec, spawn } = require('child_process');
const toMs = require("ms")
let print = console.log;
const cooldown = new Map();

const fke = '```'

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

// Language


module.exports = index = async(conn, m, store, warn) =>{
try {
	var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
	var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "!" : prefa ?? global.prefix
	const jsn = JSON.parse(fs.readFileSync('./src/database.json'));
	const dta = JSON.parse(fs.readFileSync('./database/setting.json'));
 const { mediafireDl } = require('./lib/mediafire.js')
 const more = String.fromCharCode(8206);
const readMore = more.repeat(4000);
	const args = body.trim().split(/ +/).slice(1)
	const arg = body.substring(body.indexOf(" ") + 1);
	const isCmd = body.startsWith(prefix)
	const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
	const from = m.key.remoteJid ? m.key.remoteJid : m.key.participant
	const sender = m.key.participant ? m.key.participant : m.key.remoteJid
	const senderName = m.pushName ? m.pushName : ''
	const pushname = m.pushName || "No Name"
	const text = q = args.join(" ")
	const fatkuns = (m.quoted || m)
	const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
	const mime = (quoted.msg || quoted).mimetype || ''
	const qmsg = (quoted.msg || quoted)
	const isMedia = /image|video|sticker|audio/.test(mime)

	const isGroup = from.endsWith('@g.us')
	const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupDesc = isGroup ? groupMetadata.desc : ''
	const groupId = isGroup ? groupMetadata.id : ''
	const number = [`global.owner@s.whatsapp.net`]
	const isOwner = number.includes(sender)
	const botNumber = await conn.decodeJid(conn.user.id)
	const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : ''
	const isGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isBotGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const participants = m.isGroup ? await groupMetadata.participants : ''
	let who = m.mentions && m.mentions[0] ? m.mentions : m.fromMe ? this.user : m.sender 
	require('./setting');

const downloadContentFromMediaMessage = async(m) => {
let mime = (m.msg || m).mimetype || ''
const stream = await downloadContentFromMessage(m.quoted ? m.quoted : m.msg, mime.split("/")[0])
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

	const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG!*`,jpegThumbnail: global.thumb}}}
	const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6283102650464-1589321480@g.us","inviteCode": "m","groupName": "XCoco", "caption": `XCoco MD`, 'jpegThumbnail': global.thumb}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': global.thumb}}}
const sticWait = (hehe) => {
			ano = fs.readFileSync('./media/webp/wait.webp')
			conn.sendMessage(hehe, { sticker: ano, contextInfo: {
			forwardingScore:999,
            isForwarded:true, 
            mentionedJid: [m.sender],
			externalAdReply: { 
			title: "FOLLOW ME ON INSTAGRAM ", 
			mediaType: 1, 
			body: "Ig Owner", 
			thumbnail: thumb, 
			previewType: "FOTO",
			sourceUrl: `https://instagram.com/ant0dwn`}}}, 
			{ quoted: m })
		}
		// TEMPLATE BUTTON!
		const buttonsDefault = []

        if (m.message) {
            conn.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ DEV ]')), chalk.white(chalk.bgGreen(new Date)) + '\n          ' + chalk.white(chalk.bgMagenta(budy || m.mtype)) + '\n' + chalk.green('=> De'), chalk.magenta(pushname), chalk.yellow(m.sender) + '\n' + chalk.green('=> En'), chalk.blueBright(m.isGroup ? pushname : 'Private Chat', from) + '\n' + chalk.magenta(''))
        }
        
        async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}
        
// START COMMAND
switch(command){


case 'google': {
                if (!text) throw m.reply(`Ejemplo : ${prefix + command} ꪶ 𝐈𝚻么͢𝐂𝐇𝐈 - 𝚩𝚯͢亇 ꫂ`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Búsqueda de Google desde : ${text}\n\n`
                for (let g of res) {
                teks += `» *Titulo* : ${g.title}\n`
                teks += `» *Descripción* : ${g.snippet}\n`
                teks += `» *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
case "reto": {
        let dare = TD.get_dare();
        const x17 = await fetchJson(`https://api.popcat.xyz/translate?to=es&text=${dare}`)
        m.reply(x17.translated);
    }
    break
case 'tiktok':
 if(!q) return m.reply(`Y el link?`)
 anu = await fetchJson(`https://api.yanzbotzz.repl.co/api/download/tiktok?url=${q}&apikey=YanzBotz`)
 conn.sendMessage(m.chat, { video: { url: anu.result.video.no_watermark }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: m })
 break
case 'follar':{
if (!text) throw m.reply(`*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`)
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
m.reply(`
🤤👅🥵 *𝐀𝐂𝐀𝐁𝐀𝐒 𝐃𝐄 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!*🥵👅🤤

*𝙏𝙚 𝙖𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙛𝙤𝙡𝙡𝙖𝙧 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙧𝙖 𝙙𝙚* *${text}* ⁩ *𝙖 𝟰 𝙥𝙖𝙩𝙖𝙨 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙜𝙚𝙢𝙞𝙖 𝙘𝙤𝙢𝙤 𝙪𝙣𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙥𝙚𝙧𝙧𝙖 "𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, 𝐬𝐢𝐠𝐮𝐞, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬.." 𝙮 𝙡𝙖 𝙝𝙖𝙨 𝙙𝙚𝙟𝙖𝙙𝙤 𝙩𝙖𝙣 𝙧𝙚𝙫𝙚𝙣𝙩𝙖𝙙𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙤𝙨𝙩𝙚𝙣𝙚𝙧 𝙣𝙞 𝙨𝙪 𝙥𝙧𝙤𝙥𝙞𝙤 𝙘𝙪𝙚𝙧𝙥𝙤 𝙡𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙯𝙤𝙧𝙧𝙖!*

*${text}* 
🤤🥵 *¡𝐘𝐀 𝐓𝐄 𝐇𝐀𝐍 𝐅𝐎𝐋𝐋𝐀𝐃𝐎!* 🥵🤤`, null, { mentions: [user] })
}
break
case 'alma-gemela': {
            if (!isGroup) throw act.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫tu alma gemela es

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '.alma-gemela', buttonText: { displayText: 'Alma gemela' }, type: 1 }
                    ]
                    await conn.sendButtonText(m.chat, buttons, jawab, conn.user.name, m, {mentions: ments})
            }
            break
    case "verdad": {
        let truth = TD.get_truth();
        const txt = await fetchJson(`https://api.popcat.xyz/translate?to=es&text=${truth}`)
        m.reply(txt.translated);
    }
    break    
    case 'morir':
              if (!q) return m.reply(`¡No válido!\n\n¿que nombre quieres saber en que fecha morirá??`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              m.reply(`${predea.data.name}\n*muere a la edad de:* ${predea.data.age} Años.\n\n${fke}disfruta cada segundo de tu perra vida...${fke}`)
              break
case 'nekost':          
					sticWait(from)
					axios.get(`https://api.waifu.pics/sfw/neko`)
					.then(({data}) => {
						conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
           if (/image/.test(mime)) {
           sticWait(from)
                let media = await conn.downloadMediaMessage(qmsg)
                let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            sticWait(from)
                if (qmsg.seconds > 11) return m.reply('Envia un video de maximo 10 segundos!')
                let media = await conn.downloadMediaMessage(qmsg)
                let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Enviar/responder imagen/video/gif con el comando ${prefix + command}\nLa duración de vídeos debe de ser máximo 9 segundos`)
                }
            }
            break
case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Enviar/responder video/audio que desea usar como audio con el comando ${prefix + command}`
            sticWait(from)
            let media = await conn.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
    case 'play': {
  const yt_search = require("yt-search");
  let busqueda = await yt_search.search(args.join(' '))
  let resultados_xd = ` YouTube - Search
*Titulo :* ${busqueda.all[0].title}
*Duracion :* ${busqueda.all[0].timestamp}
*Tipo :* ${busqueda.all[0].type}
*Autor :* ${busqueda.all[0].author.name}
*Publicado :* ${busqueda.all[0].ago}
*Vistas :* ${busqueda.all[0].views}
*Enlace :* ${busqueda.all[0].url}`
const buttons = [
  {buttonId: prefix + `ytmp3 ${busqueda.all[0].url}`, buttonText: {displayText: 'Audio'}, type: 1},
  {buttonId: prefix + `ytmp4 ${busqueda.all[0].url}`, buttonText: {displayText: 'Video'}, type: 1},
]
const buttonMessage = {
    image: {url: busqueda.all[0].image},
    caption: resultados_xd,
    footer: "Pones el nombre que desses xd",
    buttons: buttons,
    headerType: 4
}
conn.sendMessage(m.chat, buttonMessage, {quoted: m})
}
break
        case 'ytmp3': {
  const ytdl = require('ytdl-core')
  const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`;};
  if (args.length === 0) { m.reply(`*Ingresa el enlace que vas a descargar.*`); return; }
  try {
     let urlYt = args[0];
     if (!urlYt.startsWith("http")) { m.reply(`Ingresa un enlace de youtube!`); return; }
     let infoYt = await ytdl.getInfo(urlYt);
     let titleYt = infoYt.videoDetails.title;
     let ytVidInfo = (await ytdl.getInfo(args[0])).videoDetails
     const ytDlTXT = `❑ • *Titulo:* ${ytVidInfo.title}\n` +
                     `❑ • *Vistas:* ${ytVidInfo.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n` +
                     `❑ • *Publicado:* ${ytVidInfo.publishDate}\n` +
                     `❑ • *Segundos:* ${ytVidInfo.lengthSeconds}\n` +
                     `❑ • *Owner Profile:* ${ytVidInfo.ownerProfileUrl}\n` +
                     `❑ • *Canal:* ${ytVidInfo.author.name}\n` +
                     `❑ • *Categoria:* ${ytVidInfo.category}\n`
     try { var thumb = ytVidInfo.thumbnails[4].url } catch { var thumb = ytVidInfo.thumbnails[2].url }
     conn.sendMessage(m.chat, {image: {url: thumb}, caption: ytDlTXT}, {quoted: m})
     let randomName = getRandom(".mp3");
     const stream = ytdl(urlYt, { filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128, }).pipe(fs.createWriteStream(`./${randomName}`));
     console.log(" downloading ->", urlYt);
      await new Promise((resolve, reject) => { stream.on("error", reject); stream.on("finish", resolve); });
      let stats = fs.statSync(`./${randomName}`);
      let fileSizeInBytes = stats.size;
      let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
      console.log("Audio downloaded ! tamaño: " + fileSizeInMegabytes);
      if (fileSizeInMegabytes <= 999999) {
      await conn.sendMessage(from, { audio: fs.readFileSync(`./${randomName}`), mimetype: "audio/mpeg", fileName: titleYt}, { quoted: m });
      } else {
      m.reply(`El tamaño de archivo es superior a 999 MB.`);
      }
      fs.unlinkSync(`./${randomName}`);
  } catch (e) {
    m.reply(e.toString())}}
break
case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} https://youtu.be/XTLyoOoxCgA 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('Archivo por encima del límite '+util.format(media))
                conn.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `❑ Title : ${media.title}\n❑ Tamaño del archivo : ${media.filesizeF}\n❑ Url : ${isUrl(text)}\n❑ Ext : MP3\n❑ Resolución : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'speedtest': {
            m.reply('Testeando velocidad...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
case 'getcase':
if (!isOwner && !m.key.fromMe)
try {
const getCase = (cases) => {
return "case" + ` '${cases}'` + fs.readFileSync('handler.js').toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
}
m.reply(`${getCase(args[0])}`)
} catch {
m.reply('No se encontro el case')
}
break
            case 'tagall': {
if (!m.isGroup) return m.reply(act.group)
if (!isAdmins) return m.reply(act.admin)
if (!isBotAdmins) return m.reply(act.botAdmin)
let teks = `┌──〘 *Invocar al grupo* 〙──\n`
for (let mem of participants) {
teks += `│• @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) return m.reply(act.group)
if (!isAdmins) return m.reply(act.admin)
if (!isBotAdmins) return m.reply(act.botAdmin)
if (!q) return m.reply(`Texto?`)
conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'link':{
if (!m.isGroup) return m.reply(act.group)
if (!isAdmins) return m.reply(act.admin)
if (!isBotAdmins) return m.reply(act.botAdmin)
m.reply('El enlace del grupo es: https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))

}
break
case 'pregunta':
if (!q) return m.reply('Y la pregunta?')
respuesta = [
"Si", "No", "Puede ser", "Puede que no", "Puede que si",
"Yo que se", "No lo sé", "Talvez si", "Talvez no", "A",
"Puede ser que si", "Puede ser que no", "Creó que sí", ":v",
"Creó que no", "😐", "🤨", "👻", "Hmm déjame lo pienso un poco",
"Hahaha si", "Hahaha no", "XD", "Sexo", "Qué quieres decir?", ".....?"
]
m.reply(respuesta[Math.floor(Math.random() * respuesta.length)])
break
case 'owner': case 'creator': {
                conn.sendContact(m.chat, global.owner, m)
            }
            break
case 'unblock': {
				if (!isCreator) return m.reply(act.owner)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
            case 'autoadmin':{
     if (!m.isGroup) return reply(mess.group)
     if (!isCreator) return reply('Este comando es solo para el creador')
     m.reply('Ahora sos admin papai') //opcional 
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
break
case 'deleteadmin':{
    if (!m.isGroup) return reply(mess.group)
    if (!isCreator) return reply('Este comando es solo para el creador')
    m.reply('Ya no eres administrador') // opcional
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "demote")
}
break
case 'simi':{
let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`)
let res = anu.success;
m.reply(res)
}
break
case 'kill-all': {
if (!m.isGroup) return (mess.group)
if (!isCreator) return reply(act.owner)
let buttons = [
{ buttonId: '.0202', buttonText: { displayText: 'KICKEAR A TODOS'}, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `KICKEAR A TODOS`, wm, m)

}
break
case '0202': {
if (!m.isGroup) return (mess.group) 
if (!isCreator) return reply(act.owner)
lista=[]
for(i of participants){ 
if(!(owner.includes(i.id.split('@')[0]))){
lista.push(i.id)
conn.groupParticipantsUpdate(m.chat, [i.id], 'remove')}}
conn.sendMessage(m.chat, {text:lista})

}
break
case 'add': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
        		if (!isAdmins) return m.reply(act.gc)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
case 'ping': case 'botstatus': case 'statusbot': {
           	  const used = process.memoryUsage()
           	  const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
           	  })
           	  const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
        	     }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
           	  }
         	    })
           	  let timestamp = speed()
        	     let latensi = speed() - timestamp
          	   neww = performance.now()
      	       oldd = performance.now()
       	      respon = `
Velocidad de respuesta ${latensi.toFixed(4)} _Segundos_\n\nRuntime : ${runtime(process.uptime())}
 `.trim()
                m.reply(respon)
       	     }
         	   break
case 'hentaivid': {

sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
conn.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: ` ❐ Titulo : ${cejd.title}
 ❐ Categorías : ${cejd.category}
 ❐ Mimetype : ${cejd.type}
 ❐ Vistas : ${cejd.views_count}
 ❐ Compartidas : ${cejd.share_count}
 ❐ Fuente : ${cejd.link}
 ❐  Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
case 'slot':	

 const pb = ['100','50','50','50']
const pv = pb[Math.floor(Math.random() * pb.length)]
const pn = [`${pv}`]


const prd = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
    '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇'
		] 
const gnd = [
        '🍇 : 🍇 : 🍇',
	    '🍐 : 🍐 : 🍐',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍊 : 🍊 : 🍊',
		'🍌 : 🍌 : 🍌'
		]
	const pbb = prd[Math.floor(Math.random() * prd.length)]
	const pbbn = prd[Math.floor(Math.random() * prd.length)]
	const pvv = gnd[Math.floor(Math.random() * gnd.length)]     

    if (pn < 100) return m.reply(`╭─╼┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┝╾─╮
╽ ┌──────────┐ ┃
        🍋 : 🍌 : 🍍
┃ ├──────────┤ ┃
        ${pbb}
┃ ├──────────┤ ┃
        ${pbbn}
╿ └──────────┘ ╿
╰──┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┠──╯

 𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐧𝐨 𝐚𝐬 𝐥𝐨𝐠𝐫𝐚𝐝𝐨 𝐚 𝐥𝐢𝐧𝐞𝐚𝐫 𝐛𝐮𝐞𝐧𝐚 𝐬𝐮𝐞𝐫𝐭𝐞 𝐥𝐚 𝐩𝐫𝐨𝐱𝐢𝐦𝐚`)
    reply(`╭─╼┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┝╾─╮
╽ ┌──────────┐ ┃
        🍋 : 🍌 : 🍍
┃ ├──────────┤ ┃
        ${pvv}
┃ ├──────────┤ ┃
        ${pbbn}
╿ └──────────┘ ╿
╰──┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┠──╯    

𝐅𝐞𝐥𝐢𝐜𝐢𝐝𝐚𝐝𝐞𝐬 𝐚𝐬 𝐠𝐚𝐧𝐚𝐝𝐨 500𝐔𝐒𝐃!`)
let premio = 500
    addMonay(m.sender, premio)                   
          break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
try {
listBloxk = []
teskd = ``
listnyd = 1
for (let i of banUser) {
teskd += `\n${listnyd++}. @${i.split("@")[0]}`
listBloxk.push({
title: "+" + i.split("@")[0], rowId: `${prefix}ban del ${i.split("@")[0]}`, description: "toque para desbanear"})
}
teskd += `\n\n toque el botón para desbanear`
const sections = [
{
title: "Total de baneados " + banUser.length,
rows: listBloxk
}
]

const listMessage = {
text: teskd,
footer: fake,
title: "     「 Lista De participantes Baneados 」",
buttonText: "Ver lista",
mentions: await conn.parseMention(teskd),
sections
}
conn.sendMessage(from, listMessage, {quoted:m})
} catch {
m.reply("Ningún usuario está bloqueado")
}
}
break
case 'mediafire': {
if (!text) throw '*Ingresa el link de Mediafire!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*Tu link no es válido*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return reply('*archivo por encima del límite* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Nombre* : ${baby1[0].nama}
*Tamaño* : ${baby1[0].size}
*Mímica* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_espera, Estoy procesando la descarga..._

*Itachi Bot*`
m.reply(`${result4}`)
conn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply('*Error de Descarga*'))
}
break
case 'loli' :{
m.reply("aguarde um momento, eu vou enviar no seu pv se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'vc e um(a) lolicon?🤔!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await conn.sendMessage(sender, buttonMessagessfgr, { quoted:m }).catch(err => {
        return('error..')
        })
        }
break
case 'menu':
  let menu_text = `
❐ Hola *${pushname} como estas*
❐ Prefijo: *⌜ ${prefix} ⌟*
❐ Librería: *baileys Multi-Device*
❐ Lenguaje: *Javascript*

  \n   「 *INFO BOT* 」
  
  ╭━─━─━─≪✠≫─━─━─━╮ 
  ├❐ ${prefix}owner
  ├❐ ${prefix}ping
  ╰━─━─━─≪✠≫─━─━─━╯
  ${readMore}
  「 *MENU GRUPO* 」
  
 ╭━─━─━─≪✠≫─━─━─━╮ 
 ├❐ ${prefix}link
 ├❐ ${prefix}antilink 
 ├❐ ${prefix}tagall 
 ├❐ ${prefix}ban
 ├❐ ${prefix}promote
 ├❐ ${prefix}demote
 ├❐ ${prefix}add
 ├❐ ${prefix}promote
 ├❐ ${prefix}demote
 ├❐ ${prefix}eliminar 
 ╰━─━─━─≪✠≫─━─━─━╯
  
 
 「 *MENU DESCARGAR* 」
 
 ╭━─━─━─≪✠≫─━─━─━╮ 
 ├❐ ${prefix}play
 ├❐ ${prefix}mediafire 
 ├❐ ${prefix}tiktok
 ├❐ ${prefix}ytmp4
 ╰━─━─━─≪✠≫─━─━─━╯

「 *MENU STICKER* 」

 ╭━─━─━─≪✠≫─━─━─━╮ 
 ├❐ ${prefix}tovn
 ├❐ ${prefix}sticker
 ├❐ ${prefix}nekost 
 ├❐ ${prefix}attp 
 ╰━─━─━─≪✠≫─━─━─━╯

「 *MENU JUEGO* 」

 ╭━─━─━─≪✠≫─━─━─━╮ 
 ├❐ ${prefix}alma-gemela
 ├❐ ${prefix}follar
 ├❐ ${prefix}verdad
 ├❐ ${prefix}pregunta
 ├❐ ${prefix}morir
 ├❐ ${prefix}reto
 ├❐ ${prefix}simi
 ├❐ ${prefix}slot
 ╰━─━─━─≪✠≫─━─━─━╯
 
 「 *MENU NSFW* 」
 
 ╭━─━─━─≪✠≫─━─━─━╮ 
 ├❐ ${prefix}hentaivid
 ╰━─━─━─≪✠≫─━─━─━╯

「 *MENU OWNER* 」

 ╭━─━─━─≪✠≫─━─━─━╮ 
 ├❐ $
 ├❐ ${prefix}getcase
 ├❐ ${prefix}join
 ├❐ ${prefix}0202
 ├❐ ${prefix}block
 ├❐ ${prefix}unblock
 ├❐ ${prefix}autoadmin
 ├❐ ${prefix}deleteadmin
 ├❐ ${prefix}listban
 ╰━─━─━─≪✠≫─━─━─━╯
`

const buttonMessage = {
    image: fs.readFileSync("./media/menu.jpg"),
    caption: menu_text,
    footer: `ꪶ 𝐈𝚻么͢𝐂𝐇𝐈 - 𝚩𝚯͢亇 ꫂ`,
    headerType: 4
}
conn.sendMessage(m.chat, buttonMessage, {quoted: m})
break

// Fin de los Cmds
default:
if (budy.includes('bot') || budy.includes('bot')) {
	let mojii = ["🤧","🤨","🗿","🤪","🤫","🤬","🤭","🤮","🤯","🤟","🤠","🤡","🤢","🤣","🤤","🤥","🤐","🤑","🤒","🤓","🤔","🤕","🤖","🤗"]
			let ran = mojii[Math.floor(Math.random() * mojii.length)]
const reactionMessage = {
    react: {
        text: ran, 
        key: m.key
    }
}

conn.sendMessage(from, reactionMessage)
	}



if (budy.startsWith("$") && isCreator) {
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) m.reply(`${stdout}`.trim())
})
}
if (budy.startsWith(`>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(m.key.remoteJid, { text: JSON.stringify(eval(body.slice(2)), null, 2)}, { quoted: m})
} catch (e) {
print(e)
conn.sendMessage(from, { text: String(e)}, { quoted: m})}
}
if (budy.startsWith(`=>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(from, { text: util.format(eval(`( async () => { return ${body.slice(3)}})()`))}, { quoted: m})
} catch (e) {
print(e)
conn.sendMessage(`50763596565@s.whatsapp.net`, { text: String(e) }, { quoted: m})
}
}
}
} catch(e) {
console.log(e)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update!`), chalk.yellow(`${__filename}`))
	delete require.cache[file]
	require(file)
})
