import React from 'react';

// 1. Renderizador Visual para a Cor da Letra
const TextColorRender = (props: any) => {
    const hexColor = props.value?.colorValue?.hex || 'inherit';
    
    return React.createElement(
        'span', 
        { 
            className: 'custom-text-color-wrapper',
            style: { color: hexColor } 
        }, 
        // Injeta CSS forçando a remoção do fundo escuro do Sanity neste trecho
        React.createElement('style', null, `
            .custom-text-color-wrapper * {
                background-color: transparent !important;
            }
        `),
        props.renderDefault(props)
    );
};

// 2. Renderizador Visual para o Marca Texto
const HighlightColorRender = (props: any) => {
    const hexBgColor = props.value?.colorValue?.hex || '#FFF59D';
    
    return React.createElement(
        'span', 
        { 
            className: 'custom-highlight-wrapper',
            style: { 
                backgroundColor: hexBgColor, 
                color: 'inherit',
                padding: '0 2px',
                borderRadius: '3px'
            } 
        }, 
        // Injeta CSS forçando os elementos filhos (do Sanity) a ficarem transparentes
        React.createElement('style', null, `
            .custom-highlight-wrapper * {
                background-color: transparent !important;
            }
        `),
        props.renderDefault(props)
    );
};

export default {
    name: 'blockContent',
    type: 'array',
    title: 'Conteúdo',
    of: [
        { 
            type: 'block',
            marks: {
                decorators: [
                    { title: 'Negrito', value: 'strong' },
                    { title: 'Itálico', value: 'em' },
                    { title: 'Sublinhado', value: 'underline' },
                    { title: 'Código inline', value: 'code' }
                ],
                annotations: [
                    {
                        name: 'textColor',
                        type: 'object',
                        title: 'Cor do Texto',
                        icon: () => '🎨',
                        components: { annotation: TextColorRender },
                        fields: [
                            {
                                name: 'colorValue',
                                type: 'color',
                                title: 'Cor da Letra',
                                options: {
                                    disableAlpha: true,
                                    colorList: [
                                        '#E53935', '#D81B60', '#8E24AA', '#3949AB',
                                        '#1E88E5', '#00897B', '#43A047', '#FFB300',
                                        '#FB8C00', '#6D4C41', '#757575', '#000000',
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        name: 'highlightColor',
                        type: 'object',
                        title: 'Marca Texto',
                        icon: () => '🖍️',
                        components: { annotation: HighlightColorRender },
                        fields: [
                            {
                                name: 'colorValue',
                                type: 'color',
                                title: 'Cor de Fundo',
                                options: {
                                    disableAlpha: true,
                                    colorList: [
                                        '#FFF59D', '#A5D6A7', '#90CAF9', '#CE93D8', '#FFAB91', '#EEEEEE'
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'Link',
                                name: 'href',
                                type: 'url',
                            }
                        ]
                    }
                ]
            }
        },
        { type: 'imageWithMeta' },
        { type: 'codeSnippet' }
    ]
}