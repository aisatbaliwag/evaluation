let next = document.querySelectorAll('.next-btn');
let back = document.querySelectorAll('.back-btn');
let teachingNextBtn = document.querySelector('#teaching-btn');
let managementNextBtn = document.querySelector('#management-btn');
let guidanceNextBtn = document.querySelector('#guidance-btn');
let answer1 = document.querySelector('#Q1');
let answer2 = document.querySelector('#Q2');
let answer3 = document.querySelector('#Q3');
let answer4 = document.querySelector('#Q4');
let answer5 = document.querySelector('#Q5');
let answer6 = document.querySelector('#Q6');
let answer7 = document.querySelector('#Q7');
let answer8 = document.querySelector('#Q8');
let answer9 = document.querySelector('#Q9');
let answer10 = document.querySelector('#Q10');
let answer11 = document.querySelector('#Q11');
let answer12 = document.querySelector('#Q12');
let answer13 = document.querySelector('#Q13');
let answer14 = document.querySelector('#Q14');
let answer15 = document.querySelector('#Q15');
let answer16 = document.querySelector('#Q16');
let answer17 = document.querySelector('#Q17');
let answer18 = document.querySelector('#Q18');
let answer19 = document.querySelector('#Q19');
let answer20 = document.querySelector('#Q20');
let submitBtn = document.querySelector('.submit-btn');
let instructor = document.querySelector('.instructor');
let section = document.querySelector('.section');
let average = document.querySelector('.ave');

let final1 = 0;
let final2 = 0;
let final3 = 0;
let final4 = 0;
let final5 = 0;
let final6 = 0;
let final7 = 0;
let final8 = 0;
let final9 = 0;
let final10 = 0;
let final11 = 0;
let final12 = 0;
let final13 = 0;
let final14 = 0;
let final15 = 0;
let final16 = 0;
let final17 = 0;
let final18 = 0;
let final19 = 0;
let final20 = 0;

function closeform(formname,backname) {
    document.getElementById(formname).classList.add('active');
    document.getElementById(backname).classList.remove('active');
}

teachingNextBtn.addEventListener('click', teachingNext);

function teachingNext (){
    let instructorInput = instructor.value;
    let sectionInput = section.value;
    let userAnswer1 = answer1.value;
    let userAnswer2 = answer2.value;
    let userAnswer3 = answer3.value;
    let userAnswer4 = answer4.value;
    let userAnswer5 = answer5.value;
    let userAnswer6 = answer6.value;
    let valid = true;

    if(userAnswer1 == '' || userAnswer2 == '' || userAnswer3 == '' || userAnswer4 == '' || userAnswer5 == '' || userAnswer6 == '' || instructorInput == '' || sectionInput == ''){
        alert('Please answer the following question')
        valid = false
    }
    if(valid){
        let verify = true;

        if(userAnswer1 > 5 || userAnswer2 > 5 || userAnswer3 >  5 || userAnswer4 > 5 || userAnswer5 > 5 || userAnswer6 > 5){
            alert('answer must be not higher than 5')
            verify = false;
        }
        if(userAnswer1 < 1 || userAnswer2 < 1 || userAnswer3 <  1 || userAnswer4 < 1 || userAnswer5 < 1 || userAnswer6 < 1){
            alert('answer must be higher than 0')
            verify = false;
        }
        if(verify){
            final1 = userAnswer1;
            final2 = userAnswer2;
            final3 = userAnswer3;
            final4 = userAnswer4;
            final5 = userAnswer5;
            final6 = userAnswer6;
            document.getElementById('management').classList.add('active');
            document.getElementById('teaching').classList.remove('active');
        }
    }
}

managementNextBtn.addEventListener('click', managementNext);

