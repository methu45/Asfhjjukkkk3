const evt = require('../events')
const config = require('../config');

evt.getCMD({pattern: 'alive$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   var alivemsg = '```👋 Hey there, I\'m alive now``` \n\n_Version:_ ```' + config.VERSION + '```\n\n _POWERED BY KAVIYAAH_\n'
		
   const alivebuttond = [
    {buttonId: '.aliveimage',  buttonText: {displayText: 'ALIVE 1'}, type: 1},
    {buttonId: '.alivetext', buttonText: {displayText: 'ALIVE 2'}, type: 1},
    ]

 await message.client.sendMessage(message.jid, { image: {url: 'https://telegra.ph/file/3217c19d381ae34b38012.jpg' }, caption: alivemsg , footer: 'Queen Diana' , buttons: alivebuttond , headerType: 4 } , { quoted: message.data } )

}));

evt.getCMD({pattern: 'aliveimage$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   var alivemsg = '```👋 Hey there, I\'m alive now``` \n\n_Version:_ ```' + config.VERSION + '```\n\n _POWERED BY KAVIYAAH_\n'

 await message.client.sendMessage(message.jid, { image: {url: 'https://telegra.ph/file/3217c19d381ae34b38012.jpg' }, caption: alivemsg  } , { quoted: message.data } )

}));

evt.getCMD({pattern: 'alivetext$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   var alivemsg = '```👋 Hey there, I\'m alive now``` \n\n_Version:_ ```' + config.VERSION + '```\n\n _POWERED BY KAVIYAAH_\n'
		

 await message.client.sendMessage(message.jid, { text: alivemsg } , { quoted: message.data } )

}));
