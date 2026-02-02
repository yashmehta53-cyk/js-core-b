const para = document.getElementsByClassName('para');

para[0].textContent = "THIS is now updated paragraph";
para[1].style.color = "green";

console.log(para);

const para2 = document.querySelectorAll('.para');

para2[0].textContent = "THIS is now updated paragraph";
para2[1].style.color = "green";

para2.forEach((ele) => {
    console.log(ele.textContent);
});

const button = document.querySelector('.btn');

function message() {
    alert("You have clicked the button");
}

button.addEventListener('click', message);

const input = document.querySelector('.input');

input.addEventListener('keyup', function (event) {
    console.log(event.key);
});
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("Form submitted ");

    alert("Submit event triggered!");
});