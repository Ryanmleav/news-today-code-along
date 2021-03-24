import React, { Component } from 'react';
import { requestArticles } from './../../ducks/hackerNewsreducer'
import { connect } from 'react-redux'
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';

class HackerNews extends Component {
  componentDidMount() {
    this.props.requestArticles()
  }


  render() {
    const articles = this.state.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.state.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return state.hackerNews;
}

export default connect(mapStateToProps, { requestArticles })(HackerNews);


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}