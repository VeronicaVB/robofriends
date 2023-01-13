import React from 'react';

const Card = ({name, email, id}) => { 
    // const {name, email, id} = props; // Distructuring 
   // throw new Error('Parameter is not a number!');
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='Photo'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;