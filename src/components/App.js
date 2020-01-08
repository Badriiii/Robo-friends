import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox'
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField } from '../action';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <Searchbox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobot} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

// Which props should the component need to listen
const mapStateToProps = state => ({
    searchField: state.searchField
}
)

// Which props should I listen to that are actions to be dispatched
const mapDispatchToProps = dispatch => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);