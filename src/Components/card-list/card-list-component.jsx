import { Component } from "react";
import CardContainer from "./card-component";
import './card-list-styling.css';

class CardList extends Component{
    render(){
        const {filterMonster} = this.props
        return(
            <div className="card-list">
                {filterMonster.map((monster)=>{
                    const {name, id, email} = monster
                    return(
                        <>
                        <CardContainer name={name} id={id} email={email} />
                        </>
                    )                    
                })}
            </div>
        )
    }
}

export default CardList;
