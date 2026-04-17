const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '9534zgie',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-06',
});

async function fetchTree() {
  return client.fetch(`*[_type == "hierarchy.tree" && _id == "main-tree"][0]`);
}

async function fetchDocuments() {
  return client.fetch(`*[_type in ["notes", "folder"]]`);
}

module.exports = { client, fetchTree, fetchDocuments };