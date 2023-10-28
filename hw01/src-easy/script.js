//使用node.js運行，透過cmd cd到該程式路徑並輸入node script.js即可生成csv file

const fs = require('fs');

function getRandomClass() {
  const classes = ['資工系', '資工所', '電資AI', '電資資安', '創新AI'];
  return classes[Math.floor(Math.random() * classes.length)];
}

function getRandomStudentID() {
  const prefix = '111';
  const middle = ['590', '598', 'C52', 'C53', 'C71'][Math.floor(Math.random() * 5)];
  const suffix = String(Math.floor(Math.random() * 999)).padStart(3, '0');
  return prefix + middle + suffix;
}

function generateRandomChineseName() {
    const firstName = ['王', '李', '張', '劉', '陳', '楊', '黃', '趙', '吳', '林'];
    const middleName = ['小', '大', '明', '美', '芳', '婷', '國', '中', '志', '琪'];
    const lastName = ['瑞', '思', '麗', '俊', '佳', '偉', '美', '寶', '文', '青'];
    return firstName[Math.floor(Math.random() * firstName.length)] + middleName[Math.floor(Math.random() * middleName.length)] + lastName[Math.floor(Math.random() * lastName.length)];
}
function getRandomGitHubAccount() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let githubAccount = '';
  for (let i = 0; i < 10; i++) {
    githubAccount += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return githubAccount;
}

function getRandomScore() {
  return Math.floor(Math.random() * 11);
}

const csvHeader = '序號,班級,學號,姓名,GitHub,作業一,作業二,作業三,作業四,作業五,作業六,作業七,作業八,作業九,作業十\n';

let csvData = csvHeader;
for (let i = 1; i <= 120; i++) {
  const className = getRandomClass();
  const studentID = getRandomStudentID();
  const studentName = generateRandomChineseName();
  const githubAccount = getRandomGitHubAccount();
  const scores = Array.from({ length: 10 }, getRandomScore).join(',');
  csvData += `${i},${className},${studentID},${studentName},${githubAccount},${scores}\n`;
}

fs.writeFile('class_scores.csv', csvData, (err) => {
  if (err) {
    console.error('error：', err);
  } else {
    console.log('CSV成功生成：class_scores.csv');
  }
})
