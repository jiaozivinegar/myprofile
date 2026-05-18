const fs = require('fs');
const path = require('path');

const dist = 'dist';
if (!fs.existsSync(dist)) fs.mkdirSync(dist);

const files = ['index.html', 'portfolio.html'];
files.forEach(f => {
  if (fs.existsSync(f)) {
    fs.copyFileSync(f, path.join(dist, f));
  }
});

const dirs = ['images', 'pdf_assets'];
dirs.forEach(d => {
  if (fs.existsSync(d)) {
    fs.cpSync(d, path.join(dist, d), { recursive: true, filter: (src) => !src.includes('node_modules') && !src.includes('.git') && !src.includes('dist') });
  }
});

console.log('Build complete');
