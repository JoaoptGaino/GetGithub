import React from 'react';
import './styles.css';

export interface Person{
    avatar:string;
    name:string;

}
interface PersonProps{
    person:Person;
}

const PersonItem:React.FC<PersonProps>=({person})=>{
    return(
        <article className="person-item">
            <header>
                <img src ={person.avatar} alt={person.name}/>
            </header>
        </article>
    )
}
export default PersonItem;