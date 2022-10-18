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
                question:""
                answers:
                correct:
                level:"400"
            },
            {
                question:"This high level spell can permanently change your form if you're not careful.",
                answers:["Shapechange", "True Polymorph", "True Resurrection"]
                correct:"True Polymorph"
                level:"500"
            }
        ]
    },
    {
        topic: "Monsters",
        questions:[
            {
                question:
                answers:
                correct:
                level:"100"
            },
            {
                question:
                answers:
                correct:
                level:"200"
            },
            {
                question:
                answers:
                correct:
                level:"300"
            },
            {
                question:
                answers:
                correct:
                level:"400"
            },
            {
                question:
                answers:
                correct:
                level:"500"
            }
        ]
    },
    {
        topic: "Feats",
        questions:[
            {
                question:
                answers:
                correct:
                level:"100"
            },
            {
                question:
                answers:
                correct:
                level:"200"
            },
            {
                question:
                answers:
                correct:
                level:"300"
            },
            {
                question:
                answers:
                correct:
                level:"400"
            },
            {
                question:
                answers:
                correct:
                level:"500"
            }
        ]
    },
    {
        topic: "Classes",
        questions:[
            {
                question:
                answers:
                correct:
                level:"100"
            },
            {
                question:
                answers:
                correct:
                level:"200"
            },
            {
                question:
                answers:
                correct:
                level:"300"
            },
            {
                question:
                answers:
                correct:
                level:"400"
            },
            {
                question:
                answers:
                correct:
                level:"500"
            }
        ]
    },
    {
        topic: "Items",
        questions:[
            {
                question:
                answers:
                correct:
                level:"100"
            },
            {
                question:
                answers:
                correct:
                level:"200"
            },
            {
                question:
                answers:
                correct:
                level:"300"
            },
            {
                question:
                answers:
                correct:
                level:"400"
            },
            {
                question:
                answers:
                correct:
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