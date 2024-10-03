let internships = [];
let projects = [];
let projectsHtml = [];
let skills = [];
let PORs = [];
let achievements = [];




// to show add this for project
document.getElementById("internaddbutton").classList.remove("hidden");

function addNewIntern() {
  // Get values from the form
  let title = document.getElementById("internTitleF").value;
  let info = document.getElementById("internInfoF").value;
 
  let link = document.getElementById("internLinkF").value;
  let description = document.getElementById("interndescriptionF").value;
  let description2 = document.getElementById("interndescription2F").value;
  let year = document.getElementById("yearinternF").value;

  // Create new internship object and add to array
  internships.push({
    title: title,
    info: info,
    link: link,
    description: description,
    description2: description2,
    year: year
  });

  // Update the display list
  updateInternshipList();

  // Clear form fields
  document.getElementById("internTitleF").value = "";
  document.getElementById("internInfoF").value = "";
  document.getElementById("internLinkF").value = "";
  document.getElementById("interndescriptionF").value = "";
  document.getElementById("interndescription2F").value = "";
  document.getElementById("yearinternF").value = "";


  const internsEdit = document.getElementById("internsEdit");
  
  internsEdit.innerHTML += `
            <div class="border bg-white p-2 rounded" style="height: auto;">
              <div class="row align-items-center">
                <div class="col-md-8">
                  <h5 class="mb-0">Intership Title: <strong id="${title}${year}">${title} ${year}</strong></h5>
                </div>
                <div class="col-md-4 text-right">
                    <button class="btn btn-primary btn-sm" id="${title}" onclick="editinternsList('${title}')">Edit</button>
                </div>
            </div>
        </div>
        <br>
                      `;
      document.getElementById("interneditbuttonComment").classList.remove('hidden');
}


// function to edit internship data
function editinternsList(internTitle){
  const foundintern = internships.find(internship => internship.title === internTitle);
  document.getElementById("internaddbutton").classList.add("hidden");
  if (foundintern) {
    // Set the values of the input fields
    document.getElementById("internTitleF").value = foundintern.title || "";
    document.getElementById("internInfoF").value = foundintern.info || "";
    document.getElementById("internLinkF").value = foundintern.link || "";
    document.getElementById("interndescriptionF").value = foundintern.description || "";
    document.getElementById("interndescription2F").value = foundintern.description2 || "";
    document.getElementById("yearinternF").value = foundintern.year || "";
} else {
    console.error("intership not found with the title:", internTitle);
    // Optionally, reset the input fields or notify the user
    document.getElementById("internTitleF").value = "";
    document.getElementById("internInfoF").value = "";
    document.getElementById("internLinkF").value = "";
    document.getElementById("interndescriptionF").value = "";
    document.getElementById("interndescription2F").value = "";
    document.getElementById("yearinternF").value = "";
}


document.getElementById("internaddbutton").classList.add("hidden");
document.getElementById("interneditbutton").classList.remove("hidden");
document.getElementById("interneditbutton").onclick = function() {
  addEditedintern(foundintern);
};


}

// function to add edited project
function addEditedintern(internId){
  // edit project data in projects array
  const editedProjectId = document.getElementById(`${internId.title}${internId.year}`);
  const editInternButtonId = document.getElementById(`${internId.title}`);
  internId.title = document.getElementById("internTitleF").value;
  internId.info = document.getElementById("internInfoF").value;
  internId.link = document.getElementById("internLinkF").value;
  internId.description = document.getElementById("interndescriptionF").value;
  internId.description2 = document.getElementById("interndescription2F").value;
  internId.year = document.getElementById("yearinternF").value;

  // update edited project title in edit box
  editedProjectId.innerText = `${internId.title} ${internId.year}`;
  editedProjectId.id = `${internId.title}${internId.year}`;
  editInternButtonId.id = `${internId.title}`;
  editInternButtonId.onclick = function(){
    editinternsList(internId.title)
  }

  // update project list
  updateInternshipList();


  // Optionally, reset the input fields or notify the user
  document.getElementById("internTitleF").value = "";
  document.getElementById("internInfoF").value = "";
  document.getElementById("internLinkF").value = "";
  document.getElementById("interndescriptionF").value = "";
  document.getElementById("interndescription2F").value = "";
  document.getElementById("yearinternF").value = "";

  // remove "change" button and add "Add this" button
  document.getElementById("iternaddbutton").classList.remove("hidden");
  document.getElementById("interneditbutton").classList.add("hidden");
}









