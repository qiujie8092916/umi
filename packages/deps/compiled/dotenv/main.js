module.exports=(()=>{var r={437:(r,n,t)=>{const c=t(747);const s=t(622);function log(r){console.log(`[dotenv][DEBUG] ${r}`)}const e="\n";const o=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;const f=/\\n/g;const p=/\n|\r|\r\n/;function parse(r,n){const t=Boolean(n&&n.debug);const c={};r.toString().split(p).forEach(function(r,n){const s=r.match(o);if(s!=null){const r=s[1];let n=s[2]||"";const t=n.length-1;const o=n[0]==='"'&&n[t]==='"';const p=n[0]==="'"&&n[t]==="'";if(p||o){n=n.substring(1,t);if(o){n=n.replace(f,e)}}else{n=n.trim()}c[r]=n}else if(t){log(`did not match key and value when parsing line ${n+1}: ${r}`)}});return c}function config(r){let n=s.resolve(process.cwd(),".env");let t="utf8";let e=false;if(r){if(r.path!=null){n=r.path}if(r.encoding!=null){t=r.encoding}if(r.debug!=null){e=true}}try{const r=parse(c.readFileSync(n,{encoding:t}),{debug:e});Object.keys(r).forEach(function(n){if(!Object.prototype.hasOwnProperty.call(process.env,n)){process.env[n]=r[n]}else if(e){log(`"${n}" is already defined in \`process.env\` and will not be overwritten`)}});return{parsed:r}}catch(r){return{error:r}}}r.exports.config=config;r.exports.parse=parse},747:r=>{"use strict";r.exports=require("fs")},622:r=>{"use strict";r.exports=require("path")}};var n={};function __nccwpck_require__(t){if(n[t]){return n[t].exports}var c=n[t]={exports:{}};var s=true;try{r[t](c,c.exports,__nccwpck_require__);s=false}finally{if(s)delete n[t]}return c.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(437)})();