let UwU;

document.getElementById("szam").addEventListener('click', function() {
    document.getElementById("szamolo").style.opacity = "1";
    document.getElementById("ered").innerHTML = ""; // Töröld az "ered" tartalmát a számológép megnyitásakor
});

document.getElementById("osszevonas").addEventListener('click', function() {
    UwU = "+";
    console.log("hello");
    calculateResult();
});

document.getElementById("kivonas").addEventListener('click', function() {
    UwU = "-";
    console.log("hello");
    calculateResult();
});

document.getElementById("szorzas").addEventListener('click', function() {
    UwU = "*";
    console.log("hello");
    calculateResult();
});

document.getElementById("osztas").addEventListener('click', function() {
    UwU = "/";
    console.log("hello");
    calculateResult();
});

function calculateResult() {
    let szam1 = parseFloat(document.getElementById("szamolo_1").value);
    let szam2 = parseFloat(document.getElementById("szamolo_2").value);

    if (isNaN(szam1) || isNaN(szam2)) {
        document.getElementById("ered").innerHTML = "Érvénytelen bemenet";
        return;
    }

    switch (UwU) {
        case "+":
            document.getElementById("ered").innerHTML = szam1 + szam2;
            document.getElementById("kod").innerHTML = `Az eredmény kódja: document.getElementById("ered").innerHTML = ${szam1} + ${szam2};`
            break;
        case "-":
            document.getElementById("ered").innerHTML = szam1 - szam2;
            document.getElementById("kod").innerHTML = `Az eredmény kódja: document.getElementById("ered").innerHTML = ${szam1} - ${szam2};`
            break;
        case "*":
            document.getElementById("ered").innerHTML = szam1 * szam2;
            document.getElementById("kod").innerHTML = `Az eredmény kódja: document.getElementById("ered").innerHTML = ${szam1} * ${szam2};`
            break;
        case "/":
            if (szam2 === 0) {
                document.getElementById("ered").innerHTML = "Nullával nem lehet osztani";
            } else {
                document.getElementById("ered").innerHTML = szam1 / szam2;
                document.getElementById("kod").innerHTML = `Az eredmény kódja: document.getElementById("ered").innerHTML = ${szam1} / ${szam2};`
            }
            break;
        default:
            document.getElementById("ered").innerHTML = "Hiba a művelet kiválasztásakor";
    }
}