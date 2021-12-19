import React, { Component } from 'react'
// c2ffcb49fa8246fd93a2cb23d2976644
export class NewsItem extends Component {
    
    render() {
        let {title,description,imageurl,newsurl}= this.props ;
        return (
            <div>
                <div className ="card" style={{ width: "18rem"} ,{ borderBlockColor: 'black'} ,{borderBlockStyle:'groove'}, {borderWidth:'5px'} ,{borderRadius: '20px'}}>
                    <img src={imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsurl} className="btn btn-primary btn-sm">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
