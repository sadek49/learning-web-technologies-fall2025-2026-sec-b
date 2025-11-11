function validateName() {
    let name = document.getElementById("fullname").value.trim();
    let error = document.getElementById("error");
    let success = document.getElementById("successMessage");
    error.innerHTML = "";
    success.innerHTML = "";
    if (name === "") {
        error.innerHTML = "Name cannot be empty.";
        return false;
    }
    let words = name.split(" ").filter(w => w !== "");
    if (words.length < 2) {
        error.innerHTML = "Name must contain at least two words.";
        return false;
    }
    let firstChar = name.charAt(0);
    let isLetter = (firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= 'a' && firstChar <= 'z');
    if (!isLetter) {
        error.innerHTML = "Name must start with a letter.";
        return false;
    }
    for (let i = 0; i < name.length; i++) {
        let c = name.charAt(i);
        let isLetter = (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z');
        let isSpace = c === ' ';
        let isDot = c === '.';
        let isDash = c === '-';
        if (!(isLetter || isSpace || isDot || isDash)) {
            error.innerHTML = "Name can only contain letters, dot, dash, and spaces.";
            return false;
        }
    }
    success.innerHTML = "Name validation passed ✔";
    success.style.color = "green";
    return true;
}

function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let err = document.getElementById("emailError");
    let success = document.getElementById("emailSuccess");
    err.innerHTML = "";
    success.innerHTML = "";
    if (email === "") {
        err.innerHTML = "Email cannot be empty.";
        return false;
    }
    let atPos = email.indexOf("@");
    let lastAtPos = email.lastIndexOf("@");
    let dotPos = email.lastIndexOf(".");
    if (atPos === -1 || atPos !== lastAtPos) {
        err.innerHTML = "Email must contain one @ symbol.";
        return false;
    }
    if (atPos === 0 || atPos === email.length - 1) {
        err.innerHTML = "@ cannot be the first or last character.";
        return false;
    }
    if (dotPos === -1 || dotPos < atPos) {
        err.innerHTML = "A dot (.) must appear after @.";
        return false;
    }
    if (dotPos === email.length - 1) {
        err.innerHTML = "Dot (.) cannot be the last character.";
        return false;
    }
    if (dotPos - atPos < 2) {
        err.innerHTML = "There must be at least one character between @ and dot.";
        return false;
    }
    if (atPos < 1) {
        err.innerHTML = "Invalid email format.";
        return false;
    }
    success.innerHTML = "Email validation passed ";
    return true;
}

function validateGenderPage3() {
    let radios = document.getElementsByName("gender");
    let err = document.getElementById("genderError");
    let success = document.getElementById("genderSuccess");
    err.innerHTML = "";
    success.innerHTML = "";
    let selected = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        err.innerHTML = "Please select a gender.";
        return false;
    }
    success.innerHTML = "Gender selected ✔";
    return true;
}

function validateDatePage4() {
    let dd = document.getElementById("dd").value.trim();
    let mm = document.getElementById("mm").value.trim();
    let yyyy = document.getElementById("yyyy").value.trim();
    let err = document.getElementById("dateError");
    let success = document.getElementById("dateSuccess");
    err.innerHTML = "";
    success.innerHTML = "";
    if (dd === "" || mm === "" || yyyy === "") {
        err.innerHTML = "All fields are required.";
        return false;
    }
    let day = Number(dd);
    let month = Number(mm);
    let year = Number(yyyy);
    if (isNaN(day) || day < 0 || day > 31) {
        err.innerHTML = "Day must be between 0 and 31.";
        return false;
    }
    if (isNaN(month) || month < 1 || month > 12) {
        err.innerHTML = "Month must be between 1 and 12.";
        return false;
    }
    if (isNaN(year) || year < 1900 || year > 2016) {
        err.innerHTML = "Year must be between 1900 and 2016.";
        return false;
    }
    success.innerHTML = "Date validation passed ✔";
    return true;
}

function validatePage5() {
    let items = document.getElementsByName("edu");
    let err = document.getElementById("p5Error");
    let success = document.getElementById("p5Success");
    err.innerHTML = "";
    success.innerHTML = "";
    let selected = false;
    for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        err.innerHTML = "Please select at least one education level (SSC, HSC, or BSc).";
        return false;
    }
    success.innerHTML = "Validation passed ✔";
    return true;
}

function validateBloodGroup() {
    let bg = document.getElementById("bloodGroup").value;
    let error = document.getElementById("bloodError");
    error.innerHTML = "";
    if (bg === "") {
        error.innerHTML = "Please select a blood group.";
        return false;
    }
    error.style.color = "green";
    error.innerHTML = "Valid blood group selected.";
    return true;
}

function validateUserInfo() {
    let userId = document.getElementById("userId").value.trim();
    let picture = document.getElementById("pictureFile").value.trim();
    let userIdError = document.getElementById("userIdError");
    let pictureError = document.getElementById("pictureError");
    userIdError.innerHTML = "";
    pictureError.innerHTML = "";
    if (userId === "" || Number(userId) <= 0) {
        userIdError.innerHTML = "User ID must be a positive number.";
        return false;
    }
    if (picture === "") {
        pictureError.innerHTML = "Please upload a picture.";
        return false;
    }
    userIdError.style.color = "green";
    userIdError.innerHTML = "Valid User ID.";
    pictureError.style.color = "green";
    pictureError.innerHTML = "Picture uploaded.";
    return true;
}

function validatePage8() {
    document.getElementById("finalMessage").innerHTML = "";
    if (!validateName()) return false;
    if (!validateEmail()) return false;
    if (!validateGenderPage3()) return false;
    if (!validateDatePage4()) return false;
    if (!validatePage5()) return false;
    if (!validateBloodGroup()) return false;
    if (!validateUserInfo()) return false;
    document.getElementById("finalMessage").innerHTML = "✅ All validations passed successfully!";
    return true;
}
