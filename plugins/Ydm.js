const Axzi = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const config = require('../config'); 
const axios = require('axios');
const fs = require('fs');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const Language = require('../language');
const Lang = Language.getString('scrapers');
var gis = require('g-i-s');
const https = require('https');
const ytmp3 = require('../DIANA/ytmp3');
const { yt720 ,  yt480 ,  yt360 } = require('../DIANA/ytmp4');
let wk = config.WORKTYPE == 'public' ? false : true



 Axzi.getCMD({pattern: 'dsong ?(.*)', fromMe: false, desc: Lang.SONG_DESC, deleteCommand: false}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid , { text:Lang.NEED_TEXT_SONG}, { quoted: message.data });
        
  var load = await message.client.sendMessage(message.jid , { text:config.DOWNLOAD_TEXT}, { quoted: message.data });

      
        let stream = await ytmp3(match[1]);
        const song = await axios.get(stream.mp3 ,{responseType: 'arraybuffer'});
        const aws = Buffer.from(song.data)
        const title = stream.title
        var up =  await message.client.sendMessage(message.jid , { text:config.UPLOAD_TEXT}, { quoted: message.data });
                 
        await message.client.sendMessage(message.jid,{ document : { url : stream.mp3  } , mimetype : 'audio/mpeg' , fileName : title + '.mp3' }, {quoted: message.data})
    }));
  
  
