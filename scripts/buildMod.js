/**
 * @fileoverview Ez a kód egy Sky Mods Manager-ben használható mod-ot készít a fordításból.
 */

const fs = require('fs');
const path = require('path');

const modName = 'Magyar nyelv';
const gameVersion = fs.readdirSync(path.join(__dirname, '..', 'translations')).sort((a, b) => parseInt(b) - parseInt(a))[0];

const modFolder = path.join(__dirname, `../build/${modName}`);
const metaFile = path.join(modFolder, 'meta.json');

const file1 = path.join(__dirname, '..', 'translations', gameVersion, 'Localizable.strings');
const file2 = path.join(__dirname, '..', 'translations', gameVersion, 'original.strings');

const file1Lines = fs.readFileSync(file1, 'utf8').split('\n');
const file2Lines = fs.readFileSync(file2, 'utf8').split('\n');

const differentLinesCount = file1Lines.filter((line, index) => line !== file2Lines[index]).length;

const meta = {
    "modVersion": `${gameVersion.split(' ')[0]}.${differentLinesCount}`,
    "author": "Magyar Sky közösség",
    "description": "Magyar fordítás Sky-hoz.",
    "gameVersion": gameVersion,
    "config": {
        "replaceAllLanguages": true
    }
}

function mkdirsSync(dirPath) {
    const dirs = dirPath.split(path.sep);
    let currentDir = dirs[0];
    for (let i = 1; i < dirs.length; i++) {
        currentDir = path.join(currentDir, dirs[i]);
        if (!fs.existsSync(currentDir)) {
            fs.mkdirSync(currentDir);
        }
    }
}

if (fs.existsSync(modFolder)) {
    fs.rmSync(modFolder, { recursive: true });
}

mkdirsSync(modFolder);
fs.writeFileSync(metaFile, JSON.stringify(meta, null, 4));

const targetLanguageFile = path.join(modFolder, 'data', 'Strings', 'Base.lproj', 'Localizable.strings');
mkdirsSync(path.join(modFolder, 'data', 'Strings', 'Base.lproj'));
fs.copyFileSync(file1, targetLanguageFile);
