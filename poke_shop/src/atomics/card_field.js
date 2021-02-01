import React,{Fragment} from 'react';
//images
import fondoHeader from '../images/bg-pattern-card.svg'

const CardField = ({pokemon,i}) =>{
    const primeraMayuscula = (name) =>{
        return name[0].toUpperCase() + name.slice(1);
    }
    const {name,abilities,sprites} = pokemon;
    return(
        <Fragment>
            <div key={i} className="col-6 p-2">
                <div className="card1" key={i}>
                    <img src={fondoHeader} className="card1-header"/>
                    <div className="card1-body">
                        <img className="card1-body-img" src={sprites.front_default}/>
                        <h1 className="card1-body-title">
                            {primeraMayuscula(name)}
                        </h1>
                        <span>{abilities[0].ability.name}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CardField;