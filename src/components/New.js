import React, {Component} from 'react';
import PropTypes from 'prop-types';

const New = (noticias) => {

    const {urlToImage, url, title, description, source}=noticias.noticia;
    
    const imagen = (urlToImage)
    ?
    <div className="card-image">
         <img src={urlToImage} alt={title} />
         <span className="card-title">{source.name}</span>
    </div>

    : '';


    return(
        <div className="col s12 m6 l4">
               <div className="card">
                    {imagen}
                    <div className="card-content">
                         <h3>{title}</h3>
                         <p>{description}</p>
                    </div>
                    <div className="card-action">
                         <a href={url} target="_blank" className="waves-effects waves-light btn">
                              Noticia Completa
                         </a>
                    </div>
               </div>
          </div>
    );
}

New.propTypes = {
    new: PropTypes.shape({
        urlToImage:PropTypes.string,
        url:PropTypes.string,
        title:PropTypes.string,
        description:PropTypes.string,
        source:PropTypes.object
    })
}

export default New;