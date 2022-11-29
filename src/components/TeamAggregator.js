import '../styles/TeamAggregator.css';

export default function TeamAggregator ({
    team,
    teamStats
}) {

    function teamPokemonNames() {
        if(team.length == 0) {
            return("No Pokemon in Team")
        }
        return (
            String(team.map(pokemon => pokemon.name))
            )
    }

    return (
        <div className="teamAggregator">
            <h4>Pokemon in Team:</h4>
            {teamPokemonNames()}
            <h4>Team Total Base Stats:</h4>
            {teamStats}
        </div>


    )
}