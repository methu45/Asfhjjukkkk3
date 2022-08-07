
const Neotro = require("../events");
const Language = require('../language');
const Lang = Language.getString('ttp');
const axios = require("axios");
const conf = require("../config");

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
