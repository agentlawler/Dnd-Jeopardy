const game = document.getElementById('game')
const scoreText = document.getElementById('score')
const answerBox = document.getElementById('answers')



const jeopardyCats = [
    //This is where all of the questions are going to go
    //arrays in objects in arrays in objects.....
    {
        topic: "Spells",
            questions: [
                {
                    question: "This school of magic is well known for being able to make lead into gold.",
                    answers: ["Evocation", "Necromancy", "Transmutation"],
                    correct: "Transmutation",
                    value: "100"
                },
                {
                    question: "A holy spell that allows for maximum healing and advantage on death saves.",
                    answers:["Beacon of Hope", "Zone of Truth","Aid"],
                    correct:"Beacon of Hope",
                    value:"200"
                },
                {
                    question:"This 3rd Level Spell is a favorite damage dealer for Wizards and Sorcerers.",
                    answers:["Fireball","Daylight","Fly"],
                    correct:"Fireball",
                    value:"300"
                },
                {
                    question:"The highest level a spell can typically be cast",
                    answers:['9','10','11'],
                    correct:'9',
                    value:"400"
                },
                {
                    question:"This high level spell can permanently change your form if you're not careful.",
                    answers:["Shapechange", "True Polymorph", "True Resurrection"],
                    correct:"True Polymorph",
                    value:"500"
                }
            ]
    },
    {
        topic: "Monsters",
            questions:[
                {
                    question:"This reptilian foe is also part of the name of a popular tabletop game.",
                    answers:["Goblin","Dragon","Zombie"],
                    correct:"Dragon",
                    value:"100"
                },
                {
                    question:"A particularly hardy type of monster. Better Bring a Cleric!",
                    answers:["Plant", "Beast", "Undead"],
                    correct:"Undead",
                    value:"200"
                },
                {
                    question:"A Black Dragon has immunity to this damage type",
                    answers:["Necrotic","Acid","Psychic"],
                    correct:"Acid",
                    value:"300"
                },
                {
                    question:"An action that powerful creatures can usually use 3 times per round",
                    answers:["Lair Action","Legendary Action","Reaction"],
                    correct:"Legendary Action",
                    value:"400"
                },
                {
                    question:'The minimum height or length needed to classify a creature as "Colossal".',
                    answers:["32ft","50ft","64ft"],
                    correct:"64ft",
                    value:"500"
                }
            ]
    },
    {
        topic: "Character",
            questions:[
                {
                    question:"The Ability Score connected to how smart you are.",
                    answers:["Charisma", "Strength", "Intelligence"],
                    correct:"Intelligence",
                    value:"100"
                },
                {
                    question:"A base game Background that compliments roguish types",
                    answers:['Acolyte', 'Folk Hero', 'Criminal'],
                    correct:'Criminal',
                    value:"200"
                },
                {
                    question:"This class is well known for their use of Divine Smite",
                    answers:["Monk","Cleric","Paladin"],
                    correct:"Paladin",
                    value:"300"
                },
                {
                    question:"As of the latest official sourcebook, there are this many classes available to choose from",
                    answers:["12","13","14"],
                    correct:"14",
                    value:"400"
                },
                {
                    question:"The maximum amount of spell slots a Warlock can have",
                    answers:["4","6","8"],
                    correct:"4",
                    value:"500"
                }
            ]
    },
    {
        topic: "Mechanics",
            questions:[
                {
                    question:"The amount of bonus actions you can do per round",
                    answers:["1","2","3"],
                    correct:"1",
                    value:"100"
                },
                {
                    question:"What the abbreviation RAW stands for.",
                    answers:["Read And Watch", "Rules As Written", "Rockin' Around the World"],
                    correct:"Rules As Written",
                    value:"200"
                },
                {
                    question:"Something you would not add proficiency bonus to",
                    answers:["Attack Bonus", "Damage", "Skill Checks"],
                    correct:"Damage",
                    value:"300"
                },
                {
                    question:"Having this condition gives the player disadvantage on ability checks",
                    answers:["Grappled", "Poisoned", "Prone"],
                    correct:"Poisoned",
                    value:"400"
                },
                {
                    question:"The least common Saving Throw in the game",
                    answers:["Charisma","Intelligence","Strength"],
                    correct:"Intelligence",
                    value:"500"
                }
            ]
        },
    {
        topic: "Pop Culture",
            questions:[
                {
                    question:"This DnD god has also been recently featured in tv show Stranger Things",
                    answers:["Asmodeus", "Bahamut", "Vecna"],
                    correct:"Vecna",
                    value:"100"
                },
                {
                    question:"The year this game was originally published",
                    answers:["1955","1974","1989"],
                    correct:"1974",
                    value:"200"
                },
                {
                    question:'Chris Pine was revealed to be "playing" this class in the most recent "Dungeons & Dragons: Honor Among Thieves" trailer',
                    answers:["Barbarian","Druid","Bard"],
                    correct:"Bard",
                    value:"300"
                },
                {
                    question:'Popular Dnd podcast "Critical Role" had a Kickstarter for an animated series that made this amount in its first hour.',
                    answers:["$10k","$100k","$1mil"],
                    correct:"$1mil",
                    value:"400"
                },
                {
                    question:"This Action Star also plays DnD in their free time.",
                    answers:["Dwayne Johnson","Mark Whalberg","Vin Diesel"],
                    correct:"Vin Diesel",
                    value:"500"
                }
            ]
    }
]


