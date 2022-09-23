const evt = require('../events')
const config = require('../config');

evt.getCMD({pattern: 'anony$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {

 if (config.ALIVEMSG == 'default') {
   var alivemsg = '*⚡ANONY VERSION 1.0*\n\n*💫🧚‍♀️Hey There Im Alive Now*\n\n*◉Version :► ' + config.VERSION + ' (Public Release)*\n*◉Branch  :► Awsh*\n*◉About :► Axzi Is a Powerfull Bot For Whatsapp powered By HatzuHole🛸.*\n\n*✨Join  Our  News  And  Update group*'
		
    const alivebuttond = [
    {buttonId: '.left',  buttonText: {displayText: '👸START-ANINY'}, type: 1},
    {buttonId: '.promote' + config.HACK + '5', buttonText: {displayText: '❤️CHECKSTATS'}, type: 1},
    {buttonId: '.3social', buttonText: {displayText: '👸'}, type: 1},
    ]

 await message.client.sendMessage(message.jid, { image: {url: 'https://telegra.ph/file/0c6114925c8dba0885f49.jpg' }, caption: alivemsg , footer: 'Awsh' , buttons: alivebuttond , headerType: 4 } , { quoted: message.data } )
}
 else {
     var alivemsg = '*' + config.ALIVEMSG + '*'
		
    const alivebuttond = [
    {buttonId: '.left',  buttonText: {displayText: '👸START-QUEEN-HSTZU'}, type: 1},
    {buttonId: '.promote' + config.HACK + '5', buttonText: {displayText: '🙂SYSTEM-STATS'}, type: 1},
    {buttonId: '.own', buttonText: {displayText: '❤️'}, type: 1},
    ]
    
 await message.client.sendMessage(message.jid, { image: {url: 'https://telegra.ph/file/0c6114925c8dba0885f49.jpg' }, caption: alivemsg , footer: '©AWSH' , buttons: alivebuttond , headerType: 4 } , { quoted: message.data } )
}
    
}));

evt.getCMD({pattern: 'trAmenu$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   var menu = 'soon it possible'

 await message.client.sendMessage(message.jid, { image: {url: 'https://telegra.ph/file/8086c81d1d79f63c7cc73.jpg' }, caption: menu  } , { quoted: message.data } )

}));

evt.getCMD({pattern: 'trinfo$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   var alivemsg = '🔗'
		
 await message.client.sendMessage(message.jid, { text: alivemsg } , { quoted: message.data } )

}));
