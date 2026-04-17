export default {
    name: 'imageWithMeta',
    type: 'image',
    title: 'Imagem',
    options: { hotspot: true },
    fields: [
        { name: 'alt', type: 'string', title: 'Texto Alternativo' },
        { name: 'caption', type: 'string', title: 'Legenda' }
    ]
}