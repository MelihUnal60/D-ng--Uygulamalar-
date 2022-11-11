

function findDay(){
    let dayElement = document.getElementById('day').value;
    let sonuc;
    let finalDay = document.getElementById('gun');
    
    if(dayElement == 1){
        sonuc = "Pazartesi";
    }else if(dayElement == 2){
        sonuc = "Salı";
    }else if(dayElement == 3){
        sonuc = "Çarşamba";
    }else if(dayElement == 4){
        sonuc = "Perşembe";
    }else if(dayElement == 5){
        sonuc = "Cuma";
    }else if(dayElement == 6){
        sonuc = "Cumartesi";
    }else if(dayElement == 7){
        sonuc = "Pazar";
    }else{
        finalDay.innerHTML = "<span style='color:red;'> Hatalı giriş yaptınız!! </span>"
        return;
    }

    finalDay.innerHTML = "Haftanın" +" "+ dayElement +"."+ " "+ "günü" + " " + sonuc; 
}

function findWeek(){
    let controlElement = document.getElementById('control').value;
    let sonuc;
    let result = document.getElementById('deger');

    if(controlElement == "Pazartesi"){
        sonuc = "Bugün hafta içi ve haftanın 1. günü";
    }else if(controlElement == "Salı"){
        sonuc = "Bugün hafta içi ve haftanın 2. günü";
    }else if(controlElement == "Çarşamba"){
        sonuc = "Bugün hafta içi ve haftanın 3. günü";
    }else if(controlElement == "Perşembe"){
        sonuc = "Bugün hafta içi ve haftanın 4. günü";
    }else if(controlElement == "Cuma"){
        sonuc = "Bugün hafta içinin son günü"
    }else if(controlElement == "Cumartesi"){
        sonuc = "Bugün haftasonu ve haftanın 6. günü";
    }else if(controlElement == "Pazar"){
        sonuc = "Bugün haftasonu ve haftanın son günü";
    }else{
        result.innerHTML = "Lütfen haftanın günlerinden birini yazın!!";
        return;
    }

    result.innerHTML = sonuc;
}
    