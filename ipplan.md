# IP-plan og nettverksoppsett

## Maskiner

| Rolle        | IP-adresse     | Beskrivelse |
|-------------|---------------|------------|
| Backend VM  | 10.12.7.250   | Kjører Node.js og frontend |
| Database VM | 10.12.7.251   | Kjører MongoDB |

---

## Kommunikasjon

Bruker - Backend - Database

- Backend kommuniserer med database via port 27017
- Kun backend har tilgang til databasen

---

## Sikkerhet

- MongoDB er konfigurert med:
  - bindIp: 0.0.0.0 (for intern tilgang)
- Brannmur:
  - Tillater kun trafikk fra backend VM
- Database er ikke eksponert mot internett

---

## Arkitektur

Frontend og backend kjører på samme server.
Databasen er separert på egen VM for bedre sikkerhet og skalerbarhet.

Flyt:
Bruker - Webserver - API - Database