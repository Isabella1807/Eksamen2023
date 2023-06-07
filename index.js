console.log("index JS virker");

/********* Calculator ************/

const calculatedContainer = document.getElementById("indexCalculatedInformationContainer");

const kmPrL = document.getElementById("indexKMLInput");
const kmPrDay = document.getElementById("indexKMDagInput");
const tripsPrWeek = document.getElementById("indexPrWeekInput");

const addTextToInfoContainer = () => {
    const weeklyKM = kmPrDay.value * tripsPrWeek.value;
    const weeklyGasL = weeklyKM / kmPrL.value;
    const yearlyKM = weeklyKM * 52;
    const yearlyGas = weeklyGasL * 52;
    calculatedContainer.innerHTML = `Du kører i dag ${weeklyKM} km om ugen på ${weeklyGasL} liter benzin. Dette svarer til ${yearlyKM} km om året eller ${yearlyGas} liter benzin om året`;
}

kmPrL.addEventListener('input', addTextToInfoContainer);
kmPrDay.addEventListener('input', addTextToInfoContainer);
tripsPrWeek.addEventListener('input', addTextToInfoContainer);

/********** Cars ***********/

const listOfCars = [
    {
        img: "link",
        name: "BMW i7",
        priceDKK: 1559000,
        WhPrKm: 184,
        distanceKm: 625,
    },
    {
        img: "link",
        name: "Tesla Model Y",
        priceDKK: 382000,
        WhPrKm: 148,
        distanceKm: 488,
    },
    {
        img: "link",
        name: "Kia EV6",
        priceDKK: 404000,
        WhPrKm: 180,
        distanceKm: 528,
    },
]
