let btnAdmin = document.querySelector('.admin-btn');

btnAdmin.addEventListener('click', login);
function login(){
    let password = 'aisatbaliwagadmin';
    let inputPassword = prompt("please enter the password");
    let valid = true;

    if(inputPassword == ''){
        alert('Please enter the password')
        valid = false
    }
    else if(inputPassword !== password){
        alert('password is not correct')
        valid = false
    }
    if(valid){
        document.querySelector('#adminPage').submit();
    }
}
