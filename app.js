var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btm-translate");
var textoutput = document.querySelector("#text-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"


function translatedUrl (textGiven){
   var urlTranslate = serverUrl+ "?" + "text=" + textGiven.value ;
   return(urlTranslate);

}

function errorHandler(error){
    console.log("Error occured : ",error);
    alert("error occured : "+error+"\n please try after some time");


}


btnTranslate.addEventListener("click",function(){
    console.log("Button clicked");
    var urlFinal = translatedUrl(textInput);
    console.log(urlFinal);
    fetch(urlFinal)
    .then(Response => Response.json())
    .then(json =>{ textoutput.innerText = json.contents.translated })
    .catch(errorHandler);
})
