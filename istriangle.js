const inputs = document.querySelectorAll(".angle-inputs");
const isTrianglebtn = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#output-box");


isTrianglebtn.addEventListener("click",function isTriangle(){
   const sum = calculateAngleSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
   if(sum === 180){
    outputBox.innerText = "Yay! angles form a triangle.";
   }else{
    outputBox.innerText = "Angles doesn't form a triangle.";
   }
});

function calculateAngleSum(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}