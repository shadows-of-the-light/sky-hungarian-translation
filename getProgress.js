const gameVersion = '0.23.4 235043';

const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, 'translations', gameVersion, 'Localizable.strings');
const file2 = path.join(__dirname, 'translations', gameVersion, 'original.strings');

const file1Lines = fs.readFileSync(file1, 'utf8').split('\n');
const file2Lines = fs.readFileSync(file2, 'utf8').split('\n');

const auroraLiricsRegex = /^"aurora_\w*_[0-9]{2,}".*/;

let requiredLines = 0;
let count = 0;
for (let i = 0; i < file1Lines.length; i++) {
  const isNotComment = !file1Lines[i].startsWith('/');
  const isNotAuraLirics = !auroraLiricsRegex.test(file1Lines[i]);
  const isNotAchievement = !file1Lines[i].startsWith('"achievement_');
  const isNotName = !file1Lines[i].startsWith('"name_');
  if (isNotComment && isNotAuraLirics && isNotAchievement && isNotName) {
    requiredLines++;
    if (file1Lines[i] !== file2Lines[i]) {
      count++;
    }
  }
}

const percent = Math.round((count / requiredLines) * 100);

console.log(`Progress for game version ${gameVersion}:\n${count} / ${requiredLines} (${percent}%)\nFull file length: ${file1Lines.length}`);
