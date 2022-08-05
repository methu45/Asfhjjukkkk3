const evt = require('../events')
const config = require('../config');

evt.getCMD({pattern: 'start$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   var alivemsg = '```👋 Hey there, I\'m alive now``` \n\n_Version:_ ```' + config.VERSION + '```\n\n _POWERED BY KAVIYAAH_\n'
		
   const alivebuttond = [
    {buttonId: '.aliveimage',  buttonText: {displayText: '🤖MENU'}, type: 1},
    {buttonId: '.alivetext', buttonText: {displayText: '⚙️INFO'}, type: 1},
    ]

 await message.client.sendMessage(message.jid, { image: {url: 'https://telegra.ph/file/8086c81d1d79f63c7cc73.jpg' }, caption: alivemsg , footer: '©Axzi-X' , buttons: alivebuttond , headerType: 4 } , { quoted: message.data } )

}));

evt.getCMD({pattern: 'aliveimage$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   var alivemsg = '```👋 Hey there, I\'m alive now``` \n\n_Version:_ ```' + config.VERSION + '```\n\n ©Axzi-X'

 await message.client.sendMessage(message.jid, { image: {url: 'https://telegra.ph/file/8086c81d1d79f63c7cc73.jpg' }, caption: alivemsg  } , { quoted: message.data } )

}));

evt.getCMD({pattern: 'alivetext$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   var alivemsg = '```👋 Hey there, I\'m alive now``` \n\n_Version:_ ```' + config.VERSION + '```\n\n©Axzi-X'
		

 await message.client.sendMessage(message.jid, { text: alivemsg } , { quoted: message.data } )

}));
