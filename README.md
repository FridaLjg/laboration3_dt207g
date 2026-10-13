# CV Webbtjänst - Laboration 3
Detta respository innehåller kod för en REST-webbtjänst skapad med Node.js, Express, MongoDB och Mongoose för hantering av arbetserfarenheter.
Grundläggande funktionalitet för CRUD (Create, Read, Update, Delete) är implementerad.

## Länk
API:et är tillgängligt på följande adress vid lokal körning:
http://localhost:3000/workexperiences

## Installation, databas
APIet använder databasen MongoDB.
Klona ner källkodsfilerna, kör kommando npm install för att installeranödvändiga npm-paket. Kör installations-skriptet install.js. 

Webbtjänsten använder MongoDB tillsammans med Mongoose för schemahantering.

Schema:
- companyname (String, obligatoriskt)
- jobtitle (String, obligatoriskt)
- location (String, obligatoriskt)
- description (String, icke obligatorskt)

## Användning
Nedan finns beskrivet hur man nå APIet på olika vis:

|Metod  |Ändpunkt     |Beskrivning                                                                           |
|-------|-------------|--------------------------------------------------------------------------------------|
|GET    |/workexperiences     |Hämtar alla registrerade arbetserfarenheter.                                                      |
|POST   |/workexperiences   |Skapar en ny arbetserfarenhet.               |
|PUT    |/workexperiences/:ID |Uppdaterar en existerande arbetserfarenthet.|
|DELETE |/workexperiences/:ID |Raderar en arbetserfarenhet.                                                     |

Exempel på POST-anrop
```
{
   "companyname": "Göteborgs Stad",
   "jobtitle": "Lärare",
   "location": "Göteborg"
   "description": "Undervisning i lågstadiet"
}
```
