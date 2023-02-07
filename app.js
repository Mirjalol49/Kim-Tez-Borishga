const elForm = document.querySelector(".form-input");
const input = document.querySelector(".form-input_number");
const elResult = document.querySelector(".human");
const elBike = document.querySelector(".bike");
const elCar = document.querySelector(".car");
const elPlane = document.querySelector(".plane");

const human = 3.6;
const bike = 17;
const car = 70;
const plane = 800;

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let inputValue = input.value;
    let a = Math.floor(inputValue / human);
    let b = Math.floor((inputValue * 60 / human)) - (a * 60);
    let c = Math.floor((inputValue * 3600 / human)) - ((a * 3600) + (b * 60));
    elResult.textContent = ` ${a} soat, ${b} minut, ${c} sekund`;

    let d = Math.floor(inputValue / bike);
    let e = Math.floor((inputValue * 60 / bike) - (d * 60));
    let f = Math.floor((inputValue * 3600 / bike)) - ((d * 3600) + (e * 60));
    elBike.textContent = ` ${d} soat, ${e} minut, ${f} sekund`;

    let g = Math.floor(inputValue / car);
    let h = Math.floor((inputValue * 60 / car)) - (g * 60);
    let i = Math.floor((inputValue * 3600 / car)) - ((g * 3600) + (h * 60));
    elCar.textContent = ` ${g} soat, ${h} minut, ${i} sekund`;

    let j = Math.floor(inputValue / plane);
    let k = Math.floor((inputValue * 60 / plane)) - (j * 60);
    let m = Math.floor((inputValue * 3600 / plane)) - ((j * 3600) + (k * 60));
    elPlane.textContent = `${j} soat, ${k} minut, ${m} sekund`;
});