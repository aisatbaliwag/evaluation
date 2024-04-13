<<<<<<< HEAD
let SwitchBTn = document.querySelector('.evaluationSwitch');
let dbSwitch = document.querySelector('.mainSwitch');
let switchSign = document.querySelector('.switchSign');
let secure = document.querySelector('.instructor');


SwitchBTn.addEventListener('click', line)
function line () {
    

    if (dbSwitch.value == "on"){
        dbSwitch.value = "off";
        switchSign.value = "Open Evaluation"
        document.querySelector('#formSwitch').submit();
        console.log(dbSwitch.value);
    }
    else if (dbSwitch.value == "off"){
        dbSwitch.value = "on";
        switchSign.value = "Close Evaluation"
        document.querySelector('#formSwitch').submit();
        console.log(dbSwitch.value);
    }
}
=======
let SwitchBTn = document.querySelector('.evaluationSwitch');
let dbSwitch = document.querySelector('.mainSwitch');
let switchSign = document.querySelector('.switchSign');
let secure = document.querySelector('.instructor');


SwitchBTn.addEventListener('click', line)
function line () {
    

    if (dbSwitch.value == "on"){
        dbSwitch.value = "off";
        switchSign.value = "Open Evaluation"
        document.querySelector('#formSwitch').submit();
        console.log(dbSwitch.value);
    }
    else if (dbSwitch.value == "off"){
        dbSwitch.value = "on";
        switchSign.value = "Close Evaluation"
        document.querySelector('#formSwitch').submit();
        console.log(dbSwitch.value);
    }
}
>>>>>>> c589743 (add teacher,update and delete)
