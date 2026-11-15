const fs = require('fs');
const s = fs.readFileSync('C:/Users/saiph/corevilt-technologies/public/assets/index-CrvfYiHn.js', 'utf8');
const idx = s.indexOf('wn.map');
console.log("=== WN.MAP ===");
console.log(s.substring(idx - 200, idx + 1200));
