import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botBox, remBot, dischargeBot}) {

  return (
    <div className="ui segment inverted black bot-army">
      <h1>Prince Bot-Battlr 🤖</h1>
      <div className="ui five column grid">
        <div className="row bot-army-row">
       My Bot army
          {
            botBox.map(bot => {
              return (
                <BotCard 
                  key={`${bot.name}${bot.id}`}
                  handleBots={remBot}
                  dischargeBot={dischargeBot}
                  bot={bot}
                />
              )
            })
          }
         
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;