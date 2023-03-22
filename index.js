/*megumin*/

//sc by R4iden//

const {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    ChatModification,
    waChatKey,
    mentionedJid,
    processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { virtex } = require('./src/virtex')
const { virtex2 } = require('./src/virtex2')
const { animesaran } = require('./src/animesaran')
const { asupan } = require('./src/asupan')
const { animesaran2 } = require('./src/animesaran2')
const { cara } = require('./src/cara')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const brainly = require('brainly-scraper')
const speed = require('performance-now')
const os = require('os')
const ffmpeg = require('fluent-ffmpeg')
const phoneNum = require('awesome-phonenumber')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const vcard = 'BEGIN:VCARD\n' +
'VERSION:3.0\n' +
'FN:B a p h o m a t e\n' +
'ORG:B a p h o m a t e;\n' +
'TEL;type=CELL;type=VOICE;waid=6283167443391:+6283167443391\n' +
'END:VCARD'
prefix = '#'
blockcall = false
battre = 'Tidak Terdeteksi'
blocked = []
limitawal = 100000
memberlimit = 1

fake = '*「 BAPHOMATE 」*'
numbernye = '0'
targetprivate = '6283891411268'
ghoibsu = 'tes'
myteks = 'okeh nyala'
blocked = []

/*
]=====> SETTING DI SINI KEBAWAH BIARIN AJG <=====[
*/
const ownerNumber = ["6285759669252@s.whatsapp.net", "6285691724140@s.whatsapp.ne"]
const premiumNumber = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const botName = 'Baphomate'
const ownerName = 'R4id3n\nKirasinigami'
    /*
    */
    /*       
    ]=====> LOAD JSON <=====[
    */
const setiker = JSON.parse(fs.readFileSync('./database/stik.json'))
const seetiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const afk = JSON.parse(fs.readFileSync('./src/afk.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antixnxx = JSON.parse(fs.readFileSync('./database/group/antixnxx.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))

/*       
]=====> LOAD MENU <=====[
*/
const { iklan } = require('./lib/iklan')
const { rules } = require('./lib/rules')
const { tnc } = require('./lib/tnc')
const { simple } = require('./database/menu/simple')
const { gabut } = require('./database/menu/gabut')
const { groupm } = require('./database/menu/group')
const { download } = require('./database/menu/download')
const { dompet } = require('./database/menu/dompet')
const { random } = require('./database/menu/random')
const { other } = require('./database/menu/other')
const { owb } = require('./database/menu/owb')
const { maker } = require('./database/menu/maker')
const { sound } = require('./database/menu/sound')
    /*
    ]=====> FUNCTION <=====[
    */
const getLevelingXp = (sender) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].xp
    }
}

const getLevelingLevel = (sender) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].level
    }
}

const getLevelingId = (sender) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _level[position].id
    }
}

const addLevelingXp = (sender, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].xp += amount
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
    }
}

const addLevelingLevel = (sender, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
    }
}

const addLevelingId = (sender) => {
    const obj = { id: sender, xp: 1, level: 1 }
    _level.push(obj)
    fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
}

const getRegisteredRandomId = () => {
    return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
    const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
    _registered.push(obj)
    fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
    let status = false
    Object.keys(_registered).forEach((i) => {
        if (_registered[i].id === sender) {
            status = true
        }
    })
    return status
}

const addATM = (sender) => {
    const obj = { id: sender, uang: 0 }
    uang.push(obj)
    fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang += amount
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
    }
}

const checkATMuser = (sender) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return uang[position].uang
    }
}

const bayarLimit = (sender, amount) => {
    let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit -= amount
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}

const confirmATM = (sender, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang -= amount
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
    }
}

const limitAdd = (sender) => {
    let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 1
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}


function kyun(seconds) {
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60 * 60));
    var minutes = Math.floor(seconds % (60 * 60) / 60);
    var seconds = Math.floor(seconds % 60);

    //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
    return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*
]=====> SCAN QR <=====[
*/

const mans = new WAConnection()
mans.logger.level = 'warn'
console.log(banner.string)
mans.on('qr', () => {
    console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color(' POWERED BY ITSMAZGH'))
})
mans.on('credentials-updated', () => {
    fs.writeFileSync('./session.json', JSON.stringify(mans.base64EncodedAuthInfo(), null, '\t'))
    info('2', 'Login Info Updated')
})
fs.existsSync('./session.json') && mans.loadAuthInfo('./session.json')
mans.on('connecting', () => {
    start('2', 'ITSMAZGH Connecting...')
})
mans.on('open', () => {
    success('2', 'ITSMAZGH Connected')
})
mans.connect({ timeoutMs: 30 * 1000 })


