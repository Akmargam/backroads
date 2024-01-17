import React from 'react'
import Title from './Title'
import {tours} from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='FEATURED'  subTitle='TOURS'/>

      <div className="section-center featured-center">
        {tours.map((prop)=>{
          return(
            <article className="tour-card">
          <div className="tour-img-container">
            <img src={prop.image} className="tour-img" alt="" />
            <p className="tour-date">{prop.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{prop.title}</h4>
            </div>
            <p>
              {prop.info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {prop.location}
              </p>
              <p>{prop.duration}</p>
              <p>{prop.cost}</p>
            </div>
          </div>
        </article>
          )
        })}
        
      </div>
    </section>
  )
}

export default Tours
