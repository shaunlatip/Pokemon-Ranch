import '../styles/TeamAggregator.css';

export default function TeamAggregator ({
    team,
    teamStats
}) {

    function teamPokemonNames() {
        if(team.length == 0) {
            return("No Pokemon in Team")
        }

        let string = team[0].name;

        for (var i = 1; i < team.length; i++) {
            string = string + ', ' + team[i].name;
        }

        return (
            string
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