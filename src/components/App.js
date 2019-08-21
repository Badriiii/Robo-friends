import React, {Component} from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox'
import Scroll from './Scroll';
class App extends Component{
    constructor(){
        super();
        this.state ={
            robots : [],
            searchField : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
    }

    render(){
        
        const filteredRobot = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
    return(
        <div className ='tc'>
            <h1 className = 'f1'>Robo Friends</h1>
            <Searchbox searchChange = {this.onSearchChange}/>
            <Scroll>
                <CardList robots = {filteredRobot} />
            </Scroll>
        </div>
    )
    }
}

export default App;