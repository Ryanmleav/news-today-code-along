import React, { Component } from 'react';
import { requestArticles } from './../../ducks/mediumReducer'
import { connect } from 'react-redux'
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';

class Medium extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.requestArticles()
  }

  render() {
    const articles = this.state.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./mediumLogo.png" style={styles.logo} alt="" />
        {this.state.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.medium
}

export default connect(mapStateToProps, { requestArticles })(Medium);

const styles = {
  logo: { width: '250px' }
}