const fs = require('fs');
const config = require('../config')

class StringSession {
    constructor() {}

    CreateAuthJson(string = undefined) {

        if (string.includes('DIANA;;;')) {
            if ('SESSION' in process.env || string === undefined) {
                string = config.SESSION;
            } else if (string !== undefined) {
                if (fs.existsSync(string)) {
                    string = fs.readFileSync(string, {
                        encoding: 'utf8',
                        flag: 'r'
                    });
                }
            }

            if ( fs.existsSync('./DIANA/DianaAuth.json') ) return console.log('Logging to Whatsapp...');

            var authState = {}

            var split = string.split(';;;');
            if (split.length = 2) {

                var decrypt = JSON.parse(Buffer.from(split[split.length - 1], 'base64')
                    .toString('utf-8'));

                authState.creds = decrypt;
                authState.keys = {};
            }

            var buf = Buffer.from(JSON.stringify(authState));
            

            fs.writeFileSync('./DIANA/DianaAuth.json', buf, 'utf8', (err) => {});

        } else throw new Error('Invalid Session Provided! please fill with correct informations.')

    }
}

module.exports = StringSession;