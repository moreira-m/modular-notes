import { StructureResolver } from 'sanity/structure'
import { createDeskHierarchy } from '@sanity/hierarchical-document-list'

export const myStructure: StructureResolver = (S, context) =>
  S.list()
    .title('Explorador de Notas')
    .items([
      // A função do plugin cria o listItem e o documento com a UI customizada automaticamente
      createDeskHierarchy({
        title: 'Estrutura de Conteúdo',
        documentId: 'main-tree',
        referenceTo: ['notes', 'folder'], // Defina quais documentos podem entrar na árvore
        S,
        context,
      }),

      S.divider(),

      S.listItem()
        .title('Todas as Notas')
        .child(S.documentTypeList('notes')),

      S.listItem()
        .title('Gerenciar Pastas')
        .child(S.documentTypeList('folder')),
    ])