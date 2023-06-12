console.log("index JS virker");

/********* Calculator ************/

const calculatedContainer = document.getElementById("indexCalculatedInformationContainer");

const kmPrL = document.getElementById("indexKMLInput");
const kmPrDay = document.getElementById("indexKMDagInput");
const tripsPrWeek = document.getElementById("indexPrWeekInput");
const krPrKwH = document.getElementById("krPrKwh");
const krPrLGas = document.getElementById("krPrLGas");

const addTextToInfoContainer = () => {
    const weeklyKM = kmPrDay.value * tripsPrWeek.value;
    const weeklyGasL = weeklyKM / kmPrL.value;
    const yearlyKM = weeklyKM * 52;
    const yearlyGas = weeklyGasL * 52;
    calculatedContainer.innerHTML = `Du kører i dag ${Math.round(weeklyKM)} km om ugen på ${Math.round(weeklyGasL)} liter benzin. Dette svarer til ${Math.round(yearlyKM)} km om året eller ${Math.round(yearlyGas)} liter benzin om året`;

    //Calculate yearly gas price for current car
    const gasCarYearlyCost = yearlyGas * krPrLGas.value;

    //Calculate money saved pr year pr car based on individual car electricity usage
    for (let i = 0; i < listOfCars.length; i++) {
        const car = listOfCars[i];
        const electricYearlyCost = ((yearlyKM * car.WhPrKm) / 1000) * krPrKwH.value;
        const difference = gasCarYearlyCost - electricYearlyCost;
        car.saving = Math.round(difference);
    }
    addCarOptionsToContainer();
}

kmPrL.addEventListener('input', addTextToInfoContainer);
kmPrDay.addEventListener('input', addTextToInfoContainer);
tripsPrWeek.addEventListener('input', addTextToInfoContainer);
krPrKwH.addEventListener('input', addTextToInfoContainer);
krPrLGas.addEventListener('input', addTextToInfoContainer);

/********** Cars ***********/

const listOfCars = [
    {
        img: "images/cars/BMW.PNG",
        name: "BMW i7",
        priceDKK: 1559000,
        WhPrKm: 184,
        distanceKm: 625,
        saving: null
    },
    {
        img: "images/cars/Tesla.PNG",
        name: "Tesla Model Y",
        priceDKK: 382000,
        WhPrKm: 148,
        distanceKm: 488,
        saving: null
    },
    {
        img: "images/cars/Kia.PNG",
        name: "Kia EV6",
        priceDKK: 404000,
        WhPrKm: 180,
        distanceKm: 528,
        saving: null
    },
]

const carsContainer = document.getElementById("indexCarsContainer");

const addCarOptionsToContainer = () => {
    console.log("index add car options virker");

    carsContainer.innerHTML = '';

    for (let i = 0; i < listOfCars.length; i++) {
        const car = listOfCars[i];

        carsContainer.innerHTML += `
            <div class="carsOffersContainers">
                <div class="indexCarsImageContainer">
                    <img src="${car.img}" alt="Billede af ${car.name}"
                         class="indexCalculatorCarOfferContainers">
                </div>
                <div class="indexCarsTextContainer">
                <div id="carNameNPriceContainer">
                    <p id="carNameP">${car.name}</p>
                    <p id="carPriceP">Pris: ${car.priceDKK} DKK</p>
                </div>
                
                <div id="carContainerLine"></div>
               
                    <p id="carSavingP">${car.saving} DKK</p>
                    <p id="carSavingH">sparet årligt</p>
                   
                </div>
            </div>
        `;
    }
}

addTextToInfoContainer();
