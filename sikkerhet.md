# Sikkerhet og risikoanalyse

## 1. Sikkerhetshull

### Åpen database
**Problem:**
MongoDB kan være tilgjengelig fra internett.

**Konsekvens:**
Uautoriserte brukere kan lese eller endre data.

**Tiltak:**
- Database er kun tilgjengelig på intern IP (10.12.7.251)
- Port 27017 er blokkert fra internett
- Brannmur begrenser tilgang til kun backend

---

### Manglende input-validering
**Problem:**
Bruker kan sende ugyldig eller skadelig data.

**Konsekvens:**
Kan manipulere eller ødelegge data i systemet.

**Tiltak:**
- Validere input i backend

if (!foxId || isNaN(foxId)) {
  return res.send("Ugyldig input");
}

### Ingen rate limiting

**Problem:**
En bruker kan sende mange forespørsler og stemme ubegrenset.

**Konsekvens:**
Statistikken blir feil og systemet kan overbelastes.

**Tiltak:**
- Begrense antall forespørsler per IP
- Eventuelt bruke express-rate-limit

---

## 2. Angrepstyper

### DoS (Denial of Service)

**Beskrivelse:**
En angriper sender mange forespørsler for å overbelaste serveren.

**Konsekvens:**
Nettsiden blir treg eller utilgjengelig.

**Tiltak:**
- Rate limiting
- Brannmur
- Overvåkning av trafikk

---

### ⚔️ NoSQL Injection

**Beskrivelse:**
En angriper prøver å manipulere database-queries.

**Eksempel:**

{ "foxId": { "$gt": "" } }

# 🔐 Sikkerhet – NoSQL Injection og tiltak

## Eksempel

{ "foxId": { "$gt": "" } }

## Konsekvens

Kan gi tilgang til uønsket data eller manipulere databasen.

## Tiltak

* Validere input
* Bruke Mongoose schema
* Ikke stole på brukerdata

---

## 3. Oppsummering

Systemet er sikret ved å:

* Begrense database-tilgang til interne IP-adresser
* Validere input fra brukere
* Beskytte mot spam og overbelastning
