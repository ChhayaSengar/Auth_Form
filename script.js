const signUp = document.getElementById('signup');
const message = document.getElementById('message');


function redirectToProfile(){
    if(localStorage.getItem('token')){
        //here i'm adding the file
        location.href='./profile.html';
    }
    else{
        alert('Please Sign Up')
        location.href='./index.html';
    }

}

function redirectToSignUp(){
    //here i'm adding the file
    location.href='./index.html';
}


signUp.addEventListener('click',()=>{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
   

    if(name=='' || email==''){
        message.innerHTML=`<div style='color:red;'>Error : All the fields are mandatory</div>`;
        return;
    }

  
    //i'm creating obj
    let user = {
        name:name,
        email:email,
     }
   
    //here i'm coverting the user object into in string
    localStorage.setItem("user",JSON.stringify(user));
  
    
    let token = '';
    
    for (let i = 0; i < 16; i++) {
      token += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    
    
    localStorage.setItem('token', btoa(token));

    message.innerHTML=`<div style='color:blue;'>Successfully Signed Up!</div>`;

    location.href='./profile.html';
})