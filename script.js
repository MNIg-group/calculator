function addCharacter (character)
{
    const result = document.getElementById('result');
    result.value += character;
}

function calculate ()
{
    const result = document.getElementById('result');
    const expression = result.value;

    try
    {
        const calculation = new Function('return ' + expression);
        result.value = calculation();
    } catch (error)
    {
        result.value = 'Error';
    }
}

function clear ()
{
    const result = document.getElementById('result');
    result.value = '';
}

function removeLast ()
{
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function changeSign ()
{
    const result = document.getElementById('result');
    result.value = result.value * -(1);
}