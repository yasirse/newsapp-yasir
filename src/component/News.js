import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }
  constructor(){
    super();
    this.state={
      articles:[],
      loading: false,
      page:1
    };
  }
  async componentDidMount()
  {
    console.log("Page size ="+this.props.pageSize);
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=abef641bcb0448a6b18014fa87d05967&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedata= await data.json();
    this.setState({articles:parsedata.articles, totalResults:parsedata.totalResults, loading:false});   
  }

   handleNextClick=async ()=>
  {
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else
    {
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=abef641bcb0448a6b18014fa87d05967&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let parsedata= await data.json();
      console.log(parsedata);
      this.setState({articles:parsedata.articles, page:this.state.page+1,loading:false});

    }   
  }
  handlePreviousClick= async()=>
  {
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=abef641bcb0448a6b18014fa87d05967&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedata= await data.json();
    console.log(parsedata);
    this.setState({articles:parsedata.articles, page:this.state.page-1,loading:false});  

  }  
  
  render() {
    return (
      <div className='container my-3' >
        <h1>NewsMonkey - Top Headlines </h1>
        {this.state.loading&&<Spinner/>}
        <div className="row">
          
          {!(this.state.loading)&&this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title?.slice(0,45):""} description={element.description?element.description?.slice(0,100):""} imageUrl={element.urlToImage?element.urlToImage:"https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/do2gcik1bmczfwmhtjp0"} newsUrl={element.url}/>
          </div>
            })} 
            <div className="container d-flex justify-content-between">
              <button type='button' disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePreviousClick}>&larr; Previous</button>
              <button type='button' disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
            </div> 
        </div>
      </div>
    )
  }
}

export default News