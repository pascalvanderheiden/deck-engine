import { describe, it, expect } from 'vitest'
import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkgRoot = join(__dirname, '..')

describe('deck-engine package files', () => {
  it('includes sampleContent.js in the published file list', async () => {
    const pkg = (await import(join(pkgRoot, 'package.json'), { with: { type: 'json' } })).default
    expect(pkg.files).toContain('sampleContent.js')
    expect(existsSync(join(pkgRoot, 'sampleContent.js'))).toBe(true)
  })
})