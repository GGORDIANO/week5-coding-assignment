class Team {
    constructor(name) {
      this.name = name;
      this.players = []; // Array to store players
    }
  
    addPlayer(player) {
      this.players.push(player); // Add player to the players array
    }
  
    removePlayer(index) {
      if (index >= 0 && index < this.players.length) {
        this.players.splice(index, 1); // Remove player from the players array at the specified index
      }
    }
  
    describe() {
      return `${this.name} has ${this.players.length} players.`;
    }
  }
  
  class Menu {
    constructor() {
      this.teams = []; // Array to store teams
    }
  
    start() {
      let selection = this.showMainMenuOptions();
  
      while (selection !== "0") {
        switch (selection) {
          case "1":
            this.createTeam();
            break;
          case "2":
            this.viewTeams();
            break;
          case "3":
            this.deleteTeam();
            break;
          default:
            alert("Invalid option. Please try again.");
        }
  
        selection = this.showMainMenuOptions();
      }
  
      alert("Goodbye!");
    }
  
    showMainMenuOptions() {
      return prompt(`
        0) Exit
        1) Create Team
        2) View Teams
        3) Delete Team
      `);
    }
  
    showTeams() {
      let teamList = "";
      for (let i = 0; i < this.teams.length; i++) {
        teamList += `${i}) ${this.teams[i].name}\n`; // Build a string with team information
      }
      alert(teamList); // Display the list of teams
    }
  
    createTeam() {
      const name = prompt("Enter the name for the new team:");
      const team = new Team(name); // Create a new team object
      this.teams.push(team);
      alert(`Team '${name}' created successfully.`); // Add the team to the teams array
    }
  
    viewTeams() {
      this.showTeams(); // Show the list of teams
      const index = prompt("Enter the index of the team you want to view:");
  
      if (index >= 0 && index < this.teams.length) {
        const team = this.teams[index]; // Get the team object at the specified index
        alert(team.describe()); // Show the team's description
      } else {
        alert("Invalid team index.");
      }
    }
  
    deleteTeam() {
      this.showTeams(); // Show the list of teams
      const index = prompt("Enter the index of the team you want to delete:");
  
      if (index >= 0 && index < this.teams.length) {
        this.teams.splice(index, 1);
        alert("Team deleted successfully.");
      } else {
        alert("Invalid team index.");
      }
    }
  }
  
  const menu = new Menu();
  menu.start();