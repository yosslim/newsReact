import React, {Component} from 'react';

//Components
import New from './New';

class News extends Component{
    render(){
        return(
            <div className="row">
                {this.props.news.map(noticia => (
                    <New
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </div>

        )
    }
}

export default News;