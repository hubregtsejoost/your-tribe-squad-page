let squad = [
  {
    name: "Halima",
    card: "https://halima98.github.io/your-tribe-profile-card/"
  },
  {
    name: "Iris",
    card: "https://irisvw.github.io/your-tribe-profile-card/",
  },
  {
    name: "Jordy",
    card: "https://noxinput.github.io/your-tribe-profile-card/",
  },
  {
    name: "Jules",
    card: "https://julesbruins.github.io/your-tribe-profile-card/",
  },
  {
    name: "Julia",
    card: "https://julia-stevens.github.io/your-tribe-profile-card/",
  },
  {
    name: "Karima",
    card: "https://karima002.github.io/visitekaartje-karima/",
  },
  {
    name: "Kim",
    card: "https://kimnikitaschijf.github.io/your-tribe-profile-card/",
  },
  {
    name: "Luc",
    card: "https://debosos.github.io/your-tribe-profile-card/",
  },
  {
    name: "Marcin",
    card: "https://marsgotbars.github.io/vite-card/",
  },
  {
    name: "Matthijs",
    card: "https://github.com/Matthijs217/your-tribe-profile-card",
  },
  {
    name: "Nadia",
    card: "https://nadiachaja.github.io/your-tribe-profile-card/",
  },
  {
    name: "Nas",
    card: "https://nmiaa.github.io/your-tribe-profile-card/",
  },
  {
    name: "Ole",
    card: "https://ofrqq.github.io/your-tribe-profile-card/",
  },
  {
    name: "Ravi",
    card: "https://ravirkt.github.io/visitekaartje/",
  },
  {
    name: "Robby",
    card: "https://robbyrisse.github.io/your-tribe-profile-card/",
  },
  {
    name: "Robin",
    card: "https://robinwouterson.github.io/your-tribe-profile-card/",
  },
  {
    name: "Ties",
    card: "https://ties7.github.io/your-tribe-profile-card/",
  },
  {
    name: "Viresh",
    card: "https://vsheo.github.io/your-tribe-profile-card/",
  },
];

function displayCards() {
  
  let squadSection = document.getElementsByClassName("squad-section")?.[0];

  squad.sort((a, b) => a - b).forEach((member) => {

	let card = document.createElement("article");
	card.setAttribute("class", "card");
  
	let cardImg = document.createElement("img");
	cardImg.setAttribute("src", `assets/${member.name}.jpeg`);
	cardImg.setAttribute("alt", `${member.name} image`);
	cardImg.setAttribute("class", "person-img");
  
	let infoDiv = document.createElement("dv");
	infoDiv.setAttribute("class", "info");
  
	let nameHeader = document.createElement("h4");
	let nameTextNode = document.createTextNode(`${member.name}`);
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
}


displayCards();
