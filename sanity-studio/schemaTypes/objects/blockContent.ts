export default {
    name: 'blockContent',
    type: 'array',
    title: 'Conteúdo',
    of: [
        { type: 'block' },
        { type: 'imageWithMeta' },
        { type: 'codeSnippet' }
    ]
}