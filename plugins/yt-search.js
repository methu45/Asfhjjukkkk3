
const yts = require("yt-search");
const Neotro = require("../events");
const Language = require('../language');
const Lang = Language.getString('scrapers');

    Neotro.getCMD({pattern: 'yt ?(.*)', fromMe: false, desc: Lang.YT_DESC}, (async (message, match) => { 

    if (match[1] === '') return await message.client.sendMessage(message.jid , { text:Lang.NEED_WORDS}, { quoted: message.data });
    

     var reply = await message.client.sendMessage(message.jid , { text:Lang.GETTING_VIDEOS}, { quoted: message.data });
     const results = await yts(match[1]);
     let result = results.videos;
     let rows = [];
     results.all.map((video) => {
     let obj = {
     title: video.title,
     rowId: `.v360 ${video.url}`,
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

