import { readFile, mkdir, writeFile } from 'node:fs/promises'
const source = await readFile(new URL('../index.html', import.meta.url), 'utf8')
const alias = source.replace('<head>', '<head>\n    <base href="/" />')
  .replace(/(src|href)="(?![a-z]+:|\/|#)([^"<>]+)"/gi, '$1="/$2"')
  .replace(/url\((['"]?)(?![a-z]+:|\/|#)([^)'"\s]+)\1\)/gi, 'url($1/$2$1)')
await mkdir(new URL('../pages/', import.meta.url), { recursive: true })
await writeFile(new URL('../pages/index.html', import.meta.url), alias)
