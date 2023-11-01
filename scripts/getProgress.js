const gameVersion = '0.23.4 235043';
const showAllCategories = false;

const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, '..', 'translations', gameVersion, 'Localizable.strings');
const file2 = path.join(__dirname, '..', 'translations', gameVersion, 'original.strings');

const file1Lines = fs.readFileSync(file1, 'utf8').split('\n');
const file2Lines = fs.readFileSync(file2, 'utf8').split('\n');

const auroraLiricsRegex = /^"aurora_\w*_[0-9]{2,}".*/;

let requiredLines = 0;
let count = 0;
const categories = {};
const todoKeys = [];
for (let i = 0; i < file1Lines.length; i++) {
    const keyPrefix = file1Lines[i].split('_')[0].substring(1);
    const category = [
        'account', 'buff', 'button', 'commerce', 'constellation', 'consumable',
        'control', 'currency', 'daily', 'display', 'error', 'friend', 'game',
        'howtoplay', 'intro', 'invite', 'mainstreet', 'meditation', 'menu',
        'message', 'recorder', 'relationship', 'season',
        'social', 'spirit', 'storm', 'stormy', 'system', 'tos', 'tutorial', 'ui',
    ].includes(keyPrefix) || showAllCategories ? keyPrefix : 'other';

    const isNotComment = !file1Lines[i].startsWith('/');
    const isNotAuraLirics = !auroraLiricsRegex.test(file1Lines[i]);
    const isNotAchievement = !file1Lines[i].startsWith('"achievement_');
    const isNotName = !file1Lines[i].startsWith('"name_');
    const isNotAssetPack = !file1Lines[i].startsWith('"assetpack_name_');
    const isNotCredit = !file1Lines[i].startsWith('"credit_');
    if (isNotComment && isNotAuraLirics && isNotAchievement && isNotName && isNotAssetPack && isNotCredit) {
        requiredLines++;
        categories[category] = { ...categories[category], size: categories[category] ? categories[category].size + 1 : 1 };
        if (file1Lines[i] !== file2Lines[i]) {
            count++;
            categories[category] = { ...categories[category], done: categories[category].done ? categories[category].done + 1 : 1 };
        }
        else {
            todoKeys.push(file1Lines[i].split('=')[0].trim());
        }
        if (categories[category].size && categories[category].done) {
            categories[category] = {
                ...categories[category],
                progress: Math.round((categories[category].done / categories[category].size) * 100) + '%',
            };
        }
    }
    else {
        const newSize = categories['skipped'] ? categories['skipped'].size + 1 : 1;
        categories['skipped'] = {
            size: newSize,
            done: newSize,
            progress: '100%',
        };
    }
}

const percent = Math.round((count / requiredLines) * 100);

const output = `
# Haladás

![](https://geps.dev/progress/${percent})

- Játék verziója: \`${gameVersion}\`
- Nyelv fájl hossza: \`${file1Lines.length}\`
- Teljes haladás: \`${count} / ${requiredLines}\`

## Kategóriák

| Kategória | Haladás | % |
| - | - | - |
${Object.keys(categories).map((key) =>
    `| ${key} | ${categories[key].done ? categories[key].done : '-'} / ${categories[key].size} | ![](https://geps.dev/progress/${categories[key].progress ? categories[key].progress.replace('%', '') : 0}) |`
).join('\n')}

## Discord üzenet

\`\`\`
# Sky Magyar fordítás
\`[${'='.repeat(percent / 4).padEnd(100 / 4, '.')}] ${percent}%\`
${count}db szöveg lefordítva ${requiredLines}db szövegből.
- [[A projekt GitHub repo-ja]](<https://github.com/shadows-of-the-light/sky-hungarian-translation>)
- [[A fordító csapat GitHub oldala]](<https://github.com/shadows-of-the-light>)
- [[Részletek a haladásról]](<https://github.com/shadows-of-the-light/sky-hungarian-translation/blob/main/progress.md>)
- [[Magyar Sky stream-ek]](<https://www.twitch.tv/csakitheone>)
\`\`\`

## Fordításra váró elemek

${todoKeys.length}db szöveg

${todoKeys.filter(key => key.trim() !== '').map(key => `- ${key}`).join('\n')}
`.trim();

fs.writeFileSync(path.join(__dirname, '..', 'progress.md'), output + '\n');
