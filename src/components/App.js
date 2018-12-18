import React, { Component } from 'react';

//Components
import Header from './Header';
import News from './News';


class App extends Component {

  state = {
    news:[]
  }

  componentDidMount(){
    this.getNews();
  }
  
  getNews = () =>{
    let url='https://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=b756eaefcf834623be74149d9d79a3df';
    console.log(url);

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
          <News 
          news={this.state.news}
          />
        </div>
     </div>
    );
  }
}

export default App;
