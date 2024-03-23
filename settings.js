//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: M" //ur yt chanel name
global.socialm = "GitHub: Mian" //ur github or insta name
global.location = "Pakistan, Lahore" //ur location

//new
global.botname = '𝑪𝒉𝒆𝒆𝒎𝒔 𝑩𝒐𝒕 𝑴𝑫 𝑽11' //ur bot name
global.ownernumber = '923430436852' //ur owner number
global.ownername = '©᭄𝑴𝒊𝒂𝒏🌸' //ur owner name
global.websitex = "+923430436852"
global.wagc = "https://www.instagram.com/its_mian__07/"
global.themeemoji = '👿'
global.wm = "Mian Bot Inc."
global.botscript = 'https://Wa.me//923430436852' //script link
global.packname = "Sticker By"
global.author = "©᭄𝑴𝒊𝒂𝒏🌸ོ\n\n+923430436852"
global.creator = "923430436852"
global.xprefix = '.'
global.premium = ["923430436852"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '972' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
