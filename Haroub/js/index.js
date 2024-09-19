const squad = [
  {
    name: "Amber",
    lastName: "Schalker",
    card: "https://ambersr.github.io/your-tribe-profile-card/",
  },
  {
    name: "Athene",
    lastName: "Guanipa",
    card: "https://nyathene.github.io/your-tribe-profile-card/",
  },
  {
    name: "Cedrik",
    lastName: "Wouters",
    card: "https://cedrikstephen.github.io/your-tribe-profile-card/",
  },
  {
    name: "Christian",
    lastName: "Osa-Oni",
    card: "https://osaoni.github.io/your-tribe-profile-card/",
  },
  {
    name: "Clarice",
    lastName: "Boerlijst",
    card: "https://clarice-cod.github.io/visitekaartje-clarice/",
  },
  {
    name: "Colin",
    lastName: "de Groot",
    card: "https://colindegroot.github.io/your-tribe-profile-card/",
  },
  {
    name: "Dylan",
    lastName: "van Nierop",
    card: "https://divaninl.github.io/your-tribe-profile-card/",
  },
  {
    name: "Fatima",
    lastName: "El Ayadi",
    card: "https://fatimazelay.github.io/your-tribe-profile-card/",
  },
  {
    name: "Fatima",
    lastName: "El Hilali",
    card: "https://github.com/fatimahilali/visitekaartje",
  },
  {
    name: "Halima",
    lastName: "Dinle",
    card: "https://halima98.github.io/your-tribe-profile-card/",
  },
  {
    name: "Iris",
    lastName: "Willigen",
    card: "https://irisvw.github.io/your-tribe-profile-card/",
  },
  {
    name: "Jordy",
    lastName: "van Wetering",
    card: "https://noxinput.github.io/your-tribe-profile-card/",
  },
  {
    name: "Jules",
    lastName: "Bruins",
    card: "https://julesbruins.github.io/your-tribe-profile-card/",
  },
  {
    name: "Julia",
    lastName: "Stevens",
    card: "https://julia-stevens.github.io/your-tribe-profile-card/",
  },
  {
    name: "Karima",
    lastName: "Mouadi",
    card: "https://karima002.github.io/visitekaartje-karima/",
  },
  {
    name: "Kim",
    lastName: "Nikita",
    card: "https://kimnikitaschijf.github.io/your-tribe-profile-card/",
  },
  {
    name: "Luc",
    lastName: "Hoogerwerf",
    card: "https://debosos.github.io/your-tribe-profile-card/",
  },
  {
    name: "Marcin",
    lastName: "Magdziak",
    card: "https://marsgotbars.github.io/vite-card/",
  },
  {
    name: "Matthijs",
    lastName: "ten Brink",
    card: "https://github.com/Matthijs217/your-tribe-profile-card",
  },
  {
    name: "Nadia",
    lastName: "Visser",
    card: "https://nadiachaja.github.io/your-tribe-profile-card/",
  },
  {
    name: "Nas",
    lastName: "Ibrahim",
    card: "https://nmiaa.github.io/your-tribe-profile-card/",
  },
  {
    name: "Ole",
    lastName: "Franssen",
    card: "https://ofrqq.github.io/your-tribe-profile-card/",
  },
  {
    name: "Ravi",
    lastName: "Tjikhoeri",
    card: "https://ravirkt.github.io/visitekaartje/",
  },
  {
    name: "Robby",
    lastName: "Risse",
    card: "https://robbyrisse.github.io/your-tribe-profile-card/",
  },
  {
    name: "Robin",
    lastName: "Wouterson",
    card: "https://robinwouterson.github.io/your-tribe-profile-card/",
  },
  {
    name: "Ties",
    lastName: "Beeftink",
    card: "https://ties7.github.io/your-tribe-profile-card/",
  },
  {
    name: "Viresh",
    lastName: "Sheoratan",
    card: "https://vsheo.github.io/your-tribe-profile-card/",
  },
];

(function displayCards() {

  // return and do not render squad pages
  if(window.location.pathname!=="/") return;

  let squadSection = document.getElementsByClassName("squad-section")?.[0];

  squad
    .sort((a, b) => a - b)
    .forEach((member) => {
      let card = document.createElement("article");
      card.setAttribute("class", "card");

      let cardImg = document.createElement("img");

      // I could reverse the ternary operator for efficiency but in this case it doesn't matter. list is too short
      cardImg.setAttribute(
        "src",
        member.lastName == "El Hilali"
          ? `assets/${member.name}2.jpeg`
          : `assets/${member.name}.jpeg`
      );

      cardImg.setAttribute("alt", `${member.name} image`);
      cardImg.setAttribute("class", "person-img");

      let infoDiv = document.createElement("dv");
      infoDiv.setAttribute("class", "info");

      let nameHeader = document.createElement("h4");
      let nameTextNode = document.createTextNode(
        `${member.name} ${member.lastName}`
      );
      nameHeader.appendChild(nameTextNode);

      let visitButton = document.createElement("button");

      let buttonLink = document.createElement("a");
      let linkTextNode = document.createTextNode("visitekaartje");
      buttonLink.setAttribute("href", `${member.card}`);
      buttonLink.appendChild(linkTextNode);
      buttonLink.setAttribute("target", "_blank");

      visitButton.appendChild(buttonLink);

      infoDiv.appendChild(nameHeader);
      infoDiv.appendChild(visitButton);

      card.appendChild(cardImg);
      card.appendChild(infoDiv);

      squadSection.append(card);
    });
})();

const cards = document.querySelectorAll(".card");

const observerOptions = {
  root: null,
  threshold: [0, 0.25, 0.5, 0.75, 1],
};

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const observer = new IntersectionObserver((entries, _observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // https://www.w3schools.com/jsref/prop_style_visibility.asp
      entry.target.style.visibility = "visible";
    } else {
      entry.target.classList.remove("active");
      entry.target.style.visibility = "hidden";
    }
  });
}, observerOptions);

cards.forEach((card) => {
  observer.observe(card);
});
