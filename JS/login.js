const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const btnLogin = document.getElementById('btnLogin')
const massage = document.getElementById('message')

let data = [
    {   'username' : 'testUser',
        'password' : 'user123'
    },{
        'username' : 'testAdmin',
        'password' : 'admin123'
    }
]

function onClickBtn(){
    checkData()
}

function checkData(){
    massage.innerHTML = ''
    let username = usernameInput.value
    let password = passwordInput.value
    let validasi = true

    if(username === ''){
        validasi == false
        massage.innerHTML = '<div style="color:red; margin-top:1rem;">Isi Username Anda Terlebih Dahulu<div>'
    } 

    if(password === ''){
        validasi == false
        massage.innerHTML = '<div style="color:red; margin-top:1rem;">Isi Password Anda Terlebih Dahulu<div>'
    } 

    if((password === '') && (username === '')){
        validasi == false
        massage.innerHTML = '<div style="color:red; margin-top:1rem;">Isi Data Anda Terlebih Dahulu<div>'
    } 

    if(validasi){
//    let success = {'username':false, 'password':false};
    for(let i=0; i<data.length; i++){
        if(username == data[i]['username']){
 //          success.username = true
           if(password == data[i]['password']){
                document.location.href = 'dashboard.html'
 //           success.password = true
           } else {
            massage.innerHTML = '<div style="color:red; margin-top:1rem;">Cek kembali email & password Anda<div>'
            } 
        }
//    console.log(success)
//    if(success.username){
//        if(success.password){
//            document.location.href = 'dashboard.html'
//        }else{
//            massage.innerHTML = '<div style="color:red; margin-top:1rem;">Password Anda Salah<div>'
//        }
//    } else {
//        massage.innerHTML = '<div style="color:red; margin-top:1rem;">Username Anda Salah<div>'
//    }
        }
    }
}




