const tinhDTB = (...numbers) => {
    let total = 0;
    console.log(numbers)
    numbers.forEach((number) => {
        total+= parseFloat(number);

    });
    avg = (total / numbers.length).toFixed(2);
    return avg;
};
window.tinhDTB = tinhDTB;

document.getElementById("btnKhoi1").onclick = (() => {
    let toan = document.getElementById("inpToan").value;
    let ly = document.getElementById("inpLy").value;
    let hoa = document.getElementById("inpHoa").value;
    document.getElementById("tbKhoi1").innerHTML = tinhDTB(toan, ly, hoa);
})

document.getElementById("btnKhoi2").onclick = (() => {
    let van = document.getElementById("inpVan").value;
    let su = document.getElementById("inpSu").value;
    let dia = document.getElementById("inpDia").value;
    let eng = document.getElementById("inpEnglish").value;
    document.getElementById("tbKhoi2").innerHTML = tinhDTB(van, su, dia, eng);
})