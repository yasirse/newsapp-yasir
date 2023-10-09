import React from 'react'
import NewsItem from './NewsItem'
export default function News2() {
  const obj = {
    id: 4,
    name: 'Dean',
    country: 'Denmark',
  };
  const employees = [
    {id: 1, name: 'Alice', country: 'Austria'},
    {id: 2, name: 'Bobby Hadz', country: 'Belgium'},
    {id: 3, name: 'Carl', country: 'Canada'},
  ];

  let articles=[
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "Apple to announce 2023 fourth quarter earnings on November 2",
    "description": "Apple revealed on Wednesday that its earnings for the fourth fiscal quarter will be revealed on November 2, along with the usual conference call with CEO Tim Cook and CFO Luca Maestri.Apple ParkThe fourth fiscal quarter is a historically slow one for Apple as…",
    "url": "https://appleinsider.com/articles/23/10/05/apple-to-announce-2023-fourth-quarter-earnings-on-november-2",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56581-115005-Apple-Park-night-xl.jpg",
    "publishedAt": "2023-10-05T00:05:05Z",
    "content": "Apple Park\r\nApple revealed on Wednesday that its earnings for the fourth fiscal quarter will be revealed on November 2, along with the usual conference call with CEO Tim Cook and CFO Luca Maestri.\r\nT… [+1103 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MMA Fighting"
    },
    "author": "Jed Meshew",
    "title": "No Bets Barred: Grant Dawson and the Magic 8-Ball at UFC Vegas 80, plus Bellator 300 is finally here",
    "description": "After a week off from MMA action, the No Bets Barred boys are back this week with a full breakdown of UFC Vegas 80 and Bellator 300.",
    "url": "https://www.mmafighting.com/2023/10/4/23902314/no-bets-barred-grant-dawson-and-the-magic-8-ball-at-ufc-vegas-80-plus-bellator-300-is-finally-here",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/V7-XU_I4oHJtmpThnb6ZXoHHAZ4=/0x356:4189x2549/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24975032/1508082448.jpg",
    "publishedAt": "2023-10-05T00:00:00Z",
    "content": "Grant Dawson | Photo by Chris Unger/Zuffa LLC via Getty Images\r\n\n \n\n After a week off from MMA action, the No Bets Barred boys are back this week with a full breakdown of UFC Vegas 80 and Bellator 30… [+812 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Minatokobe.com"
    },
    "author": "酔いどれ",
    "title": "Apple、2023年度第4四半期決算を11月2日に行うことを正式発表",
    "description": "Appleは、11月2日に2023年度第4四半期決算を発表することを正式に発表しました。この発表は、同社の最近の製品発表と密接に関連しているため、特に大きな注目を集めています。iPhone 15、Apple Watch Series 9、Ultra 2が市場に投入され、Appleの2023年第4四半期の売上高に与える影響について大きな期待が寄せられています。 Appleの業績を振り返る 前四半期、Appleの財務報告書には817億9,000万ドルの総収入が記載されていました。2022年の同時期と比較すると、この数…",
    "url": "https://minatokobe.com/wp/apple/post-93075.html",
    "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/10/Investor-Relations_00002.jpg",
    "publishedAt": "2023-10-05T00:03:45Z",
    "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Terra.com.br"
    },
    "author": "Estadão Conteúdo",
    "title": "Irmãos que deram golpe de US$ 6,1 milhões na Apple são condenados nos EUA; entenda o caso",
    "description": "Dupla aplicou golpe de trocar aparelhos falsos por originais nas lojas da marca ao longo de 8 anos",
    "url": "https://www.terra.com.br/byte/irmaos-que-deram-golpe-de-us-61-milhoes-na-apple-sao-condenados-nos-eua-entenda-o-caso,ec544a77d4d6803b12cc5867cc7edb66m9dwwhrz.html",
    "urlToImage": "https://s1.trrsf.com/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png",
    "publishedAt": "2023-10-05T00:00:38Z",
    "content": "Dois irmãos foram condenados nesta semana a 41 meses de prisão federal nos Estados Unidos por aplicar um golpe que resultou em US$ 6,1 milhões de prejuízo para a Apple, segundo reportagem do jornal T… [+1389 chars]"
    }
    ];
  return (
    <div className='container my-3'>
        <div className="row">
         {/* 👇️ Rendering an array 👇️ */}
      {/* {articles.map((employee, index) => {
        return (
          <div key={index}>
            <h2>name: {employee.source}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })} */}
      {JSON.stringify(articles)}
          {/* {articles.source} */}
          {articles.map((element)=>{         
          <div className="col-md-4">
          <NewsItem title="News Monkey" description="my desc" imageUrl="https://photos5.appleinsider.com/gallery/56581-115005-Apple-Park-night-xl.jpg" newsUrl="TODO"/>
          </div>
             })}
        </div>
      </div>
  )
}
