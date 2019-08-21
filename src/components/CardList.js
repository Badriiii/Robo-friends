import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const CardArray = robots.map((user) => {
       return <Card key = {user.id} id = {user.id} name = {user.name} email = {user.email}/>
    });
    return(
    <div>
        {CardArray}
    </div>
    );

}

export default CardList;