const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Employee = require('./lib/Employee.js');
const { start } = require('repl');

const employees = [];

function initialize() {
  startHtml();
  addMember();
}


function chooseProfile() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your team members name?',
    },
    {
      type: 'list',
      name: 'role',
      message: 'What is your team members role?',
      choices: [
        "Intern",
        "Employee",
        "Manager",
        "Engineer"
      ]
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your team members id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  .then(function({name, role, id, email}) {
    let addInfo = "";
    if (role === "Engineer") {
        addInfo = "GitHub username";
    } else if (role === "Intern") {
        addInfo = "school name";
    } else if (role === "Manager") {
        addInfo = "office phone number";
    } else {

    }
    inquirer.prompt([{
        message: `What is the team member's ${addInfo}`,
        name: "addInfo"
    },
    {
        type: "list",
        message: "Would you like to add more team members?",
        choices: [
            "yes",
            "no"
        ],
        name: "addmembers"
    }])
    .then(function({addInfo, addmembers}) {
        let addMember;
        if (role === "Engineer") {
            addMember = new Engineer(name, id, email, addInfo);

        } else if (role === "Intern") {
            addMember = new Intern(name, id, email, addInfo);

        } else if (role === "Manager") {
          addMember = new Manager(name, id, email, addInfo)

        } else {
            addMember = new Manager(name, id, email, addInfo);
        }
        employees.push(addMember);
        addHtml(addMember)
        .then(function() {
            if (addmembers === "yes") {
                addMember();
            } else {
                finishHtml();
            }
        });
        
    });
});
}

function startHtml() {
  const html = `<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Team Profile</title>
  </head>
  <body>
      <nav class="navbar navbar-dark bg-danger mb-5">
          <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
      </nav>
      <div class="container">`;
  fs.writeFile("./dist/team-profile.html", html, function(err) {
      if (err) {
          console.log(err);
      }
  });
  console.log("start");
}

function addHtml(member) {
  return new Promise(function(resolve, reject) {
      const name = member.getName();
      const role = member.getRole();
      const id = member.getId();
      const email = member.getEmail();
      let data = "";
      if (role === "Engineer") {
          const gitHub = member.getGithub();
          data = `<div class="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
          <h5 class="card-header">${name}<br /><br />Engineer</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email Address: ${email}</li>
              <li class="list-group-item">GitHub: ${gitHub}</li>
          </ul>
          </div>
      </div>`;
      } else if (role === "Intern") {
          const school = member.getSchool();
          data = `<div class="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
          <h5 class="card-header">${name}<br /><br />Intern</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email Address: ${email}</li>
              <li class="list-group-item">School: ${school}</li>
          </ul>
          </div>
      </div>`;
      }else if (role === "Manager") {
        const officePhone = member.getOfficeNumber();
          data = `<div class="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
          <h5 class="card-header">${name}<br /><br />Manager</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email Address: ${email}</li>
              <li class="list-group-item">Office Phone: ${officePhone}</li>
          </ul>
          </div>
      </div>`
      } else {
        data = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Intern</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
        </ul>
        </div>
    </div>`;
      }
      console.log("adding team member");
      fs.appendFile("./output/team-profile.html", data, function (err) {
          if (err) {
              return reject(err);
          };
          return resolve();
      });
  });

}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/team-profile.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}
initApp();




//     .then((answers) => {
//       const htmlPageContent = generateHTML(answers);

//       fs.writeFile('index.html', htmlPageContent, (err) =>
//         err ? console.log(err) : console.log('Successfully created index.html!')
//       );
//     });
// }

// .then(function({name, role, id, email})) {
//   let addInfo = "";
//   if (role === "Engineer") {
//     addInfo = "GitHub username"
//   } else if (role === "Intern") {
//     addInfo = "school name";
//   } else if ( role === "Employee") {
//     addInfo = "office phone number";
//   } else {

//   }
// }
//   const generateHTML = ({ name, id, email, officeNumber, github}) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <header class="p-5 mb-4 header bg-light">
//     <div class="container">
//       <h1 class="display-4">Hi! My name is ${name}</h1>
//       <p class="lead">I am from ${location}.</p>
//       <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${github}</li>
//         <li class="list-group-item">LinkedIn: ${linkedin}</li>
//       </ul>
//     </div>
//   </header>
// </body>
// </html>`;