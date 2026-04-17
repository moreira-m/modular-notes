import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { codeInput } from '@sanity/code-input'
import { hierarchicalDocumentList, hierarchyTree } from '@sanity/hierarchical-document-list'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'modular-notes',

  projectId: '9534zgie',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: myStructure,
    }), 
    visionTool(), 
    codeInput(),
    hierarchicalDocumentList()
  ],

  schema: {
    types: [
      ...schemaTypes,
      hierarchyTree
    ],
  },
})