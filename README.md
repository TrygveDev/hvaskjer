# hvaskjer
 
“Hva Skjer” Drømtorp web mobil app 

Web appen vil være en plattform for elever, lærere og ansatte ved Drømtorp Videregående skole for å holde seg oppdatert på hva som skjer på skolen. Appen vil ha to hovedfunksjoner: 

Aktiviteter: Appen vil ha en aktivitetskalender som vil liste opp alle aktiviteter og arrangementer som skjer på skolen. Brukere vil kunne se informasjon om hver aktivitet, inkludert tid, sted, beskrivelse og eventuelle påmeldingsdetaljer. Brukere vil også kunne melde seg på aktiviteter direkte fra appen. Når en bruker melder seg på en aktivitet, vil appen registrere påmeldingen og sende en bekreftelsesmelding til brukeren. 

Nyheter: Appen vil også ha en nyhetsseksjon som vil inneholde siste nytt om hva som skjer på skolen. Nyhetene vil bli publisert av skolens ansatte og vil inkludere informasjon om viktige hendelser, nye initiativer, prestasjoner av elever og ansatte og andre relevante oppdateringer. 

I tillegg vil appen ha noen generelle funksjoner som: 

Brukerregistrering: Appen vil kreve at brukerne registrerer seg med en gyldig e-postadresse og passord før de kan bruke appen. Dette vil gi skolen muligheten til å kontrollere hvem som har tilgang til informasjonen som deles på appen. 

Innlogging og autentisering: Brukere vil logge inn på appen med sin registrerte e-postadresse og passord. Appen vil bruke autentiseringsbiblioteket Passport og JWT for å håndtere autentisering og autorisering av API-tilgang. 

Responsivt design: Mobilwebappen vil være responsivt designet for å gi en optimal brukeropplevelse på alle enheter, inkludert mobiltelefoner, nettbrett og PC-er. 

API-grensesnitt: Appen vil ha et API-grensesnitt som vil bli utviklet ved hjelp av Express og Node.js på serveren. API-et vil håndtere alle forespørsler fra appen til databasen og vil implementere sikkerhetsfunksjoner som autentisering og autorisering. 

 

 

Frontend: 

ReactJS: Mobilwebappen vil være bygget med ReactJS, som er en populær frontend-rammeverk for å lage responsive webapplikasjoner. ReactJS gjør det enkelt å bygge gjenbrukbare UI-komponenter og håndtere applikasjonstilstanden effektivt. 

Axios: Axios er et HTTP-klientbibliotek som vil bli brukt til å håndtere API-kall fra mobilwebappen til backend-serveren. 

React Router: React Router er et bibliotek som gjør det enkelt å håndtere navigasjon mellom sider og ruter i ReactJS-applikasjoner. 

Material UI: Material UI er et populært bibliotek for å lage responsive og moderne brukergrensesnitt. Det gir et sett med gjenbrukbare UI-komponenter som følger Material Design-prinsippene. 

Backend: 

Express: Express er et populært rammeverk for å bygge webapplikasjoner og API-er i Node.js. Det gjør det enkelt å håndtere HTTP-forespørsler og -svar og gir en rekke nyttige funksjoner, som ruting, middelvare og feilhåndtering. 

Node.js: Node.js er en plattform som lar deg kjøre JavaScript-kode på serveren. Det gir en skalerbar og høytytende løsning for å håndtere backend-logikken for mobilwebappen. 

MongoDB: MongoDB er en populær NoSQL-database som vil bli brukt til å lagre og håndtere data for mobilwebappen. Det gir en skalerbar og fleksibel løsning for å håndtere strukturert og ustrukturert data. 

Mongoose: Mongoose er et bibliotek som vil bli brukt til å håndtere MongoDB-databasen i Node.js. Det gir et sett med nyttige funksjoner, som modeller, skjemaer og validering, som gjør det enkelt å håndtere MongoDB-data i Node.js. 

Passport: Passport er et autentiseringsbibliotek som vil bli brukt til å håndtere autentisering og autorisering for mobilwebappen. Det gir en enkel og fleksibel løsning for å håndtere brukerinnlogging og autorisering av API-tilgang. 

JWT: JWT (JSON Web Tokens) er en standard for å utveksle sikre tokens mellom klient og server. Det vil bli brukt til å håndtere autentisering og autorisering av API-tilgang for mobilwebappen. 
