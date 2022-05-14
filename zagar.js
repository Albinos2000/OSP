    function odlicznie(){
        var dzisiaj = new Date();
        
        var dzien = dzisiaj.getDate();
        if(dzien<10) dzien= "0"+dzien;
        var miesiac = dzisiaj.getMonth()+1;
        if (miesiac==1) {
            miesiac="Styczeń"
        }
        else if (miesiac==2) {
            miesiac="Luty"
        }
        else if (miesiac==3) {
            miesiac="Marzec"
        }
        else if (miesiac==4) {
            miesiac="Kwiecień"
        }
        else if (miesiac==5) {
            miesiac="Maj"
        }
        else if (miesiac==6) {
            miesiac="Czerwiec"
        }
        else if (miesiac==7) {
            miesiac="Lipiec"
        }
        else if (miesiac==8) {
            miesiac="Sierpień"
        }
        else if (miesiac==9) {
            miesiac="Wrzesień"
        } 
        else if (miesiac==10) {
            miesiac="Październik"
        } 
        else if (miesiac==11) {
            miesiac="Listopad"
        }
        else if (miesiac==12) {
            miesiac="Grudzień"
        }
        var rok = dzisiaj.getFullYear();
      
        var dzienn = dzisiaj.getDay();
        if (dzienn==0) {
            dzienn="Niedziela"
        }
        else if (dzienn==1) {
            dzienn="Poniedziałek"
        }
        else if (dzienn==2) {
            dzienn="Wtorek"
        }
        else if (dzienn==3) {
            dzienn="Środa"
        }
        else if (dzienn==4) {
            dzienn="Czwartek"
        }
        else if (dzienn==5) {
            dzienn="Piątek"
        }
        else if (dzienn==6) {
            dzienn="Sobota"
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