// WELCOME IMAGE MAGICK TANPA API
mans.on('group-participants-update', async (anu) => {
    if (!welkom.includes(anu.jid)) return
    try {
        const mdata = await mans.groupMetadata(anu.jid)
        console.log(anu)
        if (anu.action == 'add') {
            num = anu.participants[0]
            const moment = require('moment-timezone')
const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
            let d = new Date
                let locale = 'id'
                    let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
                    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
                    let week = d.toLocaleDateString(locale, { weekday: 'long' })
                    let calender = d.toLocaleDateString(locale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
                })
pushnem = mans.contacts[num] != undefined ? mans.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : mans.contacts[num].notify || mans.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
            try {
                ppimg = await mans.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
                ppimg = './src/image/pp.jpeg'
            }
                exec(`magick './src/wel.jpg' -gravity west -fill '#ff2fa2' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
                .on('error', () => reply('error'))
                .on('exit', () => {
            mans.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `Welcome 👋@${num.split('@')[0]}`, contextInfo: { mentionedJid: [num] }})
            })
        } else if (anu.action == 'remove') {
        num = anu.participants[0]
        const moment = require('moment-timezone')
const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
            let d = new Date
                let locale = 'id'
                    let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
                    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
                    let week = d.toLocaleDateString(locale, { weekday: 'long' })
                    let calender = d.toLocaleDateString(locale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
                })
pushnem = mans.contacts[num] != undefined ? mans.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : mans.contacts[num].notify || mans.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
            try {
                ppimg = await mans.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
                ppimg = './src/image/pp.jpeg'
            }
                exec(`magick './src/lev.jpg' -gravity west -fill '#ff2fa2' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
                .on('error', () => reply('error'))
                .on('exit', () => {
            mans.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {caption: `GoodByee👋@${num.split('@')[0]}\n`, contextInfo: { mentionedJid: [num] }})
            })
        }
    } catch (e) {
        console.log(e)
    }
    
// WELCOME IMAGE MAGICK API 
/*
mans.on('group-participants-update', async (anu) => {
        if (!welkom.includes(anu.jid)) return
        try {
            mem = anu.participants[0]
            console.log('Berbahaya sloerr')
            try {
                var pp_user = await mans.getProfilePicture(mem)
            } catch (e) {
                var pp_user = `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60`
            }
            if (anu.action == 'add') {
           let mdata = await mans.groupMetadata(anu.jid)
            memeg = mdata.participants.length
            num = anu.participants[0]
             anu_user = mans.contacts[mem]
             teks = `*〔 WELCOME IN GC ${mdata.subject} 〕*\n╭━━━━━━━━━━━━━━━━━━━━ \n┃ *➣ Nama* : \n┃ *➣ Umur* : \n┃ *➣ Askot* : \n┃ *➣ Gender* : \n┃ *➣ Insta* : \n╰━━━━━━━━━━━━━━━━━━━━\n @${num.split('@')[0]} Intro/Dikick!!!*`
            let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${num.split('@')[0]}&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.postimg.cc/SKfKnTxZ/images-15.jpg`)
        mans.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
        }
            if (anu.action == 'remove') {
                let mdata = await mans.groupMetadata(anu.jid)
                num = anu.participants[0]
                anu_user = mans.contacts[mem]
                memeg = mdata.participants.length
                out = `*Gausah kesini lagi ya @${num.split('@')[0]}*`
                let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=_${num.split('@')[0]}_&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.postimg.cc/s2xV2Vb2/images-16.jpg`)
                mans.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
        } catch (e) {
            console.log('Error : %s', color(e, 'red'))
        }
    })
               
  */
  /*
// WELCOME BIASA
mans.on('group-participants-update', async(anu) => {
    if (!welkom.includes(anu.jid)) return
    try {
        const mdata = await mans.groupMetadata(anu.jid)
        console.log(anu)
        if (anu.action == 'add') {
            num = anu.participants[0]
            try {
                ppimg = await mans.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
                ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            teks = `*〔 WELCOME IN GC ${mdata.subject} 〕*\n╭━━━━━━━━━━━━━━━━━━━━ \n┃ *➣ Nama   :* \n┃ *➣ Umur   :* \n┃ *➣ Askot   :* \n┃ *➣ Gender :* \n┃ *➣ Insta    :* \n╰━━━━━━━━━━━━━━━━━━━━\n @${num.split('@')[0]} Intro/Dikick!!!`
            let buff = await getBuffer(ppimg)
            mans.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
        } else if (anu.action == 'remove') {
            num = anu.participants[0]
            try {
                ppimg = await mans.getProfilePicture(`${num.split('@')[0]}@c.us`)
            } catch {
                ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            teks = `*SELAMAT TINGGAL @${num.split('@')[0]}* \nJasamu akan saya kubur dalam dalam`
            let buff = await getBuffer(ppimg)
            mans.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
        }
    } catch (e) {
        console.log('Error : %s', color(e, 'red'))
    }
})
*/
mans.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
})

mans.on("CB:Call", json => {
     if (blockcall === false) return
      let call;
      calling = JSON.parse(JSON.stringify(json))
      call = calling[1].from
          mans.sendMessage(call, `*Maaf ${mans.user.name} tidak bisa menerima panggilan.*\n*Nelfon = Block!*`, MessageType.text)
          .then(() => mans.blockUser(call, "add"))

})

mans.on('message-update', async(mek) => {
    try {
        const from = mek.key.remoteJid
        const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
        const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
        const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
        const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
        const sender = mek.key.fromMe ? mans.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
        const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
        const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
        const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
        if (messageStubType == 'REVOKE') {
            console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
            if (!isRevoke) return
            if (!isCtRevoke) return
            if (!isBanCtRevoke) return
            const from = mek.key.remoteJid
            const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
            let int
            let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
            const id_deleted = mek.key.id
            const conts = mek.key.fromMe ? mans.user.jid : mans.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? mans.user.name : conts.notify || conts.vname || conts.name || '-'
            const opt4tag = {
                contextInfo: { mentionedJid: [sender] }
            }
            for (let i = 0; i < infoMSG.length; i++) {
                if (infoMSG[i].key.id == id_deleted) {
                    const dataInfo = infoMSG[i]
                    const type = Object.keys(infoMSG[i].message)[0]
                    const timestamp = infoMSG[i].messageTimestamp
                    int = {
                        no: i,
                        type: type,
                        timestamp: timestamp,
                        data: dataInfo
                    }
                }
            }
            const index = Number(int.no)
            const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
            const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
            var itsme = `${numbernye}@s.whatsapp.net`
            var split = `${fake}`
                // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var selepbot72 = {
                contextInfo: {
                    participant: itsme,
                    quotedMessage: {
                        extendedTextMessage: {
                            text: split,
                        }
                    }
                }
            }
            if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                const strConversation = `        「 *ANTI-DELETE* 」

➣ *Nama :* ${pushname}
➣ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
➣ *Tipe :* Text
➣ *Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
➣ *Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
➣ *Pesan :* ${body ? body : '-'}`
                mans.sendMessage(from, strConversation, MessageType.text, selepbot72)
            } else if (int.type == 'stickerMessage') {
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
                const pingbro23 = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await mans.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
                const strConversation = `        「 *ANTI-DELETE* 」

➣ *Nama :* ${pushname}
➣ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
➣ *Tipe :* Sticker
➣ *Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
➣ *Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

                const buff = fs.readFileSync(savedFilename)
                mans.sendMessage(from, strConversation, MessageType.text, opt4tag)
                mans.sendMessage(from, buff, MessageType.sticker, pingbro23)
                    // console.log(stdout)
                fs.unlinkSync(savedFilename)

            } else if (int.type == 'imageMessage') {
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
                const pingbro22 = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await mans.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
                const buff = fs.readFileSync(savedFilename)
                const strConversation = `    「 *ANTI-DELETE* 」

➣ *Nama :* ${pushname}
➣ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
➣ *Tipe :* Image
➣ *Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
➣ *Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
➣ *Pesan :* ${body ? body : '-'}\`\`\``
                mans.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
                fs.unlinkSync(savedFilename)
            }
        }
    } catch (e) {
        console.log('Message : %s', color(e, 'green'))
            // console.log(e)
    }
})

