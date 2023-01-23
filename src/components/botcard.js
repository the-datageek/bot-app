import React from "react"

const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
  };

function BotCard({bot, userBots, setUserBots}){

    function viewDetailsOnClick(){
        let clickedBot = {
            "id": `${bot.id}`,
            "name": `${bot.name}`,
            "health": `${bot.health}`,
            "damage": `${bot.damage}`,
            "armor": `${bot.armor}`,
            "bot_class": `${bot.bot_class}`,
            "catchphrase": `${bot.catchphrase}`,
            "avatar_url": `${bot.avatar_url}`
        }
        setUserBots(([...userBots, clickedBot]))
    }

    return(
        <div className="ui column">
            <div
                className="ui card"
                key={bot.id}
                onClick={(e) => viewDetailsOnClick()}
            >

                <div className="image">
                    <img alt="robot" src={bot.avatar_url} />
                </div>
                <div className="content">
                    <div className="header">
                        {bot.name}
                        <i className={botTypeClasses[bot.bot_class]}/>
                    </div> 
                <div className="meta text-wrap">
                    <small>{bot.catchphrase}</small>

                </div>

                <div className="extra content">
                    <span>
                        <i className="icon heartbeat"/>
                        {bot.health}
                    </span>

                    <span>
                        <i className="icon lightning" />
                        {bot.damage}
                    </span>
                    <span>
                        <i className="icon shield" />
                        {bot.armor}
                    </span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BotCard