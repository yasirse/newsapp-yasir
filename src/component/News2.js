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
    {id: 3, name: 'Carl', country: 'Canada'},{"source": [{
      "id": null,
      "name": "AppleInsider"
      }]}
  ];

  
  return (
    <div className='container my-3'>
        <div className="row">
         {/* 👇️ Rendering an array 👇️ */}
      {employees.map((employee, index) => {
        return (
          <div key={index}>
            <h2>name: {employee.source}</h2>
            <h2>country: {employee.country}</h2>
            {employee.source.map((source1, index) => {
              return (
                <div key={index}>
                  <h2>Pet: {source1.name}</h2>
                </div>
              );
            })}
            <hr />
          </div>
        );
      })}
      {/* {JSON.stringify(articles)} */}
          {/* {articles.source} */}
          {/* {articles.map((element)=>{         
          <div className="col-md-4">
          <NewsItem title="News Monkey" description="my desc" imageUrl="https://photos5.appleinsider.com/gallery/56581-115005-Apple-Park-night-xl.jpg" newsUrl="TODO"/>
          </div>
             })} */}
        </div>
      </div>
  )
}
