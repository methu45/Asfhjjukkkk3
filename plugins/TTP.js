
const Neotro = require("../events");
const Language = require('../language');
const Lang = Language.getString('ttp');
const axios = require("axios");
const conf = require("../config");
const ALang = Language.getString('scrapers');

    Neotro.getCMD({pattern: 'yt ?(.*)', fromMe: false, desc: ALang.YT_DESC}, (async (message, match) => { 

    if (match[1] === '') return await message.client.sendMessage(message.jid , { text:ALang.NEED_WORDS}, { quoted: message.data });
    

     var reply = await message.client.sendMessage(message.jid , { text:ALang.GETTING_VIDEOS}, { quoted: message.data });
     const results = await yts(match[1]);
     let result = results.videos;
     let rows = [];
     results.all.map((video) => {
     let obj = {
     title: video.title,
     rowId: `play x/65v79 ${video.videoId}`,
     description: video.description,
        };
     rows.push(obj);
      });
     const sections = [
        {
      title: "Videos",
      rows: rows,
        },
      ]

      const listMessage = {
      text: "Youtube Search Results",
      footer: "©Axzi-X",
      title: "⚡Axzi  Version  2.0",
      buttonText: "Click Me",
      sections,
      };

      await message.client.sendMessage(message.jid, listMessage);
      
  }));

//========================================================
//========================================================

Neotro.getCMD({pattern: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC}, (async (message, match) => { 
    if (match[1] === '') return await message.client.sendMessage(message.jid , { text:Lang.NEED_WORDS}, { quoted: message.data });

    var uri = encodeURI(match[1])
    var resSticker = await axios.get(
        "https://api.xteam.xyz/attp?file&text=" + uri, { responseType: "arraybuffer" });


    await message.client.sendMessage(
      message.jid,
      { sticker: Buffer.from(resSticker.data) },
      { quoted: message.data });
    
    
  }));


//========================================================
//========================================================


Neotro.getCMD({pattern: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC}, (async (message, match) => { 
    if (match[1] === '') return await message.client.sendMessage(message.jid , { text:Lang.NEED_WORDS}, { quoted: message.data });
    
    var uri = encodeURI(match[1])
    var resImage = await axios.get(
        "https://api.xteam.xyz/ttp?file&text=" + uri, { responseType: "arraybuffer" });
    await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(resImage.data), caption: conf.CPT },
      { quoted: message.data });

  }));


