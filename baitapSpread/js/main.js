const head = document.getElementsByClassName('heading');
// console.log(head[0].textContent);
const big = (head) => {
    let char = [...head.textContent];
    console.log(char);
    return char.map(char => `<span>${char}</span>`).join("");
    

};

head[0].innerHTML = big(head[0]);