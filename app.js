const result = document.querySelector("#input_preview h1")
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

function calculate(input) {

    var f = {
        add: '+'
        , sub: '-'
        , div: '/'
        , mlt: '*'
        , mod: '%'
        , exp: '^'
    };

    f.ooo = [[[f.mlt], [f.div], [f.mod], [f.exp]],
    [[f.add], [f.sub]]];

    input = input.replace(/[^0-9%^*\/()\-+.]/g, '');

    var output;
    for (var i = 0, n = f.ooo.length; i < n; i++) {

        var re = new RegExp('(\\d+\\.?\\d*)([\\' + f.ooo[i].join('\\') + '])(\\d+\\.?\\d*)');
        re.lastIndex = 0; 

        while (re.test(input)) {
            output = calc_internal(RegExp.$1, RegExp.$2, RegExp.$3);
            if (isNaN(output) || !isFinite(output)) return output;
            input = input.replace(re, output);
        }
    }

    return output;

    function calc_internal(a, op, b) {
        a = a * 1; b = b * 1;
        switch (op) {
            case f.add: return a + b; break;
            case f.sub: return a - b; break;
            case f.div: return a / b; break;
            case f.mlt: return a * b; break;
            case f.mod: return a % b; break;
            case f.exp: return Math.pow(a, b); break;
            default: null;
        }
    }
}

let temp = ""

btn_wrapper.addEventListener("click", e => {
    if (e.target === btn_AC) {
        console.log(`btn_AC`)
        temp = ""
    }else if (e.target === btn_Icon) {
        console.log(`btn_Icon`)
        temp = temp.slice(0, -1)
    }else if (e.target === btn_Per) {
        console.log(`btn_Per`)
        temp += "%"
    }else if (e.target === btn_M) {
        console.log(`btn_M`)
        temp += "-"
    }else if (e.target === btn_Plus) {
        console.log(`btn_Plus`)
        temp += "+"
    }else if (e.target === btn_x) {
        console.log(`btn_x`)
        temp += "*"
    }else if (e.target === btn_D) {
        console.log(`btn_D`)
        temp += "/"
    }else if (e.target === btn_E) {
        if (!(temp === "")){
            temp = calculate(temp)
        }
    }else if (e.target === btn_1) {
        console.log(`btn_1`)
        temp += "1"
    }else if (e.target === btn_2) {
        console.log(`btn_2`)
        temp += "2"
    }else if (e.target === btn_3) {
        console.log(`btn_3`)
        temp += "3"
    }else if (e.target === btn_4) {
        console.log(`btn_4`)
        temp += "4"
    }else if (e.target === btn_5) {
        console.log(`btn_5`)
        temp += "5"
    }else if (e.target === btn_6) {
        console.log(`btn_6`)
        temp += "6"
    }else if (e.target === btn_7) {
        console.log(`btn_7`)
        temp += "7"
    }else if (e.target === btn_8) {
        console.log(`btn_8`)
        temp += "8"
    }else if (e.target === btn_9) {
        console.log(`btn_9`)
        temp += "9"
    }else if (e.target === btn_0) {
        console.log(`btn_0`)
        temp += "0"
    }else if (e.target === btn_Dot) {
        console.log(`btn_Dot`)
        temp += "."
    }
    result.innerHTML = `${temp}`
    console.log(temp);
})