mans.on('message-new', async(mek) => {
    try {
        if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
        infoMSG.push(JSON.parse(JSON.stringify(mek)))
        fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
        const urutan_pesan = infoMSG.length
        if (urutan_pesan === 5000) {
            infoMSG.splice(0, 4300)
            fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
        }
        if (!mek.key.fromMe && mek.key.fromMe) return
        global.prefix
        global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
        const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
        const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
        const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'audioMessage') && mek.message.audioMessage.caption ? mek.message.audioMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'audioMessage') && mek.message.audioMessage.caption.startsWith(prefix) ? mek.message.audioMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
        budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const tescuk = ["0@s.whatsapp.net"]
        const isGroup = from.endsWith('@g.us')
        const totalchat = await mans.chats.all()
        const q = args.join(' ')
        const botNumber = mans.user.jid
        const sender = isGroup ? mek.participant : mek.key.remoteJid
        pushname = mans.contacts[sender] != undefined ? mans.contacts[sender].vname || mans.contacts[sender].notify : undefined
        const groupMetadata = isGroup ? await mans.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupId = isGroup ? groupMetadata.jid : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//hari
        var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL/Hari: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;

// Ucapan Waktu
      const hour_now = moment().format('HH')
      var ucapanWaktu = 'Subuh'
      if (hour_now >= '03' && hour_now <= '04') {
       ucapanWaktu = 'Pagi'
      } else if (hour_now >= '04' && hour_now <= '14') {
       ucapanWaktu = 'Siang'
      } else if (hour_now >= '14' && hour_now <= '17') {
        ucapanWaktu = 'Sore'
      } else if (hour_now >= '17' && hour_now <= '18') {
        ucapanWaktu = 'petang'
      } else if (hour_now >= '18' && hour_now <= '23') {
        ucapanWaktu = 'Malam'
      } else {
        ucapanWaktu = 'Malam!'
      }
        /*
        ]=====> ITSMAZGH <=====[
        */
        const isEventon = isGroup ? event.includes(from) : false
        const isRegistered = checkRegisteredUser(sender)
        const isBanned = ban.includes(sender)
        const isBadWord = isGroup ? badword.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntiXnxx = isGroup ? antixnxx.includes(from) : false
        const isAntiFirtex = isGroup ? antifirtex.includes(from) : false
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isGroupAdmins = groupAdmins.includes(sender) || false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isNsfw = isGroup ? nsfw.includes(from) : false
        const isSimi = isGroup ? samih.includes(from) : false
        const isOwner = ownerNumber.includes(sender)
        const isPremium = premiumNumber.includes(sender)
        const isImage = type === 'imageMessage'
        const isAudio = type === 'audioMessage'
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        mans.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                battre = batterylevel
        })
        const reply = (teks) => {
            mans.sendMessage(from, teks, text, { quoted: mek })
        }
        const sendMess = (hehe, teks) => {
            mans.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? mans.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }): mans.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendImage = (teks) => {
            mans.sendMessage(from, teks, image, { quoted: mek })
        }
        const costum = (pesan, tipe, target, target2) => {
            mans.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
        }
        const sendPtt = (teks) => {
            mans.sendMessage(from, audio, mp3, { quoted: mek })
        }
        async function faketoko(teks, url_image, title, code, price) {
            var punya_wa = "0@s.whatsapp.net"
            var ini_buffer = await getBuffer(url_image)
            const ini_cstoko = {
                contextInfo: {
                    participant: punya_wa,
                    remoteJid: 'status@broadcast',
                    quotedMessage: {
                        productMessage: {
                            product: {
                                currencyCode: code,
                                title: title,
                                priceAmount1000: price,
                                productImageCount: 1,
                                productImage: {
                                    jpegThumbnail: ini_buffer
                                }
                            },
                            businessOwnerJid: "0@s.whatsapp.net"
                        }
                    }
                }
            }
            mans.sendMessage(from, teks, text, ini_cstoko)
        }

        /*
        ]=====> AUTO READ <=====[
        */
        var chats = await mans.chats.all()
                    chats.map( async ({ jid }) => {
                          await mans.chatRead(jid)
                    })
        /*
        ]=====> ANTIVIRTEX <======[
        */
        if (messagesC.includes("://*9999999* /")) {
            if (!isGroup) return
            if (!isAntiFirtex) return
            if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
            mans.updatePresence(from, Presence.composing)
            if (mesejAnti.includes("#izinkak")) return reply("Iya kak jangan spam ya")
            var kick = `${sender.split("@")[0]}@s.whatsapp.net`
            reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti virtek, siap siap kamu di kick`)
            setTimeout(() => {
                mans.groupRemove(from, [kic]).catch((e) => { reply(`*𝗠 𝗘 𝗚 𝗨 𝗠 𝗜 𝗡 ~ HARUS JADI ADMIN*`) })
            }, 3000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("Hedsot....")
            }, 2000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("Bismillah...")
            }, 1000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("Ready? goo..")
            }, 0)
        }
        /*
        ]=====> ANTILINK <=====[
        */
        if (messagesC.includes("://chat.whatsapp.com/")) {
            if (!isGroup) return
            if (!isAntiLink) return
            if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
            mans.updatePresence(from, Presence.composing)
            if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
            var kic = `${sender.split("@")[0]}@s.whatsapp.net`
            reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
            setTimeout(() => {
                mans.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
            }, 3000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("1detik")
            }, 2000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("2detik")
            }, 1000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("3detik")
            }, 0)
        }
         /*
        ]=====> ANTIXNXX <=====[
        */
        if (messagesC.includes("://www.xnxx.com/")) {
            if (!isGroup) return
            if (!isAntiXnxx) return
            if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
            mans.updatePresence(from, Presence.composing)
            if (messagesC.includes("#izinbre")) return reply("#izinbre diterima")
            var kic = `${sender.split("@")[0]}@s.whatsapp.net`
            reply(`Link Xnxx Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
            setTimeout(() => {
                mans.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
            }, 3000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("1detik")
            }, 2000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("2detik")
            }, 1000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("3detik")
            }, 0)
        }
        
        /*
        ]=====> ANTIXNXX1 <=====[
        */
        if (messagesC.includes("xnxx.com")) {
            if (!isGroup) return
            if (!isAntiXnxx) return
            if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
            mans.updatePresence(from, Presence.composing)
            if (messagesC.includes("#izinbre")) return reply("#izinbre diterima")
            var kic = `${sender.split("@")[0]}@s.whatsapp.net`
            reply(`Link Xnxx Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
            setTimeout(() => {
                mans.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
            }, 3000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("1detik")
            }, 2000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("2detik")
            }, 1000)
            setTimeout(() => {
                mans.updatePresence(from, Presence.composing)
                reply("3detik")
            }, 0)
        }
        /*
        ]=====> NOBADWORD <=====[
        */
        if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😡")
                        .then(() => mans.groupRemove(from, sender))
                        .then(() => {
                            mans.sendMessage(from, `*「 ANTI BADWORD 」*\nITSMAZGH-Bot akan kick kamu karena berkata kasar!`, text, { quoted: mek })
                        }).catch(() => mans.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text, { quoted: mek }))
                } else {
                    return reply("Tolong Jaga Ucapan Min 😇")
                }
            }
        }
        /*
        ]=====> LEVELING <=====[
        */
        if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp, getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
        /*
        ]=====> CHECK LIMIT BY LANN ID <=====[
        */
        const checkLimit = (sender) => {
            let found = false
            for (let lmt of _limit) {
                if (lmt.id === sender) {
                    let limitCounts = limitawal - lmt.limit
                    if (limitCounts <= 0) return mans.sendMessage(from, `Limit anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan naik level_`, text, { quoted: mek })
                    mans.sendMessage(from, ind.limitcount(limitCounts), text, { quoted: mek })
                    found = true
                }
            }
            if (found === false) {
                let obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                mans.sendMessage(from, ind.limitcount(limitCounts), text, { quoted: mek })
            }
        }

        /*
        ]=====> LIMITED BY LANN ID <=====[
        */
        const isLimit = (sender) => {
            let position = false
            for (let i of _limit) {
                if (i.id === sender) {
                    let limits = i.limit
                    if (limits >= limitawal) {
                        position = true
                        mans.sendMessage(from, ind.limitend(pushname), text, { quoted: mek })
                        return true
                    } else {
                        _limit
                        position = true
                        return false
                    }
                }
            }
            if (position === false) {
                const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                return false
            }
        }


        if (isGroup) {
            try {
                const getmemex = groupMembers.length
                if (getmemex <= memberlimit) {
                    mans.groupLeave(from)
                }
            } catch (err) { console.error(err) }
        }

        /*
        ]=====> AFK ASU <=====[
        */
            for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "*「 FITUR AFK 」*\nMAAF USER YANG ANDA TAG ATAU REPLY SEDANG AFK "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "ALASAN " + afk[x.split('@')[0]]
                    }
                    mans.sendMessage(from, ini_txt, text, {quoted: mek})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("*「 FITUR AFK 」*\nANDA SEKARANG TELAH KELUAR DARI MODE AFK")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
            }
        /*
        ]=====> FAKE REPLY <=====[
        */
        const eft = {
       key: { 
             fromMe: false, 
             participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
       }, 
       message: { 
          "imageMessage": { 
              "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                 "mimetype": "image/jpeg", 
                 "caption": "*「 𝗠 𝗘 𝗚 𝗨 𝗠 𝗜 𝗡 」*", 
                 "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                 "fileLength": "28777", 
                 "height": 1080, 
                 "width": 1079, 
                 "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", 
                 "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", 
                 "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", 
                 "mediaKeyTimestamp": "1610993486", 
                 "jpegThumbnail": fs.readFileSync('image/odc.jpeg')
                 } 
        }
}

        /*
        ]=======> Creat by megumin <=======[
        */
        const fft = {
         key: { 
             fromMe: false, 
             participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
       }, 
        message: {
                            orderMessage: {
                            itemCount : 1,
                            status: 1,
                            surface : 1,
                            message: ' Creat by megumin',
                            Title: "Creat by megumin",
                            sellerJid: '0@s.whatsapp.net'
                          }
                        }
                      }

                      const flokasi = {
    key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Megumin',
                    jpegThumbnail: fs.readFileSync('./image/anjay.jpeg')
                          }
                        }
                      }
//FAKEREPLY DOCUMENT
const fdocs = {
    key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: 'doujinshi', 
                    jpegThumbnail: fs.readFileSync('./image/anjay.jpeg')
                          }
                        }
                      }
//FAKEREPLY VIDEO
const fvideo = {
     key: { 
          fromMe: false,
          participant: `0@s.whatsapp.net`, ...(from ? 
     { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
     message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./image/anjay.jpeg')
                        }
                       }
                      }
//FAKEREPLY GROUPINVITE
const fgclink = {
    "key": {
        "fromMe": false,
        "participant": "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
    },
    "message": {
        "groupInviteMessage": {
            "groupJid": "6288213840883-1616169743@g.us",
            "inviteCode": "mememteeeekkeke",
            "groupName": "P", 
            "caption": "Halo bang jagoo", 
            'jpegThumbnail': fs.readFileSync('./image/anjay.jpeg')
        }
    }
}
//FAKEREPLY GIF
const fgif = {
     key: { 
          fromMe: false,
          participant: `0@s.whatsapp.net`, ...(from ? 
     { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
     message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'gifPlayback': 'true', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./image/anjay.jpeg')
                        }
                       }
                      } 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
     key: { 
          fromMe: false,
          participant: `0@s.whatsapp.net`, ...(from ? 
     { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
     message: { 
        "extendedTextMessage": {
                 "text":"hallo bang",
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('./image/anjay.jpeg')
                        }
                      } 
                     }
//FAKEREPLY VN
const fvn = {
     key: { 
          fromMe: false,
          participant: `0@s.whatsapp.net`, ...(from ? 
     { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
     message: { 
        "audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
                      } 
                     }
                
        /*
        ]=====> FAKETOKO <=====[
        */
        const sft = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
        },
        message: {
            "productMessage": {
                "product": {
                    "productImage":{
                        "mimetype": "image/jpeg",
                        "jpegThumbnail": fs.readFileSync(`./src/logo.jpg`)
                    },
                    "title": "Creat by megumin",
                    "description": "1 Bulan : Rp 10.000,00",
                    "currencyCode": "USD",
                    "priceAmount1000": "10000000000000000000",
                    "retailerId": "Self Bot",
                    "productImageCount": 99999
                },
                    "businessOwnerJid": `0@s.whatsapp.net`
                }
            }
        }
        /*
        ]=====> ATM <=====[
        */
        if (isRegistered) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
        if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
        if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))


        switch (command) {
           case 'menu':
    case 'help':
    case '?':
    reply('_Menampilkan menu..._')
    me = '6285691724140@s.whatsapp.net'
menu = `❏  ${ucapanWaktu}
│
├  *${tampilWaktu}*
└  *${tampilTanggal}*

❏  S T I C K E R - T O O L S
├  ${prefix}toimg *reply sticker*
└  ${prefix}sticker *reply foto/video*

❏  I S L A M - M E N U
└  ${prefix}kisahnabi *nama nabi*

❏  A B O U T - B O T
├  ${prefix}owner
├  ${prefix}donasi
├  ${prefix}ping
└  ${prefix}runtime

❏  T H A N K S T O
├  *Kira*
├  *penyedia apikey*
└  *mhank bar bar*

❏  I N G F O - B O T
├  Lib : Baileys
└  Creator : R4id3n`
mans.sendMessage(from, { text: menu, jpegThumbnail: fs.readFileSync('./image/anjay.jpeg')}, 'extendedTextMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [me] }})
            break
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp
                exec(`neofetch --stdout`, (error, stdout, stderr) => {
                const child = stdout.toString('utf-8')
                const teks = child.replace(/Memory:/, "Ram:")
                const pingnya = `Pong!!!\n${teks}Speed: ${latensi.toFixed(4)} Second`
                reply(pingnya)
                })
                break
                case 'ytmp4':
                reply(`wait loading`)
                if (args.length == 0) return reply(`example: ${prefix}ytmp4 https://youtu.be/wHBLtzJvtco`)
                memeka = args[0]
                anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/yutub/audio?url=${memeka}&apikey=beta`)
                teks = `title: ${anu.result.title}\nSize: ${anu.result.filesize}\n\n[!]lagi di proses kak`
                thumb = await getBuffer(anu.result.thumb)
                mans.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
                buffer = await getBuffer(anu.result.result)
                mans.sendMessage(from, buffer, video, {Mimetype: 'video/mp4', filename: `${anu.result.result}.mp4`, quoted: mek, caption: 'nih kak'})
                break
                case 'ytmp41':
                reply(`wait loading`)
                if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                ini_link = args[0]
                get_result = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/yutub/audio?url=${ini_url}&apikey=beta`)
                get_result = get_result.result
                ini_txt = `Title : ${get_result.title}\n`
                ini_txt += `size: ${get_result.filesize}\n`
                ini_txt += `resolution: ${get_result.resolution}\n`
                ini_txt += `jenis file: ${get_result.ext}`
                ini_buffer = await getBuffer(get_result.thumb)
                mans.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                get_audio = await getBuffer(get_result.result[0])
                mans.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek, caption: 'Donasi asu!'})
                break
                case 'ytmp3':
                reply(`wait loading`)
                if (args.length == 0) return reply(`example: ${prefix}ytmp3 https://youtu.be/wHBLtzJvtco`)
                memek = args[0]
                anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/yutub/video?url=${memek}&apikey=beta`)
                if (anu.error) return reply(anu.error)
                teks = `title: ${anu.result.title}\nSize: ${anu.result.filesize}\n\n[!]lagi di proses kak`
                thumb = await getBuffer(anu.result.thumb)
                mans.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
                buffer = await getBuffer(anu.result.result)
                mans.sendMessage(from, buffer, audio, {Mimetype: 'audio/mp3', filename: `${anu.result.result}.mp3`, quoted: mek, caption: 'nih kak'})
                break
                case 'igstalk':
                reply(`wait loading`)
                qury = args[0]
                anu  = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/ig/stalk?username=${body.slice(9)}&apikey=Alphabot`)
                images = await getBuffer(anu.result.Profile_pic)
                teks = `name: ${anu.result.Name}\nusername: ${anu.result.Username}\nbiodata: ${anu.result.Biodata}\njumlah followers: ${anu.result.Jumlah_Followers}\njumlah following: ${anu.result.Jumlah_Following}\njumlah post ${anu.result.Jumlah_Post}`
                mans.sendMessage(from, images, image, {quoted: mek, caption: teks})
                break
                case 'ytsearch':
                reply(`wait loading`)
                if (args.length < 1) return reply(`username nya mana um?`)
                anu  = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/yutub/search?video=${body.slice('10')}&apikey=Alphabot`)
                buffer = await getBuffer(anu.result.thumbnail)
                teks = `==================\n`
                for (let i of anu.result) {
                teks += `•> Title : ${i.title}\n•> Id : https://youtu.be/${i.id}\n•> Views : ${i.viewCount}\n=================\n`
                }
                reply(teks.trim())
                break
                case 'carifilm':
                reply(`wait loading`)
                if (args.length < 1) return reply(`username nya mana um?`)
                i = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/filmapik/search?film=${body.slice(10)}&apikey=beta`)
teks = `==================\n`
teks += `•> Title : ${i.title}\n•> Id : ${i.result.moveId}\n•> Views : ${i.result.views}\n•>genre: ${i.result.genre}\n•> director: ${i.result.director}\n•> actors: ${i.result.actors}\n•> country: ${i.result.country}\n•> durasi: ${i.result.duration}\n•> realis: ${i.result.release}\ndesc: ${i.result.description}\n=================\n`
reply(teks.trim())
break
case 'carifilm1':
reply(`wait loading`)
if (args.length < 1) return reply(`mau nyari anime apa um?`)
query = args.join(" ")
i = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/filmapik/search?film=${query}&apikey=beta`)
memeklah = `•> Title : ${i.result.title}\n•> Id : ${i.result.moveId}\n•> Views : ${i.result.views}\n•>genre: ${i.result.genre}\n•> director: ${i.result.director}\n•> actors: ${i.result.actors}\n•> country: ${i.result.country}\n•> durasi: ${i.result.duration}\n•> realis: ${i.result.release}\ndesc: ${i.result.description}\n=================\n`
buffer = await getBuffer(`https://i.postimg.cc/hvHsThsH/images-17.jpg`)
mans.sendMessage(from, buffer, image, {quoted: mek, caption: memeklah})
break
case 'playfilm':
reply(`wait loading`)
if (args.length < 1) return reply(`mau nyari film apa um?pake id ya,contoh idnya 142455`)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/filmapik/play?id=${body.slice(10)}&apikey=beta`)
mans_tolol = `${anu.result.link}`
mans.sendMessage(from, mans_tolol, text, {quoted: mek})
break
case 'infofilm': // Update NEW FITUR 
reply(`wait loading`)
                if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/filmapik/search?film=${body.slice(10)}&apikey=beta`)
                teks = '=================\n'
                resa = asu.result.result
                for (let i of resa) {
                    teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Episode* : ${i.episode}\n*Movie ID* : ${i.movieId}\n*Views* : ${i.views}\n*Duration* : ${i.duration}\n*Release* : ${i.release}\n=================\n`
                }
                reply(teks)
                break
case 'kusonime':
reply(`wait loading`)
if (args.length < 1) return reply(`mau nyari anime apa um?`)
query = args.join(" ")
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/anime/kusonime?search=${query}&apikey=beta`)
txt = `title: ${anu.result.title}\n`
txt += `titlejp: ${anu.result.title_jp}\n`
txt += `genre: ${anu.result.genre}\n`
txt += `season: ${anu.result.season}\n`
txt += `producer: ${anu.result.producer}\n`
txt += `type: ${anu.result.type}\n`
txt += `status: ${anu.result.status}\n`
txt += `total eps: ${anu.result.total_episode}\n`
txt += `score: ${anu.result.score}\n`
txt += `duration: ${anu.result.duration}\n`
txt += `realis: ${anu.result.released_on}\n`
txt += `desc: ${anu.result.description}\n`
txt += `============`
kontol = anu.result.download_link
for (var i in kontol) {
txt += `\nlink download: ${i.download_link}\nresolution${i.resolution}============`
for (var y in kontol[i.download_link]) {
txt += `${y.download_link} - ${kontol[x.download_link][y.download_link]}`
}
}
buffer = await getBuffer(anu.result.thumbs)
mans.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
break
case 's':
                  case 'stiker':
                  case 'sticker':
                  case 'stickergif':
                  case 'stikergif':
                  if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await mans.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.webp')
                    await ffmpeg(`./${media}`)
                        .input(media)
                        .on('start', function(cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function(err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            reply('eror')
                        })
                        .on('end', function() {
                            console.log('Finish')
                            mans.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
                            fs.unlinkSync(media)
                            fs.unlinkSync(ran)
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(ran)
                } else if ((!isMedia && !mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                    const encmedia = !isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const media = await mans.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.webp')
                    reply('[❗] SEDANG DI PROSES')
                    await ffmpeg(`./${media}`)
                        .inputFormat(media.split('.')[1])
                        .on('start', function(cmd) {
                            console.log(`Started : ${cmd}`)
                        })
                        .on('error', function(err) {
                            console.log(`Error : ${err}`)
                            fs.unlinkSync(media)
                            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                            reply(`❰❗❱ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                        })
                        .on('end', function() {
                            console.log('Finish')
                            buff = fs.readFileSync(ran)
                            mans.sendMessage(from, buff, sticker)
                            fs.unlinkSync(media)
                            fs.unlinkSync(ran)
                        })
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(ran)
                }
                break
case 'nulis':
reply(`wait loading`)
if (args.length < 1) return reply(`mau tulis apa um?`)
tulis = body.slice(6)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/nulis?text=${tulis}&apikey=beta`)
buffer = await getBuffer(anu.result.result)
mans.sendMessage(from, buffer, image, { quoted: mek, caption: 'success oni chan'})
break
case 'covidindo':
reply(`wait loading`)
       anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/covidindo?apikey=beta`)
       teks = `• *Provinsi* : ${anu.result.attributes.Provinsi}\n• *Positif* : ${anu.result.attributes.Kasus_Posi}\n• *Sembuh* : ${anu.result.attributes.Kasus_Semb}\n• *Meninggal* : ${anu.result.attributes.Kasus_Meni}`
       mans.sendMessage(from, teks, text, { quoted: mek })
       break
       case 'cuacaindo':
       reply(`wait loading`)
      if (args.length == 0) return reply(`Penggunaan ${prefix}cuacaindo jakarta`)
      anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/infocuaca?provinsi=${args[0]}&apikey=beta`)
      teks = `• *Title*: ${anu.result.title}\n• *Kota*: ${anu.result.daftar_kota.nama_kota}\n• *Cuaca Malam* : ${anu.result.cuaca_malam}\n• *Cuaca dini hari* : ${anu.result.cuaca_dini_hari}\n• *Suhu* : ${anu.result.suhu}`
      reply(teks)
      break
      case 'cuaca1': // pikirin sendiri lah tot,cape gw ngerjain sc kontol sampe malem malem,kena marah ortu bangsat
                reply(`wait loading`)
                if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/infocuaca?provinsi=${args[0]}&apikey=beta`)
                teks = '=================\n'
                lala = `${asu.result.result}`
                for (let i of lala) {
                teks += `• *Title*: ${i.title}\n• *Kota*: ${i.nama_kota}\n• *Cuaca Malam* : ${i.cuaca_malam}\n• *Cuaca dini hari* : ${i.cuaca_dini_hari}\n• *Suhu* : ${i.suhu}\n=================\n`
                }
                ikkeh_kimochi_ahhh = await getBuffer(`https://i.postimg.cc/hvHsThsH/images-17.jpg`)
                mans.sendMessage(from, ikkeh_kimochi_ahhh, image, {quoted: mek, caption: teks})
                break
       case 'wallpaper':
       reply(`wait loading`)
      anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/random/wallpaper?apikey=beta`)
      buffer = await getBuffer(anu.result.url)
      mans.sendMessage(from, buffer, image, { quoted: mek })
      break
case 'quotes':
reply(`wait loading`)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/randomquote?apikey=beta`)
teks = `_${anu.result.quotes}_\n\n• *${anu.result.author}*`
mans.sendMessage(from, teks, text, { quoted: mek })
break
case 'meme':
reply(`wait loading`)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/random/meme?apikey=beta`)
buffer = await getBuffer(anu.result.url)
mans.sendMessage(from, buffer, image, { quotes: mek })
break
case 'battle-field':
reply(`wait loading`)
kontolq = body.slice(14)
memekwlo = kontolq.split("|")[0];
memekwlo1 = kontolq.split("|")[1];
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/game?text=${memekwlo}&text2=${memekwlo1}&theme=battlefield&apikey=beta`)
buffer = await getBuffer(anu.result.url)
xaxaaa = `${anu.result.url}\n${anu.result.info}`
mans.sendMessage(from, buffer, image, {quoted: mek, caption: xaxaaa})
break
case 'metal':
reply(`wait loading`)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/metallic?text=${body.slice(7)}&theme=glow&apikey=beta`)
buffer = await getBuffer(anu.result.url)
xaxaaaa = `${anu.result.url}\n${anu.result.info}`
mans.sendMessage(from, buffer, image, {quoted: mek, caption: xaxaaaa})
break
case 'coffee-cup2':
reply(`wait loading`)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/senja?text=${body.slice(13)}&theme=coffee-cup2&apikey=beta`)
buffer = await getBuffer(anu.result.url)
xaxaaa = `${anu.result.url}\n${anu.result.info}`
mans.sendMessage(from, buffer, image, {quoted: mek, caption: xaxaaa})
break
case 'bunga':
reply(`wait loading`)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/alam?text=${body.slice(7)}&theme=flower&apikey=beta`)
buffer = await getBuffer(anu.result.url)
xaxaa = `${anu.result.url}\n${anu.result.info}`
mans.sendMessage(from, buffer, image, {quoted: mek, caption: xaxaa})
break
case 'woodheart':
reply(`wait loading`)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/random?text=${body.slice(11)}&theme=art-quote&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
xaxa = `${anu.result.url}\n${anu.result.info}`
mans.sendMessage(from, buffer, image, {quoted: mek, caption: xaxa})
break
case 'google':
reply(`wait loading`)
kontol = body.slice(8)
memek3 = kontol.split("|")[0];
memek4 = kontol.split("|")[1];
memek5 = kontol.split("|")[2];
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker?text=${memek3}&text2=${memek4}&text3=${memek5}&theme=google-suggestion&apikey=beta`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
mans.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
case 'quran':
if (args.length == 0) return reply(`Example: ${prefix + command} surah 1 ayat 1`) 
anu = await fetchJson(`https://saipulanuar.ga/api/muslim/quran?surah=1&ayat=2`) 
teks = `Nama surat : ${anu.result.long}\nTransliteration : ${anu.result.transliteration.en}\nJuz : ${anu.result.juz}\nPage : ${anu.result.page}\n----------\nTeks : ${anu.result.text.arab}\n----------\nTranslation : ${anu.result.text.transliteration.en}\n----------\ntafsir : ${anu.result.tafsir.id.short}`
mans.sendMessage(from, teks, text, {quoted:mek }) 
buffer = await getBuffer(anu.result.result)
Test = `Audio : ${anu.result.audio.secondary}`
mans.sendMessage(from, buffer, audio, {Mimetype: 'audio/mp3', filename: `${anu.result.audio.secondary}.mp3`, quoted: mek, caption: 'Test'})
break
case 'kisahnabi':
reply(`wait loading`)
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kisahnabi?nabi=${body.slice(11)}&apikey=beta`)
teks = `Nama : ${anu.result.nabi.nabi}\nLahir : ${anu.result.nabi.lahir}\nUmur : ${anu.result.nabi.umur}\nTempat : ${anu.result.nabi.tempat}\nKisah : ${anu.result.nabi.kisah}`
mans.sendMessage(from, teks, text, {quoted: mek})
break
case 'manga': // Update NEW FITUR 
reply(`wait loading`)
                if (args.length < 1) return reply('nama anime nya apaang bwang?')
                reply('[❕]loading')
                anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/manga?search=${body.slice(9)}&apikey=beta`)
                buffer = await getBuffer(anu.result.thumb)
                hasil = `*note:* ${anu.result.note}\n*Title:* : ${anu.result.title}\n*Genre* : ${anu.result.genre}\n*Type* : ${anu.result.type}\n*Rating* : ${anu.result.rating}\n*Desk* : ${anu.result.description}\n*Released On* : ${anu.result.released}\n*status:* ${anu.result.status}`
                mans.sendMessage(from, buffer, image, { quoted: mek, caption: hasil })
                break
                case 'manga1':
                reply(`wait loading`)
if (args.length < 1) return reply(`mau nyari anime apa um?`)
query = args.join(" ")
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/manga?search=${query}&apikey=beta`)
memeklah = `note: ${anu.result.note}\ntitle: ${anu.result.title}\ngenre: ${anu.result.genre}\ntype: ${anu.result.type}\nauthor: ${anu.result.author}\nstatus: ${anu.result.status}\nscore: ${anu.result.rating}\nrealis: ${anu.result.released}\nlink: ${anu.result.link}\ndesc: ${anu.result.description}\n`
buffer = await getBuffer(`https://i.postimg.cc/hvHsThsH/images-17.jpg`)
mans.sendMessage(from, buffer, image, {quoted: mek, caption: memeklah})
break
case 'manga2': // Update NEW FITUR 
reply(`wait loading`)
                if (args.length < 1) return reply('nama anime nya apaang bwang?')
                reply('[❕]loading')
                anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/manga?search=${body.slice(8)}&apikey=beta`)
                teks = `*Title:* : ${anu.result.title}\n*Desk* : ${anu.result.description}\n*Genre* : ${anu.result.description.genre}\n*Type* : ${anu.result.description.type}\n*Rating* : ${anu.result.description.rating}\n*Released* : ${anu.result.description.released}\n*status:* ${anu.result.description.status}`
                mans.sendMessage(from, teks, text, { quoted: mek})
                break
                case 'manga3':
                reply(`wait loading`)
if (args.length < 1) return reply(`mau nyari anime apa um?`)
query = args.join(" ")
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/manga?search=${body.slice(8)}&apikey=beta`)
txt = `title: ${anu.result.title}\n`
txt += `genre: ${anu.result.genre}\n`
txt += `type: ${anu.result.type}\n`
txt += `author: ${anu.result.author}\n`
txt += `status: ${anu.result.status}\n`
txt += `score: ${anu.result.rating}\n`
txt += `realis: ${anu.result.released}\n`
txt += `desc: ${anu.result.description}\n`
txt += `============`
kontol = anu.link
for (var i in kontol) {
txt += `\nlink download: ${i.link}\n`
for (var y in kontol[i.link]) {
txt += `${y.link} - ${kontol[x.link][y.link]}`
}
}
buffer = await getBuffer(`https://i.postimg.cc/hvHsThsH/images-17.jpg`)
mans.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
break
case 'tiktok':
  if (args.length < 1) return reply('Link nya mana')
  reply(Loading)
  anu = await fetchJson(`https://yotsuchan.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=Ninochan`)
  teks = `• *Judul*: ${anu.judul}`
  mans.sendMessage(from, teks, video, { quoted: mek})
  break
