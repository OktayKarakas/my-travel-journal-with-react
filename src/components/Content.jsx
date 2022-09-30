import React from 'react'

function Content(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.item.img} />
      <div className="card-content">
        <div className="card-location">
          <ul>
            <li className="country">
              {' '}
              <span className="bullet-point">•</span> {props.item.country}
            </li>
            <li className="google-maps">
              <a href="#">View on Google Maps</a>
            </li>
          </ul>
        </div>
        <div className="card-text">
          <h1>{props.item.place}</h1>
          <h3>{props.item.date}</h3>
          <p>{props.item.title}</p>
        </div>
      </div>
    </div>
  )
}

export default Content
