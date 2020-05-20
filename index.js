import isModule from 'is-module'
import fs from 'fs'

export function getFormat(url, context, defaultGetFormat) {
  if (/^file:/.test(url)) url = url.slice(8)
  let file = fs.readFileSync(url, {encoding: 'utf8'})
  if (isModule(file)) return {format: 'module'}
  let dflt = defaultGetFormat(url, context, defaultGetFormat)
  if (!dflt.format) dflt.format = 'commonjs'
  return dflt
}
