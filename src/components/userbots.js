function UserBots({bot, userBots, setUserBots}){
    return(
        <div className="ui column">
            <div
                className="ui card"
                key={bot.id}>
                <div className="image">
                    <image alt="robot" src={bot.avatar_url} onClick={()=>{removeUserBot(`${userBots}`)}}/> 
                </div>
                <div className="content">
                 <div className="header">
                    {bot.name}
                    <i className={botTypeClasses[bot.bot_class]} />
                </div>
                <div className="meta text-wrap">
                    <small>{bot.catchphrase}</small>
                </div>
            </div>
                <div className="extra content">
                <span>
                    <i className="icon heartbeat" />
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
                <span>
                    <div className="ui center aligned segment basic">
                <button
                    className="ui mini red button"
                    onClick={() => {dischargebot()} }
                >
                X
                </button>
                </div>
                </span>
            </div>
          </div>
        </div>
    )
}