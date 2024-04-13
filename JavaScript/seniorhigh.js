<<<<<<< HEAD
let seniorHighJlt = document.querySelector('.seniorHigh');
let seniorHighTeacher = document.querySelector('.seniorhigh-teachers');

function setActiveTeacher(teacherInitials){
    let teacherValueHolder = document.querySelector('#teacherValue');
    teacherValueHolder.value = teacherInitials;
}

let adminSection = document.querySelector('.admin-section');
let seniorHighTeachersBtn = document.querySelector('.senior-btn');
let seniorHighTeachers = document.querySelector('.seniorhigh-teachers');
let adminSectionBtn = document.querySelector('.admin-section-btn');
seniorHighTeachersBtn.addEventListener('click', openSeniorHigh);
function openSeniorHigh (){
    adminSectionBtn.style.display = "none";
    seniorHighTeachers.style.display = 'block';
}
=======
let seniorHighJlt = document.querySelector('.seniorHigh');
let seniorHighTeacher = document.querySelector('.seniorhigh-teachers');

function setActiveTeacher(teacherInitials){
    let teacherValueHolder = document.querySelector('#teacherValue');
    teacherValueHolder.value = teacherInitials;
}

let adminSection = document.querySelector('.admin-section');
let seniorHighTeachersBtn = document.querySelector('.senior-btn');
let seniorHighTeachers = document.querySelector('.seniorhigh-teachers');
let adminSectionBtn = document.querySelector('.admin-section-btn');
seniorHighTeachersBtn.addEventListener('click', openSeniorHigh);
function openSeniorHigh (){
    adminSectionBtn.style.display = "none";
    seniorHighTeachers.style.display = 'block';
}
>>>>>>> c589743 (add teacher,update and delete)
