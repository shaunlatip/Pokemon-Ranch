
import './styles/App.css';
import PokemonItem from './components/PokemonItem.js';
import Options from './components/Options.js'
import { useState } from "react";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// TODO: Add reset button

function App() {

  const pokemonData = [
    { name: "Vulpix", number: 37, baseStats: 299, type: "Fire", evolves: "Evolves", image: 'images/vulpix.png'},
    { name: "Growlithe", number: 58, baseStats: 505, type: "Fire", evolves: "Evolves", image: 'images/growlithe.png'},
    { name: "Dewgong", number: 87, baseStats: 475, type: "Water/Ice", evolves: "Evolves", image: 'images/dewgong.png'},
    { name: "Eevee", number: 133, baseStats: 325, type: "Normal", evolves: "Evolves", image: 'images/eevee.png'},
    { name: "Furret", number: 162, baseStats: 415, type: "Normal", evolves: "Evolves", image: 'images/furret.png'},
    { name: "Pichu", number: 172, baseStats: 205, type: "Electric", evolves: "Evolves", image: 'images/pichu.png'},
    { name: "Teddiursa", number: 216, baseStats: 330, type: "Normal", evolves: "Evolves", image: 'images/teddiursa.png'},
    { name: "Skitty", number: 300, baseStats: 260, type: "Normal", evolves: "Evolves", image: 'images/skitty.png'},
    { name: "Plusle", number: 311, baseStats: 405, type: "Electric", evolves: "Doesn't Evolve", image: 'images/plusle.png'},
    { name: "Jirachi", number: 385, baseStats: 600, type: "Steel/Psychic", evolves: "Doesn't Evolve", image: 'images/jirachi.png'},
    { name: "Piplup", number: 393, baseStats: 314, type: "Water", evolves: "Evolves", image: 'images/piplup.png'},
    { name: "Shaymin", number: 492, baseStats: 600, type: "Grass", evolves: "Doesn't Evolve", image: 'images/shaymin.png'}
  ]

  const [sorting, setSorting] = useState("Pokedex Number");
  const [team, setTeam] = useState([]); // initialize an empty map
  const [teamStats, setTeamStats] = useState(0);
  const [list, setList] = useState(pokemonData); // initialize an empty array
  const [type, setType] = useState([]); // initialize initial filters

  function updateFilter(filter, team) {

    console.log("Updating the following filter:");
    console.log(filter);
    console.log("Where type is currently:");
    console.log(type);

    //create a copy of type
    const newType = type;

    // if filter is in type, we take it out
    const checkIfSame = (element) => element === filter;
    if (type.some(checkIfSame)) {
      // console.log("Filter detected in type");
      const index = newType.indexOf(filter);
      if (index > -1) {
        newType.splice(index, 1)
      } else {
        // console.log("Error in updating filter");
      }
    // when filter is not in type, we add it in
    } else {
      // console.log("Filter NOT detected in type");
      newType.push(filter);

    }

    console.log("After calculating, newType is now:");
    console.log(newType);
    setType(newType);

    // once type has been updated, call filterList to modify list according to type
    filterList(newType, team);
  }

  function filterList(type, team) {

    console.log("Filtering list according to the new type:");

    const originalList = [
      { name: "Vulpix", number: 37, baseStats: 299, type: "Fire", evolves: "Evolves", image: 'images/vulpix.png'},
      { name: "Growlithe", number: 58, baseStats: 505, type: "Fire", evolves: "Evolves", image: 'images/growlithe.png'},
      { name: "Dewgong", number: 87, baseStats: 475, type: "Water/Ice", evolves: "Evolves", image: 'images/dewgong.png'},
      { name: "Eevee", number: 133, baseStats: 325, type: "Normal", evolves: "Evolves", image: 'images/eevee.png'},
      { name: "Furret", number: 162, baseStats: 415, type: "Normal", evolves: "Evolves", image: 'images/furret.png'},
      { name: "Pichu", number: 172, baseStats: 205, type: "Electric", evolves: "Evolves", image: 'images/pichu.png'},
      { name: "Teddiursa", number: 216, baseStats: 330, type: "Normal", evolves: "Evolves", image: 'images/teddiursa.png'},
      { name: "Skitty", number: 300, baseStats: 260, type: "Normal", evolves: "Evolves", image: 'images/skitty.png'},
      { name: "Plusle", number: 311, baseStats: 405, type: "Electric", evolves: "Doesn't Evolve", image: 'images/plusle.png'},
      { name: "Jirachi", number: 385, baseStats: 600, type: "Steel/Psychic", evolves: "Doesn't Evolve", image: 'images/jirachi.png'},
      { name: "Piplup", number: 393, baseStats: 314, type: "Water", evolves: "Evolves", image: 'images/piplup.png'},
      { name: "Shaymin", number: 492, baseStats: 600, type: "Grass", evolves: "Doesn't Evolve", image: 'images/shaymin.png'}
    ];

    const filteredList = originalList.filter(
      function (pokemon) {
        // console.log("Now checking the pokemon of: " + String(pokemon.name));
        
        // when no filters are selected, always approve
        if (type.length == 0) {
          // console.log("True: length is 0");
          return true;
        }

        // checks if any typing filters are active
        const typingCheckedOrNot = (element) => {
          const typings = ["Normal", "Fire", "Water", "Water/Ice", "Electric", "Steel/Psychic", "Grass"];
          for (let i = 0; i < typings.length; i++) {
            if (element === typings[i]) {
              return true;
            }
          }
          return false;
        }

        const checkType = (element) => element === pokemon.type;
        const typingIncludedOrNot = type.some(checkType);
        // when a typing filter is checked, and pokemon's typing isn't in type, return false
        if (type.some(typingCheckedOrNot) && !typingIncludedOrNot) {
          return false;
        }

        // checks if any evolution filters are active
        const evolvesCheckedOrNot = (element) => {
          const evolvesStates = ["Evolves", "Doesn't Evolve"];
          for (let i = 0; i < evolvesStates.length; i++) {
            if (element === evolvesStates[i]) {
              return true;
            }
          }
          return false;
        }

        const checkEvolves = (element) => element === pokemon.evolves;
        const evolvesIncludedOrNot = type.some(checkEvolves);
        // when evolves filter is checked and pokemon's evolves isn't in type, return false
        if (type.some(evolvesCheckedOrNot) && !evolvesIncludedOrNot) {
          return false;
        }
        
        // checks if team filter is active
        const teamCheckedOrNot = (element) => element === "Team";
        const checkName = (element) => element.name === pokemon.name;
        const pokemonInTeam = team.some(checkName);
        // console.log('pokemonInTeam is calculated as: ' + String(pokemonInTeam));
        if (type.some(teamCheckedOrNot) && !pokemonInTeam) {
          return false;
        }

        return true;
      }
    );

    const setFilteredList = (newList) => {
      filterList = newList;
    }

    sortList(filteredList, setFilteredList, sorting);
    setList(filteredList);
  }

  function sortList(list, setList, sorting) {
    // console.log("running sortList");
    // console.log("list is " + String(list));
    // console.log("sorting is " + String(sorting));

    const listCopy = list;

    if (sorting == "Pokedex Number") {
      const sortedList = listCopy.sort((a, b) => {
        return a.number - b.number;
      })
      setList(sortedList);
    } else if (sorting == "Base Stats") {
      const sortedList = listCopy.sort((a, b) => {
        return a.baseStats - b.baseStats;
      })
      setList(sortedList);
    } else {
      console.log("sortList error, where sorting is:");
      console.log(sorting);
    }
  }

  function handleTeamClick(event, pokemon) {

    console.log(event.target.name);
    console.log(pokemon);

    
    if (event.target.name == "Add") {
      console.log("Adding " + String(pokemon.name) + " to current team of: " + String(team));
      // we update the team and filter list again
      setTeam([...team, pokemon]);
      setTeamStats(teamStats + pokemon.baseStats);

    } else if (event.target.name =="Remove") {
      console.log('Removing ' + String(pokemon.name) + ' from current team of: ');
      console.table(team);

      const newTeam = team;
      const index = getIndexOfPokemon(newTeam, pokemon.name);
      console.log("index is:")
      console.log(index)
      if (index > -1) {
        newTeam.splice(index, 1);
      } else {
        console.log("Error in removing");
        return;
      }

      setTeamStats(teamStats - pokemon.baseStats);
      setTeam(newTeam);
      setTeamStats(teamStats - pokemon.baseStats);
      console.log("Now newTeam is currently: " + String(newTeam));
      filterList(type, newTeam);

    } else {
      console.log("handleTeam error");
      return;
    }



  }

  function getIndexOfPokemon (array, pokemonName) {
    var i = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i].name == pokemonName) {
        break;
      }
    }
    return i;
  }

  function resetType () {
    const resetType = [];
    setType(resetType);
    filterList(resetType, team);
  }



  return (
    <div className="App">

      <div className="App-header">
        <h1>Honeydew Pokemon Ranch</h1>
      </div>

      <div className="body">
        <Options 
          sorting={sorting} 
          setSorting={setSorting} 
          list={list} 
          setList={setList} 
          sortList={sortList}
          teamStats={teamStats}
          updateFilter={updateFilter}
          team={team}
          resetType={resetType}
        />
        <div className="gallery">
        {list.map((item) => (
          <>
            <PokemonItem 
            pokemon={item}
            team={team}
            handleTeamClick={handleTeamClick}
          />
          </>
        ))}
        </div>
      </div>



    </div>
  );
}

export default App;