case 'joox':
 if (args.length < 1) return reply('Lagunya apa')
 reply(`Loading`)
 anu = await fetchJson(`https://yotsuchan.herokuapp.com/api/music/joox?apikey=Ninochan&query=${args[0]}`)
 teks = `Lagu Ditemukan!!\n\n• *Judul*: ${anu.result.lagu}\n• *Album*: ${anu.result.album}\n• *Penyanyi*: ${anu.result.penyanyi}\n• *Publish*: ${anu.result.publish}`
 thumbnail = await getBuffer(anu.result.img)
 mans.sendMessage(from, thumbnail, image, { quoted: mek, caption: teks })
 get_audio = `${anu.result.lirik}`
 mans.sendMessage(from, get_audio, text, {quoted: mek})
    break
case 'manga4':
                if (args.length < 1) return reply(`username nya mana um?`)
               reply(`wait loading`)
                     anu  = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/manga?search=${body.slice(8)}&apikey=beta`)
buffer = await getBuffer(`https://i.postimg.cc/hvHsThsH/images-17.jpg`)
teks = `==================\n`
teks += `•> *Title:* : ${anu.result.title}\nlink: https://drive.google.com${anu.result.link}\n*Genre* : ${anu.result.genre}\n*Type* : ${anu.result.type}\n*Rating* : ${anu.result.rating}\n*Released* : ${anu.result.released}\n*status:* ${anu.result.status}\n*Desk* : ${anu.result.description}`
reply(teks.trim())
break
case 'manga5': // Errorr
                if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
                reply(`[❕] Loading`)
                anu = await fetchJson(`c`)
                teks = '=================\n'
                resa = anu.result.result
                for (let i of resa) {
                    teks += `•> *Title:* : ${i.title}\nlink: https://drive.google.com${i.link}\n*Genre* : ${i.genre}\n*Type* : ${i.type}\n*Rating* : ${i.rating}\n*Released* : ${i.released}\n*status:* ${i.status}\n*Desk* : ${i.description}\n=================\n`
                }
                reply(teks)
                break
                case 'tahlil': // Update NEW FITUR 
                reply(`[❕] Loading`)
                anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/muslim/tahlil?apikey=beta`)
                lah = `•> *Title:* : ${anu.result.title}\n=================\n`
                mans.sendMessage(from, lah, text, {quoted: mek})
                break
                case 'tahlil1': // Update NEW FITUR 
                if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/muslim/tahlil?apikey=beta`)
                teks = '=================\n'
                resa = asu.result.result
                for (let i of resa) {
                    teks += `•> *Title:* : ${i.title}\nlink: https://drive.google.com${i.link}\n*Genre* : ${i.genre}\n*Type* : ${i.type}\n*Rating* : ${i.rating}\n*Released* : ${i.released}\n*status:* ${i.status}\n*Desk* : ${i.description}\n=================\n`
                }
                reply(teks)
                break
