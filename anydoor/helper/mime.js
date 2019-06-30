const path  = require('path')
const mimeTypes = {
    'png':	'image/png',
    'jpg\jpeg\jpg':	'image/ipeg',
    'bmp\dib':	'image/bmp',
    'gif':	'image/gif',
    'mp3':	'audio/mpeg',
    'mp4\mpg4\m4v\mp4v':	'video/mp4',
    'js':	'application/javascript',
    'pdf':	'application/pdf',
    'text\txt':	'text/plan',
    'json':	'application/json',
    'xml':	'text/xml',
}
module.exports = (filePath) => {
    let ext = path.extname(filePath).split('.').pop().toLowerCase();
    if (!ext) {
        ext = filePath;
    }
    return mimeTypes[ext] || mimeTypes['ext'];
}