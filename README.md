## 
This is a simple React application that allows the user to search for a city name then view its current temperature and basic weather elements. 

The functional component App holds the API key as well as the weather and location hooks, and the function handleSearch that takes in an event as a parameter. Once the user presses enter on their search, the axios get request makes a request to the Open Weather Map API using the API Key saved above, then saves the search result to state. 

The selected weather results are returned after a successful search and the search bar is set back to empty.
