# API Dokumentasjon

## Oversikt

Dette systemet består av en frontend, backend og database. Backend håndterer API-endepunkter som brukes til å registrere stemmer og vise statistikk.

---så

## GET /

**Beskrivelse:**
Viser to tilfeldige rever.

**Respons:**
HTML-side med:
- To bilder av rever
- Knapper for å stemme

## POST /vote

**Beskrivelse:**
Registrerer en stemme på valgt rev.

**Request body:**

{
  "foxId": "45"
}

## Funksjon

* Søker etter rev i databasen
* Oppretter ny hvis den ikke finnes
* Øker antall stemmer med 1

## Respons

Redirect til forsiden med melding om hvilken rev brukeren stemte på

---

## GET /statistikk

### Beskrivelse

Viser statistikk over de mest populære revene.

### Respons

HTML-side med:

* Topp 5 rever
* Antall stemmer per rev
* Hvilken rev som leder

---

## Teknologi

* Backend: Node.js + Express
* Database: MongoDB
* ODM: Mongoose
* Frontend: EJS
