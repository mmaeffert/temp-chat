# Your first and best temporary chat service
### sponsored by [Kama Webservice](www.kama-webservice.de)

Things to do:
- Aktuell ist es so, dass nach der Nachricht die der User gesendet hat, drei <br> kommen. Das kann man besser machen
- Die Farbe des Ladebalkens kann angepasst werden
- Der Ladebalken sollte immer außen stehen und nicht direkt neben dem Autornamen

Notes:
- Ich verwende [UIkit](https://getuikit.com/docs/introduction) als CSS library. Dort kann man sich einfach die notwendigen Komponenten anschauen und easy implementieren
- Eigene css kommt in die css/own.css
- Die Seite verwendet Firebase und dessen realtime database. Dazu muss auf der Maschine, die das ganze ausführt, notwendige Module mit `npm install -g firebase-tools` installieren
- Damit deine Änderungen am Code mit der Realtime Database funktionieren, muss die Datenbank ein Schlüsselpaar mit deinem Rechner austauschen. Kontaktiere mich und wir machen das