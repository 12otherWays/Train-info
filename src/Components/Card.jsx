import React from "react";
import { useContext, useState } from "react";
import Context from "../Context/Context.jsx";

function Card() {
  let { li } = useContext(Context);
  console.log(li);

  return (
    <div className="card-columns">
      <div className="card">
        {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
        <div className="card-body">
          <h5 className="card-title">Train Info</h5>
          <p className="card-text">
            Search for a train by name to get the train's departure and
            termination stations, as well as the train number and time taken. 
          </p>
          <button type="button" class="btn btn-success">
            Click here
          </button>
        </div>
      </div>
      <div className="card p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              <cite title="Source Title">Dad's JOKE</cite>
            </small>
            <br />
            <button type="button" class="btn btn-outline-primary">
              Get Dad Joke
            </button>
          </footer>
        </blockquote>
      </div>
      <div className="card">
        {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card bg-primary text-white text-center p-3">
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat.
          </p>
          <footer className="blockquote-footer">
            <small>
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        {/* <img className="card-img" src="..." alt="Card image"> */}
      </div>
      <div className="card p-3 text-right">
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
