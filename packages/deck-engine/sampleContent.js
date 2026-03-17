export function markSampleContent(value, meta = {}) {
  return Object.assign(value, {
    __sample: true,
    __sampleSource: '@deckio/deck-engine',
    __samplePolicy: 'visual-only-not-user-context',
    ...meta,
  })
}