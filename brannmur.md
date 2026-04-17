# Brannmur

Det er konfigurert brannmur på begge VMer.

### Backend (10.12.7.250)
- Port 3000 er åpen for webtrafikk
- SSH er tillatt

### Database (10.12.7.251)
- Kun backend (10.12.7.250) har tilgang til port 27017
- Direkte tilgang fra andre maskiner er blokkert

Dette sikrer at databasen ikke er eksponert mot internett.
