import isModule from 'is-module'
import fs from 'fs'
import { fileURLToPath } from 'url'

export function getFormat(url, context, defaultGetFormat) {
  let path = fileURLToPath(url)
  let file = fs.readFileSync(path, {encoding: 'utf8'})
  if (isModule(file)) return {format: 'module'}
  let dflt = defaultGetFormat(path, context, defaultGetFormat)
  if (!dflt.format) dflt.format = 'commonjs'
  return dflt
}
