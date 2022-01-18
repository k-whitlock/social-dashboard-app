import './MainCard.css';


function MainCard(props) {
    return (
        <>   
            {/* dynamically create main cards from the followers data */}
            <div className={`main-card ${props.platform}`}>
                <div className="social-container">
                    <img 
                        className="social-icon" 
                        src={`./images/icon-${props.platform}.svg`}
                        alt={`${props.platform} icon`}
                        />
                    <p className="username">{props.username}</p>
                </div>
                <h3 className="main-stat">{props.totalFollowers}</h3>
                <h4 className="followers-text">{props.followerText}</h4>
                <div className="follower-container">
                    <img 
                        className="arrow-icon" 
                        src={`./images/icon-${props.movement}.svg`}
                        alt={`${props.movement} icon`}
                        />
                    <span className = {
                        //change text color based on followers.json
                        props.followerCount > 0
                            ? 'followers-up'
                            : 'followers-down'
                        }
                        >{props.followerCount} Today
                    </span>
                </div>
            </div>
        </>
    );
}

export default MainCard;