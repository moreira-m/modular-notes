const path = require('path');
const fs = require('fs');
const { client, fetchTree, fetchDocuments } = require('./sanity-client');
const { createConverter } = require('./markdown-converter');
const { resetDirectory, saveMarkdownFile } = require('./file-manager');
const { createDocumentStrategies } = require('./document-strategies');

async function runSync() {
  const docsPath = path.resolve(__dirname, '../../docs'); 
  const converter = createConverter(client);

  resetDirectory(docsPath);

  const treeDoc = await fetchTree();
  const allDocuments = await fetchDocuments();
  
  const docMap = allDocuments.reduce((acc, doc) => ({ ...acc, [doc._id]: doc }), {});

  const strategies = createDocumentStrategies(converter);

  function processNodes(nodes, currentPath) {
    if (!nodes || !Array.isArray(nodes)) return;

    nodes.forEach(node => {
      const refId = node.value?.reference?._ref || node.value?._ref;
      const document = docMap[refId];

      if (!document) return;

      const executeStrategy = strategies[document._type];

      if (executeStrategy) {
        const nextPath = executeStrategy(document, currentPath);

        if (node.children && node.children.length > 0) {
          const pathForChildren = nextPath || currentPath;
          processNodes(node.children, pathForChildren);
        }
      } else {
        console.warn(`[Aviso] Tipo não suportado: ${document._type}`);
      }
    });
  }

if (treeDoc && Array.isArray(treeDoc.tree)) {
    const nodeMap = {};
    const rootNodes = [];

    treeDoc.tree.forEach(node => {
      nodeMap[node._key] = { ...node, children: [] };
    });

    treeDoc.tree.forEach(node => {
      if (node.parent && nodeMap[node.parent]) {
        nodeMap[node.parent].children.push(nodeMap[node._key]);
      } else {
        rootNodes.push(nodeMap[node._key]);
      }
    });

    processNodes(rootNodes, docsPath);
  }

  if (fs.readdirSync(docsPath).length === 0) {
    console.warn('[Aviso] Árvore vazia. Criando arquivo de fallback.');
    const frontmatter = converter.buildFrontmatter('Bem-vindo');
    saveMarkdownFile(docsPath, 'Bem-vindo', frontmatter + 'Nenhuma nota sincronizada.');
  }

  console.log('Sincronização concluída com sucesso!');
}

runSync().catch(console.error);