function updateInternshipList() {
  // Get the list element
  let internList = document.getElementById("internlistT");

  // Get the span element to display internship details
  let internsSpan = document.getElementById("userEnteredInternships");

  // Clear existing list and content in the "interns" span
  internList.innerHTML = "";
  internsSpan.innerHTML = "";

  // Loop through each internship in the array
  for (let internship of internships) {
    // Create new list item element
    let newListItem = document.createElement("div");
    let firstnewListItem = document.createElement("div");
    firstnewListItem.classList.add("d-flex", "justify-content-between",  "align-items-center");
    let secondnewListItem = document.createElement("div");
    secondnewListItem.classList.add("d-flex", "justify-content-between",  "align-items-center");

    // Create elements for title, description, and year with appropriate content
    let titleElement = document.createElement("p");
    titleElement.classList.add("fw-bold", "my-0", "w-75");
    titleElement.textContent = internship.title;
    firstnewListItem.appendChild(titleElement);

    let yearElement = document.createElement("p");
    yearElement.classList.add("text-sm-end", "fw-bold", "my-0", "w-25", "me-2");
    yearElement.textContent = internship.year;
    firstnewListItem.appendChild(yearElement);

    newListItem.appendChild(firstnewListItem);

    let infoElement = document.createElement("p");
    infoElement.classList.add("text-sm", "fst-italic", "my-0", "w-75");
    infoElement.textContent = internship.info;
    secondnewListItem.appendChild(infoElement);

    let linkElement = document.createElement("a");
    linkElement.classList.add("text-sm-end", "text-decoration-none", "fst-italic", "my-0", "w-25", "me-2");
    linkElement.textContent = "Project Link";
    linkElement.href = internship.link; 
    linkElement.target = "_blank";
    secondnewListItem.appendChild(linkElement);

    newListItem.appendChild(secondnewListItem);

    let descriptionElement = document.createElement("p");
    descriptionElement.classList.add("text-sm", "p-0", "my-0", "justify-content");
    descriptionElement.textContent = internship.description;
    newListItem.appendChild(descriptionElement);

    let descriptionElement2 = document.createElement("p");
    descriptionElement2.classList.add("text-sm", "p-0", "my-0", "justify-content");
    descriptionElement2.textContent = internship.description2;
    newListItem.appendChild(descriptionElement2);

    // Append the new list item to the existing list
    internList.appendChild(newListItem);

    // Append additional content to the "interns" span
    internsSpan.innerHTML += "\\item \\textbf{" + escapeLaTeX(internship.title) + "} \\hfill [" + escapeLaTeX(internship.year) + "]\\\\\\emph{(" + internship.info + ") | \n\\href{" + internship.link + "}{Project Link}} \\\\[-0.7cm]\n" +
      "\\begin{itemize}\\itemsep  \\isep\n" +
      "   \\item " + escapeLaTeX(internship.description) + "\n" +
      "   \\item " + escapeLaTeX(internship.description2) +
      "\n   \\end{itemize}" +
      "";
  }
}

