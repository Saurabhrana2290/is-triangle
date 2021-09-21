const sides = document.querySelectorAll(".sides");
const calculateHypotenuseButton = document.querySelector("#calculate-hypotenuse-btn");
const output = document.querySelector("#output");

function sumOfSquaresOfSides(a,b){
    const sum = a*a + b*b;
    return sum;
}

function calculateHypotenuse(){
    const sumOfSquares = sumOfSquaresOfSides(Number(sides[0].value),Number(sides[1].value));
    const hypotenuseLength = Math.sqrt(sumOfSquares);
    output.innerText = `The hypotenuse length is ${hypotenuseLength}`;
}

calculateHypotenuseButton.addEventListener("click",calculateHypotenuse);