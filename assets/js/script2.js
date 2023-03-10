var flag = 0;
function validateMail() {

    
    var emailId = document.getElementById('email').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailId == null || emailId ==" ") {
        document.getElementById("email-msg").innerHTML = "Email can't blank";
    } else if (emailId.match(mailformat)) {
        flag = flag+1;
        document.getElementById("email-msg").innerHTML = "";
    }
    else {
        document.getElementById("email-msg").innerHTML = "Please enter correct email id";
    } 
}

function validateName(){
    var name1 = document.getElementById('name').value;
    if (name1 == null || name1 == "") {
        document.getElementById("name-msg").innerHTML = "Name Can't be blank !";
    } else if (/^[a-zA-Z]+(\s{0,1}[a-zA-Z])*$/.test(name1)==false) {
        document.getElementById("name-msg").innerHTML = "Check the name!";
    } else {
        flag = flag+1;
        document.getElementById("name-msg").innerHTML = "";
    }
}

function validatePhone(){
    var phoneNum = document.getElementById('phone').value;
    if (phoneNum == null || phoneNum == "") {
        document.getElementById("phone-msg").innerHTML = "Mobile number can't blank";
    } else if(/^[0-9]*$/.test(phoneNum)==false){
        document.getElementById("phone-msg").innerHTML = "Please enter number";
    }else if (phoneNum.length < 10) {
        document.getElementById("phone-msg").innerHTML = "Mobile number should be 10 digit";
    }else if (phoneNum.length > 10) {
        document.getElementById("phone-msg").innerHTML = "Mobile number should be 10 digit";
    } else {
        flag = flag+1;
        document.getElementById("phone-msg").innerHTML = "";
    }
}

function validateMessage(){
    var messageEntered = document.getElementById('message').value;
    if (messageEntered == null || messageEntered == "") {
        document.getElementById("msg-msg").innerHTML = "Message can't blank";
    }else if(messageEntered.length<20){
        var len=20-messageEntered.length;
        document.getElementById("msg-msg").innerHTML = len + " more character required";
    } else {
        flag = flag+1;
        document.getElementById("msg-msg").innerHTML = "";
    }
}


function submitToSheet() {
    flag=0;
    validateName();
    validateMail();
    validatePhone();
    validateMessage();
    if (flag == 4) {
        $("#submit-form").submit((e) => {
            e.preventDefault()
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbyw-JI0p1G5lzDrzFVjig8tiJ3ld2p_ltYKlgJFFFsjX7zbMSDr-E8lw9ydvIEx6rgwTA/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                success: function (response) {
                    document.getElementById("submit-button-id").innerHTML = "Message sent successfully", document.getElementById("submit-button-id").style.backgroundColor = 'green'
                    setTimeout(function reloadFunc() { window.location.reload() }, 2000);
                },
                error: function (err) {
                    document.getElementById("submit-button-id").innerHTML = "Something Error", document.getElementById("submit-button-id").style.backgroundColor = 'red'

                }
            })
        })
    }
    else
    {
        $("#submit-form").submit(function(e) {
            e.preventDefault();
        });
    }
}


