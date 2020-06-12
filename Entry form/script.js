function submit() {
  const surName = document.getElementById("surName").value;
  const givenName = document.getElementById("givenName").value;
  const gender = document.getElementById("gender").value;
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  const placeOfResidence = document.getElementById("placeOfResidence").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const skills = document.getElementById("skills").value;
  const projects = document.getElementById("projects").value;

  const data = {
    surName,
    givenName,
    gender,
    dateOfBirth,
    placeOfResidence,
    email,
    phone,
    skills,
    projects,
  };
  //   http
  //     .postHttp("./", data)
  //     .then((response) => {
  //       if (response.students) {
  //       }
  //     })
  //     .catch((err) => console.log(err))
  //     .finally((done) => {});
}

// const errorElement = document.getElementById("error");
// const form = document.getElementById("form");

let surNameSuccess = false;
let givenNameSuccess = false;
let genderSuccess = false;
let dateOfBirthSuccess = false;
let placeOfResidenceSuccess = false;
let emailSuccess = false;
let phoneSuccess = false;
let skillsSuccess = false;
let projectsSuccess = false;
const submitButton = document.getElementById("submitButton");

function finalValidation() {
  if (
    surName &&
    givenName &&
    gender &&
    dateOfBirth &&
    placeOfResidence &&
    email &&
    phone &&
    skills &&
    projects
  ) {
    submitButton.disabled = false;
    document.getElementById("register").classList.remove("deactivated");
  } else {
    submitButton.disabled = true;
    document.getElementById("register").classList.add("deactivated");
  }
}

function validateName(name) {
  var re = /^[a-zA-Z ]*$/;
  return re.test(String(name).toLowerCase());
}

function surNameValidator() {
  const surName = document.getElementById("surName").value;
  finalValidation();
  if (!validateName(surName)) {
    document.getElementById("surName").classList.remove("surName-valid");
    document.getElementById("surName").classList.add("surName-invalid");
    surNameSuccess = false;
  } else {
    document.getElementById("surName").classList.remove("surName-invalid");
    document.getElementById("surName").classList.add("surName-valid");
    surNameSuccess = true;
  }
}
