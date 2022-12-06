const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let container = document.getElementById("colorContainer");
let content ="";

loadColorPick = (()=> {
    for(let i = 0; i <colorList.length; i++) content+= 0 == i ? 
        `<button class ='color-button ${colorList[i]} active'></button>` : `<button class ='color-button ${colorList[i]}'></button>`
    return content;
}),loadColorPick();

container.innerHTML = content;

let colorPricker = document.getElementsByClassName("color-button");
let house = document.getElementById("house");

for( let i = 0; i < colorPricker.length; i++){
    colorPricker[i].addEventListener("click", function(){
        changColor(colorList[i], i)
    })
}

changColor = ((o, e)=>{
    for (let o = 0; o < colorPricker.length; o++) colorPricker[o].classList.remove("active");
    colorPricker[e].classList.add("active")
    house.className = "house"
    house.className+= " "+colorList[e];
    // console.log(colorList[e])
    // console.log(house)

})