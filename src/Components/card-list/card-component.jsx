import './card-list-styling.css';

function CardContainer({name, id, email}){
        return(
            <div className="card-container" key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&sixze=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    
}
export default CardContainer;