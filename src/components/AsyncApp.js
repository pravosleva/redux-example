import React, { Component } from "react";
import PropTypes from 'prop-types';
import List from './List'
import Modal from './Modal';
import axios from 'axios';//console.log(typeof axios);

class AsyncApp extends Component {
  incrementIfOdd = () => {
    if (this.props.obj.counter % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000);
  }

  updateList = (e) => {
    if (e.target.value === ""){ return };
    
    let query = e.target.value;
    let reqFn = function(){
      axios.get(`https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=${query}`)
        .then((response) => {
          console.log(response);
          let getRq = this.props.onUpdateList.bind(this, response.data);
          getRq(); // or: //this.props.onUpdateList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }.bind(this);

    //setTimeout(reqFn, 1000);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(reqFn, 1000);
  }

  render() {
    const { obj, onIncrement, onDecrement } = this.props;
    return (
      <div>

        <h1>Test 0</h1>
        Clicked: {obj.counter} times
        {" "}
        <button onClick={onIncrement}> + </button>
        {" "}
        <button onClick={onDecrement}> - </button>
        {" "}
        <button onClick={this.incrementIfOdd}> Increment if odd </button>
        {" "}
        <button onClick={this.incrementAsync}> Increment async </button>

        <h1>Test 1</h1>
        <Modal />

        <h1>Test 2</h1>
        Async test
        {" "}
        <input placeholder="query..." onChange={this.updateList} />
        {" "}
        Based on <a href="https://twitter.github.io/typeahead.js/" target="_blank">this example</a>
        <List list={obj.list} />

      </div>
    );
  }
}

AsyncApp.propTypes = {
  obj: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onUpdateList: PropTypes.func.isRequired,
};

export default AsyncApp;
