import fs from 'fs';
import path from 'path';

const rootDir = path.resolve(process.cwd(), 'tmp-js');

function updateFileImports(filePath) {
	let content = fs.readFileSync(filePath, 'utf8');
	// Replace relative imports ending with .ts or .tsx to .js
	content = content.replace(/(from\s+['"])((?:\.?\.\/|\.\.\/|\/)[^'"\n]*?)\.(ts|tsx)(['"])/g, (m, a, b, _ext, d) => `${a}${b}.js${d}`);
	fs.writeFileSync(filePath, content, 'utf8');
}

function walkAndFix(dir) {
	for (const entry of fs.readdirSync(dir)) {
		const fullPath = path.join(dir, entry);
		const stat = fs.statSync(fullPath);
		if (stat.isDirectory()) {
			walkAndFix(fullPath);
		} else if (/\.(js|jsx)$/.test(fullPath)) {
			updateFileImports(fullPath);
		}
	}
}

if (fs.existsSync(rootDir)) {
	walkAndFix(rootDir);
}


