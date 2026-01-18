# PASNESERPARK – WEBSITE BLUEPRINT v2.0

---

## 1. DOEL & SCOPE

Bouw een premium, moderne, rustige glamping-website voor PasneserPark (Albanië).

**Belangrijk:**
- Eerst alleen Nederlands
- Meertalig voorbereid (16 talen via 24 vlaggen)
- Static website (HTML / CSS / JS)
- Eenvoudig aanpasbaar: teksten & foto's zonder codekennis

---

## 2. PROJECTSTRUCTUUR (VERPLICHT)

Claude moet exact deze structuur gebruiken:

```
pasneserpark-website/
│
├── index.html
├── accommodation.html
├── experiences.html
├── reviews.html
├── contact.html
│
├── css/
│   ├── main.css
│   ├── components.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── weather.js
│   └── language.js
│
├── images/
│   ├── home/
│   ├── accommodation/
│   ├── experiences/
│   ├── team/
│   └── ui/
│
├── data/
│   ├── reviews.json
│   ├── team.json
│   └── texts-nl.json
│
└── assets/
    └── logo.svg
```

👉 Claude mag geen andere structuur verzinnen

---

## 3. DESIGN PRINCIPES

### Kleuren (BELANGRIJK)
- **Hoofdachtergrond:** De zandkleur uit het logo = standaard achtergrondkleur voor de HELE website. Geen wit nergens.
- **Accenten:** Diep bosgroen / olijfgroen voor knoppen, links, highlights
- **Tekst:** Donkerbruin of antraciet (geen zwart)
- **Texturen:** Houttinten waar passend

### Sfeer
- Premium glamping look
- Veel ademruimte
- Zachte schaduwen
- Geen schreeuwerige animaties
- Elegant maar no-nonsense

### Typografie
- Elegante serif voor titels
- Rustige sans-serif voor bodytekst
- Tekst moet er verzorgd uitzien, niet template-achtig

---

## 4. TAALKEUZE-PAGINA (eerste scherm)

### Vormgeving
- Volledig schermvullend
- Achtergrondkleur: **exact dezelfde zandkleur als in het logo** (naadloze overgang)
- Groot PasneserPark logo gecentreerd
- Daaronder tekst: "Kies je taal" + "Choose your language"

### Vlaggen
- **24 vlaggen, speels geplaatst** (niet in strak grid, gestrooid/verspreid)
- **Geen kadertjes of hokjes** om de vlaggen
- Vlaggen zweven los over de zandkleur achtergrond

### Vlaggen en talen (16 talen, 24 vlaggen):

| Vlag | Taal |
|------|------|
| Nederland | Nederlands |
| Friesland | Fries |
| België | Nederlands |
| Duitsland | Duits |
| Frankrijk | Frans |
| Italië | Italiaans |
| Spanje | Spaans |
| Portugal | Portugees |
| Polen | Pools |
| Tsjechië | Tsjechisch |
| Denemarken | Deens |
| Zweden | Zweeds |
| Noorwegen | Noors |
| Finland | Fins |
| Verenigd Koninkrijk | Engels |
| Verenigde Staten | Engels |
| Canada | Engels |
| Australië | Engels |
| Nieuw-Zeeland | Engels |
| Ierland | Engels |
| Zuid-Afrika | Engels |
| Albanië | Albanees |
| Kosovo | Albanees |
| Griekenland | Grieks |

**Technisch:**
- Taalkeuze logica in language.js
- Voor nu: alle vlaggen leiden naar Nederlandse content

---

## 5. HEADER (vaste bovenbalk)

### Vormgeving
- **Niet wit!** Header moet transparant zijn over hero-foto, of in zandkleur
- Geen losse witte balk die boven de content zweeft

### Indeling
**Links:**
- Logo (klik = home)

**Midden:**
- Navigatie: Accommodatie | Te doen in de buurt | Reviews | Contact

**Rechts:**
- Weerwidget (icoon + temperatuur, hover voor 3 dagen)
- Knop: "Reserveren" (link naar Airbnb)

---

## 6. HOME – CONTENT SECTIES

### 6.1 Hero sectie

- Afbeelding: images/home/hero-header.jpg (eigen foto van tent)
- Subtiele donkere gradient onderaan voor tekstleesbaarheid
- Elegante typografie

**Titel:** PasneserPark

**Subtitel:** Glamping in de Albanese natuur

### 6.2 Beleving (fotogrid 2x3)

Afbeeldingen:
- grid-1.jpg
- grid-2.jpg
- grid-3.jpg
- grid-4.jpg
- grid-5.jpg
- grid-6.jpg

Effect:
- Subtiele hover
- Licht inzoomen
- Rustige schaduw

### 6.3 Tekstblok

**Tekst:**
"Een beltent, een luxe bed, een houten vlonder. Geen poespas, wel comfort."

---

## 7. ACCOMMODATIE PAGINA

Gebruik beelden uit: /images/accommodation/

Volgorde:
1. Tent overzicht
2. Platform
3. Binnenkant tent
4. Douche
5. Toilet
6. Wasbak buiten

Tekst kort, concreet, warm.

---

## 8. ERVARINGEN / TE DOEN

Gebruik: /images/experiences/

Items:
- Buitenkeuken
- Waterplek
- Bospaadjes
- Avond bij bar

**Niet noemen:**
- Dikke eik
- Kerk
- Dingen waarvoor je eerst moet rijden

---

## 9. TEAM SECTIE

### Vormgeving
- Foto's in cirkels
- Bij hover: **een blok dat erbij verschijnt** (geen spreekballon!)
- 3 korte zinnen per persoon, **elke zin op één regel**
- Ouderwetse emoticons: `:)` en `;)` (GEEN moderne emoji's)

### Volgorde en foto's:
1. Merel (merel.jpg)
2. Frank (frank.jpg)
3. Tito (tito.jpg)
4. Besa (besa.jpg)
5. Alpha (alpha.jpg)

### Hover-teksten:

**Merel**
- Kattenvrouwtje
- Houdt van koken en bakken
- Had ooit een snoepwinkel

**Frank**
- Is dol op snoepjes ;)
- Rijdt graag op brommertje
- Noemt zichzelf Halfbanees

**Tito**
- Is Halfbanees
- Werkt als schaapsherder en als tourgids
- Blijft soms nachtenlang weg

**Besa**
- Kan urenlang mediteren :)
- Is een echte miauwpoes
- Blijft soms ook nachtenlang weg

**Alpha**
- Heeft leren miauwen van Besa
- Is heel lief...
- Maar pas op!

---

## 10. REVIEWS

Bron: Airbnb reviews

Weergave:
- Naam
- Sterren
- Korte quote (max 2-3 regels)

Data uit: /data/reviews.json

---

## 11. TECHNISCHE RANDVOORWAARDEN

- Geen frameworks
- Geen build tools
- Pure HTML / CSS / JS
- Alles lokaal werkend
- Makkelijk uitbreidbaar

---

## 12. OPDRACHT AAN CLAUDE

1. Bouw deze website exact volgens dit blueprint
2. Gebruik de bestaande mapstructuur en afbeeldingen
3. Verzin geen extra structuur of content
4. De zandkleur uit het logo is de basis voor alles - geen wit
5. Lever schone, leesbare code
6. Alles moet eenvoudig aanpasbaar zijn
