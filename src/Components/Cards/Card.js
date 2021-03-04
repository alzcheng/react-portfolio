import React from 'react'
import "./Card.css"

const Card = ({ title, description, screenshot, git_href, deployed_href }) => {
  return (
    <section className="row">
      <section className="col-md-12">
        <div className="card mb-3 portfolio-element">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={screenshot} alt={title}
                className="img-fluid mx-auto my-5 portfolio-img"></img>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="card-body">
                    <h5 className="card-title proj-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="row">
                      <div className="col-md-4">
                        <a href={git_href}>
                          <small>Github Repo</small>
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a href={deployed_href}>
                          <small>Deployed Application</small>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Card
