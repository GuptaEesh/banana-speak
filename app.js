var btnSelector = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
var getinfo = document.querySelector("#get-info");

// var masterUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "	https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error Occured", error);
    alert("Something wrong with server try again after sometime");
}

function clickEventHandler() {
    var inputText = txtInput.value;
    fetch(getTranslatedUrl(inputText)).then(response => response.json()).then(json => {
        var trans = json.contents.translated;
        getinfo.innerText = trans;
    }).catch(errorHandler);

};
btnSelector.addEventListener("click", clickEventHandler);