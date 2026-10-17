import { build } from 'esbuild'
await build({entryPoints:['src/pages-footer.tsx'],outfile:'pages-footer.js',bundle:true,minify:true,format:'esm',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}})
