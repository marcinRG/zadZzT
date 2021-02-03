# Rozwiązanie zadania

Przy rozwiązaniu zadania poszedłem po linii najmniejszego oporu. Jeśli ktoś uwielbia kolor żóty to być może uzna moje rozwiązanie za estetyczne.
Rozwiązanie składa się z dwóch części: 
1. W konfiguracji webpacka dodano `raw-loader` umożliwający bundlowanie dowolnych plików
2. Zmieniłem `engine.js` w taki sposób, że możliwe jest ładowanie template'tów zarówno z zewnętrznych plików jak i również w dotychczasowy sposób, z sekcji script nagłówka.

### Wykonane zmiany oryginalnych plików

1. `router.js` - dodano parametr do tej metody, dzięki czemu można wybrać id elementu, w którym renderowane będą kolejne podstrony.
2. `engine.js` - dodano funkcję `getTemplate(str)` - dzięki której można ładować szablony albo w dotychczasowy sposób, albo z dołączanych plików szablonów.

### Moje pliki 

1. `appState.js` - plik zawierący klasę przechowującą stan aplikacji.
2. `getServerResponse.js` - funkcja do wysłania zapytań na serwer.


### Różnice między moim rozwiązaniem a specyfikacją

Zostawiłem podstronę 'test' ładowaną z `index.html` po to aby sprawdzić czy działają dwa sposoby ładowania szablonów jednocześnie.
Po zalogowaniu na stronie głównej widoczna jest dodatkowa sekcja, zawierająca przycisk do wylogowania. 


### Zrzuty ekranów aplikacji 

- strona główna (logowania)

![Home Page!](https://raw.githubusercontent.com/marcinRG/zadZzT/master/imgs/home.jpg "Strona główna")

- błąd pokazujący się przy wybraniu nieprawidłowego adresu

![Error!](https://raw.githubusercontent.com/marcinRG/zadZzT/master/imgs/404.jpg "Strona nie istnieje")

- ekran powitalny po prawidłowym zalgowaniu 

![Logged in!](https://raw.githubusercontent.com/marcinRG/zadZzT/master/imgs/login-sukces.jpg "Udane logowanie")
