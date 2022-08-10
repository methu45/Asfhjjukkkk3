
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



 Axzi.getCMD({pattern: 'song ?(.*)', fromMe: wk, desc: Lang.SONG_DESC, deleteCommand: false}, (async (message, match) => {

        if (match[1] === '') return
        await message.client.sendMessage(message.jid , { text:Lang.NEED_TEXT_SONG}, { quoted: message.data });
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return 
        await message.client.sendMessage(message.jid , { text:Lang.NO_RESULT}, { quoted: message.data });
        
        
        let thumbnail = arama[0].thumbnail;
        let title = arama[0].title.replace(/ /gi, '+');
        let title2 = arama[0].title
        let views = arama[0].views;
        let author = arama[0].author.name;
        let url = arama[0].url
        const msg = '*🔎SONG SEARCH RESULT*\n\nTitle▶▷ ' + title2 + '\nViews▶▷: ' + views + '\n 📹Author▶▶: ' + author + '\n🛸LINK: ' + url + '\n\n'
         
         var logo = await axios.get(thumbnail ,{responseType: 'arraybuffer'});
 
    var PIC = Buffer.from(logo.data)
    const dot = config.HANDLERS
    const media = await message.client.prepareMessage(message.jid,{ image: {url: PIC }, quoted: message.data } )
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
    const buttonMessage = {
       
        contentText: msg,
        footerText: config.FOOTER,
        buttons: buttons,
        headerType: 4 ,
        imageMessage: media.message.imageMessage 
    }
   await message.client.sendMessage(message.jid, buttonMessage ,MessageType.buttonsMessage, {quoted: message.data});
  }));
  
  
  
  
  
  
  /===
  
  

Axzi.getCMD({pattern: 'axdsong ?(.*)', fromMe: wk, dontaddCommandList: true, deleteCommand: false}, (async (message, match) => { 
        if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text, {quoted: message.data});
      var load = await message.client.sendMessage(message.jid,config.SONG_DOWN,MessageType.text, {quoted: message.data});
        let stream = await ytmp3(match[1]);
        const song = await axios.get(stream.mp3 ,{responseType: 'arraybuffer'});
        const title = stream.title
      var up = await message.client.sendMessage(message.jid,config.SONG_UP,MessageType.text, {quoted: message.data});
                 await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true}) ; 
                await message.client.sendMessage(message.jid,Buffer.from(song.data), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg', ptt: false, quoted: message.data});
                await message.client.deleteMessage(message.jid, {id: up.key.id, remoteJid: message.jid, fromMe: true}) ;


}));

Axzi.getCMD({pattern: 'axsong ?(.*)', fromMe: wk, dontaddCommandList: true, deleteCommand: false}, (async (message, match) => { 
       if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text, {quoted: message.data}); 
      var load = await message.client.sendMessage(message.jid,config.SONG_DOWN,MessageType.text, {quoted: message.data});
         let stream = await ytmp3(match[1]);
        const song = await axios.get(stream.mp3 ,{responseType: 'arraybuffer'});
         
      var up = await message.client.sendMessage(message.jid,config.SONG_UP,MessageType.text, {quoted: message.data});
                 await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true}) ; 
                await message.client.sendMessage(message.jid,Buffer.from(song.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false, quoted: message.data});
                await message.client.deleteMessage(message.jid, {id: up.key.id, remoteJid: message.jid, fromMe: true}) ;


}));

 Axzi.getCMD({pattern: 'video ?(.*)', fromMe: wk, desc: Lang.VIDEO_DESC, deleteCommand: false }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text, {quoted: message.data});    
    if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text, {quoted: message.data});
  
  
    var svid = match[1].replace("shorts/","watch?v=")
    var s2vid = svid.replace("?feature=share","")
    var s3vid = await yts(s2vid);
    let thumbnail = s3vid.videos[0].thumbnail;
    var s4vid = s3vid.videos[0].url;
    let title = s3vid.videos[0].title;
    let views = s3vid.videos[0].views;
    let author = s3vid.videos[0].author.name;
    let url = s3vid.videos[0].url;
    let msg = '  *📥VIDEO DOWNLODER*\n\n│📽️ᴠɪᴅᴇᴏ: ' + title + '\n\n│ 👀ᴠɪᴇᴡs: ' + views + '\n\n│ 📹 ᴄʜᴀɴɴᴇʟ: ' + author + '\n\n│🖇️ᴜʀʟ: ' + url + '\n\n'
    var logo = await axios.get(thumbnail ,{responseType: 'arraybuffer'});
 
    var PIC = Buffer.from(logo.data)
    const dot = config.HANDLERS
    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image )
    
   var HANDLE = '';
    if (/\[(\W*)\]/.test(dot)) {
        HANDLE = dot.match(/\[(\W*)\]/)[1][0];
    } else {
        HANDLE = '.';
    }
   const buttons = [
        {buttonId: HANDLE + 'vid720' + s2vid , buttonText: {displayText: '720P' }, type: 1},
        {buttonId: HANDLE + 'vid480' + s2vid , buttonText: {displayText: '480P' }, type: 1},
        {buttonId: HANDLE + 'vid360' + s2vid , buttonText: {displayText: '360P' }, type: 1}

    ]
   const buttonMessage = {
       
        contentText: msg,
        footerText: config.FOOTER,
        buttons: buttons,
        headerType: 4 ,
        imageMessage: media.message.imageMessage 
    }
   await message.client.sendMessage(message.jid, buttonMessage ,MessageType.buttonsMessage, {quoted: message.data});
    }));

