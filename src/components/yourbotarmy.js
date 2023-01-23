import React from "react"
import UserBots from "./userbots"

function YourBotArmy(mybots, userBots, setUserBots){
 //creating element that will reder all bots a user selects
    if(mybots){
        const displayBotSpecs= mybots.map(bot => {
            return <UserBots key={bot.id} bot={bot} userBots={userBots} setUserBots={setUserBots}/>

        })
    
    return(
        <div className="ui segment inverted olive bot-army">
            <div className="ui five column grid">
                <div className="row bot-army-row">
                    {/* we'll render the bots here */}
                    { displayBotSpecs }
                </div>
            </div>
            
            <p>
                Add bot to your collection
            </p>

        </div>
        
    )
}
}

export default YourBotArmy