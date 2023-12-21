let internships = [];
let projects = [];
let skills = [];
let PORs = [];

function addNewIntern() {
  // Get values from the form
  let title = document.getElementById("internTitleF").value;
  let description = document.getElementById("interndescriptionF").value;
  let year = document.getElementById("yearinternF").value;

  // Create new internship object and add to array
  internships.push({
    title: title,
    description: description,
    year: year
  });

  // Update the display list
  updateInternshipList();

  // Clear form fields
  document.getElementById("internTitleF").value = "";
  document.getElementById("interndescriptionF").value = "";
  document.getElementById("yearinternF").value = "";
}

function updateInternshipList() {
  // Get the list element
  let internList = document.getElementById("internlistT");

  // Clear existing list
  internList.innerHTML = "";

  // Loop through each internship in the array
  for (let internship of internships) {
    // Create new list item element
    let newListItem = document.createElement("li");

    // Create elements for title, description, and year with appropriate content
    let titleElement = document.createElement("p");
    titleElement.classList.add("fw-bold", "my-0");
    titleElement.textContent = internship.title;
    newListItem.appendChild(titleElement);

    let yearElement = document.createElement("p");
    yearElement.classList.add("text-sm-end", "fw-bold", "my-0");
    yearElement.textContent = internship.year;
    newListItem.appendChild(yearElement);

    let descriptionElement = document.createElement("p");
    descriptionElement.classList.add("text-sm", "p-0", "my-0", "justify-content");
    descriptionElement.textContent = internship.description;
    newListItem.appendChild(descriptionElement);

    // Append the new list item to the existing list
    internList.appendChild(newListItem);
  }
}

// Initialize an empty array to store projects


// Function to add a new project
function addNewProject() {
  // Get values from the form
  let title = document.getElementById("ProjectTitleF").value;
  let description = document.getElementById("ProjectdescriptionF").value;
  let year = document.getElementById("yearprojectF").value;

  // Create a new project object and add it to the array
  projects.push({
    title: title,
    description: description,
    year: year
  });

  // Update the display list
  updateProjectList();

  // Clear form fields
  document.getElementById("ProjectTitleF").value = "";
  document.getElementById("ProjectdescriptionF").value = "";
  document.getElementById("yearprojectF").value = "";
}

// Function to update the project list on the webpage
function updateProjectList() {
  // Get the list element
  let projectList = document.getElementById("projectList");

  // Clear existing list
  projectList.innerHTML = "";

  // Loop through each project in the array
  for (let project of projects) {
    // Create a new list item element
    let newListItem = document.createElement("li");

    // Create elements for title, description, and year with appropriate content
    let titleElement = document.createElement("p");
    titleElement.classList.add("fw-bold", "my-0");
    titleElement.textContent = project.title;
    newListItem.appendChild(titleElement);

    let yearElement = document.createElement("p");
    yearElement.classList.add("text-sm-end", "fw-bold", "my-0");
    yearElement.textContent = project.year;
    newListItem.appendChild(yearElement);

    let descriptionElement = document.createElement("p");
    descriptionElement.classList.add("text-sm", "p-0", "my-0", "justify-content");
    descriptionElement.textContent = project.description;
    newListItem.appendChild(descriptionElement);

    // Append the new list item to the existing list
    projectList.appendChild(newListItem);
  }
}

// Initialize an empty array to store skills

// Function to add a new skill
function addNewSkill() {
  // Get values from the form
  let skillType = document.getElementById("skilltypeF").value;
  let skillDescription = document.getElementById("skilldescriptionF").value;

  // Create a new skill object and add it to the array
  skills.push({
    type: skillType,
    description: skillDescription
  });

  // Update the display list
  updateSkillList();

  // Clear form fields
  document.getElementById("skilltypeF").value = "";
  document.getElementById("skilldescriptionF").value = "";
}

// Function to update the skill list on the webpage
function updateSkillList() {
  // Get the list element
  let skillList = document.getElementById("skillList");

  // Clear existing list
  skillList.innerHTML = "";

  // Loop through each skill in the array
  for (let skill of skills) {
    // Create a new list item element
    let newListItem = document.createElement("li");

    // Create elements for skill type and description with appropriate content
    let skillTypeElement = document.createElement("p");
    skillTypeElement.classList.add("fw-bold", "my-0", "p-0");
    skillTypeElement.textContent = skill.type;
    newListItem.appendChild(skillTypeElement);

    let skillDescriptionElement = document.createElement("p");
    skillDescriptionElement.classList.add("text-sm", "p-0", "my-0", "justify-content");
    skillDescriptionElement.textContent = skill.description;
    newListItem.appendChild(skillDescriptionElement);

    // Append the new list item to the existing list
    skillList.appendChild(newListItem);
  }
}


// Initialize an empty array to store PORs


// Function to add a new Position of Responsibility (POR)
function addNewPOR() {
  // Get values from the form
  let PORName = document.getElementById("PORNameF").value;
  let PORDescription = document.getElementById("PORdescriptionF").value;
  let PORDuration = document.getElementById("PORdurationF").value;

  // Create a new POR object and add it to the array
  PORs.push({
    name: PORName,
    description: PORDescription,
    duration: PORDuration
  });

  // Update the display list
  updatePORList();

  // Clear form fields
  document.getElementById("PORNameF").value = "";
  document.getElementById("PORdescriptionF").value = "";
  document.getElementById("PORdurationF").value = "";
}

