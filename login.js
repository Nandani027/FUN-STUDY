
 function toggleForm(formId) {
      const form = document.getElementById(formId);
      const otherForm = formId === "teacherForm" ? document.getElementById("studentForm") : document.getElementById("teacherForm");

      // Toggle clicked form
      if (form.style.display === "block") {
        form.style.display = "none";
      } else {
        form.style.display = "block";
        otherForm.style.display = "none"; // close the other one
      }
    }
    
    
    // Simple credential check — you can change these
const teacherCredentials = {
  email: "@teacher",
  password: "teacher123"
};

const studentCredentials = {
  email: "@student",
  password: "student123"
};

function teacherLogin() {
  const email = document.getElementById("teacherEmail").value.trim();
  const password = document.getElementById("teacherPassword").value.trim();

  if (email === teacherCredentials.email && password === teacherCredentials.password) {
    // Redirect to teacher page
    window.location.href = "Dashboard.html"; 
  } else {
    alert("Invalid Teacher Email or Password");
  }
}

function studentLogin() {
  const email = document.getElementById("studentEmail").value.trim();
  const password = document.getElementById("studentPassword").value.trim();

  if (email === studentCredentials.email && password === studentCredentials.password) {
    // Redirect to student page
    window.location.href = "About Student.html"; 
  } else {
    alert("Invalid Student Email or Password");
  }
}
