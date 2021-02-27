import React from 'react';
import { connect } from 'react-redux';
import fetchPosts from '../actions/posts.js';

class App extends React.Component {
  componentDidMount() {
    console.log('this', this);
    console.log('this.props', this.props);
    console.log('this.props.state', this.props.state);

    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('props', this.props);
    return <div>App</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
