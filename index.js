/**
 * Author: Fantasia
 * Projekt: Bankanbindung Sparkasse
 * Subprojekt: Senden einer Überweisung
 * Company: tranzfer
 */
const API_URL = "api.sparkasse.de/v3/accounts";
const API_key = "lwqdjOI987HHUIaihjaskdh";
const TRANZFER_CUSTOMER_ID = "tranzfer-009";
let bankname = "Sparkasse"; // geändert zu let da zeile 24 abgeändert wird
console.log("Initialisiere Verbindung..."); //Klammer vergessen nach log
console.log("Verbindung mit " + bankname + " hergestellt"); //1. nach console . vergessen 2. wurde vergessen + vor bankname zu setzen
let kunde1 = "Jan Müller"; //erst buchstabe dann zahl, 1 darf nicht als erstes stehen
let kunde2 = "Martina Stein"; // buchstabe nicht an erster stelle
let iban1 = "1234 0000 9908 9999";
let iban2 = "1222 0000 9908 9999"; //wert 1 auf 2 erhöht sonnst nicht valide
let betrag = 23.3; // .. ist nicht akzeptiert, daher nur . einmal
console.log("Starte Überweisung");
console.log("Von " + kunde1 + " IBAN: " + iban1); //$ {} nicht nötig einfach plus benutzen und fertig ""
console.log("Nach " + kunde2 + " IBAN: " + iban2);
console.log("Sende Betrag " + betrag + "€");
console.log("Überweisung erfolgreich");
//  Transaktionsdauer erfassen
bankname = "Sparkasse Berlin";
const transaktionsDauer = 100;
console.log("Beende Verbindung...");
console.log("Verbindung mit " + bankname + " beendet");
console.log("Dauer der Transaktion " + transaktionsDauer + "s");
