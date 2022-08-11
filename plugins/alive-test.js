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



 Axzi.getCMD({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC, deleteCommand: false}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid , { text:Lang.NEED_TEXT_SONG}, { quoted: message.data });
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid , { text:Lang.NO_RESULT}, { quoted: message.data });
        
        
        let thumbnail = arama[0].thumbnail;
        let title = arama[0].title.replace(/ /gi, '+');
        let title2 = arama[0].title
        let views = arama[0].views;
        let author = arama[0].author.name;
        let url = arama[0].url
        const msg = '*🔎SONG SEARCH RESULT*\n\n*🔴Title▶▷* ' + title2 + '\n*⚫Views▶▷* : ' + views + '\n🟣Author▶▷: ' + author + '\n🛸LINK: ' + url + '\n\n'
         
         var logo = await axios.get(thumbnail ,{responseType: 'arraybuffer'});
 
    var PIC = Buffer.from(logo.data)
    const dot = config.HANDLERS
    
    var HANDLE = '';
    if (/\[(\W*)\]/.test(dot)) {
        HANDLE = dot.match(/\[(\W*)\]/)[1][0];
    } else {
        HANDLE = '.';
    }
   const buttons = [
        {buttonId: HANDLE + 'axdsong' + url , buttonText: {displayText: 'DOCUMENT' }, type: 1},
        {buttonId: HANDLE + 'axsong' + url , buttonText: {displayText: 'AUDIO' }, type: 1}

    ]
   await message.client.sendMessage(message.jid, { image: {url: 'https://telegra.ph/file/778fde21bbe07a2237e49.jpg' }, caption: msg, footer: '©Axzi-X' , buttons: buttons , headerType: 4 } , { quoted: message.data } )

  }));
  
  
  
Axzi.getCMD({pattern: 'axdsong ?(.*)', fromMe: false, dontaddCommandList: true, deleteCommand: false}, (async (message, match) => { 
        if (!match[1].includes('youtu')) 
        
        return await message.client.sendMessage(message.jid , { text:Lang.NEED_VIDEO}, { quoted: message.data });

        
      var load = await message.client.sendMessage(message.jid , { text:config.DOWNLOAD_TEXT}, { quoted: message.data });

      
        let stream = await ytmp3(match[1]);
        const song = await axios.get(stream.mp3 ,{responseType: 'arraybuffer'});
        const aws = Buffer.from(song.data)
        const title = stream.title
        var up =  await message.client.sendMessage(message.jid , { text:config.UPLOAD_TEXT}, { quoted: message.data });
                 
        await message.client.sendMessage(message.jid,{ document : { url : stream.mp3  } , mimetype : 'audio/mpeg' , fileName : title + '.mp3' }, {quoted: message.data})
    }));
