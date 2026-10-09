const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
]

//antall studenter; bruker .length og refererer id studentCount for at det skal skrives ut til html-siden
document.getElementById("studentCount").innerHTML = students.length

//gir tallkarakterene bokstavverdier som skal brukes når gjennomsnittskarakteren skal vises i bokstavverdi
const gradeValues = {6 : "A", 5 : "B", 4 : "C", 3 : "D", 2 : "E", 1 : "F"}

// lager .map med alle elementene, som gjør at jeg kan peke på spesefikke 
// deler med data for hver student 
//gjør om karakterene i arrayen fra string til number 
const gradeNumbers = students.map(student => Number(student.grade))
//sjekker at det funker med console.log(gradeNumbers)


//bygger på eksempel fra forelesnings eksempel på å bruke .map og sum for å finne gjennomsnittet 
let sum = 0

gradeNumbers.map(n => { sum += n })

const snitt = sum / students.length
// bruker console.log(sum) og console.log(snitt) for å sjekke at det viser i consol og at svarene er riktige

//gjør om gjennomsnittskarakter til bokstavverdi ved å bruke gradeValues og Math.ceil som altid runder opp
// her har jeg googlet hvilke av de ulike funksjonene jeg bør bruke
//basert på svarene velger jeg å bruke Math.ceil fordi gjennomsnittet er 3.7 og tallkarakteren skal tilsvare 
//nærmeste heltall og Math.ceil runder opp
const rundetOppSnitt = Math.ceil(snitt)

const bokstav = gradeValues[rundetOppSnitt]

document.getElementById("averageGrade").innerHTML = bokstav
//det kommer opp "C" etter gjennomsnittskarakter på HMTL siden som betyr at det fungerer og er  riktig

//antall av hver karakter; bruker .filter for å plukke ut verdien og .length for å vise til hvor mange det er av hver
//bruker document.getElementById og tilhørende span id for å få det ut på HTML-dokumentet

// 6 = A
const antallA = students.filter(student=> student.grade === "6").length

document.getElementById("gradeA").innerHTML = antallA

// 5 = B
const antallB = students.filter(student=> student.grade === "5").length

document.getElementById("gradeB").innerHTML = antallB

// 4 = C
const antallC = students.filter(student=> student.grade === "4").length

document.getElementById("gradeC").innerHTML = antallC

// 3 = D
const antallD = students.filter(student=> student.grade === "3").length

document.getElementById("gradeD").innerHTML = antallD

// 2 = E
const antallE = students.filter(student=> student.grade === "2").length

document.getElementById("gradeE").innerHTML = antallE

// 1 = F
const antallF = students.filter(student=> student.grade === "1").length

document.getElementById("gradeF").innerHTML = antallF
//ser at resultatene er korrekte og havner der de skall på HTML-dokumentet 


//regne ut gjennomsnittlig alder; bruker .map
const snittAlder = students.map(student => student.age)
// sjekker at det synes med console.log(snittAlder) og går videre med samme type sum opplegg som tidligere 

let sumAge = 0

snittAlder.map(n => { sumAge += n })

const snittAge = sumAge / students.length
//console.log(snittAge)

//bruker .toFixed(2) fordi oppgaven ber om at tallet blir rundes av til 2 desimaler
document.getElementById("averageAge").innerHTML = snittAge.toFixed(2)


//antall som kom rett fra vidregående, bruker samme oppsett som ble brukt til å telle karakterer 
const vGS = students.filter(student=> student.age === 19).length

document.getElementById("highSchool").innerHTML = vGS

//antall som har arbeidserfaring, bruker samme oppsett igjen 
const antallWorkExperience = students.filter(student=> student.workexperience >= 1).length

document.getElementById("workExperience").innerHTML = antallWorkExperience

// i oppgaven har jeg brukt mye WebTricks egne notater og en god del googling, når jeg skjønte at flere  
//deler av oppgaven bygger på det samme var det mye lettere å gjennomføre; morsom oppgave!
