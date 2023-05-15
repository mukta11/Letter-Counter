let button = document.getElementById('btn');
button.addEventListener('click',function(){
    let word = document.getElementById('str').value;
    let count = word.length;

    let vowelCount = word.split('').filter(x => ['a', 'e', 'i', 'o', 'u'].includes(x)).length;

    let countWithoutSpaces = word.split('').filter(x => (x != ' ')).length;

    let outDiv = document.getElementById('output');
    let outVowelDiv = document.getElementById('vowelcount');
    let outWithoutSpace = document.getElementById('withoutspacecount');

    outDiv.innerHTML = `<h1>Word Count With Spaces: ${count}</h1>`;
    outVowelDiv.innerHTML = `<h1>Vowel Count: ${vowelCount}</h1>`;
    outWithoutSpace.innerHTML = `<h1>Word Count Without Spaces: ${countWithoutSpaces}</h1>`;
})





