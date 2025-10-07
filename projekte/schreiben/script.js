 const wörter =["rechnen","sie rechnet","können","sie kann","die Schere","die Scheren","laut","der Name","die Namen",
        "die Klasse","die Klassen","machen","es macht","singen","er singt","das Buch","die Bücher","sagen","es sagt",
        "das Ei","die Eier","die Aufgabe","die Aufgaben","spielen","sie spielt","lernen","er lernt","schreiben","es schreibt",
        "die Tomate","die Tomaten",
    ]
    
   
    let zufall = Math.floor( Math.random()* wörter.length);

function speak (){
   
    let text1= `gebe das wort ein`;
    let test1 = new SpeechSynthesisUtterance();
    test1.text = text1;
    test1.lang = `de-DE`;
    test1.volume = 1;
    test1.rate = 1;
    test1.pitch = 2;

    let test2 = new SpeechSynthesisUtterance();
    test2.text = wörter[zufall];
    test2.lang = `de-DE`;
    test2.volume = 3;
    test2.rate = 1;
    test2.pitch = 2;

    speechSynthesis.speak(test1);
    speechSynthesis.speak(test2);
}
function main(){

 let speak = new SpeechSynthesisUtterance();
let input = document.getElementById("input").value

if(input === wörter[zufall]){

    document.getElementById("lösung").innerHTML =`du hast ${input} Richtig geschrieben weiter so :)`;
    document.getElementById("lösung").style.color = "green";
    document.getElementById("input").value = "";
   
    speak.text = `du hast ${input} Richtig geschrieben weiter so :)`;
    speak.lang = `de-DE`;
    speak.volume = 3;
    speak.rate = 1;
    speak.pitch = 2;

    speechSynthesis.speak(speak);
    setTimeout(() => {
    location.reload();
    }, 5000);

    

}else if(input === ""){
    document.getElementById("lösung").innerHTML =`Bitte schreibe das Richtige wort in das Textfeld `;
    document.getElementById("lösung").style.color = "red";
   

    speak.text = `Bitte schreibe das Richtige wort in das Textfeld`;
    speak.lang = `de-DE`;
    speak.volume = 3;
    speak.rate = 1;
    speak.pitch = 2;

    speechSynthesis.speak(speak);
    
}else if (input != wörter[zufall]){


    document.getElementById("lösung").innerHTML =`du hast ${input} Falsch geschrieben bitte versuche es noch einmal`;
    document.getElementById("lösung").style.color = "red";
    document.getElementById("input").value = "";
    
    
    speak.text = `du hast ${wörter[zufall]} Falsch geschrieben bitte versuche es noch einmal`;
    speak.lang = `de-DE`;
    speak.volume = 3;
    speak.rate = 1;
    speak.pitch = 2;

    speechSynthesis.speak(speak);
    

}

  



}
