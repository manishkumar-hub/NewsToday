import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class News extends Component {
    static defaultProps ={
        country:'in',
        pageSize:10 ,
        category : 'general'
    }
    static propTypes={
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize:PropTypes.number,
    }
    
    constructor() {
        super();
        console.log("This is in news constructor");
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalresults: 5
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2ffcb49fa8246fd93a2cb23d2976644&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalresults: parsedData.totalresults, loading: false })
    }
    handleNext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2ffcb49fa8246fd93a2cb23d2976644&page=${(this.state.page + 1)}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ page: this.state.page + 1, articles: parsedData.articles, loading: false });
    }
    handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2ffcb49fa8246fd93a2cb23d2976644&page=${(this.state.page - 1)}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ page: this.state.page - 1, articles: parsedData.articles, loading: false });

    }
    render() {
        return (
            <div className='container my-3 '>
                <h1 className='text-center'>Top Headlines </h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4">
                            <NewsItem key={element.url} title={element.title.slice(0, 100)} description={element.description.slice(0, 30) + "..."} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}

                </div>
                <div className='conatiner d-flex justify-content-between '>
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrev} className="btn btn-danger"> &larr;Prev</button>
                    <button type="button" onClick={this.handleNext} class="btn btn-warning" disabled={Math.ceil(this.totalresults / 15) < this.state + 1
                    }> Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
