const story1 = "Ett gäng barn ska gå bus eller godis. Du är ett av barnen.";

const choice1 = "Du ska välja en utklädnad \n*spöke *häxa *zombie";

const none = "";

/**
 * Represents game initialization.
 * Happen - feed with game events.
 * Choices - feed with user alternatives.
 */
function gameStart() {
    document.getElementById("happen").innerHTML = story1;
    document.getElementById("choices").innerHTML = choice1;
}


/**
 * Removes text from input field.
 */
function clear() {
    document.getElementById("userInput").value = none;
}
/**
 * 
 * @param {Number} event - Checks all keyboard activity for enter press.
 */
function go(event) {
    if (event.keyCode == 13 || event.which == 13) {
        choice();
    }
}
/**
 * Assigns a variable inputText to textbox input.
 * Matches the variable inputText to allowed cases.
 */
function choice() {
    var inputText = document.getElementById("userInput").value;

    switch (inputText) {
        case "start":
            gameStart();
            document.getElementById("thanks").innerHTML =
                none;
            clear();
            break;

        case "spöke":
            costume = "spökdräkt";
            document.getElementById("choices").innerHTML =
                "Du tar på dig ett gammalt vitt lakan och förvandlas till ett spöke. Vill ni gå med eller utan föräldrar?";
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

            /* Sets the boolean parents to either true or false depending on inputText */
        case "med":
            parents = true;
            document.getElementById("happen").innerHTML =
                "Några av kompisarna är för rädda för att gå själva, så föräldrarna följer med.";
            document.getElementById("choices").innerHTML =
                "Ni går in mot stan. Du har på dig din " + costume + ". Vill ni börja med att gå till en lägenhet eller villa?";
            clear();
            break;

        case "utan":
            parents = false;
            document.getElementById("happen").innerHTML =
                "Nu när ni är superläskiga är ni redo för att gå iväg på ert årliga bus eller godis!";
            document.getElementById("choices").innerHTML =
                "Ni går in mot stan. Du har på dig din " + costume + ". Vill ni börja med att gå till en lägenhet eller villa?";
            clear();
            break;

            /* Sets the boolean apartment to either true or false depending on inputText */
        case "lägenhet":
            apartment = true;
            document.getElementById("happen").innerHTML =
                "Ni går till en lägenhet där en kvinna och en man öppnar dörren som är utklädda till blodiga vampyrer.";
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
            if (!parents) {
                derasVal = parseInt(Math.random() * 100);
                console.log(derasVal);
                if (apartment) {
                    if (derasVal > 40) {
                        document.getElementById("happen").innerHTML =
                            "GODIS!!"
                        document.getElementById("choices").innerHTML =
                            "Vampyrparet ger er smaskiga äpplen att bita i. Ni går nu hem med färre hål i tänderna."
                        document.getElementById("thanks").innerHTML =
                            "Hoppas att du hade en rolig upplevelse, skriv start för att börja om. Annars är ditt bus eller godis slut för iår."
                    } else {
                        document.getElementById("happen").innerHTML =
                            "BUUUUS!!"
                        document.getElementById("choices").innerHTML =
                            "Ert hemska bus är att kasta ett varsit ägg på dörren. Så kasta ägg!"
                    }
                } else {
                    if (derasVal > 40) {
                        document.getElementById("happen").innerHTML =
                            "GODIS!!"
                        document.getElementById("choices").innerHTML =
                            "Paret och taxen ger er några nävar läskiga karameller. Ni delar upp dem jämnt och springer hem med fulla påsar."
                        document.getElementById("thanks").innerHTML =
                            "Hoppas att du hade en rolig upplevelse, skriv start för att börja om. Annars är ditt bus eller godis slut för iår."
                    } else {
                        document.getElementById("happen").innerHTML =
                            "BUUUUS!!"
                        document.getElementById("choices").innerHTML =
                            "Ert hemska bus är att kasta ett varsit ägg på dörren. Så kasta ägg!"

                    }
                }
            } else {
                document.getElementById("happen").innerHTML =
                    "Föräldrarna är med så därför blir det inget bus, utan GODIS!!"
                if (apartment) {
                    document.getElementById("choices").innerHTML =
                        "Vampyrparet ger er äpplen att bita i. Ni går nu hem med färre hål i tänderna."
                    document.getElementById("thanks").innerHTML =
                        "Hoppas att du hade en rolig upplevelse, skriv start för att börja om. Annars är ditt bus eller godis slut för iår."
                } else {
                    document.getElementById("choices").innerHTML =
                        "Paret och taxen ger er några nävar läskiga karameller. Ni delar upp dem jämnt och springer hem med fulla påsar."
                    document.getElementById("thanks").innerHTML =
                        "Hoppas att du hade en rolig upplevelse, skriv start för att börja om. Annars är ditt bus eller godis slut för iår."
                }
            }
            clear();
            break;

        case "kasta ägg":
            throwEgg = parseInt(Math.random() * 100);
            console.log(throwEgg);

            if (apartment) {
                if (throwEgg > 50) {
                    document.getElementById("happen").innerHTML =
                        "Efter att sista ägget har kastats så kommer vampyrparet argt utspringandes och börjar jaga er!"
                    document.getElementById("choices").innerHTML =
                        "Dom kommer ikapp och ni får städa upp röran. Dom ringer era föräldrar som kommer och hämtar er, och där slutar årets sista bus."
                    document.getElementById("thanks").innerHTML =
                        "Hoppas att du hade en rolig upplevelse, skriv start för att börja om. Annars är ditt bus eller godis slut för iår."
                } else {
                    document.getElementById("happen").innerHTML =
                        "Efter att sista ägget har kastats så springer ni iväg ner för första trappan i lägenhetshuset, ingen verkar ha märkt om vad som har hänt. Ni är nöjda med årets bus och går hem med stora flin."
                    document.getElementById("choices").innerHTML =
                        none;
                    document.getElementById("thanks").innerHTML =
                        "Hoppas att du hade en rolig upplevelse, skriv start för att börja om. Annars är ditt bus eller godis slut för iår."
                }
            } else {
                if (throwEgg > 50) {
                    document.getElementById("happen").innerHTML =
                        "Efter att sista ägget har kastats så kommer det gamla paret argt utpringandes och taxen börjar jaga er!"
                    document.getElementById("choices").innerHTML =
                        "Taxen kommer ikapp och jagar tillbaka er till villan. Ni får städa upp röran och be om ursäkt till det äldre paret. Dom ringer era föräldrar som kommer och hämtar er och där slutar årets sista bus."
                    document.getElementById("thanks").innerHTML =
                        "Hoppas att du hade en rolig upplevelse, skriv start för att börja om. Annars är ditt bus eller godis slut för iår."
                } else {
                    document.getElementById("happen").innerHTML =
                        "Efter att sista ägget har kastats så springer ni runt husknuten, väntar där en stund för att se om kusten är klar. Ni hör några voff! Sedan ingenting mer. Ni kom undan med buset och går hem med stora flin."
                    document.getElementById("choices").innerHTML =
                        none;
                    document.getElementById("thanks").innerHTML =
                        "Hoppas att du hade en rolig upplevelse, skriv start för att börja om. Annars är ditt bus eller godis slut för iår."
                }
            }



    }









    /* Here is a small part of my testcode with "if" :-), i thougt "switch" was more fun to work with.
    
    if (inputText == "start") {
        gameStart();
    }

    if (inputText == "spöke") {
        document.getElementById("choices").innerHTML =
            "Du tar på dig ett gammalt vitt lakan och förvandlas till ett spöke. Vill ni gå med eller utan föräldrar?";

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