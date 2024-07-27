const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

//For文を用いた場合
console.log('For文を用いた場合');
for (let i = 1; i <= holidays.length; i += 1) {
  console.log(holidays[i-1]);
}

//While文を用いた場合
console.log('While文を用いた場合');
let num = 1
while (num !== holidays.length+1) {
  console.log(holidays[num-1]);
  num += 1;
}
