let soldOut = document.getElementsByClassName("price1");
let soldOut2 = document.getElementsByClassName("price3");
let notSoldOut = document.getElementsByClassName("price2");



document.getElementById("price1").addEventListener("click", function () {
    alert("Sold OUT!");
    this.style.width = "80px";
});
document.getElementById("price2").addEventListener("click", function () {
    alert("Best one, Click Name to Find out More.!");
    this.style.width = "80px";
});
document.getElementById("price3").addEventListener("click", function () {
    alert("Sold OUT!");
    this.style.width = "80px";
});
for (let i = 0; i < notSoldOut.length; i++) {
    notSoldOut[i].style.color = "green";

}
for (let i = 0; i < soldOut.length; i++) {
    soldOut[i].style.color = "red";

    for (let i = 0; i < soldOut2.length; i++) {
        soldOut2[i].style.color = "red";
    }
}