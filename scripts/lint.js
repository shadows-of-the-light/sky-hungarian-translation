/**
 * @fileoverview Ez a kód a fájlok ellenőrzésére szolgál.
 */

const fs = require('fs');
const path = require('path');

// Get the latest game version. It's the biggest number in the translations folder.
const gameBuild = fs.readdirSync(path.join(__dirname, '..', 'translations')).sort((a, b) => parseInt(b) - parseInt(a))[0];

const stringsFile = path.join(__dirname, '..', 'translations', gameBuild, 'Localizable.strings');
const lines = fs.readFileSync(stringsFile, 'utf8').split('\n');

const patternKeys = /^(\/\*|("[a-zA-Z_0-9]+")).*/;
for (const line of lines) {
    if (!patternKeys.test(line) && line !== '') {
        console.error(`A ${stringsFile} fájlban a következő sor kulcsa nem megfelelő: ${lines.indexOf(line)}:${line}`);
        return;
    }
}

console.log('A fájlok ellenőrzése sikeresen lezajlott.');
