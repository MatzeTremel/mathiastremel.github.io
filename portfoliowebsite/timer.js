const startDate = new Date("2025-04-27T00:00:00");

function updateTimer(){

    const now = new Date();
    const elapsedTime = now -startDate;


    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
    const hours = Math.floor(elapsedTime / 60 / 60) % 24;

    const totalDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(totalDays / 365);
    const remainingDays = totalDays % 365;
    const months = Math.floor(remainingDays / 30);
    const days = remainingDays % 30;
    
    document.getElementById("timer").innerHTML =
        `<h4>Programmierer seit:</h4> ${years} Jahre, ${months} Monate, ${days} Tage, ` +
        `${hours} Stunden, ${minutes} Minuten, ${seconds} Sekunden.`;

}

setInterval(updateTimer, 1000);