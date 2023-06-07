console.log("index JS virker");

const calculatedContainer = document.getElementById("indexCalculatedInformationContainer");

const kml = document.getElementById("indexKMLInput");
const km = document.getElementById("indexKMDagInput");
const week = document.getElementById("indexPrWeekInput");

const addTextToInfoContainer = () => {
    const weeklyKM = km.value * week.value;
    const weeklyGas = kml.value * weeklyKM;
    const yearlyKM = km.value * 365;
    const yearlyGas = kml.value * 365;
    calculatedContainer.innerHTML = `Du kører i dag ${weeklyKM} km om ugen på ${weeklyGas} liter benzin. Dette svarer til ${yearlyKM} km om året eller ${yearlyGas} liter benzin om året`;
}

kml.addEventListener('input', addTextToInfoContainer);
km.addEventListener('input', addTextToInfoContainer);
week.addEventListener('input', addTextToInfoContainer);