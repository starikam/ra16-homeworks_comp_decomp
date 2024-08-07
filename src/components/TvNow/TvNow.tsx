import Item from "../Item"

interface TvChanel {
    logo: string,
    text: string,
    chanel:string
}

interface Props {
    tvList : TvChanel[]
}


//компонент эфирного тв
export default function TvNow({tvList} : Props) {

    return (
        <div className="broadcast__wrapper">
            <a href="#">Сейчас в эфир</a>
            {tvList.map(tv =>{return (
                <Item 
                    before={<img src={tv.logo} style={{width:"30px"}}></img>}
                    text={tv.text}
                    after={<span style={{color:"grey"}}>{" " + tv.chanel}</span>}
                 />
            )})}
            
        </div>
    )
}