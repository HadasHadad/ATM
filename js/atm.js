let i;
let card;
let screen;
let isLogin = false;
let loginTry = 0;


const btnD = document.querySelector(`button#opbut1`);
const btnW = document.querySelector(`button#opbut2`);
const btnC = document.querySelector(`button#opbut3`);
const btnP = document.querySelector(`button#opbut4`);
const btnR = document.querySelector(`button#opbut5`);
const btnQ = document.querySelector(`button#opbut6`);

const btn1 = document.querySelector(`button#button1`);
const btn2 = document.querySelector(`button#button2`);
const btn3 = document.querySelector(`button#button3`);
const btn4 = document.querySelector(`button#button4`);
const btn5 = document.querySelector(`button#button5`);
const btn6 = document.querySelector(`button#button6`);
const btn7 = document.querySelector(`button#button7`);
const btn8 = document.querySelector(`button#button8`);
const btn9 = document.querySelector(`button#button9`);
const btnDelete = document.querySelector(`button#delete`);
const btn0 = document.querySelector(`button#button0`);
const btnSpace = document.querySelector(`button#space`);

const btnCancel = document.querySelector(`button#cancel`);
const btnClear = document.querySelector(`button#clear`);
const btnEnter = document.querySelector(`button#enter`);


const img0 = document.getElementById("cardS");
const img1 = document.getElementById("cardM");
const img2 = document.getElementById("cardA");
const animatedCard = document.querySelector(`img#animated_card`);



btn0.addEventListener("click", () => { addNumInput(0) });
btn1.addEventListener("click", () => { addNumInput(1) });
btn2.addEventListener("click", () => { addNumInput(2) });
btn3.addEventListener("click", () => { addNumInput(3) });
btn4.addEventListener("click", () => { addNumInput(4) });
btn5.addEventListener("click", () => { addNumInput(5) });
btn6.addEventListener("click", () => { addNumInput(6) });
btn7.addEventListener("click", () => { addNumInput(7) });
btn8.addEventListener("click", () => { addNumInput(8) });
btn9.addEventListener("click", () => { addNumInput(9) });

btnDelete.addEventListener("click", deleteInput);
btnSpace.addEventListener("click", spaceInput)
btnCancel.addEventListener("click", cancel)
btnClear.addEventListener("click", clearInput)
btnEnter.addEventListener("click", enterClick)


btnD.addEventListener("click", deposit);
btnW.addEventListener("click", withdraw);
btnC.addEventListener("click", checkBalance);
btnP.addEventListener("click", changePin);
btnR.addEventListener("click", recipe);
btnQ.addEventListener("click", quit);

document.addEventListener("keydown", () => { keyPressed(Event) });

function keyPressed(event) {
    const key = event.key;
    if (key === "Enter") {
        enterClick();
    }
    if (key === "Delete") {
        deleteInput();
    }
}

let cust = [{
    Name: 'John Smith',
    pin: 1234,
    amount: 1000,
    image: img0,
},
{
    Name: 'Alin Miller',
    pin: 1604,
    amount: 2000,
    image: img1,
},
{
    Name: 'Cody Arias',
    pin: 1906,
    amount: 3000,
    image: img2,
}
]



img0.addEventListener("click", () => { init(0) });
img1.addEventListener("click", () => { init(1) });
img2.addEventListener("click", () => { init(2) });


function addNumInput(index) {

    if (screen === "welcome" || screen === "deposit" || screen === "withdrawInput" || screen === "pin") {

        const input = document.querySelector(`input`);
        input.value = input.value + index;




    }

    else if (screen === "withdraw") {

        switch (index) {
            case 1:
                document.querySelector(`input#wuthdraw`).innerHTML = "50";
                enterClick();
                break;
            case 2:
                document.querySelector(`input#wuthdraw`).innerHTML = "100";
                enterClick();
                break;
            case 3:
                document.querySelector(`input#wuthdraw`).innerHTML = "150";
                enterClick();
                break;
            case 4:
                document.querySelector(`input#wuthdraw`).innerHTML = "300";
                enterClick();
            case 5:
                content.innerHTML = '<h2>Enter the amount you want to withdraw</h2><input id="withdraw" type=number >'
                screen = "withdrawInput";
            default:
                alert("please choose from the menu options");
                screen = "withdrawInput";
                break;

        }
    }
}


function deleteInput() {
    if (screen === "welcome" || screen === "deposit" || screen === "withdraw" || screen === "pin") {
        const input = document.querySelector(`input`);
        input.value = input.value.slice(0, -1);
    } else {
        return;
    }


}

function spaceInput() {
    switch (screen) {
        case "welcome":
            break;

        default:
            break;
    }


}

function cancel() {
    if (isLogin) {
        login(cust[i].pin);
    }


}

function clearInput() {
    if (screen === "welcome" || screen === "deposit" || screen === "withdraw" || screen === "pin") {
        const input = document.querySelector(`input`);
        input.value = "";
    } else {
        return;
    }



}

