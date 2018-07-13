const usStates = ["What is the capital of Alabama?", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
const stateCap = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", " Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "Saint Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"]

// Renders quiz questions in the HTML p tag.

 function askQuestion() {  
   for (let i = 0; i <= usStates.length; i++) {
        document.querySelector("#city").innerHTML = usStates[0]
    }                                    
}
    askQuestion()

// Invoked by 'onclick' via the HTML 'Check Answer' button.

function checkAnsFunction() {
    let answer = document.querySelector("#enterAns").value
    if (answer === stateCap[0]) {
            document.querySelector("#response").innerHTML = "You Nailed It! You Rule!"
    }   
    else {
          document.querySelector("#response").innerHTML = "Sorry, try again" 
    }
 }   
    checkAnsFunction()
