/**
 * @fileoverview Ez a kód frissíti a magyar nyelv fájlt egy újabb játék verzióra.
 * A kód végignézi a nyelvfájlokat és a régi verzióban lévő szövegeket átmásolja
 * az új verzióba úgy, hogy az újonnan bekerült szövegeket is hozzáadja.
 * A változásokról egy todo.md fájl készül az új verzió mappájába.
 */

//#region Paraméterek

const sourceVersion = '237954';
const targetVersion = '313329';

//#endregion

const fs = require('fs');
const path = require('path');

const sourceOriginalFile = path.join(__dirname, '..', 'translations', sourceVersion, 'original.strings');
const sourceLocalizableFile = path.join(__dirname, '..', 'translations', sourceVersion, 'Localizable.strings');
const targetOriginalFile = path.join(__dirname, '..', 'translations', targetVersion, 'original.strings');
const targetLocalizableFile = path.join(__dirname, '..', 'translations', targetVersion, 'Localizable.strings');

const sourceOriginalLines = fs.readFileSync(sourceOriginalFile, 'utf8').split('\n');
const sourceLocalizableLines = fs.readFileSync(sourceLocalizableFile, 'utf8').split('\n');
const targetOriginalLines = fs.readFileSync(targetOriginalFile, 'utf8').split('\n');

function getKey(line) {
    return line.split('=')[0].trim();
}

var newKeys = [];
var updatedTexts = [];

for (let i = 0; i < targetOriginalLines.length; i++) {
    const targetOriginalLine = targetOriginalLines[i];
    const targetOriginalKey = getKey(targetOriginalLine);
    
    const sourceLocalizableLine = sourceLocalizableLines.find(s => getKey(s) === targetOriginalKey);
    if (sourceLocalizableLine) {
        // String translated in source version
        fs.appendFileSync(targetLocalizableFile, sourceLocalizableLine + '\n');
        // Check if the english translation changed
        const sourceOriginalLine = sourceOriginalLines.find(s => getKey(s) === targetOriginalKey);
        if (sourceOriginalLine && sourceOriginalLine !== targetOriginalLine) {
            // English translation changed
            updatedTexts.push({
                key: targetOriginalKey,
                oldText: sourceOriginalLine.split('=')[1].trim(),
                newText: targetOriginalLine.split('=')[1].trim(),
            });
        }
    }
    else {
        // New string found
        fs.appendFileSync(targetLocalizableFile, targetOriginalLine + '\n');
        // Add to todo list
        newKeys.push(targetOriginalKey);
    }

    console.log(`Processed ${i + 1}/${targetOriginalLines.length} keys`);
}

var deletedKeys = sourceOriginalLines.map(l => getKey(l)).filter(originalKey => 
    targetOriginalLines.map(l => getKey(l)).indexOf(originalKey) === -1
);

fs.writeFileSync(path.join(__dirname, '..', 'translations', targetVersion, 'todo.md'), `
# Teendők

## Új szövegek

Ezek szövegek, amik bekerültek a játékba. Valószínű le kell fordítani őket.

${newKeys.map(s => `- ${s}`).join('\n')}

## Módosított szövegek

Ezek szövegek, amik megváltoztak a játékban. Elég átnézni ezeket és ha szükséges, akkor újra lefordítani őket.

| Kulcs | Régi szöveg | Új szöveg |
| --- | --- | --- |
${updatedTexts.map(s => `| ${s.key} | ${s.oldText} | ${s.newText} |`).join('\n')}

## Törölt szövegek

Ezek szövegek, amiket töröltek a játékból. Elég csak átnézni őket és törölni a fordításból.

${deletedKeys.map(s => `- ${s}`).join('\n')}
`.trim() + '\n');
