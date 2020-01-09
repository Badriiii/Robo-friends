import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox'
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../action';

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots()
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
            isPending ? <h1>Loading</h1>
            :
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
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
}
)

// Which props should I listen to that are actions to be dispatched
const mapDispatchToProps = dispatch => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);