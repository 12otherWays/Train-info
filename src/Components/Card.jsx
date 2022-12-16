import React from "react";
import { useState, useEffect } from "react";

function Card() {
  const [joke, setJoke] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [age, setAge] = useState("");
  const [btncli, setBtncli] = useState(false);

  // dad joke
  function generateJoke() {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  }
  // dog image
  function showDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogImage(data.message));
  }
  useEffect(() => {
    showDogImage();
  }, []);

  // Predict age
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.username.value);
    fetch(`https://api.agify.io?name=${event.target.username.value}`)
      .then((res) => res.json())
      .then((data) => setAge(data.age));
  }

  // train info btn
  function trainInfo() {
    setBtncli(true);
  }

  //card cancel button
  function btnClick() {
    setBtncli(!btncli);
    console.log(btncli);
  }

  return (
    <>
      <div className="card-columns">
        <div className="card">
          {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
          <div className="card-body">
            <h5 className="card-title">Train Info</h5>
            <p className="card-text">
              Search for a train by name to get the train's departure and
              termination stations, as well as the train number and time taken. 
            </p>
            <button type="button" class="btn btn-success" onClick={trainInfo}>
              Click here
            </button>
          </div>
        </div>
        <div className="card p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>{joke}</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite title="Source Title">Don't Laugh Challenge</cite>
              </small>
              <br />
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => {
                  generateJoke();
                }}
              >
                Get Joke
              </button>
            </footer>
          </blockquote>
        </div>
        {/* <div className="card bg-primary text-white text-center p-3">
        </div> */}
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Predict your age of a name </h5>
            <p className="card-text">
              predicting the age of a person given their name.
            </p>
            <form class="input-group mb-3" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="First Name"
              />
              <button class="btn btn-outline-secondary" type="submit">
                Submit
              </button>
            </form>
            <div class="mx-auto" style={{ width: "200px" }}>
              <div class="jumbotron">
                <h1 class="display-4">{age}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={dogImage} alt="" />
          <button
            type="button"
            class="btn btn-outline-warning"
            onClick={showDogImage}
          >
            Dog Image
          </button>
        </div>
        {/* <div className="card">
         
        </div> */}
      </div>
      <div className={btncli ? "mode" : "mode hidden"}>
        {/* <div className="mode hidden"> */}
        <button class="close-modal" onClick={btnClick}>
          &times;
        </button>
        <h1>I'm a modal window 😍</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={btncli ? "overlay" : "overlay hidden"}></div>
    </>
  );
}

export default Card;
