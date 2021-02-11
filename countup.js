'use strict'
var display = document.getElementById('display');
var countbutton = document.getElementById('countbutton');
var word = document.getElementById('word');
var count = 0;

/*
* 指定した要素の子どもを全て除去する
* @param {HTMLElement} element HTMLの要素
*/
function removeAllChildren(element) {
 while (element.firstChild) {
   // 子どもの要素があるかぎり除去
   element.removeChild(element.firstChild);
 }
}

countbutton.onclick = () => {
    count++;
    display.innerText = count;

    removeAllChildren(word);
    const paragraph = document.createElement('p');
    paragraph.innerText = countWord();
    word.appendChild(paragraph);
}

function countWord() {
    if (0 <= count && count < 10){
        var text = 'がんばれ';
        return text;
    } else if (10 <= count && count < 50){
        var text = 'カウント数１０！まだまだこれから！';
        return text;
    } else if (50 <= count && count < 100){
        var text = 'カウント数５０達成！！その調子！！';
        return text;
    } else if (count >= 100){
        var text = 'カウント数１００達成！！！おめでとう！！！';
        return text;
    }

}