Axzi.getCMD({pattern: 'vid480 ?(.*)', fromMe: wk, dontaddCommandList: true, deleteCommand: false}, (async (message, match) => {
 const data = await yt480(match[1])
 if (data.status == true) {
 var load = await message.client.sendMessage(message.jid,config.VIDEO_DOWN,MessageType.text, {quoted: message.data});
 const vid = await axios.get(data.url , {responseType: 'arraybuffer'} )
  var up = await message.client.sendMessage(message.jid,config.VIDEO_UP,MessageType.text, {quoted: message.data});
            await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true}) ;
            await message.client.deleteMessage(message.jid, {id: up.key.id, remoteJid: message.jid, fromMe: true}) ;
        await message.client.sendMessage(message.jid,Buffer.from(vid.data), MessageType.video, {mimetype: Mimetype.mp4,  quoted: message.data , caption : config.CAPTION});
 }
}));
Axzi.getCMD({pattern: 'vid720 ?(.*)', fromMe: wk, dontaddCommandList: true, deleteCommand: false}, (async (message, match) => {
 const data = await yt720(match[1])
 if (data.status == true) {
 var load = await message.client.sendMessage(message.jid,config.VIDEO_DOWN,MessageType.text, {quoted: message.data});
 const vid = await axios.get(data.url , {responseType: 'arraybuffer'} )
  var up = await message.client.sendMessage(message.jid,config.VIDEO_UP,MessageType.text, {quoted: message.data});
            await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true}) ;
            await message.client.deleteMessage(message.jid, {id: up.key.id, remoteJid: message.jid, fromMe: true}) ;
        await message.client.sendMessage(message.jid,Buffer.from(vid.data), MessageType.video, {mimetype: Mimetype.mp4,  quoted: message.data , caption : config.CAPTION});
 }
}));

Axzi.getCMD({pattern: 'vid360 ?(.*)', fromMe: wk, dontaddCommandList: true, deleteCommand: false}, (async (message, match) => {
 const data = await yt360(match[1])
 if (data.status == true) {
 var load = await message.client.sendMessage(message.jid,config.VIDEO_DOWN,MessageType.text, {quoted: message.data});
 const vid = await axios.get(data.url , {responseType: 'arraybuffer'} )
  var up = await message.client.sendMessage(message.jid,config.VIDEO_UP,MessageType.text, {quoted: message.data});
            await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true}) ;
            await message.client.deleteMessage(message.jid, {id: up.key.id, remoteJid: message.jid, fromMe: true}) ;
        await message.client.sendMessage(message.jid,Buffer.from(vid.data), MessageType.video, {mimetype: Mimetype.mp4,  quoted: message.data , caption : config.CAPTION});
 }
}));
Axzi.getCMD({pattern: 'yt ?(.*)', fromMe: wk, desc: Lang.YT_DESC, deleteCommand: false }, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data}); 
var vsn = ''
if (config.LANG == 'EN')  vsn = '* Use  .video / .song commands to download videos or songs. *'
if (config.LANG == 'SI')  vsn = '* වීඩියෝ හෝ ගීත ලබා ගැනීම සදහා .video .song යන විධාන භාවිත කරන්න. *'
 
if (match[1].includes('https://youtu')) return await message.client.sendMessage(message.jid,vsn,MessageType.text, {quoted: message.data}); 
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text, {quoted: message.data});

        try {
            var arama = await yts(match[1]);
        } catch {
 return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
         var mesaj = '';
        arama.all.map((video) => {
            mesaj += '📽️ *' + video.title + '*\n🔗 ' + video.url + '\n\n'
        });
        await message.client.sendMessage(message.jid,mesaj,MessageType.text, {quoted: message.data});
        await message.client.deleteMessage(message.jid, {id: reply.key.id, remoteJid: message.jid, fromMe: true}) ;  
    })); 
