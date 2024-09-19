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

Natuurlijk, hier is je oorspronkelijke tekst in eenvoudigere taal:

1. **Voor het eerst HTML-elementen maken met JavaScript**  
   - Dit is de eerste keer dat we met JavaScript automatisch HTML maken. Eerder schreven we de HTML zelf, maar nu gebruiken we JavaScript om elementen direct aan de pagina toe te voegen. Dit is efficiënter.

2. **Werken met gegevens uit een array**  
   - We gebruiken een `forEach`-loop in JavaScript om een lijst (array) van studenten door te lopen en voor elke student een kaart te maken. De kaarten worden automatisch gegenereerd, waardoor we de gegevens makkelijk kunnen aanpassen zonder de HTML zelf te hoeven veranderen.

3. **Voorwaardelijke logica**  
   - In een deel van de code hebben we logica toegevoegd om specifieke afbeeldingen te tonen, afhankelijk van de achternaam van een student. We dachten na over manieren om dit sneller te maken, maar voor een kleine lijst zoals deze is dat niet nodig.

4. **Nette code**  
   - We hebben ervoor gezorgd dat de code netjes en overzichtelijk is. Elk onderdeel van de kaart, zoals de afbeelding, naam en knop, heeft zijn eigen element. Dit maakt het makkelijk om het ontwerp later aan te passen.

5. **Onze vaardigheden uitbreiden**  
   - Dit project heeft ons geholpen om beter te begrijpen hoe we HTML met JavaScript kunnen mengen, gebeurtenissen kunnen afhandelen en functies kunnen gebruiken. Dit is een goede basis om op verder te bouwen.

**Toekomstige verbeteringen**  
- **Optimalisatie**: De code werkt goed voor een kleine lijst, maar we kunnen het nog sneller maken, bijvoorbeeld door de voorwaardelijke logica te verbeteren.
- **Styling**: We willen ook geavanceerdere CSS gebruiken om de kaarten nog mooier te maken.

Dit project is een belangrijke stap in onze ontwikkeling als programmeurs en helpt ons op weg naar mooie en gebruiksvriendelijke webapplicaties.


<H2>Samenwerking</H2>
Onze samenwerking verliep goed. We hebben regelmatig via Microsoft Teams overlegd om ideeën uit te wisselen, vragen te stellen en oplossingen te vinden voor eventuele uitdagingen. Door deze constante communicatie konden we snel vooruitgang boeken en ervoor zorgen dat iedereen op één lijn zat. Ook in de les zelf verliep de communicatie goed.

Daarnaast maakten we intensief gebruik van de GitHub-issues om onze taken te organiseren en bij te houden. Dit hielp ons om duidelijk zicht te houden op wat er gedaan moest worden, wie waar aan werkte, en welke problemen nog opgelost moesten worden. Deze manier van werken zorgde ervoor dat het project gestructureerd en efficiënt verliep.











