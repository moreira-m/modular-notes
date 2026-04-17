export default {
    name: 'notes',
    type: 'document',
    fields: [
        { name: 'title', type: 'string', title: 'Título' },
        {
            name: 'parentFolder',
            type: 'reference',
            title: 'Pasta',
            to: [{ type: 'folder' }],
            validation: Rule => Rule.required()
        },
        { name: 'body', type: 'blockContent' }
    ]
}