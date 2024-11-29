document.addEventListener("DOMContentLoaded", function () {
    var _a;
    function validateForm() {
        var form = document.getElementById("resumeForm");
        if (!form.checkValidity()) {
            alert("Please fill in all the required fields.");
            return false;
        }
        return true;
    }
    function generateResume() {
        var firstName = document.getElementById("FirstName").value;
        var lastName = document.getElementById("LastName").value;
        var email = document.getElementById("Email").value;
        var phone = document.getElementById("Phone").value;
        var address = document.getElementById("Address").value;
        var skills = document.getElementById("Skills").value;
        var education = document.getElementById("Education").value;
        var experience = document.getElementById("Experience").value;
        // Populate resume output
        document.getElementById("displayFirstName").innerText = firstName;
        document.getElementById("displayLastName").innerText = lastName;
        document.getElementById("displayEmail").innerText = email;
        document.getElementById("displayPhone").innerText = phone;
        document.getElementById("displayAddress").innerText = address;
        document.getElementById("displaySkills").innerText = skills;
        document.getElementById("displayEducation").innerText = education;
        document.getElementById("displayExperience").innerText = experience;
    }
    (_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        if (validateForm()) {
            generateResume();
        }
    });
    var Skills = document.getElementById("Skills");
    var Education = document.getElementById("Education");
    var Experience = document.getElementById("Experience");
    Skills === null || Skills === void 0 ? void 0 : Skills.addEventListener("input", function (event) {
        var updateSkills = (event === null || event === void 0 ? void 0 : event.target).innerText;
        console.log(updateSkills);
    });
    Education === null || Education === void 0 ? void 0 : Education.addEventListener("input", function (event) {
        var updateEducation = (event === null || event === void 0 ? void 0 : event.target).innerText;
        console.log(updateEducation);
    });
    Experience === null || Experience === void 0 ? void 0 : Experience.addEventListener("input", function (event) {
        var updateExperience = (event === null || event === void 0 ? void 0 : event.target).innerText;
        console.log(updateExperience);
    });
});
var shareablelink = document.getElementById("shareable-link");
shareablelink.addEventListener("click", function () {
});
var downloadyourPDF = document.getElementById("downloadyourPDF");
downloadyourPDF === null || downloadyourPDF === void 0 ? void 0 : downloadyourPDF.addEventListener("click", function () {
    window.print();
});
