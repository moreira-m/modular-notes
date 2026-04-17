const { createFolder, saveMarkdownFile } = require('./file-manager');

function createDocumentStrategies(converter) {
  return {
    'folder': (document, currentPath) => {
      // Cria a pasta e RETORNA o novo caminho para ser usado pelos filhos
      return createFolder(currentPath, document.title);
    },

    'notes': (document, currentPath) => {
      // Cria o arquivo e retorna null, pois notas não abrigam outras notas no sistema de arquivos
      const markdownBody = converter.convertToMarkdown(document.body);
      const frontmatter = converter.buildFrontmatter(document.title);
      saveMarkdownFile(currentPath, document.title, frontmatter + markdownBody);
      return null;
    }
  };
}

module.exports = { createDocumentStrategies };