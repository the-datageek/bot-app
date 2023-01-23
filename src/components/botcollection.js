import React from "react"
import BotCard from "./botcard"

function BotCollection(botCollection, userBots, setUserBots){

    //using cards to display the fetched bots
    const displayBotCards = botCollection.map(bot => {
        return <BotCard key={bot.id} bot={bot} userBots={userBots} setUserBots={setUserBots}/>
      })
    return(
        <div className="ui four column grid">
            <div className="row">
                {/*display the bot cards*/}
                {displayBotCards}
            </div>
        </div>
    )
}

export default BotCollection