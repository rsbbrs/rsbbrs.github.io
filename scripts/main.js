// Stores copies of the main and translator HTML divs.
var main = document.getElementById('main');
var translator = document.getElementById('translator');

// Shared variables used in the script.
var unitMap;
var values;
var isCorrect;
var index = 0;

// Takes the ID of the element clicked and uses it in the display of the new content.
function show(unit)
{
    // Clones the main div, exchanges it with the translator div, then stores the clone for later use.
    const mainClone = main.cloneNode(true);
    main.replaceWith(translator);
    main = mainClone;

    // Uses the unit to set the title in the HTML tag.
    document.getElementById('unit-header').innerHTML = unitTitle(unit.id);

    // Gets the appropriate text array or null if invalid.
    let validUnit = unitChooser(unit.id);

    // Creates the translator map and the array of values for displaying on the label.
    if(validUnit)
    {
        unitMap = new Map(validUnit);
        values = Array.from(unitMap.values());
        document.getElementById('tAreaLabel').innerHTML = values[index];
    }
    else
    {
        unitMap = null;
        values = null;
        document.getElementById('tAreaLabel').innerHTML = "Error: You should not see this, or I'm in trouble!";
    }

    // Disables enter key from refreshing the page.
    // Executes the submit button function instead.
    let text = document.getElementById('tArea');
    text.addEventListener('keypress', function(e) {
        if(e.key === "Enter")
        {
            e.preventDefault();
            submitForm()
        }
    });

    // Clears the text area and sets focus on it.
    text.value = "";
    text.focus();
}

