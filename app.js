const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex(step =>  {
    return step.classList.contains("active");
});

if (currentStep < 0) {
    currentStep = 0
    showCurrentStep();
}

const counter = document.querySelector(".counter");

multiStepForm.addEventListener("click", e => {
    let incrementor
    if (e.target.matches("[data-next]")) {
        incrementor = 1
        progressStep();
        previousStep();
        
    } else if (e.target.matches("[data-previous]")) {
        incrementor = -1
    }
    
    if (incrementor == null) return 

    const inputs = [...formSteps[currentStep].querySelectorAll("input")];
    const allValid = inputs.every(input => input.reportValidity())
    if (allValid) {
       currentStep += incrementor
       showCurrentStep(); 
       counter.innerHTML = `Step ${(currentStep +1)} of 3`

    }
    
});

function showCurrentStep () {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });
}


const circles = document.querySelectorAll(".circle");




function progressStep () {
    circles.forEach((circle, index) => {
        circle.classList.toggle("active", index === currentStep +1);
    });
}

function previousStep () {
    circles.forEach((circle, index) => {
      circle.classList.toggle("previous", index < currentStep +1);
});
}

const btnEl = document.querySelector("#submit");
const inputEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const userName = document.querySelector(".span-name");
const userEmail = document.querySelector(".span-email");




btnEl.addEventListener("click", () => {
    const nameValue = inputEl.value;
    const emailValue = emailEl.value;
    userName.innerHTML = `<span> ${nameValue}</span>`;
    userName.style.color = "white";
    userEmail.innerHTML = `<span> ${emailValue}</span>`;
    userEmail.style.color = "white";
    getValue();
});


const userTopic = document.querySelector(".user-topic");

function getValue () {

    arr = [];
    document.querySelectorAll('input[type=checkbox]:checked').forEach(el => arr.push(el.value));
    

    for(let i=0; i<arr.length; i++){
    let li = document.createElement("li");
    li.textContent = arr[i];
    userTopic.appendChild(li)
    li.style.fontWeight = "500";
    li.style.marginBottom = "0.75rem";
    li.style.fontSize = "0.9rem"
    }

}