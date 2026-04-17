---
title: Plataforma Digital de Pool de Créditos de Logística Reversa
---
## Introduçao

Cooperativas de triagem, em sua grande maioria, são entidades muito pobres que vivem unicamente da venda dos materiais reciclados. Atualmente existem também sistemas de compensação do lixo sólido descartado através do crédito de reciclagem, onde empresas geradoras de resíduos sólidos precisam reciclar 30% do lixo produzido.

Entidades gestoras fazem a auditoria das notas fiscais geradas pelas cooperativas e as transformam em créditos de reciclagem válidos. Acontece que o processo manual e demorado faz com que entidades gestoras priorizem cooperativas que reciclam grandes quantidades, já que precisam garantir a venda dos créditos para grandes players, deixando cooperativas menores fora desse sistema.

Solução: desenvolvimento de um pool de créditos no qual as cooperativas fazem o envio das notas fiscais no sistema que audita automaticamente. A partir de agora as entidades gestoras não precisam do processo complexo, elas coletam NFs já auditadas e transformadas em créditos. Quando uma empresa faz a compra, ela "coleta" diversas notas fiscais juntas para suprir sua necessidade e nesse meio estão NFs de cooperativas menores. Em teoria, faz a junção de várias notas menores em um grande certificado de crédito.

- Obs: Por mais que as grandes cooperativas tenham maior parte do lixo reciclável, esse sistema beneficia também pequenas cooperativas de acordo com seu volume de lixo reciclado, que já pode ser incluso como uma renda extra (mesmo processo de produção, porém com renda de créditos).



## Glossário

- **Catador de Materiais Recicláveis (Individual/MEI):** Profissional autônomo, na base da cadeia, responsável pela coleta, seleção e transporte primário dos materiais recicláveis.
- **Cooperativas e Associações de Catadores (Operadores Logísticos):** São organizações formais que agregam os catadores e atuam como operadoras logísticas. Elas consolidam o volume do lixo reciclável e são as responsáveis originais por emitir a Nota Fiscal Eletrônica (NF-e) de venda do material físico.
- **Empresas poluidoras (Destinador Final):** São as pessoas jurídicas que produzem ou inserem embalagens e produtos no mercado. Pelo princípio do poluidor-pagador da PNRS, elas têm a responsabilidade legal de comprovar a logística reversa (recuperação) do passivo que geraram.
- **Indústria Recicladora (Destinador Final):** É a indústria que compra o resíduo físico das cooperativas e atravessadores para transformá-lo em matéria-prima. É o único ator capaz de emitir o Certificado de Destinação Final (CDF) dentro do sistema do governo (SINIR/SIGOR), atestando ambientalmente que o material foi processado e não foi para um aterro sanitário.
- **Entidade Gestora:** É uma pessoa jurídica instituída para estruturar, implementar e gerenciar o sistema de logística reversa de forma coletiva, representando um conjunto de empresas e indústrias. Tem a competência legal de emitir oficialmente os certificados de crédito (CCRLR, CERE, CCMF). No sistema, ela atua no painel B2B buscando e comprando o lastro validado de notas para comprovar as metas das empresas que ela representa.
- **Verificador de Resultado:** É uma pessoa jurídica de direito privado, totalmente independente e homologada pelo Ministério do Meio Ambiente. A função exclusiva desse verificador é receber os dados da NF-e e do CDF, validar eletronicamente na Receita Federal e atestar a "não colisão", ou seja, auditar para garantir que a mesma nota fiscal não está sendo usada duas vezes para gerar crédito duplicado.



## Objetivo Principal

O objetivo principal do sistema é inserir outra forma de renda para a base da cadeia (cooperativas e catadores).



## Objetivos de Desenvolvimento Sustentável Cumpridos

Os Objetivos de Desenvolvimento Sustentáveis (ODS) da ONU são métricas globais ideal para justificar o impacto de projetos tecnológicos voltados ao meio ambiente e a sociedade.

O projeto atende diretamente esses 3 ODS principais:

```json
{
  "_key": "47ee31c3b835",
  "_type": "imageWithMeta",
  "alt": "Trabalho decente e crescimento economico",
  "asset": {
    "_ref": "image-68bd58dd452853a67b8b03b90ef4d2d223594659-720x720-svg",
    "_type": "reference"
  },
  "caption": "Trabalho Decente e Crescimento Economico"
}
```

```json
{
  "_key": "ed7ecd25ee3e",
  "_type": "imageWithMeta",
  "alt": "Cidades e Comunidades Sustentáveis",
  "asset": {
    "_ref": "image-0860aa3fe5292d5a92700d8f301fccbc58c20dc6-720x720-svg",
    "_type": "reference"
  },
  "caption": "Cidades e Comunidades Sustentáveis"
}
```

```json
{
  "_key": "81c38fd12d32",
  "_type": "imageWithMeta",
  "alt": "Consumo e Produção Responsáveis",
  "asset": {
    "_ref": "image-7e78049af88b3983d6b340f872858d1aa256f502-720x720-svg",
    "_type": "reference"
  },
  "caption": "Consumo e Produção Responsáveis"
}
```



## Fluxos do Sistema

1. Cooperativa acessa a plataforma para fazer o upload de um XML da nota fiscal do lixo que foi triado e vendido. Nessa etapa vai ser preciso captar algumas informações importantes como:
   - CNPJ da cooperativa
   - Número da Nota Fiscal
   - Tipo de Material
   - Pesagem do Material
2. A Nota Fiscal enviada pela cooperativa é armazenada no sistema e persiste com status de espera até que a indústria recicladora emita o CDF. Apenas com o cruzamento da NF-e com o CDF é possível gerar um crédito de reciclagem. (_Estudar como é feito esse 'link' entre NF-e e CDF. Existe alguma numeração que identifica um ao outro?_)
3. Enviar a junção NF-e + CDF para um verificador de resultados. Ele fará a análise e mostrará se está apto a gerar um crédito de reciclagem a partir desses documentos.
4. Tendo os documentos validados pelo verificador de resultados, o crédito fica disponível na plataforma para que empresas e entidades gestoras possam acessar e solicitar a compra. O crédito fica à disposição na plataforma, sendo uma junção de muitas notas fiscais que compõem um crédito completo.
5. Efetuada a compra, é analisado o valor pago, quantidade de notas fiscais que compõem o crédito e a pesagem de cada uma. O valor é distribuído proporcionalmente ao peso de cada nota que compõe o crédito. (_É necessário ter o rastreio da nota fiscal atrelada ao CNPJ gerador durante todo o fluxo_)