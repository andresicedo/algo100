function tournamentWinner(competitions, results) {
    //create a team object var
    let teams = {};
    //flatten the competitions array of arrays to iterate over every language
    let languages = competitions.flat()
    //iterate over competitions and add all new teams to the teams obj
    for (let j = 0; j < languages.length; j++) {
        const team = languages[j];
        teams[team] = 0;
    }
    //iterate over the results array
    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        //if the result is a 0, add three points to team 2, 
        if (result === 0) {
            //add 3 to teams value
            teams[competitions[i][1]] += 3;
        }
        //if the result is a 1, add three points to team1, 
        if (result === 1) {
            teams[competitions[i][0]]+= 3;
        }
    }
    //return the team with the most points in the team object, they are the winning team!
    return Object.keys(teams).reduce((a, b) => teams[a] > teams[b] ? a : b);
  }

  console.log(tournamentWinner([
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
  ], [0,0,1]));//Python

  console.log(tournamentWinner([
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
  ], [0, 1, 1, 1, 0, 1]))//C#

console.log(tournamentWinner([
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
    ["SQL", "C#"],
    ["HTML", "SQL"],
    ["SQL", "Python"],
    ["SQL", "Java"]
  ],[0, 1, 1, 1, 0, 1, 0, 1, 1, 0]));//C#