case 'infogempa':
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/infogempa?apikey=beta`)
teks = `waktu: ${anu.result.Waktu}\nlintang: ${anu.result.Lintang}\nbujur: ${anu.result.Bujur}\nmagnitudo: ${anu.result.Magnitudo}\nkedalaman: ${anu.result.Kedalaman}\nwilayah: ${anu.result.Wilayah}`
mans.sendMessage(from, teks, text, {quoted: mek})
break
case 'leave':
if (!isOwner && !mek.key.fromMe) return reply('lo sapa bro?bukan owner mingir kontol')
if (!mek.key.fromMe) return
setTimeout( () => {
mans.groupLeave(from) 
}, 6000)
setTimeout( () => {
faketoko('Byee...')
}, 6000)
setTimeout( () => {
faketoko('1')
}, 5000)
setTimeout( () => {
faketoko('2')
}, 1000)
setTimeout( () => {
faketoko('3')
}, 0)
break
case 'wame':
          mans.updatePresence(from, Presence.composing)
          options = {
             text: `Link WhatsApp-Mu : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
             text1: `Link WhatsApp-Mu : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
              contextInfo: {
              mentionedJid: [sender]
                }
                  }
            mans.sendMessage(from, options, text, {quoted: mek})
           mans.sendMessage(from, text1, text, {quoted: mek})
           break
case 'caklontong':
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/caklontong?apikey=beta`)
   cak = `*${anu.result.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   mans.sendMessage(from, cak, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
   case 'tebakgambar':
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/tebakgambar?apikey=beta`)
   gambar = await getBuffer(anu.result.images)
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   mans.sendMessage(from, gambar, image, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
     case 'pubglogo':
     ct = body.slice(9)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     reply(`loading tot`)
     anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/game?text=${memek1}&text2=${memek2}&theme=pubg&apikey=beta`)
     buffer = await getBuffer(anu.result.url)
     mans.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
     case 'owner':
     reply(`wa.me/6285691724140\nhttps://wa.me/6285691724140`)
     break
case 'lirik':
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
lirikLagu(q).then((res) => {
let lirik = `Lirik Lagu ${q}

${res[0].result}
`
reply(lirik)
})
break
case 'donasi':
lelet = `hai mau donasi?bisa tf melalui gopay,dana,pulsa silahkan lihat di bawah\ngopay: 085691724140\ndana: 085691724140\npulsa: 085691724140`
mans.sendMessage(from, lelet, text, {quoted: mek, caption: lelet})
break
 if (budy.includes(`Hai`)) {
                    reply(`iyah ka`)
                }

                if (budy.includes(`Thanks`)) {
                    reply(`Sama Sama Kak😁`)
                }

                if (budy.includes(`Makasih`)) {
                    reply(`Sama Sama Kak😁`)
                }
                
                if (budy.includes(`@menu`)) {
                    const bot = fs.readFileSync('./assets/bot');
                    mans.sendMessage(from, bot, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                }
                if (budy.includes(`!menu`)) {
                    const bot = fs.readFileSync('./assets/bot');
                    mans.sendMessage(from, bot, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                }
                if (budy.includes(`/menu`)) {
                    const bot = fs.readFileSync('./assets/bot');
                    mans.sendMessage(from, bot, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                }
                if (budy.includes(`.menu`)) {
                    const bot = fs.readFileSync('./assets/bot');
                    mans.sendMessage(from, bot, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
                }
                if (body.startsWith(`${prefix}${command}`)) {


                }
                if (isGroup && !isCmd && isSimi && budy != undefined) {
                    console.log(budy)
                    muehe = await simih(budy)

                } else {
                    console.log(color('[ERROR]', 'red'), 'Unregistered Command from', color(sender.split('@')[0]))
                }
        }
    } catch (e) {
        console.log('Error : %s', color(e, 'red'))
    }
})