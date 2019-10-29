const story1 = "Ett gäng barn ska gå bus eller godis. Du är ett av barnen.";

const choice1 = "Du ska välja en utklädnad \n*spöke *häxa *zombie";




function gameStart() {
    document.getElementById("happen").innerHTML = story1;
    document.getElementById("choices").innerHTML = choice1;
}



function clear() {
    document.getElementById("userInput").value = "";
}

function go(event) {
    if (event.keyCode == 13 || event.which == 13) {
        choice();
    }
}

function choice() {
    var inputText = document.getElementById("userInput").value;

    switch (inputText) {
        case "start":
            gameStart();
            clear();
            break;

        case "spöke":
            costume = "spökdräkt";
            document.getElementById("choices").innerHTML =
                "Du tar på dig ett gammalt vitt lakarn och förvandlas till ett spöke. Vill ni gå med eller utan föräldrar?";
            clear();
            break;

        case "häxa":
            costume = "häxdräkt";
            document.getElementById("choices").innerHTML =
                "Du tar på dig en fin häxdräkt med hatt och kvast. Vill ni gå med eller utan föräldrar?";
            clear();
            break;

        case "zombie":
            costume = "zombiedräkt";
            document.getElementById("choices").innerHTML =
                "Du tar på dig en läskig zombiedräkt med självlysande ögonlinser. Vill ni gå med eller utan föräldrar?";
            clear();
            break;

        case "med":
            parents = false;
            document.getElementById("happen").innerHTML =
                "Några av kompisarna är för rädda för att gå själva så några av föräldrarna följer med";
            document.getElementById("choices").innerHTML =
                "Ni går in mot stan. Du har på dig din " + costume + ". Vill ni börja med att gå till en lägenhet eller villa?";
            clear();
            break;

        case "utan":
            parents = true;
            document.getElementById("happen").innerHTML =
                "Nu när ni är superläskiga så är ni redo för att gå iväg på ert årliga bus eller godis";
            document.getElementById("choices").innerHTML =
                "Ni går in mot stan. Du har på dig din " + costume + ". Vill ni börja med att gå till en lägenhet eller villa?";
            clear();
            break;

        case "lägenhet":
            apartment = true;
            document.getElementById("happen").innerHTML =
                "Ni går till en lägenhet där en kvinna och en man öppnar dörren och är utklädda till vampyrer.";
            document.getElementById("choices").innerHTML =
                "Fråga efter bus eller godis!";
            clear();
            break;

        case "villa":
            apartment = false;
            document.getElementById("happen").innerHTML =
                "Ni går till en villa där ni hör ett voff! Ett pensionärspar och en liten strävhårig tax öpnnar dörren och hejar glatt. "
            document.getElementById("choices").innerHTML =
                "Fråga efter bus eller godis!";
            clear();
            break;

        case "bus eller godis":
            if (parents) {
                derasVal = parseInt(Math.random() * 100);
                console.log(derasVal);
                if (derasVal > 30) {
                    document.getElementById("happen").innerHTML =
                        "GODIS!!"
                    document.getElementById("choices").innerHTML =
                        " Godis!"
                } else {
                    document.getElementById("happen").innerHTML =
                        "BUUUUS!!"
                    document.getElementById("choices").innerHTML =
                        " Bus!"
                }
            } else {
                document.getElementById("happen").innerHTML =
                    "Föräldrarna är med så därför blir det inget bus, utan GODIS!!"
                document.getElementById("choices").innerHTML =
                    " Godis!"
            }



    }









    /* Here is my testcode with just "if" :-) i thougt "case" was easier to work with.
    
    if (inputText == "start") {
        gameStart();
    }

    if (inputText == "spöke") {
        document.getElementById("choices").innerHTML =
            "Du tar på dig ett gammalt vitt lakarn och förvandlas till ett spöke. Vill ni gå med eller utan föräldrar?";

    }

    if (inputText == "häxa") {
        document.getElementById("choices").innerHTML =
            "Du tar på dig en fin häxdräkt med hatt och kvast. Vill ni gå med eller utan föräldrar?";


    }

    if (inputText == "zombie") {
        document.getElementById("choices").innerHTML =
            "Du tar på dig en läskig zombiedräkt med självlysande ögonlinser. Vill ni gå med eller utan föräldrar?";

    }*/
}