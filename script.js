"use strict";

let male = document.querySelector(".male");
let head = document.querySelector(".head");
let upperBody = document.querySelector(".upper_body");
let rightArm = document.querySelector(".right_arm");
let rightArmTop = document.querySelector(".right_arm_top");
let rightArmBottom = document.querySelector(".right_arm_bottom");
let lowerBody = document.querySelector(".lower_body");
let leftLeg = document.querySelector(".left_leg");
let rightLeg = document.querySelector(".right_leg");

let bodyElements = document.querySelectorAll(".body_element");

let isWaving = false; // Variable to keep track of the wave state

male.addEventListener("click", waveFunction);

function waveFunction() {
  if (isWaving) {
    // Revert changes
    male.style.backgroundColor = "transparent";
    male.style.border = "2px solid #999FB7";
    for (let index = 0; index < bodyElements.length; index++) {
      bodyElements[index].style.backgroundColor = "#999FB7";
    }

    upperBody.style.transform = "rotate(0)";
    head.style.transform = "translateX(0)";
    lowerBody.style.transform = "translateX(0) scaleY(1)";
    rightArm.style.transform = "translateX(0) translateY(0) rotate(0)";
    rightArmBottom.style.transform = "rotate(0)";
    rightArmTop.style.transform = "scaleY(1)";
  } else {
    // Apply changes
    male.style.backgroundColor = "#0077FF";
    male.style.border = "none";
    for (let index = 0; index < bodyElements.length; index++) {
      bodyElements[index].style.backgroundColor = "#FFFFFF";
    }

    upperBody.style.transform = "rotate(-5deg)";
    head.style.transform = "translateX(-2px)";
    lowerBody.style.transform = "translateX(1px) scaleY(1.1)";
    rightArm.style.transform = "translateX(-2px) translateY(2px) rotate(-110deg)";
    rightArmBottom.style.transform = "rotate(-15deg)";
    rightArmTop.style.transform = "scaleY(1.1)";
  }

  isWaving = !isWaving; // Toggle the waving state
}
