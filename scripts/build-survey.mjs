import {build} from 'esbuild';
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
await build({entryPoints:['src/survey.tsx'],outfile:'enquesta/survey.js',bundle:true,minify:true,format:'esm',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
const page='enquesta/index.html';
let html=await readFile(page,'utf8');
for(const file of ['survey.js','survey.css','config.js']){
 const digest=createHash('sha256').update(await readFile('enquesta/'+file)).digest('hex').slice(0,12);
 html=html.replace(new RegExp('(["\'])'+file.replaceAll('.','\\.')+'(?:\\?v=[^"\']*)?(["\'])','g'),'$1'+file+'?v='+digest+'$2');
}
await writeFile(page,html);
