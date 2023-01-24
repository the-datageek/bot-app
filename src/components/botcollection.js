import React, {useState, useEffect} from "react";
import BotDetails from "./botdetails";
import BotItem from "./botitem";

const BOT_API = "https://api.jsonbin.io/v3/b/63cff353ebd26539d066d3a2"

function BotCollection(){
    //Bots data collection
        const[robot, setRobot] = useState([])
        const[selected, setSelected] = useState([])

        const [item, setItem] = useState({})

        const callback = payload => {
            console.log(payload)
            setItem(payload.bots[0])
            console.log(item)
            if(!selected.includes(payload.bots[0])){

            }else if(payload.position === 'down'){
                let newArray = selected.filter((item) => (item.id !==payload.bots[0].id))
                setSelected(newArray)
                setItem({})
            }
        }
        //go back to home page

    const goBackCallback = payload => {
        console.log(payload)
        if(payload.action === "go back"){
            setItem({})
        } else if (!selected.includes(payload.item)){
            let item={}
            robot.forEach(bot => { 
                if(bot.id === payload.item.id)(item=bot)
            })
            setSelected(current => [...current, item])
            setItem({})
        }
    }
    useEffect(()=>{
        fetch(BOT_API)
        .then(response => response.json)
        .then(data => {
            setRobot(data.bots)
        })
    }, [])

    const robotElems = robot?.map((value) => 
    <BotItem 
    name={value.name} 
    health={value.health} 
    damage={value.damage}
    armor={value.armor}
    catchphrase={value.catchphrase}
    bot_class={value.bot_class}
    avatar_url={value.avatar_url}
    created_at={value.created_at}
    updated_at={value.updated_at}
    items={value}
    callback={callback}
    position="up"/>)

    return(
        <>
            <div className="row mt-4" style={{minHeight:"400px", background:"green"}}>
                {(selected !== undefined)?
                selected.map(value =>
                    <BotItem 
                    name={value.name} 
                    health={value.health}
                    damage={value.damaage}
                    armor={value.armor}
                    catchphrase={value.catchphrase}
                    bot_class={value.bot_class}
                    avatar_url={value.avatar_url}
                    item={value}
                    callback={callback}
                    position="down"/>
                    )
                    : <></>
                
                }

            </div>    

            <div className="row-mt-4">
                {(item.name === undefined)?
                robotElems:
                <BotDetails
                name={item.name} 
                health={item.health}
                damage={item.damaage}
                armor={item.armor}
                catchphrase={item.catchphrase}
                bot_class={item.bot_class}
                avatar_url={item.avatar_url}
                goBackCallback={goBackCallback}
                item_id={item.id}
                item={item} />                
    
                }
            </div>    
        </>
    )
}
export default BotCollection