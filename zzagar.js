function odlicznie(){
var dzisiaj = new Date();

var dzien = dzisiaj.getDate();
if(dzien<10) dzien= "0"+dzien;
var miesiac = dzisiaj.getMonth()+1;
if (miesiac==1) {
    miesiac="Cічня"
}
else if (miesiac==2) {
    miesiac="Лютий"
}
else if (miesiac==3) {
    miesiac="Березень"
}
else if (miesiac==4) {
    miesiac="Квітень"
}
else if (miesiac==5) {
    miesiac="Може"
}
else if (miesiac==6) {
    miesiac="Червень"
}
else if (miesiac==7) {
    miesiac="Липень"
}
else if (miesiac==8) {
    miesiac="Cерпень"
}
else if (miesiac==9) {
    miesiac="Вересень"
} 
else if (miesiac==10) {
    miesiac="Жовтень"
} 
else if (miesiac==11) {
    miesiac="Листопад"
}
else if (miesiac==12) {
    miesiac="Грудень"
}
var rok = dzisiaj.getFullYear();

var dzienn = dzisiaj.getDay();
if (dzienn==0) {
    dzienn="Неділя"
}
else if (dzienn==1) {
    dzienn="Понеділок"
}
else if (dzienn==2) {
    dzienn="Bівторок"
}
else if (dzienn==3) {
    dzienn="Cереда"
}
else if (dzienn==4) {
    dzienn="Четвер"
}
else if (dzienn==5) {
    dzienn="П'ятниця"
}
else if (dzienn==6) {
    dzienn="Cубота"
}
var godzina = dzisiaj.getHours();
if(godzina<10) godzina= "0"+godzina;
var minuta = dzisiaj.getMinutes();
if(minuta<10) minuta= "0"+minuta;
var sekunda = dzisiaj.getSeconds();
if(sekunda<10) sekunda= "0"+sekunda;
document.getElementById("zegar").innerHTML = 
    dzien+" "+miesiac+" "+rok+" ("+dzienn+")  "  +godzina+":"+minuta+":"+sekunda;
    setTimeout("odlicznie()",1000);
}