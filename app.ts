const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Capture input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const workExperience = (document.getElementById("work-experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");

  // Generate dynamic resume content
  const resumeHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Work Experience:</strong> ${workExperience}</p>
    <p><strong>Skills:</strong> ${skills.map(skill => `<span>${skill.trim()}</span>`).join(", ")}</p>
  `;

  // Insert the resume content into the output section
  resumeOutput.innerHTML = resumeHTML;
});
