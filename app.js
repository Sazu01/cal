"use strict";

const result =  document.querySelector("#input_preview h1")

// BTN
const btn_wrapper = document.querySelector(".Input_area")

const btn_AC = document.querySelector("div.number.fx.numberAC")
const btn_Per = document.querySelector("div.number.fx.numberPer")
const btn_D = document.querySelector("div.number.fx.numberD")
const btn_x = document.querySelector("div.number.fx.numberx")

const btn_7 = document.querySelector("div.number.fx.number7")
const btn_8 = document.querySelector("div.number.fx.number8")
const btn_9 = document.querySelector("div.number.fx.number9")
const btn_M = document.querySelector("div.number.fx.numberM")

const btn_4 = document.querySelector("div.number.fx.number4")
const btn_5 = document.querySelector("div.number.fx.number5")
const btn_6 = document.querySelector("div.number.fx.number6")
const btn_Plus = document.querySelector("div.number.fx.numberP")

const btn_1 = document.querySelector("div.number.fx.number1")
const btn_2 = document.querySelector("div.number.fx.number2")
const btn_3 = document.querySelector("div.number.fx.number3")
const btn_E = document.querySelector("div.number.numberE")

const btn_Dot = document.querySelector("div.number.fx.numberDot")
const btn_0 = document.querySelector("div.number.fx.number0")
const btn_Icon = document.querySelector("div.number.fx.Icon")


btn_wrapper.addEventListener("click", e => {
    const inputs = new Array();

    if(e.target === btn_AC){
        // AC
        console.log(`btn_AC`)
    }else if (e.target === btn_Per){
        console.log(`btn_Per`)
    }else if (e.target === btn_D){
        console.log(`btn_D`)
    }else if (e.target === btn_x){
        console.log(`btn_x`)
    }else if (e.target === btn_7){
        console.log(`btn_7`)
    }else if (e.target === btn_8){
        console.log(`btn_8`)
    }else if (e.target === btn_9){
        console.log(`btn_9`)
    }else if (e.target === btn_M){
        console.log(`btn_M`)
    }else if (e.target === btn_4){
        console.log(`btn_4`)
    }else if (e.target === btn_5){
        console.log(`btn_5`)
    }else if (e.target === btn_6){
        console.log(`btn_6`)
    }else if (e.target === btn_Plus){
        console.log(`btn_Plus`)
    }else if (e.target === btn_1){
        console.log(`btn_1`)
    }else if (e.target === btn_2){
        console.log(`btn_2`)
    }else if (e.target === btn_3){
        console.log(`btn_3`)
    }else if (e.target === btn_E){
        console.log(`btn_E`)
    }else if (e.target === btn_Dot){
        console.log(`btn_Dot`)
    }else if (e.target === btn_0){
        console.log(`btn_0`)
    }else if (e.target === btn_Icon){
        console.log(`btn_Icon`)
    }
})