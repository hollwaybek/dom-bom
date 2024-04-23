// let number = document.querySelector(".random_number")

// number.addEventListener('click', () => {
//     let random = Math.round(Math.random() * 100)
//     let newH1 = document.createElement('h1')
//     newH1.textContent = random
//     document.body.appendChild(newH1)


// })


// let numberButton = document.querySelector(".random_number");

// numberButton.addEventListener('click', () => {
//     let randomNumber = Math.round(Math.random() * 100);
//     let newH1 = document.createElement('h1');
//     newH1.textContent = randomNumber;
//     document.body.appendChild(newH1); 
// });


// function generateRandomNumber() {
//     var randomNumber = Math.floor(Math.random() * 100); 
//     document.getElementById("randomNumber").innerHTML = "Tasodifiy Son: " + randomNumber; 
// }

// window.onload = generateRandomNumber;



let button = document.querySelector(".random_btn")
let random = document.querySelector(".random__number")


button.addEventListener('click', () => {
    // let newNUm = document.createElement('p')
    random.textContent = Math.round(Math.random() * 100)
})