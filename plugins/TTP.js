
const Neotro = require("../events");
const Language = require('../language');
const Lang = Language.getString('ttp');
const ALang = Language.getString('scrapers');
const BLang = Language.getString('ttp');
const axios = require("axios");
const conf = require("../config");

    


//========================================================
//========================================================


    Neotro.getCMD({pattern: 'ttp ?(.*)', fromMe: false, desc: ALang.YT_DESC}, (async (message, match) => { 

    if (match[1] === '') return await message.client.sendMessage(message.jid , { text:ALang.NEED_WORDS}, { quoted: message.data });


     
     const results = (match[1]);
     const sections = [
    {title: "Β©Axzi-X TEXT-TO-IMAGE",
	rows: [
    {title: `Normal TEXTβ΅`, rowId: `.1tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `π»ππππ’ππππ­`, rowId: `.2tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `π₯π³ππππππππ`, rowId: `.3tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `π·πππ π±π΄π°ππ`, rowId: `.4tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `πππππππ’πͺ`, rowId: `.5tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `π§€π΅πππ`, rowId: `.6tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `*οΈβ£πΌπππππππ`, rowId: `.7tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `πππππππ`, rowId: `.8tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `πππππππππ`, rowId: `.9tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `π³πππππππ§΅`, rowId: `.10tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `β¨πΌππππ ππππ`, rowId: `.11tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `ππππ°ππ`, rowId: `.12tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `πΈπΉπππππ`, rowId: `.13tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `β³πΏπππ°π» πππππ`, rowId: `.14tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `ποΈπ±π΄π°π²π·`, rowId: `.15tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `βοΈπππππππ`, rowId: `.16tp ${results}`, description: `It make Colourfull Text-Image (PNG)`},
    {title: `πππππππππ`, rowId: `.17tp ${results}`, description: `It make Colourfull Text-Image (PNG)`}
	
	]
    }

                ]   
     

      const listMessage = {
      text: "TEXT TO IMAGE LISTπ",
      footer: "Β©Axzi-X",
      title: "β‘Axzi  Version  2.0",
      buttonText: "Click Me",
      sections,
      };

      await message.client.sendMessage(message.jid, listMessage);

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

//========================================================
//========================================================


Neotro.getCMD({pattern: '1tp ?(.*)', fromMe: false, desc: Lang.TTP_DESC}, (async (message, match) => { 
    if (match[1] === '') return await message.client.sendMessage(message.jid , { text:Lang.NEED_WORDS}, { quoted: message.data });
    
    var uri = encodeURI(match[1])
    var resImage = await axios.get(
        "https://api.xteam.xyz/ttp?file&text=" + uri, { responseType: "arraybuffer" });
    await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(resImage.data), caption: conf.CPT },
      { quoted: message.data });

  }));

Neotro.getCMD({pattern: '2tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=lollipop&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '3tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=discodiva&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '4tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=heartbeat&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '5tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=lollipop&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '6tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=sketchy&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '7tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=metropol&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '8tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=fame&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '9tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=surprise&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '10tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=ransom&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '11tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=magicdust&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '12tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=dearest&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '13tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=jumble&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '14tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=allstars&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '15tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=beachfront&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));

Neotro.getCMD({pattern: '16tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=petalprint&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));
Neotro.getCMD({pattern: '17tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
     const Text = match[1]
     if (match[1] === '') return await message.client.sendMessage(message.jid , { text:BLang.NEED_WORDS}, { quoted: message.data })
     var uri = encodeURI(match[1])
     await axios.get(`https://open-apis-rest.up.railway.app/api/glowtext?text=${uri}&font_style=flutter&font_size=m&glow_halo=1&non_trans=false&retina=true&anim_type=pulse`)
          .then(async (response) => {
      const {image, } = response.data.data
      const Get = await axios.get(image, {responseType: 'arraybuffer'})
      await message.client.sendMessage(
      message.jid,
      { image: Buffer.from(Get.data), caption: conf.CPT },
      { quoted: message.data });

        })
 }));


