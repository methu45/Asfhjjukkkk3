const evt = require('../events')
const Language = require('../language');
const Lang = Language.getString('group');
const config = require('../config')

async function isAdmin(message, user = message.client.user.id) {
    var metadata = await message.client.groupMetadata(message.jid);
    var admins = metadata.participants.filter(v => v.admin !== null).map(x => x.id);
    return admins.includes(user.split('@')[0].split(':')[0]+'@s.whatsapp.net');
}
    
function mentionjid(jid){ return "@"+jid.split("@")[0].split(":")[0]; }


evt.getCMD({pattern: 'kick ?(.*)', fromMe: true, onlyGroup: true , deleteCommand: false, desc: Lang.KICK_DESC}, (async (message, match) => {
    
    if (!message.jid.endsWith('@g.us')) return await message.client.sendMessage(message.jid, { text: Lang.GROUP_COMMAND})

    var admin = await isAdmin(message);
    
    if (!admin) return await message.client.sendMessage(message.jid, { text: Lang.NOT_ADMIN })
    
    const user = message.mention[0] || message.reply_message.jid
    
    if (!user) return await message.client.sendMessage(message.jid, { text: Lang.NEED_USER })
    
    await message.client.sendMessage(message.jid, { text: mentionjid(user) + config.BANMSG , mentions: [user] })
    await message.client.groupParticipantsUpdate(message.jid, [user], "remove" )
    }))
    
evt.getCMD({pattern: 'add ?(.*)', fromMe: true, onlyGroup: true , deleteCommand: false, desc: Lang.ADD_DESC }, (async (message, match) => {
    if (!message.jid.endsWith('@g.us')) return await message.client.sendMessage(message.jid, { text: Lang.GROUP_COMMAND})
    var admin = await isAdmin(message);
    if (!admin) return await message.client.sendMessage(message.jid, { text: Lang.NOT_ADMIN })
    var init = match[1]
    if (!init) return await message.client.sendMessage(message.jid, { text: Lang.NEED_USER })
    var initt = init.split(" ").join("")
    var user = initt.replace(/\+/g,'').replace(' ','').replace(' ','').replace(' ','').replace(' ','').replace(/\(/g,'').replace(/\)/g,'').replace(/-/g,'')
    var jids = [];
    var msg = '';
    numbers = user.split(',');
    numbers.map((number) => {
    msg += '@'+number+'\n'
    jids.push(number+'@s.whatsapp.net');});
    await message.client.groupParticipantsUpdate(message.jid, jids, "add")
    await message.client.sendMessage(message.jid, { text: msg+' '+ config.ADDMSG , mentions: jids })
}))
    


evt.getCMD({pattern: 'promote', fromMe: true, onlyGroup: true , deleteCommand: false, desc: Lang.PROMOTE_DESC}, (async (message, match) => {
        const user = message.mention[0] || message.reply_message.jid
        if (!user) return await message.reply(Lang.NEED_USER)
        if (!message.jid.endsWith('@g.us')) return await message.client.sendMessage(message.jid, { text: Lang.GROUP_COMMAND })
        var admin = await isAdmin(message);
        if (!admin) return await message.reply(Lang.NOT_ADMIN)
        await message.client.sendMessage(message.jid, { text: mentionjid(user) + config.PROMOTEMSG , mentions: [user] })
        await message.client.groupParticipantsUpdate(message.jid, [user], "promote")
}))
       
evt.getCMD({pattern: 'leave', fromMe: true, onlyGroup: true , deleteCommand: false, desc: Lang.LEAVE_DESC}, (async (message, match) => {
        await message.client.sendMessage(message.jid, { text: config.KICKMEMSG })
        return await message.client.groupLeave(message.jid);
        }))
        
evt.getCMD({pattern: 'demote', fromMe: true, onlyGroup: true , deleteCommand: false, desc: Lang.DEMOTE_DESC}, (async (message, match) => {
        if (!message.jid.endsWith('@g.us')) return await message.client.sendMessage(message.jid, { text: Lang.GROUP_COMMAND })
        const user = message.mention[0] || message.reply_message.jid
        if (!user) return await message.reply(Lang.NEED_USER)
        var admin = await isAdmin(message);
        if (!admin) return await message.reply(Lang.NOT_ADMIN)
        await message.client.sendMessage(message.jid, { text: mentionjid(user) + config.DEMOTEMSG , mentions: [user] })
        await message.client.groupParticipantsUpdate(message.jid, [message.reply_message.jid], "demote")
      }))
        
evt.getCMD({pattern: 'mute', fromMe: true, onlyGroup: true , deleteCommand: false, desc: Lang.MUTE_DESC}, (async (message, match) => {
            if (!message.jid.endsWith('@g.us')) return await message.client.sendMessage(message.jid, { text: Lang.GROUP_COMMAND })
            var admin = await isAdmin(message);
            if (!admin) return await message.reply(Lang.NOT_ADMIN)
            await message.client.groupSettingUpdate(message.jid, 'announcement')
        await message.client.sendMessage(message.jid, { text: config.MUTEMSG })
        }))
       
evt.getCMD({pattern: 'unmute', fromMe: true, onlyGroup: true , deleteCommand: false, desc: Lang.UNMUTE_DESC}, (async (message, match) => {
            if (!message.jid.endsWith('@g.us')) return await message.client.sendMessage(message.jid, { text: Lang.GROUP_COMMAND })
            var admin = await isAdmin(message);
            if (!admin) return await message.reply(Lang.NOT_ADMIN)
            await message.client.groupSettingUpdate(message.jid, 'not_announcement')
        await message.client.sendMessage(message.jid, { text: config.UNMUTEMSG })

}))


evt.getCMD({pattern: 'jid', fromMe: true,  deleteCommand: false, desc: Lang.JID_DESC}, (async (message, match) => {
        var jid = message.reply_message.jid || message.jid
        await message.reply(jid)
}))
        
evt.getCMD({pattern: 'invite', fromMe: true, onlyGroup: true , deleteCommand: false, desc: Lang.INVITE_DESC}, (async (message, match) => {
        if (!message.jid.endsWith('@g.us')) return await message.client.sendMessage(message.jid, { text: Lang.GROUP_COMMAND })
        var admin = await isAdmin(message);
        if (!admin) return await message.reply(Lang.NOT_ADMIN)
        var code = await message.client.groupInviteCode(message.jid)
        await message.client.sendMessage(message.jid, { text: "https://chat.whatsapp.com/"+code })
}))
        
evt.getCMD({pattern: 'revoke', fromMe: true, onlyGroup: true , deleteCommand: false, desc: Lang.REVOKE_DESC}, (async (message, match) => {
        if (!message.jid.endsWith('@g.us')) return await message.client.sendMessage(message.jid, { text: Lang.GROUP_COMMAND })
        var admin = await isAdmin(message);
        if (!admin) return await message.reply(Lang.NOT_ADMIN)
        await message.client.groupRevokeInvite(message.jid)
        await message.client.sendMessage(message.jid, { text: Lang.REVOKED })
}))
