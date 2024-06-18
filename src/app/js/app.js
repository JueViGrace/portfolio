"uses strict";

class SocialLinks {
  constructor(name, value, url, icon) {
    this.name = name;
    this.value = value;
    this.url = url;
    this.icon = icon;
  }
}

class Contact {
  contactChips = [
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

  socialIcons = [
    new SocialLinks(
      "whatsapp",
      "",
      "https://wa.me/584246945447",
      "/src/public/whatsapp.png"
    ),
    new SocialLinks(
      "github",
      "",
      "https://github.com/JueViGrace",
      "/src/public/github.png"
    ),
    new SocialLinks(
      "github",
      "",
      "https://www.linkedin.com/in/daniel-zabala-147aa5136/",
      "/src/public/linkedin.png"
    ),
  ];

  getContactChips() {
    let contactList = "";

    this.contactChips.forEach((value) => {
      contactList += `<li class="contact-chip">
                <div class="chip-container">
                    <div class="chip-content">
                        <img class="chip-icon" src=${value.icon} alt="${value.name}.png">
                    </div>
                    <div class="chip-content">
                        <p class="chip-text">${value.value}</p>
                    </div>
                </div>
            </li>`;
    });

    document.getElementById("contact-chips").innerHTML = contactList;
  }

  getSocialIcons() {
    let iconList = "";

    this.socialIcons.forEach((value) => {
      iconList += `
            <li class="contact-icon">
                <div class="icon-container">
                    <a href=${value.url}>
                        <img 
                            class="icon"
                            src=${value.icon} 
                            alt="${value.name}.png"
                        />
                    </a>
                </div>
            </li>
        `;
    });

    document.getElementById("social-icons").innerHTML = iconList;
  }
}

class App {
  contact = new Contact();

  initApp() {
    this.loadContactSection();
  }

  loadContactSection() {
    this.contact.getContactChips();
    this.contact.getSocialIcons();
  }
}

function initJs() {
  new App().initApp();
}
