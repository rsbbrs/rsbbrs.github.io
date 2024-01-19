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
    var title;

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
            return "Undefined. You should not see this ever or I'm in trouble";
    }
}