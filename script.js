var costume;
const story1 = "Ett gäng barn ska gå bus eller godis. Du är ett av barnen.";

const choice1 = "Du ska välja en utklädnad \n*spöke *häxa *zombie";




function gameStart() {
    document.getElementById("happen").innerHTML = story1;
    document.getElementById("choices").innerHTML = choice1;
}



function go(event) {
    if (event.keyCode == 13 || event.which == 13) {
        choice();
    }
}

function choice() {
    var inputText = document.getElementById("userInput").value;

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

    }
}