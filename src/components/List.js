import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.list.map(
            (el, i) => <li key={i}>{el.description ? `${el.description}` : `id: ${el.id}`}
              <br />
              {el.url ? <a href={`${el.url}`} target='_blank'>Link to url</a> : <span style={{color:"lightgray"}}>[ No link ]</span> }
              {" "}
              {el.name}
            </li>
          )
        }
      </ul>
    )
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired
}
