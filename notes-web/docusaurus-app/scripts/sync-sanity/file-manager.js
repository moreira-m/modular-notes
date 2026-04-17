const fs = require('fs');
const path = require('path');

function resetDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
  fs.mkdirSync(dirPath);
}

function createFolder(basePath, folderName) {
  const formattedName = folderName.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
  const targetPath = path.join(basePath, formattedName);
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
  }
  return targetPath;
}

function saveMarkdownFile(basePath, title, content) {
  const fileName = `${title.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase()}.md`;
  const filePath = path.join(basePath, fileName);
  fs.writeFileSync(filePath, content);
}

module.exports = { resetDirectory, createFolder, saveMarkdownFile };