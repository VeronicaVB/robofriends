import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            }).then(users => {
                this.setState({ robots: users });
            })
    }

    onSearchChange = (event) => { // Use arrow for the this to refere to the App.js
        this.setState({ searchField: event.target.value });
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        // In case the api call takes time
        if (this.state.robots.length == 0) {
            return <h1>Loading</h1>
        } else {

            return (

                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;