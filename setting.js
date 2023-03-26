const fs = require('fs')
const chalk = require('chalk')

// WEB APIKEY
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// APIKEY WEBSITE
global.ApiKey = 'coderevolution' 

global.smm = {
  numero : '50763596565',
  ownername : 'ANTONIO'
}


//Documentos Falsos
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vn'


// Other
global.owner = ['50763596565','5493865402608']
global.premium = ['50763596565']
global.sponsor = 'no existe sponsor :)'
global.packname = ''
global.footer = 'Itachi Multi Device'
global.author = 'ꪶ 𝐈𝚻么͢𝐂𝐇𝐈 - 𝚩𝚯͢亇 ꫂ'
global.prefa = ['','','.','🐦','🐤','🗿']
//mensajes 
global.act = {
    attack: 'Escriba el número que desea atacar',
    success: '鉁? Listo',
    admin: 'Funciones especiales para el administrador del grupo!',
    botAdmin: 'Necesito ser administrado para tener acceso a esa función!',
    owner: 'Funciones especiales para el creador del bot',
    group: 'Funciones bloqueadas para uso privado\nusalo en un grupo!',
    private: 'Funciones solo validas para chat privado!',
    listo: 'Hecho',
    bot: 'Funciones especiales para el usuario con el n煤mero de bot',
    wait: 'Cargando...',
    error: 'Error 404 :/, api vencida'
}

// Thumb & Image random 
global.simple = { url: 'https://a.uguu.se/zwEGVJNF.mp4' }
global.menu = fs.readFileSync('./media/menu.jpg')
global.thumb = fs.readFileSync('./media/catalog.jpg')
global.fake = fs.readFileSync('./media/fake.jpeg')
global.thumbpdf = fs.readFileSync('./media/pdfimg.jpg')
global.pp_video = fs.readFileSync('./media/menu.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
