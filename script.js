const usStates = ["What is the capital of Alabama?", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
const stateCap = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", " Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "Saint Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"]



// The  long list of 'q' variables below are unnecessary. Remove them after completing work with the arrays.
let q1 = usStates[0]
let q2 = usStates[1]
let q3 = usStates[2]
let q4 = usStates[3]
let q5 = usStates[4]
let q6 = usStates[5]
let q7 = usStates[6]
let q8 = usStates[7]
let q9 = usStates[8]
let q10 = usStates[9]
let q11 = usStates[10]
let q12 = usStates[11]
let q13 = usStates[12]
let q14 = usStates[13]
let q15 = usStates[14]
let q16 = usStates[15]
let q17 = usStates[16]
let q18 = usStates[17]
let q19 = usStates[18]
let q20 = usStates[19]
let q21 = usStates[20]
let q22 = usStates[21]
let q23 = usStates[22]
let q24 = usStates[23]
let q25 = usStates[24]
let q26 = usStates[25]
let q27 = usStates[26]
let q28 = usStates[27]
let q29 = usStates[28]
let q30 = usStates[29]
let q31 = usStates[30]
let q32 = usStates[31]
let q33 = usStates[32]
let q34 = usStates[33]
let q35 = usStates[34]
let q36 = usStates[35]
let q37 = usStates[36]
let q38 = usStates[37]
let q39 = usStates[38]
let q40 = usStates[39]
let q41 = usStates[40]
let q42 = usStates[41]
let q43 = usStates[42]
let q44 = usStates[43]
let q45 = usStates[44]
let q46 = usStates[45]
let q47 = usStates[46]
let q48 = usStates[47]
let q49 = usStates[48]
let q50 = usStates[49]

let a1 = stateCap[0]
let a2 = stateCap[1]
let a3 = stateCap[2]
let a4 = stateCap[3]
let a5 = stateCap[4]
let a6 = stateCap[5]
let a7 = stateCap[6]
let a8 = stateCap[7]
let a9 = stateCap[8]
let a10 = stateCap[9]
let a11 = stateCap[10]
let a12 = stateCap[11]
let a13 = stateCap[12]
let a14 = stateCap[13]
let a15 = stateCap[14]
let a16 = stateCap[15]
let a17 = stateCap[16]
let a18 = stateCap[17]
let a19 = stateCap[18]
let a20 = stateCap[19]
let a21 = stateCap[20]
let a22 = stateCap[21]
let a23 = stateCap[22]
let a24 = stateCap[23]
let a25 = stateCap[24]
let a26 = stateCap[25]
let a27 = stateCap[26]
let a28 = stateCap[27]
let a29 = stateCap[28]
let a30 = stateCap[29]
let a31 = stateCap[30]
let a32 = stateCap[31]
let a33 = stateCap[32]
let a34 = stateCap[33]
let a35 = stateCap[34]
let a36 = stateCap[35]
let a37 = stateCap[36]
let a38 = stateCap[37]
let a39 = stateCap[38]
let a40 = stateCap[39]
let a41 = stateCap[40]
let a42 = stateCap[41]
let a43 = stateCap[42]
let a44 = stateCap[43]
let a45 = stateCap[44]
let a46 = stateCap[45]
let a47 = stateCap[46]
let a48 = stateCap[47]
let a49 = stateCap[48]
let a50 = stateCap[49]


// Standard 'for loop. Not sure if I'm going to use it now. Currently just logging to console.

for (let i = 0; i <= usStates.length; i++) {
    console.log(usStates[i])
}


// Renders quiz questions in the HTML p tag - need to interate through array

 function askQuestion() {  
   for (let i = 0; i <= usStates.length; i++) {
        //console.log(usStates[i])
        document.querySelector("#city").innerHTML = usStates[0]
    }                                    
}
    askQuestion()

//Invoked by 'onclick' method on the HTML 'Check Answer' button

function checkAnsFunction() {
    let answer = document.querySelector("#enterAns").value
    if (answer === a1) {
            document.querySelector("#response").innerHTML = "You Nailed It! You Rule!"
    }   
    else {
          document.querySelector("#response").innerHTML = "Sorry, try again" 
    }
 }   
    checkAnsFunction()




/*

for (let i = 0; i <= usStates.length; i++) {    
    if (usStates[i] === stateCap[0]) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
 }

*/