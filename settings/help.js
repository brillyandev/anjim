const fs = require('fs');
const surah = fs.readFileSync('./settings/surah.txt', {encoding: 'utf-8'});
let setting = JSON.parse(fs.readFileSync('./settings/setting.json'));
const prefix = setting.prefix
exports.surah = surah;

function help() {
    let hasil = `~ ~>  *AZ BOT Help*  <~ ~
-------------------------------------------------------------------
Ada masalah? laporkan masalah dengan :
~> *!bug report [deskripsi]*
-------------------------------------------------------------------
Nomor Owner AZ BOT!
~> *wa.me/6281342077268*
-------------------------------------------------------------------
*JAM AKTIF BOT*
JAM 12 MALAM - JAM 9 PAGI
*GROUP HARUS MELEBIHI 25 MEMBER ATAU BOT KELUAR*
*JANGAN COBA2 TELEPON BOT INI ATAU NOMOR ANDA DIBLOK SERVER*
*NOMOR YANG DI BLOK TIDAK BISA DI UNBLOK KEMBALI!*
-------------------------------------------------------------------
Syarat dan ketentuan pemakaian BOT
~> *${prefix}mnt*
-------------------------------------------------------------------
Donasi agar bot ini terus aktif dan terupdate
~> *#donasi*
-------------------------------------------------------------------
Cek kuota limit media anda :
~> *${prefix}limit*
-------------------------------------------------------------------
_*[WARNING]*_
-------------------------------------------------------------------
*GUNAKAN BOT INI DENGAN BIJAK, JIKA ANDA TIDAK MAU PATUH JANGAN PAKAI BOT INI! BATAS PERINTAH BOT PER-USER ADALAH 50 PERHARI DAN DI RESET SETIAP HARINYA, BOT JUGA TIDAK AKAN MEMBALAS JIKA PERINTAH TIDAK SPESIFIK ATAU ANDA MELEBIHI LIMIT MEDIA*
-------------------------------------------------------------------
~> *${prefix}sticker* :
kirim gambar dengan caption atau balas gambar yang sudah dikirim.\n
~> *${prefix}tiktok [url]* :
mengunduh video tiktok dengan url\n
~> *${prefix}tw [url]* : 
mengunduh media twitter dengan url\n
~> *${prefix}fb [url]* : 
mengunduh media facebook dengan url\n
~> *${prefix}ig [url]* : 
mengunduh media instagram dengan url\n
~> *${prefix}yt [url]* : 
mengunduh video youtube dengan url\n
~> *${prefix}ytmp3 [url]* : 
convert video ke audio youtube dengan url\n
~> *${prefix}likee [url]* : 
mengunduh media sosmed likee dengan url\n
~> *${prefix}quoteit [teks]* : 
kirim gambar quote random dengan custom teks\n
~> *${prefix}kucing* : 
kirim gambar random kucing\n
~> *${prefix}speed* : 
mengetahui kecepatan server bot\n
~> *${prefix}surah [no surah]* : 
kirim informasi surah al-quran\n
~> *${prefix}surah [no surah] ayat [args]* : 
kirim arab,latin,dan arti surah menurut 
[args] adalah :
*1-7*    ~> Ayat 1 sampai 7
*1,2,3* ~> Ayat pilihan 1,2,3
*10*     ~> Ayat ke-10\n
~> *${prefix}list surah* :
menampilkan list nomor surah\n
~> *${prefix}quote* : 
random quote bahasa indonesia\n
~> *${prefix}quran* : 
ayat random alquran\n
~> *${prefix}corona* :
kondisi pandemi terkini dunia,dan indonesia\n
~> *${prefix}corona prov [nama provinsi]* :
kondisi pandemi bedasarkan provinsi\n
-------------------------------------------------------------------
perintah halaman 2 ~> *${prefix}help 2*`
    return hasil;
}
exports.help = help();
function help2() {
    return `~ ~>  *AZ BOT Help*  <~ ~
-------------------------------------------------------------------
Ada masalah? laporkan masalah dengan :
~> *!bug report [deskripsi]*
-------------------------------------------------------------------
*JAM AKTIF BOT*
JAM 12 MALAM - JAM 9 PAGI
*GROUP HARUS MELEBIHI 25 MEMBER ATAU BOT KELUAR*
*JANGAN COBA2 TELEPON BOT INI ATAU NOMOR ANDA DIBLOK SERVER*
*NOMOR YANG DI BLOK TIDAK BISA DI UNBLOK KEMBALI!*
-------------------------------------------------------------------
Syarat dan ketentuan pemakaian BOT
~> *${prefix}mnt*
-------------------------------------------------------------------
Donasi agar bot ini terus aktif dan terupdate
~> *#donasi*
-------------------------------------------------------------------
Cek kuota limit media anda :
~> *${prefix}limit*
-------------------------------------------------------------------
_*[WARNING]*_
-------------------------------------------------------------------
*GUNAKAN BOT INI DENGAN BIJAK, JIKA ANDA TIDAK MAU PATUH JANGAN PAKAI BOT INI! BATAS PERINTAH BOT PER-USER ADALAH 50 PERHARI DAN DI RESET SETIAP HARINYA, BOT JUGA TIDAK AKAN MEMBALAS JIKA PERINTAH TIDAK SPESIFIK ATAU ANDA MELEBIHI LIMIT MEDIA*
-------------------------------------------------------------------
~> *${prefix}leave* :
keluar dari group ini\n
~> *${prefix}google [url]* :
mencari google pada hasil pertama\n
~> *${prefix}bmkg* :
informasi gempa > 5.1sr terbaru\n
~> *${prefix}ipcheck [ip]* :
cek geo ip [TIDAK AKURAT]\n
~> *${prefix}translate [kode bahasa] [teks]* :
translate dari kode bahasa ke indonesia
*${prefix}bahasa* untuk melihat daftar kodebahasa\n
~> *${prefix}1cak* :
meme random dari 1cak\n
~> *${prefix}qrcode [teks]* :
mengubah teks ke qrcode\n
~> *${prefix}igstalk [username]* :
stalk instagram doi\n
~> *${prefix}gtts [teks]* :
mengubah teks ke suara\n
~> *${prefix}lang [kode bahasa] [teks]* :
mengubah teks ke suara bahasa lain\n
~> *${prefix}cekresi [no resi] [kurir]* :
cek resi instan, list kurir :
jne,pos,jnt,sicepat,tiki,anteraja,wahana,\nninja,lion,lek\n
~> *${prefix}nhder [kode nuklir]* :
download komik nhentai dalam bentuk Zip\n
~> *${prefix}wanime* :
kirim wallpaper random anime \n[ZONK = gambar MESUM]\n
~> *${prefix}waifu* :
kirim gambar waifu random \n[ZONK = gambar MESUM]\n
~> *${prefix}wait* :
what anime is this (kirim gambar dengan caption)\n
~> *${prefix}wallpaper* :
kirim gambar random walppaper\n
~> *${prefix}join [link group]* :
join ke group dengan link\n
~> *${prefix}compress* :
kompress gambar yang anda kirimkan\n
~> *${prefix}qnime* :
quote anime random\n
~> *${prefix}qnime anime naruto* :
quotes dari anime naruto\n
~> *${prefix}qnime char luffy* :
quotes dari char luffy
-------------------------------------------------------------------`
}
exports.help2 = help2()
function license(){
    return `Syarat dan Ketentuan AZ BOT\n
1. Apapun yang anda perintah ke bot ini, KAMI TIDAK BERTANGGUNG JAWAB
2. Segala syarat2 legalitas di serahkan ke Developer BOT
3. Kami tidak menyimpan data anda di server kami
4. Jika anda menemukan Bug/Error, harap report dengan ${prefix}bug report
5. Bot ini adalah Open Source, jadi developer tidak mengambil keuntungan dari pengguna

Terimakasih :D`;
}
exports.license = license()
function donate (){
    return `jika bot ini dirasa bermanfaat 
marilah berdonasi agar bot bisa terus
aktif dan update.\n\nSAWERIA: https://saweria.co/daenfhunter\nOVO: 081342077268\nDANA: 081342077268\n\nwa.me/6281342077268
    `
}
exports.donasi = donate()
function sensor() {
    //   Kata Kata yang terlalu kasar
    let arrWord = ['tuhan','dewa','yesus','krisna','allah','atheis','agama','buddha','biksu','ulama','ustadz','habib','nabi','rasul','god','theis','pki','komunis','roh kudus','kitab','alquran'];
    return arrWord;
}
exports.sensor = sensor();
function bahasa() {
    return `*List kode Bahasa*
	Code       Bahasa
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `;
}
exports.bahasa = bahasa();
function chromArgs () {
    let hasil = ['--disable-2d-canvas-clip-aa',
    '--disable-2d-canvas-image-chromium',
    '--disable-3d-apis',
    '--disable-accelerated-2d-canvas',
    '--disable-accelerated-jpeg-decoding',
    '--disable-accelerated-mjpeg-decode',
    '--disable-accelerated-video-decode',
    '--disable-app-list-dismiss-on-blur',
    '--disable-audio-output',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-breakpad',
    '--disable-canvas-aa',
    '--disable-client-side-phishing-detection',
    '--disable-component-extensions-with-background-pages',
    '--disable-composited-antialiasing',
    '--disable-default-apps',
    '--disable-dev-shm-usage',
    '--disable-extensions',
    '--disable-features=TranslateUI,BlinkGenPropertyTrees',
    '--disable-field-trial-config',
    '--disable-fine-grained-time-zone-detection',
    '--disable-geolocation',
    '--disable-gl-extensions',
    '--disable-gpu',
    '--disable-gpu-early-init',
    '--disable-gpu-sandbox',
    '--disable-gpu-watchdog',
    '--disable-histogram-customizer',
    '--disable-in-process-stack-traces',
    '--disable-infobars',
    '--disable-ipc-flooding-protection',
    '--disable-notifications',
    '--disable-renderer-backgrounding',
    '--disable-session-crashed-bubble',
    '--disable-setuid-sandbox',
    '--disable-site-isolation-trials',
    '--disable-software-rasterizer',
    '--disable-sync',
    '--disable-threaded-animation',
    '--disable-threaded-scrolling',
    '--disable-translate',
    '--disable-webgl',
    '--disable-webgl2',
    '--enable-features=NetworkService',
    '--force-color-profile=srgb',
    '--headless',
    '--hide-scrollbars',
    '--ignore-certifcate-errors',
    '--ignore-certifcate-errors-spki-list',
    '--ignore-certificate-errors',
    '--ignore-certificate-errors-spki-list',
    '--ignore-gpu-blacklist',
    '--ignore-ssl-errors',
    '--log-level=3',
    '--metrics-recording-only',
    '--mute-audio',
    '--no-crash-upload',
    '--no-default-browser-check',
    '--no-experiments',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote',
    '--renderer-process-limit=1',
    '--safebrowsing-disable-auto-update',
    '--silent-debugger-extension-api',
    '--single-process',
    '--unhandled-rejections=strict',
    '--window-position=0,0']
    return hasil
}
exports.chromArgs = chromArgs()
function commandArray() {
    let hasil = [prefix+'menu', prefix+'help', prefix+'sticker', prefix+'stiker', prefix+'creator','#bot restart',prefix+'tiktok',prefix+'translate',prefix+'qrcode',prefix+'ipcheck',prefix+'leave','#bot block','#bot unblock',
prefix+'ig',prefix+'instagram',prefix+'twt',prefix+'twitter', prefix+'halo', prefix+'about', prefix+'speed',prefix+'ping', prefix+'fb',prefix+'facebook',prefix+'yt',prefix+'gtts',prefix+'lang','bot',prefix+'qnime',
prefix+'youtube',prefix+'ytmp3',prefix+'waifu',prefix+'Waifu',prefix+'kucing',prefix+'neko',prefix+'wallpaper',prefix+'bmkg',prefix+'1cak',prefix+'cekresi',prefix+'wait',prefix+'bahasa',prefix+'quoteit','#bot clearall',
prefix+'wanime',prefix+'corona',prefix+'nhder',prefix+'anime',prefix+'quote',prefix+'likee',prefix+'like',prefix+'mnt',prefix+'google',prefix+'igstalk',prefix+'quran',prefix+'surah',prefix+'list surah',prefix+'ban',prefix+'unban',
prefix+'banchat on',prefix+'banchat off','#mtc start','#mtc stop','#bc','Assalamualaikum',"Assalamu'alaikum",'Samlikum','#donasi',prefix+'join',prefix+'limit',prefix+'help 2',prefix+'menu 2',prefix+'bug report']
    return hasil
}
exports.commandArray = commandArray()