// Restores the units section when the button is clicked.
function back()
{
    index = 0;

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
// Displays the correct popup box.
function submitForm() 
{
    // Gets the text from the label above the text area.
    let label = document.getElementById('tAreaLabel');

    // Gets the text from the textbox on the page.
    let textarea = document.getElementById('tArea');

    // Only executes if the textarea has a value on it.
    if(textarea.value)
    {
        // Only searches the map if it's been created.
        if(unitMap)
        {
            if(label.innerText === unitMap.get(textarea.value))
            {
                // Show the popup window with the "Correct" answer configuration.
                document.getElementById('popupHeader').innerHTML = "Correct!";
                document.getElementById('popup').classList.add("show");
                document.getElementById('popup-content').style.backgroundColor = "lime";
                document.getElementById('answer-image').src = "images/Correct.png";

                isCorrect = true;
            }
            else
            {
                // Show the popup window with the "Incorrect" answer configuration.
                document.getElementById('popupHeader').innerHTML = "Incorrect. Try Again!";
                document.getElementById('popup').classList.add("show");
                document.getElementById('popup-content').style.backgroundColor = "red";
                document.getElementById('answer-image').src = "images/Incorrect.png";

                isCorrect = false;
            }
        }
    }

    // Sets the focus on the popup window close button.
    document.getElementById('closePopup').focus();
}

// Closes the popup window and displays the next question if answered correctly.
function closePopupBox()
{
    document.getElementById('popup').classList.remove('show');
    let label = document.getElementById('tAreaLabel');
    let textArea = document.getElementById('tArea');

    // Next question displayed if it was answered correctly.
    // If it's the last question, then display the completed message.
    if(isCorrect)
    {
        if(index === values.length - 1)
            label.innerHTML = "Unit completed! Please Return to the Units Page.";
        else
            label.innerHTML = values[++index];

        textArea.value = "";
    }

    textArea.focus();
}

// Sets the text on the textbox based on the value of the button clicked.
// Adds the special spanish characters to the text area.
function addText(buttonVal)
{
    let text = document.getElementById('tArea');
    const start = text.selectionStart;
    const end = text.selectionEnd;
    text.value = text.value.substring(0, start) + buttonVal.value + text.value.substring(end, text.value.length);
    text.setSelectionRange(start + 1, end + 1);
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

/*********************************/
/*                               */
/* Vocab vairables and functions */
/*                               */
/*********************************/

const unit1 = [
    ['hola', 'hello'],
    ['buenos días', 'good morning'],
    ['buenas tardes', 'good afternoon'],
    ['buenas noches', 'good evening, good night'],
    ['¿Cómo te llamas?', 'what is your name?'],
    ['me llamo', 'my name is'],
    ['mucho gusto', 'nice to meet you'],
    ['¿Y tú?', 'and you?'],
    ['¿Cómo estás?', 'how are you?'],
    ['estoy bien', 'I\'m fine'],
    ['más o menos', 'regular'],
    ['mal', 'bad'],
    ['hasta luego', 'see you later'],
    ['hasta mañana', 'see you tomorrow'],
    ['adiós', 'goodbye']
];

const unit2 = [
    ['a', 'a'],
    ['be', 'b'],
    ['ce', 'c'],
    ['de', 'd'],
    ['e', 'e'],
    ['efe','f'],
    ['ge', 'g'],
    ['hache', 'h'],
    ['i', 'i'],
    ['jota', 'j'],
    ['ka', 'k'],
    ['ele', 'l'],
    ['eme', 'm'],
    ['ene', 'n'],
    ['eñe', 'ñ'],
    ['o', 'o'],
    ['pe', 'p'],
    ['cu', 'q'],
    ['ere', 'r'],
    ['ese', 's'],
    ['te', 't'],
    ['u', 'u'],
    ['ve', 'v'],
    ['doble ve', 'w'],
    ['equis', 'x'],
    ['igriega', 'y'],
    ['zeta', 'z']
];

const unit3 = [
    ['el perro', 'dog'],
    ['el gato', 'cat'],
    ['el chancho', 'pig'],
    ['el pato', 'duck'],
    ['la vaca', 'cow'],
    ['el caballo', 'horse'],
    ['el cuy', 'guinea pig'],
    ['la ardilla', 'squirrel'],
    ['el oso', 'bear'],
    ['el venado', 'deer'],
    ['la serpiente', 'snake'],
    ['la iguana', 'iguana'],
    ['la llama', 'llama'],
    ['la alpaca', 'alpaca']
];

const unit4 = [
    ['España', 'Country'],
    ['Madrid', 'Capital of Spain'],
    ['Europe', 'Location'],
    ['four', 'Number of languages spoken in Spain'],
    ['soccer', 'Favorite sport'],
    ['flamenco', 'Traditional dance'],
    ['Antonio Banderas', 'Voice in the movie Puss in Boots'],
    ['La Tomatina festival', 'Biggest tomato fight in the world'],
    ['San Fermin festival', 'Running of the bulls'],
    ['Paella', 'Traditional dish']
];

const unit5 = [
    ['rojo', 'red'],
    ['amarillo', 'yellow'],
    ['azul', 'blue'],
    ['rosado', 'pink'],
    ['morado', 'purple'],
    ['verde', 'green'],
    ['café', 'brown'],
    ['blanco', 'white'],
    ['negro', 'black'],
    ['anaranjado', 'orange'],
    ['turquesa', 'turquoise'],
    ['guinda', 'maroon'],
    ['plateado', 'silver'],
    ['dorado', 'gold']
];

const unit6 = [
    ['cero', 'zero'],
    ['uno', 'one'],
    ['dos', 'two'],
    ['tres', 'three'],
    ['cuatro', 'four'],
    ['cinco', 'five'],
    ['seis', 'six'],
    ['siete', 'seven'],
    ['ocho', 'eight'],
    ['nueve', 'nine'],
    ['diez', 'ten'],
    ['once', 'eleven'],
    ['doce', 'twelve'],
    ['trece', 'thirteen'],
    ['catorce', 'fourteen'],
    ['quince', 'fifteen']
];

const unit7 = [
    ['Perú', 'country'],
    ['Lima', 'Capital of Perú'],
    ['South America', 'Location'],
    ['three', 'Number of languages spoken in Perú'],
    ['soccer and surfing', 'favorite sports'],
    ['Paddington', 'Movie inspired in the Peruvian Jungle'],
    ['Costa', 'Natural region in the coastal plain'],
    ['Sierra', 'Natural region in the mountain range'],
    ['Selva', 'Natural region in the jungle'],
    ['ceviche', 'Main Peruvian dish']
];

const unit8 = [
    ['Lunes', 'Monday'],
    ['Martes', 'Tuesday'],
    ['Miércoles', 'Wednesday'],
    ['Jueves', 'Thursday'],
    ['Viernes', 'Friday'],
    ['Sábado', 'Saturday'],
    ['Domingo', 'Sunday'],
    ['Enero', 'January'],
    ['Febrero', 'February'],
    ['Marzo', 'March'],
    ['Abril', 'April'],
    ['Mayo', 'May'],
    ['Junio', 'June'],
    ['Julio', 'July'],
    ['Agosto', 'August'],
    ['Septiembre', 'September'],
    ['Octubre', 'October'],
    ['Noviembre', 'November'],
    ['Diciembre', 'December']
];

// Sets the image for the particular unit and returns the unit map.
function unitChooser(unit)
{
    switch(unit)
    {
        case "unit1":
            document.getElementById('unit-img').src = "images/Greetings.png";
            return unit1;
        case "unit2":
            document.getElementById('unit-img').src = "https://placehold.co/500x500";
            return unit2;
        case "unit3":
            document.getElementById('unit-img').src = "https://placehold.co/500x500";
            return unit3;
        case "unit4":
            document.getElementById('unit-img').src = "https://placehold.co/500x500";
            return unit4;
        case "unit5":
            document.getElementById('unit-img').src = "https://placehold.co/500x500";
            return unit5;
        case "unit6":
            document.getElementById('unit-img').src = "https://placehold.co/500x500";
            return unit6;
        case "unit7":
            document.getElementById('unit-img').src = "https://placehold.co/500x500";
            return unit7;
        case "unit8":
            document.getElementById('unit-img').src = "https://placehold.co/500x500";
            return unit8;
        default:
            document.getElementById('unit-img').src = "https://placehold.co/500x500";
            return null;
    }
}