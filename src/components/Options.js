import '../styles/Options.css';


import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';

export default function Options(
    {
    sorting, 
    setSorting, 
    list, 
    setList, 
    sortList, 
    teamStats, 
    updateFilter, 
    team,
    resetType
}) {

    // Setting states for each filter
    const [normalFilter, setNormalFilter] = React.useState(false);
    const [fireFilter, setFireFilter] = React.useState(false);
    const [waterIceFilter, setWaterIceFilter] = React.useState(false);
    const [electricFilter, setElectricFilter] = React.useState(false);
    const [steelPsychicFilter, setSteelPsychicFilter] = React.useState(false);
    const [grassFilter, setGrassFilter] = React.useState(false);

    const [evolvesFilter, setEvolvesFilter] = React.useState(false);
    const [doesntEvolveFilter, setDoesntEvolveFilter] = React.useState(false);

    const [teamFilter, setTeamFilter] = React.useState(false);

    const handleTypeChange = (event) => {
        console.log("Changing Type to event value of: " + String(event.target.value));
        updateFilter(event.target.value, team);

        // update state
        switch(event.target.value) {
            case "Normal":
                setNormalFilter(!normalFilter);
                break;
            case "Fire":
                setFireFilter(!fireFilter);
                break;
            case "Water/Ice":
                setWaterIceFilter(!waterIceFilter);
                break;
            case "Electric":
                setElectricFilter(!electricFilter);
                break;
            case "Steel/Psychic":
                setSteelPsychicFilter(!steelPsychicFilter);
                break;
            case "Grass":
                setGrassFilter(!grassFilter);
                break;

            case "Evolves":
                setEvolvesFilter(!evolvesFilter);
                break;
            case "Doesn't Evolve":
                setDoesntEvolveFilter(!doesntEvolveFilter);
                break;

            case "Team":
                setTeamFilter(!teamFilter);
                break;
            
            default:
              console.log("Switch Error");
          }
    };

    const handleSortingChange = (event) => {
        setSorting(event.target.value);
        sortList(list, setList, event.target.value);
    };

    const handleResetFilters = (event) => {
        // reset states to false values
        setNormalFilter(false);
        setFireFilter(false);
        setWaterIceFilter(false);
        setElectricFilter(false);
        setSteelPsychicFilter(false);
        setGrassFilter(false);

        setEvolvesFilter(false);
        setDoesntEvolveFilter(false);

        setTeamFilter(false);

        resetType();
    }


    return (
        <div className="options">

            <FormControl>
                <FormLabel id="sort-label">Sort By</FormLabel>
                <RadioGroup
                    name="sort-radio-group"
                    onChange={handleSortingChange}
                    value={sorting}
                >
                    <FormControlLabel value="Pokedex Number" control={<Radio />} label="Pokedex Number" />
                    <FormControlLabel value="Base Stats" control={<Radio />} label="Base Stats at Lv. 50" />
                </RadioGroup>
            </FormControl>

            <FormGroup>
                <FormLabel id="types-form-group">Type</FormLabel>
                <FormControlLabel control={<Checkbox checked={normalFilter} onChange={handleTypeChange} value="Normal" />} label="Normal" />
                <FormControlLabel control={<Checkbox checked={fireFilter} onChange={handleTypeChange} value="Fire" />} label="Fire" />
                <FormControlLabel control={<Checkbox checked={waterIceFilter} onChange={handleTypeChange} value="Water/Ice" />} label="Water/Ice" />
                <FormControlLabel control={<Checkbox checked={electricFilter} onChange={handleTypeChange} value="Electric" />} label="Electric" />
                <FormControlLabel control={<Checkbox checked={steelPsychicFilter} onChange={handleTypeChange} value="Steel/Psychic" />} label="Steel/Psychic" />
                <FormControlLabel control={<Checkbox checked={grassFilter} onChange={handleTypeChange} value="Grass" />} label="Grass" />
            </FormGroup>

            <FormGroup>
                <FormLabel id="evolution-form-group">Evolution Ability</FormLabel>
                <FormControlLabel control={<Checkbox checked={evolvesFilter} onChange={handleTypeChange} value="Evolves" />} label="Evolves" />
                <FormControlLabel control={<Checkbox checked={doesntEvolveFilter} onChange={handleTypeChange} value="Doesn't Evolve" />} label="Doesn't Evolve" />
            </FormGroup>

            <FormGroup>
                <FormLabel id="team-form-group">View Team</FormLabel>
                <FormControlLabel control={<Checkbox checked={teamFilter} onChange={handleTypeChange} value="Team" />} label="Team" />
            </FormGroup>

            <Button onClick={handleResetFilters} variant="contained"  name="Reset">
                Reset filters
            </Button>

            <h3>Team Base Stats: {teamStats}</h3>


        </div>
    )
}