// Helper function to escape special characters in LaTeX
function escapeLaTeX(text) {
  return text.replace(/([&%$#{}_])/g, "\\$1");
}








// to show add this for project
document.getElementById("projectaddbutton").classList.remove("hidden");

// Function to add a new project
function addNewProject() {
  // Get values from the form
  let title = document.getElementById("projectTitleF").value;
  let info = document.getElementById("projectInfoF").value;
  let link = document.getElementById("projectLinkF").value;
  let description = document.getElementById("projectdescriptionF").value;
  let description2 = document.getElementById("projectdescription2F").value;
  let year = document.getElementById("yearprojectF").value;

  // Create new internship object and add to array
  projects.push({
    title: title,
    info: info,
    link: link,
    description: description,
    description2: description2,
    year: year
  });

  // Update the display list
  updateProjectList();

  // Clear form fields
  document.getElementById("projectTitleF").value = "";
  document.getElementById("projectInfoF").value = "";
  document.getElementById("projectLinkF").value = "";
  document.getElementById("projectdescriptionF").value = "";
  document.getElementById("projectdescription2F").value = "";
  document.getElementById("yearprojectF").value = "";

  // add title in edit div
  const projectsEdit = document.getElementById("projectsEdit");
  
  projectsEdit.innerHTML += `
            <div class="border bg-white p-2 rounded" style="height: auto;">
              <div class="row align-items-center">
                <div class="col-md-8">
                  <h5 class="mb-0">Project Title: <strong id="${title}${year}">${title} ${year}</strong></h5>
                </div>
                <div class="col-md-4 text-right">
                    <button class="btn btn-primary btn-sm" id="${title}" onclick="editProjectsList('${title}')">Edit</button>
                </div>
            </div>
        </div>
        <br>
                      `;

                      document.getElementById("projecteditbuttonComment").classList.remove('hidden');
}


// function to edit project data
function editProjectsList(projectTitle){
  const foundProject = projects.find(project => project.title === projectTitle);
  document.getElementById("projectaddbutton").classList.add("hidden");
  if (foundProject) {
    // Set the values of the input fields
    document.getElementById("projectTitleF").value = foundProject.title || "";
    document.getElementById("projectInfoF").value = foundProject.info || "";
    document.getElementById("projectLinkF").value = foundProject.link || "";
    document.getElementById("projectdescriptionF").value = foundProject.description || "";
    document.getElementById("projectdescription2F").value = foundProject.description2 || "";
    document.getElementById("yearprojectF").value = foundProject.year || "";
} else {
    console.error("Project not found with the title:", projectTitle);
    // Optionally, reset the input fields or notify the user
    document.getElementById("projectTitleF").value = "";
    document.getElementById("projectInfoF").value = "";
    document.getElementById("projectLinkF").value = "";
    document.getElementById("projectdescriptionF").value = "";
    document.getElementById("projectdescription2F").value = "";
    document.getElementById("yearprojectF").value = "";
}


document.getElementById("projectaddbutton").classList.add("hidden");
document.getElementById("projecteditbutton").classList.remove("hidden");
document.getElementById("projecteditbutton").onclick = function() {
  addEditedProject(foundProject);
};


}

// function to add edited project
function addEditedProject(projectId){
  // edit project data in projects array
  const editedProjectId = document.getElementById(`${projectId.title}${projectId.year}`);
  const editProjectButtonId = document.getElementById(`${projectId.title}`);
  projectId.title = document.getElementById("projectTitleF").value;
  projectId.info = document.getElementById("projectInfoF").value;
  projectId.link = document.getElementById("projectLinkF").value;
  projectId.description = document.getElementById("projectdescriptionF").value;
  projectId.description2 = document.getElementById("projectdescription2F").value;
  projectId.year = document.getElementById("yearprojectF").value;

  // update edited project title in edit box
  editedProjectId.innerText = `${projectId.title} ${projectId.year}`;
  editedProjectId.id = `${projectId.title}${projectId.year}`;
  editProjectButtonId.id = `${projectId.title}`;
  editProjectButtonId.onclick = function(){
    editProjectsList(projectId.title)
  }

  // update project list
  updateProjectList();


  // Optionally, reset the input fields or notify the user
  document.getElementById("projectTitleF").value = "";
  document.getElementById("projectInfoF").value = "";
  document.getElementById("projectLinkF").value = "";
  document.getElementById("projectdescriptionF").value = "";
  document.getElementById("projectdescription2F").value = "";
  document.getElementById("yearprojectF").value = "";

  // remove "change" button and add "Add this" button
  document.getElementById("projectaddbutton").classList.remove("hidden");
  document.getElementById("projecteditbutton").classList.add("hidden");
}


// Function to update the project list on the webpage
function updateProjectList() {
  // Get the list element
  let projectList = document.getElementById("projectlist");

  // Get the span element to display internship details
  let projectsSpan = document.getElementById("userEnteredProjects");

  // Clear existing list and content in the "interns" span
  projectList.innerHTML = "";
  projectsSpan.innerHTML = "";

  // Loop through each internship in the array
  for (let project of projects) {
    // Create new list item element
    let newListItem = document.createElement("div");
    let firstnewListItem = document.createElement("div");
    firstnewListItem.classList.add("d-flex", "justify-content-between",  "align-items-center");
    let secondnewListItem = document.createElement("div");
    secondnewListItem.classList.add("d-flex", "justify-content-between",  "align-items-center");

    // Create elements for title, description, and year with appropriate content
    let titleElement = document.createElement("p");
    titleElement.classList.add("fw-bold", "my-0", "w-75");
    titleElement.textContent = project.title;
    firstnewListItem.appendChild(titleElement);

    let yearElement = document.createElement("p");
    yearElement.classList.add("text-sm-end", "fw-bold", "my-0", "w-25", "me-2");
    yearElement.textContent = project.year;
    firstnewListItem.appendChild(yearElement);

    newListItem.appendChild(firstnewListItem);

    let infoElement = document.createElement("p");
    infoElement.classList.add("text-sm", "fst-italic", "my-0", "w-75");
    infoElement.textContent = project.info;
    secondnewListItem.appendChild(infoElement);

    let linkElement = document.createElement("a");
    linkElement.classList.add("text-sm-end", "text-decoration-none", "fst-italic", "my-0", "w-25", "me-2");
    linkElement.textContent = "Project Link";
    linkElement.href = project.link; 
    linkElement.target = "_blank";
    secondnewListItem.appendChild(linkElement);

    newListItem.appendChild(secondnewListItem);

    let descriptionElement = document.createElement("p");
    descriptionElement.classList.add("text-sm", "p-0", "my-0", "justify-content");
    descriptionElement.textContent = project.description;
    newListItem.appendChild(descriptionElement);

    let descriptionElement2 = document.createElement("p");
    descriptionElement2.classList.add("text-sm", "p-0", "my-0", "justify-content");
    descriptionElement2.textContent = project.description2;
    newListItem.appendChild(descriptionElement2);

    // Append the new list item to the existing list
    projectList.appendChild(newListItem);

    // Append additional content to the "interns" span
    projectsSpan.innerHTML += "\\item \\textbf{" + escapeLaTeX(project.title) + "} \\hfill [" + escapeLaTeX(project.year) + "]\\\\\\emph{(" + project.info + ") | \n\\href{" + project.link + "}{Project Link}} \\\\[-0.7cm]\n" +
      "\\begin{itemize}\\itemsep  \\isep\n" +
      "   \\item " + escapeLaTeX(project.description) + "\n" +
      "   \\item " + escapeLaTeX(project.description2) +
      "\n   \\end{itemize}" +
      "";
  }
}

// Initialize an empty array to store skills

// Function to add a new skill
function addNewSkill() {
  // Get values from the form
  let type = document.getElementById("skilltypeF").value;
  let description = document.getElementById("skilldescriptionF").value;


  // Create new internship object and add to array
  skills.push({
    type: type,
    description: description
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
  let skillsSpan = document.getElementById("userEnteredSkills");
  // Clear existing list
  skillList.innerHTML = "";
  skillsSpan.innerHTML = "";

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

    // Append additional content to the "interns" span
    skillsSpan.innerHTML += "\\item \\textbf{" + skill.type + ":} " + skill.description + "\n";
  }
}


// Initialize an empty array to store PORs


// Function to add a new Position of Responsibility (POR)
function addNewPOR() {
  // Get values from the form
  let PORName = document.getElementById("PORNameF").value;
  let PORDescription = document.getElementById("PORdescriptionF").value;
  let PORDescription2 = document.getElementById("PORdescription2F").value;
  let PORDuration = document.getElementById("PORdurationF").value;

  // Create a new POR object and add it to the array
  PORs.push({
    name: PORName,
    description: PORDescription,
    description2: PORDescription2,
    duration: PORDuration
  });

  // Update the display list
  updatePORList();

  // Clear form fields
  document.getElementById("PORNameF").value = "";
  document.getElementById("PORdescriptionF").value = "";
  document.getElementById("PORdescription2F").value = "";
  document.getElementById("PORdurationF").value = "";
}

// Function to update the POR list on the webpage
function updatePORList() {
  // Get the list element
  let PORList = document.getElementById("PORList");
  let PORSpan = document.getElementById("userEnteredPORs");
  // Clear existing list
  PORList.innerHTML = "";
  PORSpan.innerHTML = "";

  // Loop through each POR in the array
  for (let porr of PORs) {
    // Create a new list item element
    let newListItem = document.createElement("li");

    // Create elements for POR name, duration, and description with appropriate content
    let PORNameElement = document.createElement("p");
    PORNameElement.classList.add("fw-bold", "my-0", "p-0");
    PORNameElement.textContent = porr.name;
    newListItem.appendChild(PORNameElement);

    let PORDurationElement = document.createElement("p");
    PORDurationElement.classList.add("text-sm-end", "fw-bold", "my-0");
    PORDurationElement.textContent = "[" + porr.duration + "]";
    newListItem.appendChild(PORDurationElement);

    let PORDescriptionElement = document.createElement("p");
    PORDescriptionElement.classList.add("text-sm", "p-0", "my-0", "justify-content");
    PORDescriptionElement.textContent = porr.description;
    newListItem.appendChild(PORDescriptionElement);

    let PORDescriptionElement2 = document.createElement("p");
    PORDescriptionElement2.classList.add("text-sm", "p-0", "my-0", "justify-content");
    PORDescriptionElement2.textContent = porr.description2;
    newListItem.appendChild(PORDescriptionElement2);

    // Append the new list item to the existing list
    PORList.appendChild(newListItem);

    PORSpan.innerHTML += "\\item \\textbf{" + porr.name + "}\n" +
      "\\hfill [" + porr.duration + "] \\\\[-0.7cm]\n" +
      "   \\begin{itemize} \\itemsep \\isep\n" +
      "      \\item " + porr.description + "\n" +
      "      \\item " + porr.description2 + "\n" +
      "        \\end{itemize}\n";
  }
}

// function to add a new achievement
function addNewAchievement() {
  let achievementName = document.getElementById("achievementNameF").value;

  if (achievementName) {
    // pushing the new achievement into the array
    achievements.push({
      name: achievementName,
    });

    // clear the form fields
    document.getElementById("achievementNameF").value = "";

    // update the achievements list
    updateAchievementsList();
  }
}

// function to update the achievements list on the webpage
function updateAchievementsList() {
  let achievementsList = document.getElementById("achievementList");
  let achievementsSpan = document.getElementById("userEnteredAchievements");

  // clear existing list and LaTeX code
  achievementsList.innerHTML = "";
  achievementsSpan.innerHTML = "";

  for (let achievement of achievements) {
    let newListItem = document.createElement("li");

    // create elements for achievement name and description with appropriate content
    let achievementNameElement = document.createElement("p");
    achievementNameElement.classList.add("my-0", "p-0");
    achievementNameElement.textContent = achievement.name;
    newListItem.appendChild(achievementNameElement);

    // append the new list item to the existing list
    achievementsList.appendChild(newListItem);

    // add LaTeX code to the achievementsSpan element
    achievementsSpan.innerHTML += "\\item {" + escapeLaTeX(achievement.name) + "}\\vspace{0.1cm}\n";  // adjust the spacing as needed
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
  //M.Tech
  document.getElementById("PCPIT").innerHTML = document.getElementById("marksphdF").value;
  document.getElementById("PYOJT").innerHTML = document.getElementById("yearphdF").value;
  document.getElementById("PINST").innerHTML = document.getElementById("institutephdF").value;

  //M.Tech
  document.getElementById("MCPIT").innerHTML = document.getElementById("marksmtechF").value;
  document.getElementById("MYOJT").innerHTML = document.getElementById("yearmtechF").value;
  document.getElementById("MINST").innerHTML = document.getElementById("institutemtechF").value;

  //B.Tech
  document.getElementById("CPIT").innerHTML = document.getElementById("CPIF").value;
  document.getElementById("YOJT").innerHTML = document.getElementById("YOJF").value;
  document.getElementById("INST").innerHTML = document.getElementById("InsF").value;

  //12th
  document.getElementById("institutetwelveT").innerHTML = document.getElementById("institutetwelveF").value;
  document.getElementById("markstwelveT").innerHTML = document.getElementById("markstwelveF").value;
  document.getElementById("yeartwelveT").innerHTML = document.getElementById("yeartwelveF").value;

  //10th
  document.getElementById("institutetenT").innerHTML = document.getElementById("institutetenF").value;
  document.getElementById("markstenT").innerHTML = document.getElementById("markstenF").value;
  document.getElementById("yeartenT").innerHTML = document.getElementById("yeartenF").value;

  //Internships
  document.getElementById("internTitleT").innerHTML = document.getElementById("internTitleF").value;
  document.getElementById("internInfoT").innerHTML = document.getElementById("internInfoF").value;
  document.getElementById("interndescriptionT").innerHTML = document.getElementById("interndescriptionF").value;
  document.getElementById("interndescription2T").innerHTML = document.getElementById("interndescription2F").value;
  document.getElementById("yearinternT").innerHTML = document.getElementById("yearinternF").value;

  //projects
  document.getElementById("projectTitleT").innerHTML = document.getElementById("projectTitleF").value;
  document.getElementById("projectInfoT").innerHTML = document.getElementById("projectInfoF").value;
  document.getElementById("projectLinkT").innerHTML = document.getElementById("projectLinkF").value;
  document.getElementById("projectDescriptionT").innerHTML = document.getElementById("projectdescriptionF").value;
  document.getElementById("projectDescription2T").innerHTML = document.getElementById("projectdescription2F").value;
  document.getElementById("yearprojectT").innerHTML = document.getElementById("yearprojectF").value;

  //skills
  document.getElementById("skilltypeT").innerHTML = document.getElementById("skilltypeF").value;
  document.getElementById("skilldescriptionT").innerHTML = document.getElementById("skilldescriptionF").value;

  //PORs
  document.getElementById("PORNameT").innerHTML = document.getElementById("PORNameF").value;
  document.getElementById("PORdurationT").innerHTML = document.getElementById("PORdurationF").value;
  document.getElementById("PORdescriptionT").innerHTML = document.getElementById("PORdescriptionF").value;
  document.getElementById("PORdescription2T").innerHTML = document.getElementById("PORdescription2F").value;

  // Achievements
  document.getElementById("achievementNameT").innerHTML = document.getElementById("achievementNameF").value;

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("CVtemplate").style.display = "block";
}



// window.onload = function () {
//     const downloadButton = document.getElementById("download");

//     downloadButton.addEventListener("click", () => {
//         const cv = document.getElementById("Cvtemplate");

//         // Set A4 size (210mm x 297mm) for the HTML element
//         cv.style.width = "210mm";
//         cv.style.height = "297mm";
//         cv.style.margin="2px";

//         html2pdf().from(cv).save();
//     });
// };


function copyToClipboard() {
  // Get the user-entered values
  let userName = document.getElementById("nameF").value;
  let userYear = document.getElementById("CGradF").value;
  let userEmail = document.getElementById("emailF").value;
  let userBranch = document.getElementById("BranchF").value;
  let userContact = document.getElementById("contactF").value;
  let userGithub = document.getElementById("gitF").value;
  let userLinkedIn = document.getElementById("linkedinF").value;
  let userWebsite = document.getElementById("websiteF").value;

  document.getElementById("userEnteredYear").innerText = userYear;
  document.getElementById("userEnteredEmail").innerText = userEmail;
  document.getElementById("userEnteredEmailText").innerText = userEmail;

  document.getElementById("userEnteredContact").innerText = userContact;
  document.getElementById("userEnteredGithub").innerText = userGithub;
  document.getElementById("userEnteredLinkedIn").innerText = userLinkedIn;
  document.getElementById("userEnteredWebsite").innerText = userWebsite;
  document.getElementById("userEnteredName").innerText = userName;
  document.getElementById("userEnteredBranch").innerText = userBranch;

  let userInstitutephd = document.getElementById("institutephdF").value;
  let userSpecializationphd = document.getElementById("specializationphdF").value;
  let userCPIphd = document.getElementById("marksphdF").value;
  let userYOJphd = document.getElementById("yearphdF").value;

  if (userInstitutephd === "") {
    document.getElementById("userphd").innerText = "";
  }
  else {
    document.getElementById("userphd").innerText = "PhD & \\textit{" + userSpecializationphd + "} & " + userInstitutephd + " & " + userYOJphd + " & " + userCPIphd + " \\\\";
  }

  let userInstituteMtech = document.getElementById("institutemtechF").value;
  let userSpecializationMtech = document.getElementById("specializationmtechF").value;
  let userCPIMtech = document.getElementById("marksmtechF").value;
  let userYOJMtech = document.getElementById("yearmtechF").value;

  if (userInstituteMtech === "") {
    document.getElementById("usermtech").innerText = "";
  }
  else {
    document.getElementById("usermtech").innerText = "M.Tech. & \\textit{" + userSpecializationMtech + "} & " + userInstituteMtech + " & " + userYOJMtech + " & " + userCPIMtech + " \\\\";
  }
  // Get the user-entered values for B.Tech details
  let userCPI = document.getElementById("CPIF").value;
  let userIns = document.getElementById("InsF").value;
  let userYOJ = document.getElementById("YOJF").value;
  let userSpec = document.getElementById("SpecF").value;


  // Update the values for B.Tech details in the LaTeX code
  document.getElementById("userEnteredCPI").innerText = userCPI;
  document.getElementById("userEnteredIns").innerText = userIns;
  document.getElementById("userEnteredYOJ").innerText = userYOJ;
  document.getElementById("userEnteredBranch2").innerText = userSpec;

  // Get the user-entered values for Class 12th details
  let userInstituteTwelve = document.getElementById("institutetwelveF").value;
  let userMarksTwelve = document.getElementById("markstwelveF").value;
  let userYearTwelve = document.getElementById("yeartwelveF").value;

  // Update the values for Class 12th details in the LaTeX code
  document.getElementById("userEnteredInstituteTwelve").innerText = userInstituteTwelve;
  document.getElementById("userEnteredMarksTwelve").innerText = userMarksTwelve;
  document.getElementById("userEnteredYearTwelve").innerText = userYearTwelve;

  // Get the user-entered values for Class 10th details
  let userInstituteTen = document.getElementById("institutetenF").value;
  let userMarksTen = document.getElementById("markstenF").value;
  let userYearTen = document.getElementById("yeartenF").value;

  // Update the values for Class 10th details in the LaTeX code
  document.getElementById("userEnteredInstituteTen").innerText = userInstituteTen;
  document.getElementById("userEnteredMarksTen").innerText = userMarksTen;
  document.getElementById("userEnteredYearTen").innerText = userYearTen;

  // Get the updated LaTeX code
  let latexCode = document.getElementById("latexCode").innerText;

  // Create a temporary textarea element
  var tempTextarea = document.createElement("textarea");

  // Set the textarea value to the updated LaTeX code
  tempTextarea.value = latexCode;

  // Append the textarea element to the DOM
  document.body.appendChild(tempTextarea);

  // Select the text in the textarea
  tempTextarea.select();

  // Execute the "copy" command
  document.execCommand("copy");

  // Remove the temporary textarea element
  document.body.removeChild(tempTextarea);

  // Optionally, provide feedback to the user
  alert("Copied LaTeX code to clipboard. Paste in any LaTeX editor. Eg: Overleaf.");
}
setInterval(generateCV, 100);
