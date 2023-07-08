class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    describe() {
        return `${this.name} plays ${this.position}.` ;

    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }
    addPlayer(player) {
        if(player instanceof Player) {
            this.players.push(player);
        }else {
            throw new Error(`you can only add an instance of Player. Argument is not a player: ${player}`);

        }
    }
    describe() {
return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {
    constructor() {
        this.teams = []; //array of teams because we can have multiple teams inside this application
        this.selectedTeam = null; // null because when we start game no teams are selected
    } // we are using a method named start and this will be almost like our entry point of the application
    start() { 
        let selection = this.showMainMenuOptions(); // this method is going to return the selection the user gives us
        while (selection != 0) { // selection is a variable we are using to get user input such as what option in our menu has the user selected
        switch(selection) { 
            case "1":
                this.createTeam(); // these are our options: select 1 it creates team
                break;
                case "2":
                    this.viewTeam(); //select 2 view team
                    break;
                case "3":
                    this.deleteTeam();
                    break;
                case "4":
                    this.displayTeams();
                    break;
                default:   //if they select anything else we'll set selection to 0
                    selection = 0; 
        }
        selection = this.showMainMenuOptions();
    }
        alert("Goodbye!"); //if they did select 0 we alert "Goodbye!" that means we are now outside the loop aka exit loop by pressing 0
    }

showMainMenuOptions() {
//to start with show main menu, method to show menu item
//with the use of template literal we dont have to use new line characters we can just put each menu item on it's own line here

    return prompt(` 
    0) exit
    1) create new team
    2) view team
    3) delete team
    4) display all teams
    `); //this method will return a prompt, the prompt is the pop up box that ask the user for informtation. what will be returned is their response.

    }

showTeamMenuOptions(teamInfo) {
    return prompt(`
    0) back
    1) create player
    2) delete player
    ---------------------
    ${teamInfo}
    `);
}
displayTeams() {
    let teamString = " "; //start with a blank string here because we need to build a string that has all the information for the team so we can put it up in a message box or prompt
    for (let i = 0; i < this.teams.length; i++) {   //this.teams is our list of all the teams that exist 
        teamString += i + ") " + this.teams[i] + "\n"; // were going to take the teamString we created and say += i, were going to use i to identify idea of our index of each team
}                                                     //to grab the current team that we're looking at we use: this.teams[i].name,  "\n" will add a new line so all the teams name will show up.
alert(teamString); //this way we will be able to see all the teams 
}
createTeam() { //we won't have anything to display^ if we can't create anything, that is why we create a team
let name = prompt("Enter name for new team:"); //we want to prompt the user for the name they want to give to the team.
this.teams.push(new Team(name)); // remember this array is where we keep all of our teams. the new name will be pushed into the team's array
} 

viewTeam() {
let index = prompt("Enter the index of the team you wish to view:"); // see the deatils of a specific team, we start by asking the user what team they want to see and we prompt them to enter the index of what team they want to see.
if (index > -1 && index < this.teams.length) {
    this.selectedTeam = this.teams[index];   //we have evaluted the index and set our selcted team class property to the team that was input by the user
    let description = "Team Name: " + this.selectedTeam.name + "\n";

    for (let i = 0; i < this.selectedTeam.players.length; i++) { // selectedTeam is a team, each team has players and we reiterate from the length of this array
       description += i + ") " + this.selectedTeam.players[i].name
        + " - " + this.selectedTeam.players[i].position + "\n";  //this is how we get the name of a specific player
    }

    let selection = this.showTeamMenuOptions(description); // were going to pass in the description that we just built up^ to our show team menu options to show all the options for the team 
    switch (selection) { //important to note this is a sub menu of the full menu this is why we create another selection and another switch
    case "1":
        this.createPlayer(); // these are our options: select 1 it creates player
        break;
    case "2":
            this.deletePlayer(); //select 2 to delete player
    }
    
}

}

deleteTeam() {
    let index = prompt ("Enter the index of the team you wish to delete");
    if(index > -1 && index < this.teams.length) {
        this.teams.splice(index, 1);
    }
}

createPlayer() {
    let name = prompt("Enter name for new player:");
    let position = prompt("Enter position for new player:"); // we'll be able to take the name and position and create an instance of a player and push it to whichever team is selected
    this.selectedTeam.players.push(new Player(name, position)); // we use the selectedTeam.players so that we can know what team was selected and reference it 
}

deletePlayer() {
    let index = prompt("Enter the index of the player you wish to delete:");
if (index > -1 && index < this.selectedTeam.players.length) {
    this.selectedTeam.players.splice(index, 1);
}
}
}

let menu = new Menu();
menu.start();