const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Axzi = require('../events');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Axzi.getCMD({pattern: 'ban ?(.*)', fromMe: true, onlyGroup: false, desc: Lang.BAN_DESC, deleteCommand: false}, (async (message, match) => {
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid, {text: Lang.IM_NOT_ADMIN }, { quoted: message.data });


    if (Config.BANMSG == 'default') {
        if (message.reply_message !== false) {
        
            await message.client.sendMessage(message.jid,{text: '@' + message.reply_message.data.participant.split('@')[0] + '```, ' + Lang.BANNED + '```'},{contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            
            await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
            
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,{text: etiketler + '```, ' + Lang.BANNED + '```'}, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupRemove(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,{text: Lang.GIVE_ME_USER});
        }
    }
    else {
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid,{text: '@' + message.reply_message.data.participant.split('@')[0] + Config.BANMSG}, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,{text: etiketler + Config.BANMSG}, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupRemove(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,{text: Lang.GIVE_ME_USER});
        }
    }
}));
