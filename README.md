# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
This is an application to help users select a team of pokemon from a list of curated cute pokemon, allowing users to browse pokemon through their in-game type (e.g. Fire, Electric), their ability to evolve, their relative strengths as shown through base stats, and pokedex number.

### Usability Principles Considered
The page is comprised of the main gallery where all pokemon that pass the current set of filters are shown. The gallery displays each pokemon in their own individual card, and the layout of each card has been designed to prioritize and hierarchize the most important and relevant information for each pokemon. The options are shown on the left and allow the user to easily locate all the options needed to filter and look through different pokemon. Interactable elements, such as the buttons, are labeled and colored differently compared to their background to emphasize their ability to be clicked or used by the user.

### Organization of Components
App.js contains the main gallery and logic for the program. App.js returns one instance of Options.js which holds the options section to the left of the page. For the main gallery. App.js iterates through the list of current pokemon and returns a unique PokemonItem.js component for each pokemon being shown, with the corresponding pokemon state being passed in.

### How Data is Passed Down Through Components
Data is passed down from App.js to the PokemonItem and Options components through several different props.

For Options.js, the following data is passed in:
 - sorting: state variable for how pokemon are currently sorted
 - setSorting: setter for sorting
 - list: current list of pokemon that match the selected filters
 - setList: setter for list
 - sortList: function in App.js that sorts the current list of pokemon based on a given sorting value
 - teamStats: the current total base stats, combining the base stats for every pokemon selected in the selected team
 - updateFilter: function that updates the filters and list when a filter is changed
 - team: state variable containing pokemon currently selected in user's team
 - resetType: function called to reset all filters and shown list to default state

For each PokemonItem.js, the following data is passed in:
 - pokemon: current pokemon array that contains data related to a specific pokemon such as if they are a Fire or Electric type, their stats, etc.
 - team: state variable containing pokemon currently selected in user's team
 - handleTeamClick: function that 

### How the User Triggers State Changes

