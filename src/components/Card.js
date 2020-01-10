import React from 'react';

const Card = (props) =>{
    const {id, name, email} = props;
    return(
        <div className= 'bg-light-green dib br4 pa3 ma2 grow shadow'>
            <img alt = 'robots' src = {`https://robohash.org/${id}?200x200`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
    );
}

export default Card;