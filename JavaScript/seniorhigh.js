let seniorHighJlt = document.querySelector('.seniorHigh');
let seniorHighTeacher = document.querySelector('.seniorhigh-teachers');

function setActiveTeacher(teacherInitials,teachersFullName){
    let teacherValueHolder = document.querySelector('#teacherValue');
    let teacherName = document.querySelector('#teacherName');
    teacherValueHolder.value = teacherInitials;
    teacherName.value = teachersFullName;
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
