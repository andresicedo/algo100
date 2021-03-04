function tournamentWinner(competitions, results) {
    //create a winner object var
    let winner = {
        "HTML": 0,
        "C#": 0,
        "Python": 0,
    };
    //iterate over the results array
    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        //if the result is a 0, the second team in competition won, 
        if (result === 0) {
            //add 3 to winner value
            winner[competitions[results.indexOf(result)][1]] += 3;
            
        }
        //if the result is a 1, the first team in competition won, 
        if (result === 1) {
            winner[competitions[results.indexOf(result)][0]]+= 3;
        }
        
    }
    //return the team with the most points, they are the winning team!
    return winner;
  }

  console.log(tournamentWinner([
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
  ], [0,0,1]));