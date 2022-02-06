function addResult() {
    // const jenisKelamin = document.getElementById("kelamin").value;
    const jenisKelamin = "Laki-laki"
    const tinggiBadan = document.getElementById("tinggi").value;
    const beratBadan = document.getElementById("berat").value;
    console.log(tinggiBadan);
    console.log(beratBadan);

    const BMI = calculateBMI(jenisKelamin, tinggiBadan, beratBadan)
    let ideal = "";
    if(BMI >= 18.5 && BMI <= 25)
        ideal = "Berat Ideal";
    else if(BMI > 40)
        ideal = "Obesitas";
    else if(BMI > 25)
        ideal = "Berat Berlebih";
    else
        ideal = "Berat Rendah"
    makeResult(jenisKelamin, tinggiBadan, beratBadan, BMI, ideal);
}

function calculateBMI(kelamin, tinggi, berat){
    let BMI = 0;
    BMI = berat / ((tinggi / 100)**2);

    console.log(BMI.toFixed(2));
    return BMI.toFixed(1);
}

function makeResult(kelamin, tinggi, berat, BMI, ideal) {
    const calculatorResult = document.getElementById("result");

    const textJenisKelamin = document.createElement("p");
    textJenisKelamin.innerText = "BMI untuk " + kelamin;

    const table = document.createElement("table");
    const tableRow = document.createElement("tr");
    const tableHead1 = document.createElement("th");
    const tableData1 = document.createElement("td");
    const tableHead2 = document.createElement("th");
    const tableData2 = document.createElement("td");
    tableHead1.innerText = "Tinggi (cm) ";
    tableData1.innerText = tinggi;
    tableHead2.innerText = "Berat (kg) ";
    tableData2.innerText = berat;
    tableRow.append(tableHead1, tableData1, tableHead2, tableData2);
    table.append(tableRow);

    const barContainer = document.createElement("div");
    barContainer.classList.add("bar-container")
    const barContainerRendah = document.createElement("div");
    barContainerRendah.classList.add("bar-container-rendah")
    const barContainerIdeal = document.createElement("div");
    barContainerIdeal.classList.add("bar-container-ideal")
    const barContainerBerlebih = document.createElement("div");
    barContainerBerlebih.classList.add("bar-container-berlebih")
    const barContainerObesitas = document.createElement("div");
    barContainerObesitas.classList.add("bar-container-obesitas")
    barContainer.append(barContainerRendah, barContainerIdeal, barContainerBerlebih, barContainerObesitas);

    const triangle = document.createElement("div");
    triangle.classList.add("triangle");

    const BMIResult = document.createElement("p");
    BMIResult.setAttribute("style", "--bmi");
    BMIResult.innerText = "BMI Anda : " + BMI;

    const BeratIdeal = document.createElement("p");
    BeratIdeal.innerText = ideal;

    calculatorResult.append(textJenisKelamin, table, barContainer, triangle, BMIResult, BeratIdeal);
}
