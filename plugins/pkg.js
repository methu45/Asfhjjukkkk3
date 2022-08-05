
const evt= require('../events');
const got = require('got');
const fs = require('fs');
const Language = require('../language');
const Lang = Language.getString('_plugin');

evt.getCMD({pattern: 'pkg ?(.*)', fromMe: true, deleteCommand: false, desc: "installing plugins"}, (async (message, match) => {   

    if (!match[1]) return await message.client.sendMessage(message.jid , { text: '```' + Lang.NEED_URL + '.install https://gist.github.com/Quiec/cd5af0c153a613ba55c24f8c6b6f5565```' }, { quoted: message.data } )
try {
        var url = new URL(match[1]);
    } catch {
        return await message.client.sendMessage(message.jid , { text:Lang.INVALID_URL}, { quoted: message.data });
    }
    
    if (url.host === 'gist.github.com') {
        url.host = 'gist.githubusercontent.com';
        url = url.toString() + '/raw'
    } else {
        url = url.toString()
    }

    var response = await got(url);
    if (response.statusCode == 200) {
        // plugin adı
        var plugin_name = response.body.match(/getCMD\({.*pattern: ["'](.*)["'].*}/);
        if (plugin_name.length >= 1) {
            plugin_name = "__" + plugin_name[1];
        } else {
            plugin_name = "__" + Math.random().toString(36).substring(8);
        }

        fs.writeFileSync('./plugins/' + plugin_name + '.js', response.body);
        try {
            require('./' + plugin_name);
        } catch (e) {
            fs.unlinkSync('./' + plugin_name);
            return await message.client.sendMessage(message.jid , { text:Lang.INVALID_PLUGIN + ' ```' + e + '```'}, { quoted: message.data });
        }

       
        await message.client.sendMessage(message.jid , { text: Lang.INSTALLED }, { quoted: message.data });
    }
}));

evt.getCMD({pattern: 'plik$', fromMe: true, deleteCommand: false, desc: desc: Lang.PLUGIN_DESC}, (async (message, match) => {  

    var mesaj = Lang.INSTALLED_FROM_REMOTE;
    var plugins = await Db.PluginDB.findAll();
    if (plugins.length < 1) {
        return await message.client.sendMessage(message.jid, { text: Lang.NO_PLUGIN});
    } else {
        plugins.map(
            (plugin) => {
                mesaj += '*' + plugin.dataValues.name + '* \n _verified by kaviyaah✅_' + '\n\n';
            }
        );
        return await message.client.sendMessage(message.jid, { text: mesaj});
    }
}));
