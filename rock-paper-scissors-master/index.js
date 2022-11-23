let contest = Array.from(document.getElementsByClassName("powers")[0].children);
let user = document.getElementsByClassName("user1")[0];
let btn = document.getElementById("btn");
let computer = document.getElementsByClassName("housepower")[0];
let scorearea = document.getElementById("scorearea");
let point = document.getElementById("point");
let scorediv = document.getElementsByClassName("contest")[0];
let power = document.getElementsByClassName("powers")[0];
let playground = document.getElementsByClassName("playground")[0];
let rule = document.getElementsByClassName("ruleimg")[0];
let score = 0;

let rbtn = document.getElementById("rulebtn");
rbtn.addEventListener('click',(e)=>{
rule.classList.toggle("showItem");


})



const result = (cpupower, userpower) => {

    if (cpupower == userpower) {
        point.innerHTML = score;
        scorearea.innerHTML = `TIE`


    } else if (userpower == "lizard") {

        if (cpupower == "paper" | "spock") {

            score++;
            scorearea.innerHTML = ` YOU WIN `;
            point.innerHTML = score;
        } else {
            score--;
            scorearea.innerHTML = ` YOU LOOSE`;
            point.innerHTML = score;
        }


    } else if (userpower == "spock") {

        if (cpupower == "scissor" | "rock") {
            score++;
            scorearea.innerHTML = ` YOU WIN `;
            point.innerHTML = score;
        } else {
            score--;
            scorearea.innerHTML = ` YOU LOOSE`;
            point.innerHTML = score;
        }


    } else if (userpower == "scissor") {

        if (cpupower == "paper" | "lizard") {
            score++;
            scorearea.innerHTML = ` YOU WIN `;
            point.innerHTML = score;
        } else {
            score--;
            scorearea.innerHTML = ` YOU LOOSE`;
            point.innerHTML = score;
        }


    } else if (userpower == "paper") {

        if (cpupower == "rock" | "spock") {
            score++;
            scorearea.innerHTML = ` YOU WIN `;
            point.innerHTML = score;
        } else {
            score--;
            scorearea.innerHTML = ` YOU LOOSE`;
            point.innerHTML = score;
        }


    } else if (userpower == "rock") {

        if (cpupower == "lizard" || "scissor") {
            score++;
            scorearea.innerHTML = ` YOU LOOSE`;
            point.innerHTML = score;
        } else {
            score--;
            scorearea.innerHTML = ` YOU WIN `;
            point.innerHTML = score;
        }


    }


}




contest.forEach(element => {
  
    element.addEventListener('click', (e) => {


        let randomno = Math.floor(Math.random() * 4);
        let cpu = contest[randomno];
      
        let css = getComputedStyle(element);
        let cssc = getComputedStyle(cpu)

        let cpupower = cpu.getAttribute("class");
        let userpower = element.getAttribute("class");



        scorediv.style.display = "block";
       power.style.visibility = "hidden";
       playground.style.visibility = "hidden";
        user.innerHTML = element.innerHTML;
        user.style.borderColor = (css["borderColor"]);
        computer.innerHTML = cpu.innerHTML;
        computer.style.borderColor = (cssc["borderColor"]);

        result(cpupower, userpower);
        btn.addEventListener('click', () => {
            scorediv.style.display = "none";
           
            power.style.visibility = "visible";
            playground.style.visibility = "visible";
        })




    })
});