function enterClick() {
    switch (screen) {
        case "welcome":
            const input = document.querySelector(`input#number`);
            if (parseInt(input.value) < 10000 && parseInt(input.value) > 999) {
                login(input.value);
            } else {
                alert("Please enter a valid pin");
            }
            break;
        case "deposit":
            const inputD = document.querySelector(`input#deposit`);
            if (parseInt(inputD.value) % 50 === 0 || parseInt(inputD.value) % 20 === 0) {
                cust[i].amount = cust[i].amount + parseInt(inputD.value);

                content.innerHTML = `<h2> The amount was added to your account </h2>`
                window.setTimeout(() => { login(cust[i].pin) }, 2000);
            }
            else {
                alert("This ATM accepts only 20, 50 or 100 bills");

            }
            inputD.value = "";
        case "withdrawInput":
            const inputW = document.querySelector(`input#withdraw`);
            if ((parseInt(inputW.value) % 50 === 0 || parseInt(inputW.value) % 20 === 0) && parseInt(inputW.value) <= cust[i].amount) {
                cust[i].amount = cust[i].amount - parseInt(inputW.value);
                content.innerHTML = `<h2> The amount was reduced from your account</h2>`
                window.setTimeout(() => { login(cust[i].pin) }, 2000);
            } else {
                if (parseInt(inputW.value) > cust[i].amount) {
                    alert("You don't have enough for this withdraw")

                } else {
                    alert("This ATM only have 20, 50 or 100 bills");

                }
            }
            inputW.value = "";
        case "pin":
            const inputP = document.querySelector(`input#pin`);
            if (parseInt(inputP.value) > 999 && parseInt(inputP.value) < 10000) {
                cust[i].pin = parseInt(inputP.value);
                content.innerHTML = `<h2>Your pin code was changed successfully</h2>`
                window.setTimeout(quit, 2000);

            } else {
                alert("please enter a valid pin");
            }
            inputP.value = "";
        default:
            break;
    }


}




function init(index) {

    i = index;
    card = cust[i].image;

    animatedCard.src = card.src;
    animatedCard.classList.add(`animated`);
    animatedCard.style.animationName = `example`;

    welcome()
}



function welcome() {
    screen = "welcome";
    console.log(cust[i].Name, cust[i].pin)

    content.innerHTML = '<form><h2>WELCOME, ' + cust[i].Name + '<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type=number max="9999">'


}


function login(pin) {

    if (parseInt(pin) === cust[i].pin) {
        isLogin = true;
        loginTry = 0;
        content.innerHTML = `<h1>Please select an operation</h1> 
        <h2>D - deposit <br>
        W - withdraw <br>
        C - check balance <br>
        R - recipe <br>
        P - change pin <br>
        Q - quit</h2>`;
        screen = "operationChoice";
    } else {
        loginTry++;
        if (loginTry < 3) {
            alert("Wrong pin. Try again");
        } else {
            alert("Too many tries");
            i = null;
            content.innerHTML = `<h2>INSERT CARD<br> BY CLICKING IT.</h2>`;
        }
    }

}

function deposit() {
    if (isLogin) {
        content.innerHTML = '<h2>Enter the amount you want to deposit</h2><input id="deposit" type=number >'
        screen = "deposit";
    } else {
        return;
    }
}

function withdraw() {
    if (isLogin) {
        content.innerHTML = `<h2>How much would you like to withdraw? <br> 1 - 50 <br> 2- 100 <br> 3 - 150 <br> 4- 300 <br> 5 - other<input id="withdraw" type=number ></h2>`

        screen = "withdraw";
    } else {
        return;
    }
}
function checkBalance() {
    if (isLogin) {

        content.innerHTML = `<h2>Your current balance is  <br> ${cust[i].amount} NIS</h2>`
        window.setTimeout(() => { login(cust[i].pin) }, 2000);
    } else {
        return;
    }
}
function changePin() {
    if (isLogin) {
        content.innerHTML = `<h2>Enter a new pin code with 4 digits</h2><input id="pin" type=number >`
        screen = "pin";
    } else {
        return;
    }
}
function quit() {
    isLogin = false;
    i = null;
    content.innerHTML = `<h2>Goodbye, Have a nice day</h2>`
    window.setTimeout(quitStatement, 2000)

}
function recipe() {
    if (isLogin) {
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth() + 1
        const day = d.getDate();
        let hour = d.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        }
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();


        content.innerHTML = `<h2>Hello ${cust[i].Name} <br> At this moment ${day}/${month}/${year}  ${hour}:${minutes}:${seconds}<br> your balance is ${cust[i].amount} NIS <br> Thank you for using this ATM</h2>`
        window.setTimeout(() => { login(cust[i].pin) }, 8000);
    } else {
        return;
    }
}

function quitStatement() {
    content.innerHTML = `<h2>INSERT CARD<br> BY CLICKING IT.</h2>`
}

