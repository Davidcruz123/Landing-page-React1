import React from 'react';


export function Jumbotron() {
	return (
    <div className="row ">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title" id="titulogenerico">
              A Warm Welcome
            </h1>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              dolor, beatae porro accusantium alias assumenda perferendis
              mollitia optio consequuntur impedit.
            </p>
            <a href="#" className="btn btn-primary ">
              Call to Action!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}