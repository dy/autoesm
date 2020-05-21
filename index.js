import isModule from 'is-module'
import fs from 'fs'
import { fileURLToPath } from 'url'

export function getFormat(url, context, defaultGetFormat) {
  if (/^file:/.test(url)) url = fileURLToPath(url)
  let file = fs.readFileSync(url, {encoding: 'utf8'})
  if (isModule(file)) return {format: 'module'}
  let dflt = defaultGetFormat(url, context, defaultGetFormat)
  if (!dflt.format) dflt.format = 'commonjs'
  return dflt
}
