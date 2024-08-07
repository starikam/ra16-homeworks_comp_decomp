import Item from "../Item"

interface News {
    logo: string,
    text: string       
}

interface Props {
    newsList : News[]
}



//верхний новостной блок 
export default function News({newsList}:Props) {
    const dateTime = new Date()
    
    return (
        <div className="news__wrapper">
            <div className="news__header" style={{color:"Blue"}}>
                <span>Сейчас в СМИ:</span>  
                <span> Рекомендации </span>
                <span style={{color:"GrayText"}}>{dateTime.toDateString()}</span>
            </div>
            <div className="news">
                {newsList.map((news) => {return (<Item
                                                    before={<img src={news.logo} style={{width:"30px"}}></img>}
                                                    text={news.text}
                                                    />)})}
            </div>
            <div className="news__exchange">
                <div className="news_usd">
                    <span>USD</span>
                    <span> 85</span>  
                </div>
                <div className="news_eur">
                    <span>EUR</span>
                    <span> 95</span>  
                </div>
                <div className="news_oil">
                    <span>Нефть</span>
                    <span> 78</span>  
                </div>

            </div>
        </div>
    )
}