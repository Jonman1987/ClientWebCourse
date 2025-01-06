function converter(){
    let button = document.getElementById("convert");

    button.addEventListener("click", function(e) {
        let textForm = document.getElementById("inputZone");
        let textValue = textForm.value;
        let convertResultKal = 0;
        let convertResultFah = 0;

        if(textValue == ""){
            alert("Вы не ввели значение температуры");
            return;
        }

        if(isNaN(textValue) == true){
            alert("Указанная температура не является числом");
            return;
        }

        convertResultKal = Number(textValue) + 273.15;
        convertResultFah = Number(textValue) * 1.8 + 32;

        let textResultKal = document.getElementById("resultKal");
        let textResultFah = document.getElementById("resultFah");
        let labelKal = document.getElementById("kal");
        let labelFah = document.getElementById("fah");
        textResultKal.hidden = false;
        textResultFah.hidden = false;
        labelKal.hidden = false;
        labelFah.hidden = false;
        textResultKal.textContent = convertResultKal;
        textResultFah.textContent = convertResultFah;
    });
}converter();