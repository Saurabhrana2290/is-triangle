const sides = document.querySelectorAll(".inputs");
const areaBtn = document.querySelector("#calculate-area-btn");
const outputArea = document.querySelector("#output-area");


function calculateArea(){
    const areaTriangle = 0.5 * Number(sides[0].value) * Number(sides[1].value);
    outputArea.innerText = `The area of Triangle is ${areaTriangle}`;
}

areaBtn.addEventListener("click",calculateArea);