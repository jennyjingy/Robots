import React from 'react';
import Card from './Card';

const Cardlist = ( {robots}) => {
    
return(
    <div>
            
           {
               robots.map((user,i) => {
                return <Card 
                 key={i}
                 id={user.id} 
                 name={user.name} 
                 email={robots[i].email} />
               })
           }
    </div>
)

}
export default Cardlist;