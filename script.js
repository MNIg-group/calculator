let solutionValue = null;
let inputResult = null;
const buttons = document.querySelectorAll('.button');
const solution = document.getElementById('solution');
const result = document.getElementById('inputResult');


function updateSolution ()
{
    solution.value = solutionValue;
    if (solutionValue.length > 9)
    {
        solution.value = solutionValue.substring(0, 9);
    }
}

function clickButton ()
{
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[ i ].addEventListener('click', function ()
        {
            if (buttons[ i ].classList.contains('operand') || buttons[ i ].classList.contains('operator'))
            {
                addCharacter(buttons[ i ].value);

            } else if (buttons[ i ].classList.contains('equals'))
            {
                finalResult();

            } else if (buttons[ i ].classList.contains('dot'))
            {
                addCharacter(buttons[ i ].value);

            }
        }
        )
    }
}

function removeLast ()
{
    result.value = result.value.slice(0, -1);
}
function emptyResult ()
{
    result.value = null;
    solution.value = null;
}
function changeSign ()
{

    result.value = result.value * -(1);

}
function addCharacter (character)
{
    result.value += character;
}

function finalResult ()
{
    let output = String(result.value);
    solutionValue = (Function("return " + output)());

    updateSolution();
}


clickButton();
