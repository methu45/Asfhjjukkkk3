let Neotro = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let got = require("got");
let Config = require('../config');
let Language = require('../language');
let td = Config.WORKTYPE == 'public' ? false : true

   Neotro.getCMD({pattern: 'get ?(.*)', fromMe: false, desc: 'movie zong' }, (async (message, match) => {
   
    var webimage = `https://dl.techwizardent.com/496320`

    await message.client.sendMessage(message.jid,{ document : { url : webimage } , mimetype : 'mp4' , fileName : 'slmoviezone.mp4' }, {quoted: message.data})
    
    }));    
