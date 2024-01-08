function eger(gomb) {
    document.getElementById(gomb).addEventListener('mouseover', function() {
        document.getElementById("kep").innerHTML = `<img src="kepek/${gomb}.png"></img>`;
    });

    document.getElementById(gomb).addEventListener('mouseout', function() {
        document.getElementById("kep").innerHTML = '';
    });
}

eger('K');
eger('F');
eger('D');
eger('A');
eger('H');
eger('R');
eger('C');




function katt(gomb, szoveg) {
    document.getElementById(gomb).addEventListener('click', function() {
        document.getElementById("szoveg").innerHTML = szoveg;
    });
}

katt('K', "Ezzel az alakzattal jelölheti a folyamat első és utolsó lépését.");
katt('F', "Ez az alakzat a folyamat egy tipikus lépését jelöli. Szinte minden folyamatnál ez a leggyakrabban használt alakzat.");
katt('D', "Ez az alakzat olyan pontot jelöl, ahol egy döntés határozza meg a következő lépést. Többféle eredmény is lehet, de gyakran csak két kimenetel van: igen és nem.");
katt('A', "Ez az alakzat azt jelzi, hogy kívülről adatok érkeznek a folyamatba, vagy adatok kerülnek ki a folyamatból. Az alakzat anyagokat is jelölhet, és Bemenet/kimenet alakzat néven is ismert.");
katt('H', "Ez a kis kör azt jelzi, hogy a következő (vagy az előző) lépés másutt található a rajzon. Ez különösen a nagy méretű folyamatábráknál hasznos, amelyeken máskülönben hosszú, nehezen végigkövethető összekötőt kellene alkalmazni.");
katt('R', "Ez az alakzat olyan lépések csoportjához használható, amelyek kombinációja részfolyamatot alkot, az pedig másutt, általában egyazon dokumentum másik lapján van definiálva. Ez jól jön hosszú és bonyolult diagramok esetében.");