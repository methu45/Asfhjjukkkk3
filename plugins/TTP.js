
const Neotro = require("../events");
const Language = require('../language');
const Lang = Language.getString('ttp');
const ALang = Language.getString('scrapers');
const BLang = Language.getString('ttp');
const axios = require("axios");
const conf = require("../config");

    


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

Neotro.getCMD({pattern: '4tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
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

Neotro.getCMD({pattern: '7tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
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

Neotro.getCMD({pattern: '8tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
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

Neotro.getCMD({pattern: '9tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
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

Neotro.getCMD({pattern: '10tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
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

Neotro.getCMD({pattern: '11tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
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

Neotro.getCMD({pattern: '12tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
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

Neotro.getCMD({pattern: '13tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
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

Neotro.getCMD({pattern: '14tp ?(.*)', fromMe: false, desc: BLang.ATTP_DESC}, (async (message, match) => { 
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


