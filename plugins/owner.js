/* ═══════════════════════════════════════════════════════ //
=> If you want to recode, reupload,
=> or copy the codes/script,
=> pls give credit,
=> no credit? i will take action immediately.
==> Copyright (C) 2022 Dark_Ezio.
==> Licensed under the  MIT License;
===> you may not use this file except in compliance with the License.
=> Thank you to Lord Buddha, Family and Myself.
=> Whats Bot - Dark_Ezio.
// ════════════════════════════ */

const evt = require("../events");
const fs = require("fs");
const path = require("path");

evt.getCMD({pattern: 'owner$', fromMe: false, deleteCommand: false, desc: "get songs froom youtube"}, (async (message, match) => {
   
      const buttons = [
        { buttonId: "donate", buttonText: { displayText: "💰 Donate" }, type: 1 },
      ]

const text = '---Owner Detals---'

await message.client.sendMessage(message.jid, { image: {url: 'https://telegra.ph/file/8086c81d1d79f63c7cc73.jpg' }, caption: text , footer: '©Axzi-X' , buttons: buttons, headerType: 4 } , { quoted: message.data } )

      }));
