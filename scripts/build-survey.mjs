import {build} from 'esbuild';
await build({entryPoints:['src/survey.tsx'],outfile:'enquesta/survey.js',bundle:true,minify:true,format:'esm',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
