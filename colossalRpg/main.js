var readlineSync = require('readline-sync');

// Random number generator

var diceRoll = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

//Name entry

let heroName = readlineSync.question('OLD MASTER: Soldier, come closer and tell me your name. ');

//Greeting 


console.log('OLD MASTER: Greetings ' + heroName + ' things have become a great deal more grim since the last troop your guild sent many months ago. Our hope now fall onto your shoulders and our faith placed entirely on the mind of the good doctor.' +
 '\nDOCTOR: Hello ' + heroName + ' nice to meet you even if it is under such dire circumstances. To be honest I am not entirely sure what the results of my research will be. However if we can make it to FOB Coors, I might be able to create a cure to our woes or at the very least a vaccine of sorts.');
 
 //initialization of starting players inventory
 
 let heroStats = {
    name: heroName,
    health: diceRoll(95, 150),
    ammo: diceRoll(30, 120),
    inventory: []

};

//Simulated choice for the player


 let simulatedChoice = readlineSync.keyIn('Well ' + heroName + ' are you ready to hit the trail? (PRESS y) Or do you need a night to prepare, it is quite the trek ahead of us?(PRESS n)', {limit: 'yn'});

 if (simulatedChoice === "y"){
    
    console.log('DOCTOR: OK! ' + heroName + ' Lets blow this joint I have definetly been here long enough!\n')
    console.log('One last equipment check and you take off with ' + heroStats.ammo + ' cartridges in your pockets.')

 } else {

    console.log('Doctor: That is fine by me, one more night in relative safety to rest and prepare cant hurt')

    console.log('\nOne restless Night passes, yet you feel as prepared as you can be. One last equipment check and you hit the road with ' + heroStats.ammo + ' cartridges in your pockets.')

 };

 //Item or loot? list 

 const gameItems = [" strange skull? (why did I pick this up?). ", " Smelly meat (probably should not eat this).", " Tourist souvenir. ", " Odd bauble. ", " Raggedy Cape (it is mostly still together). ", " Pristine Orange. ", " Busted Flashlight (maybe needs batteries?). ", " Earthworm. ", " small pile of guts (smells oddly of cabbage).", " Pumpkin seeds (NEED MORE).",
    " Piece of rebar (too small to be a weapon but might be useful?). "," Glowing rocks. "];


    //Enemy options

const gameEnemies = [" Shambler ", " Slow walker ", " Gutless Gary ", " Excited walker ", " No legged crawler "];

//Zombie generator
var randomZombie = function(){
    let zombie = {
        type: gameEnemies[diceRoll(0, gameEnemies.length)],
        health: diceRoll(25, 50),
        attack: diceRoll(3, 20)
    };
    return zombie
};

//Actual fighting function

function battle(){

    let zombie = randomZombie();
    console.log("The zombie has revealed itself! You spot a " + zombie.type + "!")

    while(true){
        if((zombie.health > 0) && (heroStats.ammo > 0) && (heroStats.health > 0) ){
            console.log("You steady your breath and take aim...")
            readlineSync.question("Press < enter > to fire!");
            heroStats.ammo - 1;
            let heroDamage = diceRoll(5, 15);
            zombie.health = zombie.health - heroDamage;
            console.log("Nice shot! The zombie takes " + heroDamage + " points of damage");
                
                if(zombie.health < 0){
                    console.log("The " + zombie.type + " has fallen!");
                    victory();
                    return
                }
            
            readlineSync.question("The walking corpse shambles forth! Press < enter > to brace yourself!"); 
            let zombieDamage = diceRoll(5, 20);
            heroStats.health -= zombieDamage;
            console.log("You recover from the blow and take " + zombieDamage + " points of damage you now have " + heroStats.health + " hitpoints left!");
                
                if(heroStats.health < 1){
                console.log("You succumb to your injuries in battle.");
                gameover()
                }
        
        
                else if((zombie.health >= 1) && (heroStats.ammo < 1)){
                console.log("You ran out of ammunition, you try to club the " + zombie.type + " but fail and it over powers you. The world fades to black while the monstrosity enjoys its new meal.");
                gameover()
                }
         
        }
        

    }

return
};

//Run Away!

