var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume-output");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Capture input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("work-experience").value;
    var skills = document.getElementById("skills").value.split(",");
    // Generate dynamic resume content
    var resumeHTML = "\n    <h3>".concat(name, "</h3>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Education:</strong> ").concat(education, "</p>\n    <p><strong>Work Experience:</strong> ").concat(workExperience, "</p>\n    <p><strong>Skills:</strong> ").concat(skills.map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(", "), "</p>\n  ");
    // Insert the resume content into the output section
    resumeOutput.innerHTML = resumeHTML;
});
