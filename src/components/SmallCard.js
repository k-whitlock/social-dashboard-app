import './SmallCard.css'

function SmallCard(props) {
    return (
        <>
            {/* dynamically create small cards from the followers data */}
            <div className="sm-card">
                <div className="card-info">
                    <h2 className="sm-card-title">{props.engagement}</h2>
                    <img 
                        src={`./images/icon-${props.platform}.svg`}
                        alt={`${props.platform} icon`}
                    />  
                </div>
                <div className="sm-card-stats">
                    <h3 className="today-total">{props.total}</h3>
                    <div className="engagement-change">
                        <img 
                            className="arrow-icon" 
                            src={`./images/icon-${props.movement}.svg`}
                            alt={`${props.movement} icon`}
                            />
                        
                        <span className={
                           //change text color based on followers.json
                            props.rating > 0
                                ? 'rating-up'
                                : 'rating-down'
                            }
                        >{props.rating}%</span>
                    </div>  
                </div>
            </div>

        </>
    );
}

export default SmallCard;