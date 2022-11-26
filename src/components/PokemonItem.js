import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import '../styles/PokemonItem.css';

export default function PokemonItem({
  pokemon, 
  team, 
  handleTeamClick
  }) {

    function prepHandleTeamClick(event) {
      handleTeamClick(event, pokemon);
    }

    function isPokemonInTeam() {
      if (team.length === 0) {
        return false;
      }
      const matchesName = (element) => element.name === pokemon.name;
      return(team.some(matchesName));
    }

    function dynamicButton() {
      // console.log("Team is: ");
      // console.log(team);

      // console.log(isPokemonInTeam());

      if (isPokemonInTeam()) {

        return(
          <Button variant="outlined" onClick={prepHandleTeamClick} name="Remove" value={pokemon} startIcon={<AddCircleOutlineIcon />}>
          Remove from Team
          </Button>
        );

      } else {
        return(
          <Button variant="contained" onClick={prepHandleTeamClick} name="Add" value={pokemon} startIcon={<AddCircleOutlineIcon />}>
          Add To Team
          </Button>
        );
      }
    }

    return (
        <div className="pokemonItem">

            <div className="photo">
              <img src={pokemon.image}></img>
            </div>

            <div className="content">


            <div className="title">
              <h2>{pokemon.name}</h2>
              <p>#{pokemon.number}</p>
            </div>

            <h3>{pokemon.type} Type</h3>
            <p>{pokemon.baseStats} Base Stats at Lv. 50</p>
            <p>{pokemon.evolves}</p>

            {dynamicButton()}

            </div>
            

        </div>
    )
}