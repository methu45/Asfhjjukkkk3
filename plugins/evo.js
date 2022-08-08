
    Neotro.getCMD({pattern: 'ttp ?(.*)', fromMe: false, desc: ALang.YT_DESC}, (async (message, match) => { 

    if (match[1] === '') return await message.client.sendMessage(message.jid , { text:ALang.NEED_WORDS}, { quoted: message.data });


     
     const results = (match[1]);
     const sections = [
    {
	title: "Section 1",
	rows: [
	    {title: `OmniSoft TEXT TO IMAGE`, rowId: `.1tp results`, description: `it make your Text As Beautufull Glow text`}
	]
    }

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