function managementNext(){
    let userAnswer7 = answer7.value;
    let userAnswer8 = answer8.value;
    let userAnswer9 = answer9.value;
    let userAnswer10 = answer10.value;
    let valid = true;

    if(userAnswer7 == '' || userAnswer8 ==  '' || userAnswer9 == '' || userAnswer10 == ''){
        alert('Please answer the following question');
        valid = false
    }
    if(valid){
        let verify = true;

        if(userAnswer7 > 5 || userAnswer8 > 5 || userAnswer9 >  5 || userAnswer10 > 5){
            alert('answer must be not higher than 5')
            verify = false;
        }
        if(userAnswer7 < 1 || userAnswer8 < 1 || userAnswer9 <  1 || userAnswer10 < 1){
            alert('answer must be higher than 0')
            verify = false;
        }
        if(verify){
            final7 = userAnswer7;
            final8 = userAnswer8;
            final9 = userAnswer9;
            final10 = userAnswer10;
            document.getElementById('guidance').classList.add('active');
            document.getElementById('management').classList.remove('active');
        }
    }
}

guidanceNextBtn.addEventListener('click',guidanceNext);

function guidanceNext(){
    let userAnswer11 = answer11.value;
    let userAnswer12 = answer12.value;
    let userAnswer13 = answer13.value;
    let userAnswer14 = answer14.value;
    let valid = true;

    if(userAnswer11 == '' || userAnswer12 == '' || userAnswer13 == '' || userAnswer14 == ''){
        alert('Please answer the following question')
        valid = false
    }
    if(valid){
        let verify = true;

        if(userAnswer11 > 5 || userAnswer12 > 5 || userAnswer13 >  5 || userAnswer14 > 5){
            alert('answer must be not higher than 5')
            verify = false;
        }
        if(userAnswer11 < 1 || userAnswer12 < 1 || userAnswer13 <  1 || userAnswer14 < 1){
            alert('answer must be higher than 0')
            verify = false;
        }
        if(verify){
            final11 = userAnswer11;
            final12 = userAnswer12;
            final13 = userAnswer13;
            final14 = userAnswer14;
            document.getElementById('personal').classList.add('active');
            document.getElementById('guidance').classList.remove('active');
        }
    }
}

submitBtn.addEventListener('click',submit);
function submit (e) {
    let userAnswer15 = answer15.value;
    let userAnswer16 = answer16.value;
    let userAnswer17 = answer17.value;
    let userAnswer18 = answer18.value;
    let userAnswer19 = answer19.value;
    let userAnswer20 = answer20.value;
    

    let valid = true;

    if(userAnswer15 == '' || userAnswer16 == '' || userAnswer17 == '' || userAnswer18 == '' || userAnswer19 == '' || userAnswer20 == ''){
        alert('Please answer the following question')
        valid = false
        e.preventDefault()
    }
    if(valid){
        let verify = true;

        if(userAnswer15 > 5 || userAnswer16 > 5 || userAnswer17 >  5 || userAnswer18 > 5 || userAnswer19 > 5 || userAnswer20 > 5){
            alert('answer must be not higher than 5')
            verify = false;
            e.preventDefault()
        }
        if(userAnswer15 < 1 || userAnswer16 < 1 || userAnswer17 <  1 || userAnswer18 < 1 || userAnswer19 < 1 || userAnswer20 < 1){
            alert('answer must be higher than 0')
            verify = false;
            e.preventDefault()
        }
        if(verify){
            final15 = userAnswer15;
            final16 = userAnswer16;
            final17 = userAnswer17;
            final18 = userAnswer18;
            final19 = userAnswer19;
            final20 = userAnswer20;
            // computedAverage = Number(final1) + Number(final2) + Number(final3) + Number(final4) + Number(final5) + Number(final6) + Number(final7) + Number(final8) + Number(final9) + Number(final10) + Number(final11) + Number(final12) + Number(final13) + Number(final14) + Number(final15) + Number(final16) + Number(final17) + Number(final18) + Number(final19) + Number(final20);
            // division =  computedAverage / 20;
            // average.value = division;
            submitBtn.style.display = "none"
            alert('THANK YOU');
        }
    }
}
let hiddenSwitch = document.querySelector('#hiddenSwitch');

if (hiddenSwitch.value == 'off'){
    teachingNextBtn.setAttribute("disabled", true);
}