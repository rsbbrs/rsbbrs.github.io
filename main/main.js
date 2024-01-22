// Stores copies of the main and translator HTML divs.
var main = document.getElementById('main');
var translator = document.getElementById('translator');

// Takes the ID of the element clicked and uses it in the display of the new content.
function show(unit)
{
    // Clones the main div, exchanges it with the translator div, then stores the clone for later use.
    const mainClone = main.cloneNode(true);
    main.replaceWith(translator);
    main = mainClone;

    // Uses the unit to set the title in the HTML tag.
    document.getElementById('unit-header').innerHTML = unitTitle(unit.id);
}

// Restores the units section when the button is clicked.
function back()
{
    // Clones the translator div, exchanges it with the main div, then stores the clone for later use.
    const translatorClone = translator.cloneNode(true);
    translator.replaceWith(main);
    translator = translatorClone;
}

// Returns the title for the appropriate unit clicked in the page.
function unitTitle(unitID)
{
    switch(unitID)
    {
        case "unit1":
            return "Unidad 1";
        case "unit2":
            return "Unidad 2";
        case "unit3":
            return "Unidad 3";
        case "unit4":
            return "Unidad 4";
        case "unit5":
            return "Unidad 5";
        case "unit6":
            return "Unidad 6";
        case "unit7":
            return "Unidad 7";
        case "unit8":
            return "Unidad 8";
        default:
            return "Undefined. You should never see this or I'm in trouble";
    }
}

// Checks the typed text with the correct answer.
function submitButton() 
{
    // Gets the text from the textbox on the page.
    const text = document.getElementById('tArea').value.toLowerCase();

    if(text === "hello world")
        alert("Correct!");
    else
        alert("Incorrect");
}

// Sets the text on the textbox based on the value of the button clicked.
// Adds the special spanish characters to the text area.
function addText(buttonVal)
{
    let text = document.getElementById('tArea');
    text.value += buttonVal.value;
    text.focus();
}

// Changes the values of the special spanish characters values to uppercase or lowercase.
// This is dependent on the font change button value.
function changeFont() 
{
    let myVal = document.getElementById('font-change');
    
    if(myVal.value === "Uppercase")
    {
        document.getElementById('á').value = 'Á';
        document.getElementById('é').value = 'É';
        document.getElementById('í').value = 'Í';
        document.getElementById('ó').value = 'Ó';
        document.getElementById('ú').value = 'Ú';
        document.getElementById('ñ').value = 'Ñ';
        myVal.value = "Lowercase";
    }  
    else
    {
        document.getElementById('á').value = 'á';
        document.getElementById('é').value = 'é';
        document.getElementById('í').value = 'í';
        document.getElementById('ó').value = 'ó';
        document.getElementById('ú').value = 'ú';
        document.getElementById('ñ').value = 'ñ';
        myVal.value = "Uppercase";
    }

    document.getElementById('tArea').focus();
}