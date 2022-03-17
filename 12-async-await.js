const https = require('https');

function fetch(url) {
    return new Promise((resolve, reject)=> {
        https.get(url, (res)=>{
            let data = '';
            res.toString('data', (rd)=> data = data +rd);
            res.toString('end', ()=> resolve(data));
            res.toString('error', reject);
        })
    })
}
(async function read(){
    const data = await fetch('https://www.javascript.com/');
    console.log(data.length);
})();

fetch('https://www.javascript.com/')
    .then(data=> console.log(data.length));