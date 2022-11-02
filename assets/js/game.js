var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var enemyHealth = 50;
var enemyAttack = 12;

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

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
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

      //leave while() loop if player is dead
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

      //if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
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
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
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
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      break;

    case "upgrade":
      window.alert("Upgrading player's attack by 6 for 7 dollars");

      // Increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
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