function addCategory(category) {
    //now we're adding the columns to the gameboard
    const column = document.createElement('div')
    //creating a div tag in html and naming it 'catColumn'
    column.classList.add('catColumn')
                        //imagine... a whole column of cats...

    const columnTitle = document.createElement('div')
    //second verse same as the first, but its the names now
    columnTitle.classList.add('columnTitle')
    columnTitle.innerText = category.topic
    //specifying we want the topic tags as the category titles

    column.append(columnTitle)
    game.append(column)
    //this actually adds the column and titles to the html

    category.questions.forEach(question => {
       const box = document.createElement('div')
       box.classList.add('box')
       column.append(box)
       //using an arrow function to add a new div in the html
       //for the questions to go, so they appear when clicked
            //adding event listener later

        if (question.value === "100") {
            box.innerHTML = 100
        }
        if (question.value === "200") {
            box.innerHTML = 200
        }
        if (question.value === "300") {
            box.innerHTML = 300
        }
        if (question.value === "400") {
            box.innerHTML = 400
        }
        if (question.value === "500") {
            box.innerHTML = 500
        }
        //adds both text and value for the cards
    
        box.setAttribute('data-question', question.question)
        box.setAttribute('data-correct', question.correct)
        box.setAttribute('data-answer-1', question.answers[0])
        box.setAttribute('data-answer-2', question.answers[1])
        box.setAttribute('data-answer-3', question.answers[2])
        box.setAttribute('data-value', box.getInnerHTML())

        box.addEventListener("click", openBox)
        //the event listener that runs the function to open the
        //question and run the function that adds question text

    })

}
let score = 0
//start our score @ 0
jeopardyCats.forEach(category => addCategory(category))
    //saying to keep adding the columns until it runs out

function openBox() {
    this.innerHTML = ""
    this.innerText = ""
    // SUPPOSEDLY clears out the styling and text of box


    const questText = document.createElement('div')
    questText.classList.add("questText")
    questText.innerHTML = this.getAttribute('data-question')
    //adds the question text


    const btn1 = document.createElement('button')
    const btn2 = document.createElement('button')
    const btn3 = document.createElement('button')
    //create the buttons
    btn1.classList.add("btn1")
    btn2.classList.add('btn2')
    btn3.classList.add('btn3')
   

    //then we add text

    btn1.innerHTML = this.getAttribute('data-answer-1')
    btn2.innerHTML = this.getAttribute('data-answer-2')
    btn3.innerHTML = this.getAttribute('data-answer-3')
    //puts the answer text in the buttons
    
    btn1.addEventListener('click', getResult)
    btn2.addEventListener('click', getResult)
    btn3.addEventListener('click', getResult)
    //the event listeners for the button, and calling a later function that grabs answers/values

    this.append(questText)
    answerBox.append(btn1,btn2,btn3)
    //now tell comp to actually add it to html

    const allBoxes = Array.from(document.querySelectorAll('.box'))
        //make variable allBoxes out of an array of everything with the class box
    allBoxes.forEach(box => box.removeEventListener('click', openBox))
        //make it so that each time the function we are in(openBox) is called, we 
        //remove the eventListener, disabling the user from clicking on other boxes
        //while still in the one they picked
}

function getResult () {

    const allBoxes = Array.from(document.querySelectorAll('.box'))
        //make an array variable again
    allBoxes.forEach(box => box.addEventListener("click", openBox))
        //re-enables the event listeners on other boxes after getting a result



    const answerButton = this.parentElement
        //each button will contain the data from their parent element
    

    if (answerButton.getAttribute('data-correct') == this.innerHTML) {
            //looks to see if innerHTML has text that matches what the 'data-correct' value is
        score = score + parseInt(answerButton.getAttribute('data-value'))
            //add the value attached to 'data-value' to your score
        scoreText.innerHTML = score
            //show the score
        answerButton.classList.add('rightAnswer')
        //changes the class of the button

        //remove text in box within timeout function for time delay
        setTimeout(() => {
            while (answerButton.firstChild) {
                answerButton.removeChild(answerButton.lastChild)
            }
            answerButton.innerHTML = answerButton.getAttribute('data-value')
        }, 250)
        //show value of card
    } else {
        answerButton.classList.add('wrongAnswer')
        setTimeout(() => {
            while (answerButton.firstChild) {
                answerButton.removeChild(answerButton.lastChild)
            }
            answerButton.innerHTML = "X"
        }, 250)
        //else show an x, they got it wrong
    }
    answerButton.removeEventListener("click", openBox)
}



////Sources used so far
    //https://css-tricks.com/perfect-full-page-background-image/
    //https://www.w3schools.com/cssref/
    //https://www.youtube.com/watch?v=fYMBkayHmUo
    //https://fontmeme.com/jeopardy-font/
    //https://www.youtube.com/watch?v=I8BRAgMrxXM
    //https://www.youtube.com/watch?v=vYEkEMfoi1c
    //https://www.w3schools.com/tags/tag_input.asp
    //https://www.w3schools.com/tags/att_button_type.asp
    //https://stackoverflow.com/questions/1397592/difference-between-id-and-name-attributes-in-html
    //https://www.w3schools.com/tags/tag_form.asp
    //https://www.geeksforgeeks.org/what-is-the-use-of-asterisk-selector-in-css/#:~:text=The%20asterisk%20(*)%20is%20known,the%20elements%20on%20the%20page.
    //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    //https://developer.mozilla.org/en-US/docs/Web/API/Element
    //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
    //https://www.w3schools.com/jsref/prop_node_parentelement.asp
    //https://www.w3schools.com/jsref/jsref_parseint.asp
    //https://stackoverflow.com/questions/19030742/difference-between-innertext-innerhtml-and-value
    //https://www.w3schools.com/jsref/met_win_settimeout.asp
    //https://www.w3schools.com/jsref/prop_node_firstchild.asp
    //https://www.w3schools.com/jsref/prop_node_lastchild.asp
    //
    //prev  notes