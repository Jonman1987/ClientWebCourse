function converter(){
    let button = document.getElementById("convert");

    button.addEventListener("click", function(e) {
        let textForm = document.getElementById("inputZone");
        let textValue = textForm.value;
        let celsiusRadioForm = document.getElementById("celRadio");
        let kalvinRadioForm = document.getElementById("kalRadio");
        let convertResult = 0;

        if(textValue == ""){
            alert("Вы не ввели значение температуры");
            return;
        }

        if(isNaN(textValue) == true){
            alert("Указанная температура не является числом");
            return;
        }

        if(celsiusRadioForm.checked != true && kalvinRadioForm.checked != true){
            alert("Вы не выбрали операцию по переводу");
            return;
        }

        if(celsiusRadioForm.checked == true){
            convertResult = Number(textValue) + 273.15;
        } else{
            convertResult = Number(textValue) - 273.15;
        }

        let labelResult = document.getElementById("result");
        labelResult.hidden = false;
        labelResult.textContent = convertResult;
    });
}converter();