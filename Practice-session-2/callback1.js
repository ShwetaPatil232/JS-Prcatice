// Callback : means Passing function as Parameter to another Function

function formatCallbackFunction(text){

    return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatText(text, formatCallbackFunction){

    return typeof(formatCallbackFunction) === 'function' ? text.toUpperCase() : formatCallbackFunction(text);
}

const result = formatText('this is javascript');


console.log(result);