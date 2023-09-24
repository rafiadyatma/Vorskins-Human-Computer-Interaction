let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    event.preventDefault();

    let newsletter = confirm("Are you agree to receive message from VOrskins?");

    if(newsletter == false){
        return;
    }else{

        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;
        let preferences = document.getElementById("preferences").value;
        let phoneNum = document.getElementById("phoneNum").value;
        let address = document.getElementById("address").value;
        let password = document.getElementById("password").value;
        let verify = document.getElementById("verify").value;
        
        let errorTxt = document.getElementById("error");
        if(firstName.length == 0){
            errorTxt.innerHTML = "First name must be filled";

            errorTxt.style.display = "block";
        }
        else if(lastName.length == 0){
            errorTxt.innerHTML = "Last name must be filled";

            errorTxt.style.display = "block";

        }
        else if(email.length == 0){
            errorTxt.innerHTML = "Email must be filled";

            errorTxt.style.display = "block";
        }
        else if(date.length == 0){
            errorTxt.innerHTML = "birth date must be filled";

            errorTxt.style.display = "block";
        }
        else if(preferences.length == 0){
            errorTxt.innerHTML = "Preferences must be filled";

            errorTxt.style.display = "block";
        }
        else if(parseInt(phoneNum) <= 0){
            errorTxt.innerHTML = "Phone number must be filled";

            errorTxt.style.display = "block";
        }
        else if(password != verify){
            errorTxt.innerHTML = "Password is invalid";

            errorTxt.innerHTML = "block";
        }

        let firstNameTxt = document.getElementById("firstNameTxt");
        firstNameTxt.innerHTML += "Welcome, " + firstName;

        let lastNameTxt = document.getElementById("lastNameTxt");
        lastNameTxt.innerHTML += "Name : " + firstName + " " + lastName;
        
        let emailTxt = document.getElementById("emailTxt");
        emailTxt.innerHTML += "Email : " + email;

        let dateTxt = document.getElementById("dateTxt");
        dateTxt.innerHTML += "Birth date : " + date;

        let preferencesTxt = document.getElementById("preferencesTxt");
        preferencesTxt.innerHTML += "Preferences : " + preferences;

        let phoneNumTxt = document.getElementById("phoneNumTxt");
        phoneNumTxt.innerHTML += "Phone Number : " + phoneNum;

        let addressTxt = document.getElementById("addressTxt");
        addressTxt.innerHTML += "Address : " + address;
    }
})