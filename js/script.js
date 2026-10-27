"use strict";

// 定数、関数を宣言するコード
const allEmojis = ["🤩", "🤪", "😁", "💥", "⁉️", "✨", "💩", "👊", "🙌", "🤣"];

const hanakusoTaisyo = document.querySelector("#inputText").value;
let hanakusoKansei = "";
let emojisKansei = "";

// 「はなくそ文章」を製造するコード
for (let sliceIndex = 0; sliceIndex < hanakusoTaisyo.length; sliceIndex++) {
  //絵文字をランダムに5～7個生成するコード
  emojisKansei = "";
  for (
    let emojisIndex = 0;
    emojisIndex < 5 + Math.floor(Math.random() * 3);
    emojisIndex++
  ) {
    let emojisRandom = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    emojisKansei = emojisKansei + emojisRandom;
  }

  //入力欄に入力された文章を1文字ずつ区切るコード
  let hanakusoSlice = hanakusoTaisyo.slice(sliceIndex, sliceIndex + 1);

  //区切った文字と生成された絵文字を組み合わせるコード
  hanakusoKansei = hanakusoKansei + hanakusoSlice + emojisKansei;
}
console.log(hanakusoKansei);
