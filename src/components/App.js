import React, { Component } from 'react';

//Components
import Header from './Header';
import News from './News';
import Formulary from './Formulary';


class App extends Component {

  state = {
    news:[]
  }

  componentDidMount(){
    this.getNews();
  }
  
  getNews = (category='general') =>{
    let url=`https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=b756eaefcf834623be74149d9d79a3df`;
    console.log(category);

    fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(news => {
      this.setState({
        news : news.articles
      })
    })
  
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header 
          titulo="News"
        />
     
        <div className="contenedor white contenedor-noticias">
          <Formulary
            getNews = {this.getNews}
          />
          <News 
          news={this.state.news}
          />
        </div>
     </div>
    );
  }
}

export default App;
