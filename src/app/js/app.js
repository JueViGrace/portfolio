class SocialLinks {
  constructor(name, value, url, icon) {
    this.name = name;
    this.value = value;
    this.url = url;
    this.icon = icon;
  }
}

class Project {
  constructor(name, description, language, image) {
    this.name = name;
    this.description = description;
    this.language = new Language(language, image);
  }
}

class Language {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
  }
}

function getContactChips() {
  const contactChips = [
    new SocialLinks(
      "email",
      "danielzabalanava@gmail.com",
      "",
      "/src/public/email.png"
    ),
    new SocialLinks("phone", "+58-4246945447", "", "/src/public/phone.png"),
    new SocialLinks(
      "location",
      "Zulia, Venezuela",
      "",
      "/src/public/location.png"
    ),
  ];

  let contactList = "";

  contactChips.forEach((value) => {
    contactList += `
      <div class="contact-chip">
        <div class="chip-container">
          <div class="chip-content">
              <img
                class="white-icon"
                src=${value.icon}
                alt="${value.name}.png"
                />
            </div>
            <div class="chip-content">
              <p class="chip-text">${value.value}</p>
            </div>
          </div>
        </div>`;
  });

  document.getElementById("contact-no-link").innerHTML = contactList;
}

function getSocialChips() {
  const socialIcons = [
    new SocialLinks(
      "whatsapp",
      "Whatsapp",
      "https://wa.me/584246945447",
      "/src/public/whatsapp.png"
    ),
    new SocialLinks(
      "github",
      "Github",
      "https://github.com/JueViGrace",
      "/src/public/github.png"
    ),
    new SocialLinks(
      "linkedin",
      "Linked In",
      "https://www.linkedin.com/in/daniel-zabala-147aa5136/",
      "/src/public/linkedin.png"
    ),
  ];

  let iconItems = "";

  socialIcons.forEach((value) => {
    iconItems += `
      <div class="contact-chip">
        <a class="chip-link" href=${value.url}>
          <div class="chip-container">
            <div class="chip-content">
              <img
                class="white-icon"
                src=${value.icon}
                alt="${value.name}.png"
                />
            </div>
            <div class="chip-content">
              <p class="chip-text">${value.value}</p>
            </div>
          </div>
        </a>
      </div>`;
  });

  document.getElementById("contact-with-link").innerHTML = iconItems;
}

function displayProjects() {
  const projectsList = [
    new Project(
      "Bakery App",
      "Bakery app is a mobile application designed to help customers send orders to Bakey and Deserts. It's written in Kotlin, implementing Jetpack Compose for android and MVVM architecture pattern.",
      "Kotlin",
      "/src/public/kt.png"
    ),
    new Project(
      "Bakery Backend",
      "This project a REST API designed to manage the corresponding web and mobile applicaitons of Bakey and Deserts. It was made using Nest.js and Typescript.",
      "Typescript",
      "/src/public/ts.png"
    ),
    new Project(
      "Bakery user and bakery admin",
      "These projects are the web applications made for Bakery and Deserts. They were made using Angular to build the UI.",
      "Typescript",
      "/src/public/ts.png"
    ),
    new Project(
      "E-commerce App",
      "This app self made project to understand more about how native android apps are made using Jetpack Compose. It later helped me really much at how mobile apps are made with Kotlin and how to implement recommended design patterns.",
      "Kotlin",
      "/src/public/kt.png"
    ),
    new Project(
      "Express-api-POO and Express-api",
      "These self made projects were made to manage requests from other of my projects. These are the same project made by using two programming paradigms, as the names says one was made using OOP and the other one mostly only functions. They were made using Express.js and Typecript.",
      "Typescript",
      "/src/public/ts.png"
    ),
    new Project(
      "AC-CLOSS",
      "This project is a mobile app made for the company Comercializadora la Occidental and Wokin Vzla at the moment. It's used by their managers to help them control their corresponding salesman and zones. This project was made using android native views and then compose views were used to start migrating the app to the newer way of making UIs in android.",
      "Kotlin",
      "/src/public/kt.png"
    ),
    new Project(
      "CLOSS-api",
      "This project was made to upgrade the api services this company had a the time. It was made using Nest.js and Typescript.",
      "Typescript",
      "/src/public/ts.png"
    ),
    new Project(
      "AC-CLOSS (Compose)",
      "This project is a mobile app made for the company Comercializadora la Occidental and Wokin Vzla at the moment. It fulfills the same needs as the AC-CLOSS application. This application is a rebuild of AC-CLOSS app but using Jetpack Compose as the framework for building the UI.",
      "Kotlin",
      "/src/public/kt.png"
    ),
    new Project(
      "Dz Judo App",
      "This project is a mobile app made to help the customer manage his students and their payments. It is made in Kotlin and using Jetpack Compose to build the UI.",
      "Kotlin",
      "/src/public/kt.png"
    ),
  ];

  let projectItems = "";

  projectsList.forEach((value) => {
    projectItems += `
      <li class="project-item">
        <div class="project-container">
          <div class="project-content">
            <h1 class="project-title">${value.name}</h1> 
          </div>
          <div class="project-content">
            <p class="project-description">
              ${value.description}
            </p>
          </div>
          <div class="project-content">
            <img class="project-icon" src=${value.language.icon} alt=${value.name}.png/>
            <p class="project-languaje">${value.language.name}</p>
          </div>
        </div>
      </li>
    `;
  });

  document.getElementById("projects-list").innerHTML = projectItems;
}

function displaySkills() {
  const skills = [new Language("Kotlin", "/src/public/kt.png")];

  let skillsItems = "";

  skills.forEach((value) => {
    skillsItems += `
      <li class="skills-item">
        <div class="skill-container">
          <div class="skill-content">
            <img class="icon" src=${value.icon} alt=${value.name}.png/>
          </div>
          <div class="skill-content">
            <h3 class="skill-name">${value.name}</h3>
          </div>
        </div>
      </li>
    `;
  });

  document.getElementById("skills-list").innerHTML = skillsItems;
}

class App {
  initApp() {
    this.loadPorjects();
    this.loadContactSection();
    this.loadSkills()
  }

  loadSkills() {
    displaySkills()
  }

  loadPorjects() {
    displayProjects();
  }

  loadContactSection() {
    getContactChips();
    getSocialChips();
  }
}

function initJs() {
  new App().initApp();
}
