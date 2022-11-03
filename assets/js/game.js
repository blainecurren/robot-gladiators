var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: 12,
  },
  {
    name: "Amy Android",
    attack: 13,
  },
  {
    name: "Robo Trumble",
    attack: 14,
  },
];

// function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var fight = function (enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    //ask player if they want to fight / skip
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue."
    );

    if (
      promptFight === "skip" ||
      promptFight === "SKIP" ||
      promptFight === "Skip"
    ) {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you want to skip?");
      // if yes, leave fight
      if (confirmSkip) {
        window.alert(
          playerInfo.name + " has decided to skip this fight. Goodbye!"
        );
        // subtract player money
        playerInfo.money = playerInfo.money - 10;
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

    // if player chooses to fight, then fight
    enemy.health = enemy.health - playerInfo.attack;
    console.log(
      playerInfo.name +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemy.health +
        " health remaining."
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(
        enemyName + " still has " + enemy.health + " health remaining."
      );
    }
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

    console.log(
      enemyName +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaining."
    );

    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");

      //leave while() loop if player is dead
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }
  }
};

// Calls the fight function as long as there are enemy players to fight
var startGame = function () {
  debugger;

  // reset player stats
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      // let player know what round they are in // array starts at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // pass the pickedEnemyName variable value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyObj);

      //if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        //ask if player wants to use the store before next round
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );

        //if yes, take them to the store
        shop();
      }
    }
    // if player dies stop the game
    else {
      window.alert("You have lost your robot in battle! Game over!");
      break;
    }
  }
  endGame();
};

// Function to end the entire game
var endGame = function () {
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerInfo.money +
        "."
    );
  } else {
    window.alert("Game has ended. You lost your robot in battle!");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function () {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVe the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // Use switch to carry out action
  switch (shopOptionPrompt) {
    case "refill":
      window.alert("Refilling player's health by 20 for 7 dollars");

      //increase health and decrease money
      playerInfo.health = playerInfo.health + 20;
      playerInfo.money = playerInfo.money - 7;
      break;

    case "upgrade":
      window.alert("Upgrading player's attack by 6 for 7 dollars");

      // Increase attack and decrease money
      playerInfo.attack = playerInfo.attack + 6;
      playerInfo.money = playerInfo.money - 7;
      break;

    case "leave":
      window.alert("Leaving store.");

      // do nothing, so function ends
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      // cal shop() again to force player to pick valid option
      shop();
      break;
  }
};

// Start game when page first loads
startGame();
