var readlineSync = require('readline-sync');

class Hero {
    constructor (name, status, coins, star){
        this.name = name;
        this.status = status;
        this.coins = coins;
        this.hasStar = star;

    }
    setName(namePicked){
        this.name = namePicked;
    }
    gotHit(){
        if(this.hasStar === true){
            console.log("The star saved you!");
            this.hasStar = false;
        }
        else if(this.status === "Powered Up"){
            this.status = "Big";
        }
        else if(this.status === "Big"){
            this.status = "Small";
        }
        else {
            this.status = "Dead";
            clearInterval(playGame);
        }
        
    }
    gotPowerUp(){
        console.log('powweeeerrr');
        if(this.status === "Powered Up"){
            this.hasStar = true;
            console.log("Awesome! You have a star!");
        }
        else if(this.status === "Big"){
            this.status = "Powered Up";
        }
        else {
            this.status = "Big";
        }

    }
    addCoin(){
        this.coins += 1;
        console.log("Hey! You found a coin!")
    }


};

let print = (player) => {
    console.log(`Name: ${player.name}\nStatus: ${player.status}\nTotal Coins: ${player.coins}`);
    if(player.status === "Dead"){
        console.log("You have failed to save the princess and collapse from your wounds.")
    }

}

let selection = readlineSync.question(("Hello, do you want to play as Mario or his brother Luigi?"), {limit: ['mario','luigi']});


let player = new Hero(selection, "Big", 0, false);

var diceRoll = function (min=0, max=1) {
    let num = Math.floor(Math.random() * (max - min) + min);
    console.log(num);
    if(num === 2){
        player.addCoin()
            }
    else if(num === 1){
        player.gotPowerUp()
        
    }
    else if(num === 0){
        player.gotHit()
        console.log("hit")
    }

    print(player)

    

};

var playGame = setInterval(diceRoll, 3000)

