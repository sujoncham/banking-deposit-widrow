
//login section

let submitBtn = document.getElementById('submit-btn');
let banking = document.getElementById('banking');
let entryList = document.getElementById('entrylist');
banking.style.display = "none";
entryList.style.display = "none";
submitBtn.addEventListener('click', function(){
    let loginDiv = document.getElementById('login');
    let account = document.getElementById('account').value;
    let password = document.getElementById('password').value;
    // loginDiv.style.display = "none";
    let text;
    if(account==="" && password===""){
        text = "Account Number is Required";
    }else if(account==="sujon" && password==="1234"){
        loginDiv.style.display = "none";
        banking.style.display = "block";
        entryList.style.display = "block";
        
    }else{
        text = "Something is Wrong !";
    }
    document.getElementById('alert-text').innerText = text;
});


