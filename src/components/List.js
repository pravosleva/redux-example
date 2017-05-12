import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.list.map((el, i) =>
            <li key={i}>{el.name} {el.url ? <a href={`${el.url}`} target='_blank'>Link to url</a> : <span style={{color:"lightgray"}}>[ No link ]</span> }
              <br />
              <img src={el.profile_image_url_https} alt="wtf?"
                style={{width:"52px", height:"52px", border:"2px solid #ccd6dd", borderRadius:"5px"}} />
              <br />
              {el.description ? `${el.description}` : `id: ${el.id}`}
              <hr />
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
