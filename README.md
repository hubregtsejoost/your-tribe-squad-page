<img src="https://github.com/user-attachments/assets/f9deaa13-63e9-4e36-99fa-15199e1a424f"
alt="iphone" style="width:200px;"/>
<img src="https://github.com/user-attachments/assets/472f577b-3748-4803-b1b5-b25da0759f77"
alt="ipad" style="width:300px;"/>
<img src="https://github.com/user-attachments/assets/4aea695e-0a7a-43da-be72-e0f76ce92cc5"
alt="desktop" style="width:400px;"/>




<h1>Squadpage</h1>
<bhr>

<br>
<br>

<H2>Beschrijving</H2>

Wij zijn Branco van Beek, Haroub Said en Joost Hubregtse. Wil je meer informatie over ons vinden? Ga via onze Squadpage naar onze Visitekaartjes!

In week 1 van de Associate Degree opleiding Front-end Design en Development hebben wij, de studenten van jaar 2024/2025 de opdracht gekregen om onze eigen visitekaartje te ontwerpen. Uiteindelijk heeft elke student een visitekaartje gemaakt en een dooverwijzende link ervoor in hun Github gezet. Daarna hebben we de opdracht gekregen om een Squadpage te maken. De Squadpage is een pagina met alle visitekaartjes van alle studenten van jaar 2024/2025 en ook de hotspots op de Amstelcampus. Voor deze opdracht moest je groepen van drie maken. Ieder groepje maakt helemaal naar eigen wens een Squadpage vanaf 0. In elk groepje moet iedereen een eigen Squadpage maken aan de hand van een design die door het groepje is gemaakt. Op het eind moeten deze 3 verschillende Squadpages worden samengevoegd tot 1 Squadpage.

## Werkwijze</h2>

<ul>
 <li>CSS</li>
 <li>HTML</li>
 <li>Javascript</li>
 <li>Figma</li>
</ul>



# Waar zijn we het meest trots op?</h2>



## De Code 

```javascript 
(function displayCards() {

  // return and do not render squad pages
  if(window.location.pathname !== "/") return;

  let squadSection = document.getElementsByClassName("squad-section")?.[0];

  squad
    .sort((a, b) => a - b)
    .forEach((member) => {
      let card = document.createElement("article");
      card.setAttribute("class", "card");

      let cardImg = document.createElement("img");
 
      cardImg.setAttribute(
        "src",
        member.lastName == "El Hilali"
          ? `assets/${member.name}2.jpeg`
          : `assets/${member.name}.jpeg`
      );

      cardImg.setAttribute("alt", `${member.name} image`);
      cardImg.setAttribute("class", "person-img");

      let infoDiv = document.createElement("div");
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

```` 




## Waarom we Trots zijn op Deze Code

### 1. Eerste Keer HTML Elementen Maken met JavaScript
Dit is de eerste keer dat we dynamisch HTML-elementen genereren met JavaScript. Voorheen zouden we de HTML direct hebben geschreven, maar hier maken we gebruik van de kracht van JavaScript om DOM-elementen on-the-fly te creëren. Deze aanpak is efficiënter.

### 2. Werken met Array Data
We gebruiken een JavaScript `forEach`-loop om een dataset (de `squad` array) door te lopen en individuele kaarten te renderen voor elk lid van het team. Het sorteren en renderen gebeurt automatisch, wat ons meer flexibiliteit geeft om data aan te passen zonder de HTML handmatig te herschrijven.

### 3. Voorwaardelijke Logica
In een deel van de code implementeerden we voorwaardelijke logica om specifieke afbeeldingen weer te geven op basis van de achternaam van het lid. Dit deed ons zorgvuldig nadenken over efficiëntie en prestaties—hoewel we de ternary operator hadden kunnen optimaliseren, beseften we dat dit niet cruciaal is voor een kleine dataset zoals deze.

### 4. Schone Code
We hebben de zorgen gescheiden op een manier die deze code leesbaar en onderhoudbaar maakt. Elk deel van de kaart, zoals de afbeelding, naam en knop, heeft zijn eigen `div`, `img` of `a`-element dat afzonderlijk is gemaakt. Deze structuur stelt ons in staat het ontwerp in de toekomst eenvoudig aan te passen.

### 5. Uitbreiden van Onze Vaardigheden
Dit kleine project heeft ons uitgedaagd om beter te begrijpen hoe DOM-manipulatie, event handling en het gebruik van JavaScript-functies om met HTML te communiceren, werken. Het is een basis waarop we willen voortbouwen.

## Toekomstige Verbeteringen
- **Optimalisatie:** Hoewel deze code goed werkt voor een kleine lijst, zijn we ons ervan bewust dat er manieren zijn om te optimaliseren, zoals het omkeren van ternary operaties voor snellere opzoekingen.
- **Styling:** We zijn van plan dit verder te verbeteren door geavanceerdere CSS toe te passen voor de kaartontwerpen.

Over het algemeen symboliseert deze code een grote sprong vooruit in onze reis om ontwikkelaars te worden. Het is een opstap naar het schrijven van nog complexere, interactieve webapplicaties!










