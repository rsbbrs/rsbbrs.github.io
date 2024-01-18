// Takes the ID of the element clicked and uses it in the display of the new content.
function show(unit)
{
    document.getElementById('main_place').style.display = "none";
    document.getElementById('translator').style.display = "block";

    document.getElementById('unit-header').innerHTML = unitTitle(unit.id);
}

// Simply shows the original grid of units and hides the translator content.
function back()
{
    document.getElementById('main_place').style.display = "block";
    document.getElementById('translator').style.display = "none"

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