function runAway(){
    let escapeCheck = diceRoll(1, 100);
    let failDamage = diceRoll(5, 20);
    if(escapeCheck > 50){
        console.log("You got away safely without incident!")
        readlineSync.question("Please press enter to continue on!")
        return
    }
    else{
        heroStats.health -= failDamage;
        readlineSync.question("You stumbled miserably and hurt yourself. You also seemed to have attracted some unwanted attention. Press < enter > to dust yourself off. You now have" +
        heroStats.health + " hitpoints remaining!\n DOCTOR: Please do try to be more careful I am trying to not get killed out here!\n");
        battle()
        return
    }
};

//Gear / inventory check

function gearCheck(){
    console.log( "You take a quick second to go over your situation, you seem to have " + heroStats.health + " hitpoints remaining, you dig through your pockets and find that you have "
    + heroStats.ammo + " cartridges for your rifle remaining, and lastly you open your bag to find " + heroStats.inventory + " sitting in your bag.\n");
    readlineSync.question("Press < enter > to pack your things back up and carry on to FOB Coors.");
    return
}



//To the victor goes the spoils, function for post encounter loot
 

function victory() {

    heroStats.health += diceRoll(5, 15);
    heroStats.ammo += diceRoll(3, 10);

    heroStats.inventory += gameItems[diceRoll(0, gameItems.length)];
   
    console.log("You get to live another day! You found some junk and now have " + heroStats.inventory + " in your bag! You also have " + heroStats.health + " hitpoints and " + heroStats.ammo + " cartridges left for your rifle!");
    readlineSync.question(" Press < enter > to continue.");
    return


};

// Death screen function

const deathQuote = ["In war there is no prize for the runner-up.\n General Omar Bradley", "The death of one man is a tragedy. The death of millions is a statistic.\n Joeseph Stalin",
"With you, humanity falls aswell", "The dead will continue to further outnumber the living, with your failure the future of humanity is just a little darker", "We all gotta die someday."];

function gameover(){
    console.log("\n GAME OVER \n");
    console.log(deathQuote[diceRoll(0, deathQuote.length - 1)]);
    readlineSync.question("\n Press < enter > to end the game.");
    process.exit

}

 //Player selection on how to progress while loop

 while(heroStats.health > 0){
    
    let selection = readlineSync.keyIn( (" If you are ready to move out, just hit the < W >.\n" ) + (" If you want to perform a quick equipment check just hit < i >.\n") + 
    (" If you are scared and want to turn back, QUICKLY find the < q > key and smash it. (ENDS THE GAME)"), {limit: 'wiq'})

    if( selection === "w"){
        console.log("You gather your things and move out.");
        walk()

    }else if( selection === "i"){
        gearCheck()

    }else if( selection === "q"){

        heroStats.health = 0;
        console.log(" It appears that this is the end of your journey.... for now.")
        gameover()
    }
 };

 // Function dictating safety while walking

 function walk() {
    safetyCheck = diceRoll(1, 40);

    if (safetyCheck < 21) {
        console.log(" You hear the shuffling of feet and the moans of the living dead nearby!\n");
        readlineSync.question("Prepare yourself! PRESS <enter> to continue.");

        enemyEncounter();

        return;

    }

    else if ((safetyCheck > 21) && (safetyCheck < 30)) {
        console.log(" You see something that catches your eye and for some reason you scoop it up into your pack for safe keeping.\n");
        heroStats.inventory += gameItems[diceRoll(0, gameItems.length)];
        console.log(" You now have " + heroStats.inventory + " crammed into your bag.");

        return;
        

    }

    else {
        console.log(" Suprisingly a pretty uneventful day, you even feel slightly rested!");
        heroStats.health += diceRoll(5, 15);

        return;
    }
};

// Function handling initial battle choices

function enemyEncounter() {
    
    console.log("The shuffling grows louder...it must be really close!\n");
    encounterSelection = readlineSync.keyIn(("Do you want to try to fight it? press <a> to attack. ") + ("Do you want to try to sneak past it? press <s>  (50% chance to sneak successfully) "), { limit: "as" });
    if (encounterSelection === 'a') {
        console.log("Another fight...");
        battle();

        return;
    }

    else if (encounterSelection === 's') {
        runAway();

        return;


    }




};










