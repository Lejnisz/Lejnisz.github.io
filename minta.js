    let szam1 = 4
    let szam2 = 6 // Itt ebben a példában mind 2 változó értékét manuálisan adhatjuk meg a kódban


        document.getElementById("ered").innerHTML = szam1 + szam2; // minig hivatkozok egy bizonyos Id rendelkező elemre hogy annak belső HTML tartalmát váltztasammeg, bár ennek jelen esetben nincs sok értelmi hiszen ehez a kódhoz nem társuk weboldal.
        document.getElementById("kod").innerHTML = `Az eredmény kódja: document.getElementById("ered").innerHTML = ${szam1} + ${szam2};` //ha működő kivitelezesését szeretnénk látni a kódnak akkor azt a Szekvencia.js fájlban láthatjuk

        document.getElementById("ered").innerHTML = szam1 - szam2;
        document.getElementById("kod").innerHTML = `Az eredmény kódja: document.getElementById("ered").innerHTML = ${szam1} - ${szam2};`

        document.getElementById("ered").innerHTML = szam1 * szam2;
        document.getElementById("kod").innerHTML = `Az eredmény kódja: document.getElementById("ered").innerHTML = ${szam1} * ${szam2};`

        if (szam2 === 0) {//egyszrű feltétel arra hogy a Szam2 változó 0-e osztás esetén
            document.getElementById("ered").innerHTML = "Nullával nem lehet osztani";
        } else {
            document.getElementById("ered").innerHTML = szam1 / szam2;
            document.getElementById("kod").innerHTML = `Az eredmény kódja: document.getElementById("ered").innerHTML = ${szam1} / ${szam2};`
        }
        //a Szekvencia.js ez a egész egy switch-ben van és van még egy kimenet minden más esetben azt írja hogy "Hiba a művelet kiválasztásakor"
