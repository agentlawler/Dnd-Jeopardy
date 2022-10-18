const game = document.getElementById('game')
const score = document.getElementById('score')

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
                level: "100"
            },
            {
                question: "A holy spell that allows for maximum healing and advantage on death saves.",
                answers:["Beacon of Hope", "Zone of Truth","Aid"],
                correct:"Beacon of Hope",
                level:"200"
            },
            {
                question:"This 3rd Level Spell is a favorite damage dealer for Wizards and Sorcerers.",
                answers:["Fireball","Daylight","Fly"],
                correct:"Fireball",
                level:"300"
            },
            {
                question:"The highest Level a spell can typically be cast",
                answers:['9','10','11'],
                correct:'9',
                level:"400"
            },
            {
                question:"This high level spell can permanently change your form if you're not careful.",
                answers:["Shapechange", "True Polymorph", "True Resurrection"],
                correct:"True Polymorph",
                level:"500"
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
                level:"100"
            },
            {
                question:"A particularly hardy type of monster. Better Bring a Cleric!",
                answers:["Plant", "Beast", "Undead"],
                correct:"Undead",
                level:"200"
            },
            {
                question:"A Black Dragon has immunity to this damage type",
                answers:["Necrotic","Acid","Psychic"],
                correct:"Acid",
                level:"300"
            },
            {
                question:"An action that powerful creatures can usually use 3 times per round",
                answers:["Lair Action","Legendary Action","Reaction"],
                correct:"Legendary Action",
                level:"400"
            },
            {
                question:'The minimum height or length needed to classify a creature as "Colossal".',
                answers:["32ft","50ft","64ft"],
                correct:"64ft",
                level:"500"
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
                level:"100"
            },
            {
                question:"A base game Background that compliments roguish types",
                answers:['Acolyte', 'Folk Hero', 'Criminal'],
                correct:'Criminal',
                level:"200"
            },
            {
                question:"This class is well known for their use of Divine Smite",
                answers:["Monk","Cleric","Paladin"],
                correct:"Paladin",
                level:"300"
            },
            {
                question:"As of the latest official sourcebook, there are this many classes available to choose from",
                answers:["12","13","14"],
                correct:"14",
                level:"400"
            },
            {
                question:"The maximum amount of spell slots a Warlock can have",
                answers:["4","8","10"],
                correct:"4",
                level:"500"
            }
        ]
    },
    {
        topic: "Mechanics",
        questions:[
            {
                question:"The amount of bonus actions you can do per round",
                answers:["1","2","3"],
                correct:"3",
                level:"100"
            },
            {
                question:"What the abbreviation RAW stands for.",
                answers:["Read And Watch", "Rules As Written", "Rockin' Around the World"],
                correct:"Rules As Written",
                level:"200"
            },
            {
                question:"Something you would not add proficiency bonus to",
                answers:["Attack Bonus", "Damage", "Skill Checks"],
                correct:"Damage",
                level:"300"
            },
            {
                question:"Having this condition gives the player disadvantage on ability checks",
                answers:["Grappled", "Poisoned", "Prone"],
                correct:"Poisoned",
                level:"400"
            },
            {
                question:"The least common Saving Throw in the game",
                answers:["Charisma","Intelligence","Strength"],
                correct:"Intelligence",
                level:"500"
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
                level:"100"
            },
            {
                question:"The year this game was originally published",
                answers:["1955","1974","1989"],
                correct:"1974",
                level:"200"
            },
            {
                question:'Chris Pine was revealed to be "playing" this class in the most recent "Dungeons & Dragons: Honor Among Thieves" trailer',
                answers:["Barbarian","Druid","Bard"],
                correct:"Bard",
                level:"300"
            },
            {
                question:'Popular Dnd podcast "Critical Role" had a Kickstarter for an animated series that made this amount in its first hour.',
                answers:["$10,000","$100,000","$1,000,000"],
                correct:"$1,000,000",
                level:"400"
            },
            {
                question:"This Action Star also plays DnD in their free time.",
                answers:["Dwayne Johnson","Mark Whalberg","Vin Diesel"],
                correct:"Vin Diesel",
                level:"500"
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

}

jeopardyCats.forEach(category => addCategory(category))
    //saying to keep adding the columns until it runs out