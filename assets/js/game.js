var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
for (var i = 0; i < enemyNames.length; i++) {}

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth < 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue."
    );

    // if player chooses to fight, then fight
    if (
      promptFight === "fight" ||
      promptFight === "FIGHT" ||
      promptFight === "Fight"
    ) {
      // remove enemy's health by substracting the amount set in the playerAttack variable
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
      } else {
        window.alert(
          enemyName + " still has " + enemyHealth + " health remaining."
        );
      }

      // remove players health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName +
          " attacked " +
          playerName +
          " ." +
          playerName +
          " now has " +
          playerHealth +
          "health remaining."
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }

      // if player chooses to skip
    } else if (
      promptFight === "skip" ||
      promptFight === "SKIP" ||
      promptFight === "Skip"
    ) {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you want to skip?");
      // if yes, leave fight
      if (confirmSkip) {
        // subtract player money
        playerMoney = playerMoney - 2;
      } else {
        fight();
      }
    } else {
      window.alert("You need to choose a valid option. Try again!");
    }

    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining"
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console
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
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// Calls the fight function as long as there are enemy players to fight
for (var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
