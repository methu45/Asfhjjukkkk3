const evt = require('../events')
const config = require('../config');

evt.getCMD({pattern: 'start$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   var alivemsg = '*AXZI VERSION 1.0*/n/n*💫🧚‍♀️Hey There Im Alive Now*/n/n*◉Version :► ' + config.VERSION + ' (Public Release)*/n*◉Branch  :► Awsh*/n*◉About :► Axzi Is a Powerfull Bot For Whatsapp powered By HatzuHole🛸.*/n/n*✨Join  Our  News  And  Update group*'
		
   const alivebuttond = [
    {buttonId: '.Amenu',  buttonText: {displayText: '🤖MENU'}, type: 1},
    {buttonId: '.info', buttonText: {displayText: '⚙️INFO'}, type: 1},
    {buttonId: '.owner', buttonText: {displayText: 'CONNECT US'}, type: 1},
    ]

 await message.client.sendMessage(message.jid, { image: {url: 'https://telegra.ph/file/8086c81d1d79f63c7cc73.jpg' }, caption: alivemsg , footer: '©Axzi-X' , buttons: alivebuttond , headerType: 4 } , { quoted: message.data } )

}));

evt.getCMD({pattern: 'Amenu$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   var menu = ''

 await message.client.sendMessage(message.jid, { image: {url: 'https://telegra.ph/file/8086c81d1d79f63c7cc73.jpg' }, caption: menu  } , { quoted: message.data } )

}));

evt.getCMD({pattern: 'info$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   var alivemsg = ''
		
 await message.client.sendMessage(message.jid, { text: alivemsg } , { quoted: message.data } )

}));
