var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
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
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract player money
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // if player chooses to fight, then fight
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(
        enemyName + " still has " + enemyHealth + " health remaining."
      );
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// Calls the fight function as long as there are enemy players to fight
var startGame = function () {
  debugger;

  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      // let player know what round they are in // array starts at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before new fight
      enemyHealth = 50;

      // pass the pickedEnemyName variable value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
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
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("Game has ended. Let's see how you did!");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?s");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing RObot Gladiators! Come back soon!");
  }
};

// Start game when page first loads
startGame();
