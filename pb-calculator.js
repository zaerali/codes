< script language = "javascript"
type = "text/javascript" > 

function CalculateSize() {
var BraDesc = "Long Bra : ";
var WaistDesc = "Waist Nipper : ";
var GirdleDesc = "Long Girdle : ";
var Puncak = txtPuncak.value;
var BawahPuncak = txtBawahPuncak.value;
var Pinggang = txtPinggang.value;
var Punggung = txtPunggung.value; //Bra Size

if ((Puncak - BawahPuncak) < 10) Cup = "B";
else if ((Puncak - BawahPuncak) >= 10 && (Puncak - BawahPuncak) <= 13) Cup = "C";
else if ((Puncak - BawahPuncak) >= 14 && (Puncak - BawahPuncak) <= 16) Cup = "D";
else if ((Puncak - BawahPuncak) >= 17 && (Puncak - BawahPuncak) <= 18) Cup = "E";
else if ((Puncak - BawahPuncak) >= 19 && (Puncak - BawahPuncak) <= 23) Cup = "F";
else if ((Puncak - BawahPuncak) > 23) Cup = "G";
if (Cup == "0") txtBra.innerHTML = BraDesc + "No size";
else {
if (BawahPuncak >= 63 && BawahPuncak <= 67) txtBra.innerHTML = BraDesc + "65" + Cup;
else if (BawahPuncak >= 68 && BawahPuncak <= 72) txtBra.innerHTML = BraDesc + "70" + Cup;
else if (BawahPuncak >= 73 && BawahPuncak <= 77) txtBra.innerHTML = BraDesc + "75" + Cup;
else if (BawahPuncak >= 78 && BawahPuncak <= 82) txtBra.innerHTML = BraDesc + "80" + Cup;
else if (BawahPuncak >= 83 && BawahPuncak <= 87) txtBra.innerHTML = BraDesc + "85" + Cup;
else if (BawahPuncak >= 88 && BawahPuncak <= 92) txtBra.innerHTML = BraDesc + "90" + Cup;
else if (BawahPuncak >= 93 && BawahPuncak <= 97) txtBra.innerHTML = BraDesc + "95" + Cup;
else if (BawahPuncak >= 98 && BawahPuncak <= 102) txtBra.innerHTML = BraDesc + "100" + Cup;
else txtBra.innerHTML = BraDesc + "No size";
}

//Waist Nipper
if (Pinggang < 61) txtWaistNipper.innerHTML = WaistDesc + "58";
else if (Pinggang >= 61 && Pinggang <= 67) txtWaistNipper.innerHTML = WaistDesc + "64";
else if (Pinggang >= 68 && Pinggang <= 73) txtWaistNipper.innerHTML = WaistDesc + "70";
else if (Pinggang >= 74 && Pinggang <= 79) txtWaistNipper.innerHTML = WaistDesc + "76";
else if (Pinggang >= 80 && Pinggang <= 86) txtWaistNipper.innerHTML = WaistDesc + "82";
else if (Pinggang >= 87 && Pinggang <= 93) txtWaistNipper.innerHTML = WaistDesc + "90";
else if (Pinggang >= 94 && Pinggang <= 100) txtWaistNipper.innerHTML = WaistDesc + "98";
else if (Pinggang > 100) txtWaistNipper.innerHTML = WaistDesc + "106";
else txtGirdle.innerHTML = WaistDesc + "No size";

//Long Girdle
if (Punggung < 83) txtGirdle.innerHTML = GirdleDesc + "58";
else if (Punggung >= 83 && Punggung <= 85) txtGirdle.innerHTML = GirdleDesc + "64";
else if (Punggung >= 86 && Punggung <= 88) txtGirdle.innerHTML = GirdleDesc + "64 or 70";
else if (Punggung >= 89 && Punggung <= 90) txtGirdle.innerHTML = GirdleDesc + "64, 70 or 76";
else if (Punggung >= 91 && Punggung <= 93) txtGirdle.innerHTML = GirdleDesc + "64, 70, 76 or 82";
else if (Punggung >= 94 && Punggung <= 96) txtGirdle.innerHTML = GirdleDesc + "70, 76, 82 or 90";
else if (Punggung >= 97 && Punggung <= 99) txtGirdle.innerHTML = GirdleDesc + "76, 82, 90 or 98";
else if (Punggung >= 100 && Punggung <= 103) txtGirdle.innerHTML = GirdleDesc + "82, 90 or 98";
else if (Punggung >= 104 && Punggung <= 106) txtGirdle.innerHTML = GirdleDesc + "90 or 98";
else if (Punggung >= 107 && Punggung <= 110) txtGirdle.innerHTML = GirdleDesc + "98";
else if (Punggung > 110) txtGirdle.innerHTML = GirdleDesc + "106";
} < /script>
