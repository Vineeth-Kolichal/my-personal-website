



var flag = 0;
function validateform() {

    var name1 = document.getElementById('name').value;
    var emailId = document.getElementById('email').value;
    var phoneNum = document.getElementById('phone').value;
    var messageEntered = document.getElementById('message').value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name1 == null || name1 == "") {
        document.getElementById("name-msg").innerHTML = "Name Can't be blank !";
    } else if (name1.length < 3) {
        document.getElementById("name-msg").innerHTML = "Name should have 3 letter minimum !";
    } else {
        flag = 1
        document.getElementById("name-msg").innerHTML = "";
    }

    if (emailId == null || emailId == "") {
        document.getElementById("email-msg").innerHTML = "Email can't blank";
    } else if (emailId.match(mailformat)) {
        flag = 2
        document.getElementById("email-msg").innerHTML = "";
    }
    else {
        document.getElementById("email-msg").innerHTML = "Please enter correct email id";
    }

    if (phoneNum == null || phoneNum == "") {
        document.getElementById("phone-msg").innerHTML = "phone number can't blank";
    } else if (phoneNum.length < 10) {
        document.getElementById("phone-msg").innerHTML = "Phone number should be 10 digit";
    } else {
        flag = 3
        document.getElementById("phone-msg").innerHTML = "";
    }

    if (messageEntered == null || messageEntered == "") {
        document.getElementById("msg-msg").innerHTML = "Message can't blank";
    } else {
        flag = 4;
        document.getElementById("msg-msg").innerHTML = "";
    }
}

function submitToSheet() {
    if (flag == 4) {
        $("#submit-form").submit((e) => {
            e.preventDefault()
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbyw-JI0p1G5lzDrzFVjig8tiJ3ld2p_ltYKlgJFFFsjX7zbMSDr-E8lw9ydvIEx6rgwTA/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                success: function (response) {
                    document.getElementById("submit-button-id").innerHTML = "Message sent successfully", document.getElementById("submit-button-id").style.backgroundColor = 'green'
                    window.location.reload()
                },
                error: function (err) {
                    document.getElementById("submit-button-id").innerHTML = "Something Error", document.getElementById("submit-button-id").style.backgroundColor = 'red'

                }
            })
        })
    }
}