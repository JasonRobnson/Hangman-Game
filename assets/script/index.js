
    "use strict"
    // This is the OBJ for the game
    const hgame = {
        wordbank: ['foxx', 'pryor', 'rock', 'hope', 'hart', 'vandyke', 'seinfeld', 'mac',],
        blankbank: [],
        letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ],
        lives: 6,
    }
    // How do I pass through the users input from prompt to store data as pname???
    // const pname = ('userinput');
    //randNum and randWord work together to generate random word
    const randNum = Math.floor(Math.random() * hgame.wordbank.length);
    const randWord = hgame.wordbank[randNum].split("");
    let usedLetter = [];
    let underscoreArray = generateUnscore();
    //TESTUBG
    console.log(randWord);
    console.log(usedLetter);
    console.log(underscoreArray);
    document.getElementById('rightwords').innerHTML = underscoreArray.join("");

   

    //ES6 arrow things removes function {need to make this descrease lives}
    function generateUnscore() {
        let  newArray = []
        // let newNewArray = newArray.map((elem) => { 
        //   return elem = '_'
        // })
        // console.log(newNewArray)
        for (let i = 0; i < randWord.length; i++) {
            newArray.push('_');
        }
        return newArray;

    }

    //caputring users keyboard event
    document.addEventListener('keydown', (event) => {
        //converts capture event into key code
        const keyCode = event.keyCode;
        //converts keycode into a string with the letter
        const letterPressed = String.fromCharCode(keyCode);
        //will compare numbers, and if number exist will return number > -1, if users guess is right
        
        checkAlreadyUsed(letterPressed);
        document.getElementById('usedwords').innerHTML = usedLetter.join("");

        
        if (randWord.includes(letterPressed)) {
            usedLetter.push(letterPressed);
            updateUnderscoreArray(letterPressed);
           
        } 
        else { //shoves wrongletter's into wrong letter arrray
            usedLetter.push(letterPressed);
            hgame.lives--;
            console.log(hgame.lives)
            document.getElementById("statusMessage").innerHTML = "You have " + hgame.lives + " lives remaining";
            
        }

        checkAlreadyUsed();

        updateUnderscoreArray();

        checkIfWinner();

    });


     function checkAlreadyUsed(letter) {
        if(usedLetter.includes(letter)) {
            alert("You already used that letter. Pick another one.")
        }
    }


     function updateUnderscoreArray(letter) {
        for(let i = 0; i < randWord.length; i++) {
            if(randWord[i] === letter) {
                underscoreArray[i] = letter;
                document.getElementById('rightwords').innerHTML = underscoreArray.join("");
            }
        }
    }


    function checkIfWinner() {
        if(!underscoreArray.includes("_")){
            document.getElementById('rightwords').innerHTML = ("Great Job!");
             alert("YOU WIN!!!");
             hgame.lives = 6;
            
             
            return
        }

        if(hgame.lives === 0) {
            document.getElementById('usedwords').innerHTML = ("");
            document.getElementById('rightwords').innerHTML = ("SAD FACE!");
            alert("YOU LOSE YOU LOSER!!");
            hgame.lives = 6;
            return
        }
    }
      
   
       


                function start() {
                    if (confirm("Would you like to play Hangman?")) {
                        let  player = prompt('What shall we call you brave one?');
                        if (player != null) {
                            alert('Good Luck! ' +  player  +  ' !' );
                            document.getElementById("statusMessage").innerHTML = "You have " + hgame.lives + " lives remaining";
                        }
                    } else {
                        alert(goway);
                    }
                }

                start();
                generateUnscore();
               

                


    