// Function to update the POR list on the webpage
function updatePORList() {
  // Get the list element
  let PORList = document.getElementById("PORList");

  // Clear existing list
  PORList.innerHTML = "";

  // Loop through each POR in the array
  for (let POR of PORs) {
    // Create a new list item element
    let newListItem = document.createElement("li");

    // Create elements for POR name, duration, and description with appropriate content
    let PORNameElement = document.createElement("p");
    PORNameElement.classList.add("fw-bold", "my-0", "p-0");
    PORNameElement.textContent = POR.name;
    newListItem.appendChild(PORNameElement);

    let PORDurationElement = document.createElement("p");
    PORDurationElement.classList.add("text-sm-end", "fw-bold", "my-0");
    PORDurationElement.textContent = "[" + POR.duration + "]";
    newListItem.appendChild(PORDurationElement);

    let PORDescriptionElement = document.createElement("p");
    PORDescriptionElement.classList.add("text-sm", "p-0", "my-0", "justify-content");
    PORDescriptionElement.textContent = POR.description;
    newListItem.appendChild(PORDescriptionElement);

    // Append the new list item to the existing list
    PORList.appendChild(newListItem);
  }
}


function generateCV() {
    // console.log("generating cv");
    //personal details
    let nameField = document.getElementById("nameF").value;
    document.getElementById("nameT").innerHTML = nameField;
    let GradField = document.getElementById("CGradF").value;
    document.getElementById("CGradT").innerHTML = GradField;
    document.getElementById("BranchT").innerHTML = document.getElementById("BranchF").value;
    document.getElementById("emailT").innerHTML = document.getElementById("emailF").value;
    document.getElementById("contactT").innerHTML = document.getElementById("contactF").value;
    // document.getElementById("emailT").innerHTML = document.getElementById("gitF").value;


    // linking for the git and linkedin accounts remaining here
    // document.getElementById("gitT").innerHTML = document.getElementById("gitF").value;
    
    //academic details
    //B.Tech
    document.getElementById("CPIT").innerHTML = document.getElementById("CPIF").value;
    document.getElementById("YOJT").innerHTML = document.getElementById("YOJF").value;
    //12th
    document.getElementById("institutetwelveT").innerHTML = document.getElementById("institutetwelveF").value;
    document.getElementById("markstwelveT").innerHTML = document.getElementById("markstwelveF").value;
    document.getElementById("yeartwelveT").innerHTML = document.getElementById("yeartwelveF").value;

    //10th
    document.getElementById("institutetenT").innerHTML = document.getElementById("institutetenF").value;
    document.getElementById("markstenT").innerHTML = document.getElementById("markstenF").value;
    document.getElementById("yeartenT").innerHTML = document.getElementById("yeartenF").value;

    //Internships
    document.getElementById("internTitleT").innerHTML=document.getElementById("internTitleF").value;
    document.getElementById("interndescriptionT").innerHTML=document.getElementById("interndescriptionF").value;
    document.getElementById("yearinternT").innerHTML=document.getElementById("yearinternF").value;

    // //adding another intern
    // let internlist=document.getElementById("interns")

    // let str="";

    // for (let intern of internlist){
    //     str=str+`<li> ${intern.value} </li>`;

    // } 

    // document.getElementById("internlistT").innerHTML=str;

    // let internList = document.getElementById("internlistT");
    // internList.innerHTML = ""; // Clear the existing content

    // // Loop through internship data and create list items
    // for (let internship of internships) {
    //     let newListItem = document.createElement("li");

    //     let titleElement = document.createElement("p");
    //     titleElement.classList.add("col-8", "fw-bold", "my-0");
    //     titleElement.textContent = internship.title;
    //     newListItem.appendChild(titleElement);

    //     let yearElement = document.createElement("p");
    //     yearElement.classList.add("col-2", "fw-bold", "my-0")
    //     yearElement.textContent = internship.year;
    //     newListItem.appendChild(yearElement);

    //     let descriptionElement = document.createElement("p");
    //     descriptionElement.textContent = internship.description;
    //     newListItem.appendChild(descriptionElement);

        

    //     internList.appendChild(newListItem);
    // }


    //projects
    document.getElementById("ProjectTitleT").innerHTML=document.getElementById("ProjectTitleF").value;
    document.getElementById("ProjectdescriptionT").innerHTML=document.getElementById("ProjectdescriptionF").value;
    document.getElementById("yearprojectT").innerHTML=document.getElementById("yearprojectF").value;

    //skills
    document.getElementById("skilltypeT").innerHTML=document.getElementById("skilltypeF").value;
    document.getElementById("skilldescriptionT").innerHTML=document.getElementById("skilldescriptionF").value;

    //PORs
    document.getElementById("PORNameT").innerHTML=document.getElementById("PORNameF").value;
    document.getElementById("PORdurationT").innerHTML=document.getElementById("PORdurationF").value;
    document.getElementById("PORdescriptionT").innerHTML=document.getElementById("PORdescriptionF").value;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("CVtemplate").style.display="block";
    
    
}

// function downloadPDF() {
//     // Select the element containing the content you want to convert to PDF
//     const element = document.getElementById("CVtemplate");

//     // Create a new jsPDF instance
//     const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4',
//     });

//     // Convert the HTML element to a canvas using html2canvas
//     html2canvas(element).then((canvas) => {
//         // Convert the canvas to an image data URL
//         const dataURL = canvas.toDataURL('image/png');

//         // Add the image to the PDF
//         pdf.addImage(dataURL, 'PNG', 0, 0, 210, 297); // A4 size: 210 x 297 mm

//         // Save the PDF
//         pdf.save('Generated_PDF.pdf');
//     });
// }

window.onload = function () {
    const downloadButton = document.getElementById("download");

    downloadButton.addEventListener("click", () => {
        const cv = document.getElementById("Cvtemplate");
        
        // Set A4 size (210mm x 297mm) for the HTML element
        cv.style.width = "210mm";
        cv.style.height = "297mm";
        cv.style.margin="2px";

        html2pdf().from(cv).save();
    });
};


setInterval(generateCV, 100);
