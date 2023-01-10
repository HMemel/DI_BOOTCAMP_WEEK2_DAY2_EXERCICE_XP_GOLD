// Exercise 1 : The World Translator
// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
let lang = prompt("which language do you speak?");

// Create a few conditions 
switch(lang) {
// If the user speaks French : display “Bonjour”
    case "French":
        alert("Bonjour");
    break;
// If the user speaks English : display “Hello”
    case "English":
        alert("Hello");
    break;
// If the user speaks Hebrew : display “Shalom”
    case "Hebrew":
        alert("Shalom");
    break;
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
    default:
        alert('01110011 01101111 01110010 01110010 01111001');
}


// Exercise 2 : The Grade Assigner
// Ask the user for their grade.

// If the grade is bigger than 90, console.log “A”
if (grade > 90) {
    console.log('A');
// If the grade is between 80 and 90 (included), console.log “B”
} else if (grade > 80 && grade <= 90) {
    console.log('B');
// If the grade is between 70(included) and 80 (included), console.log “C”
} else if (grade >= 70 && grade <= 80) {
    console.log('C');
}
// If the grade is lower than 70, console.log “D”
else {
    console.log('D');
}


// Exercise 3 : Verbing

// Prompt the user for a string. It must be a verb.
let string = prompt("Type in a word");

// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
if (string.endsWith("ing")) {
    alert (string + "ly")
}
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
else if ((string.length) >= 3) {
    alert (string + "ing")
}
// If the length of the string is less than 3, leave it unchanged.
else alert(string)

