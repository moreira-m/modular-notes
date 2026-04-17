// 1. Importando a função com o nome correto exigido pela biblioteca
const { portableTextToMarkdown } = require('@portabletext/markdown');
const { createImageUrlBuilder } = require('@sanity/image-url');

function createConverter(sanityClient) {
  const builder = createImageUrlBuilder(sanityClient);

  const portableTextComponents = {
    types: {
      image: ({ value }) => {
        const imageUrl = builder.image(value).url();
        const altText = value.alt || 'Imagem do Sanity';
        return `![${altText}](${imageUrl})`;
      },
    },
  };

  return {
    convertToMarkdown: (body) => body ? portableTextToMarkdown(body, { components: portableTextComponents }) : '',
    buildFrontmatter: (title) => `---
title: ${title}
---
`
  };
}

module.exports = { createConverter };