import React from "react";
import { useState, useEffect } from "react";

function Card() {
  const [joke, setJoke] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [age, setAge] = useState("");
  const [btncli, setBtncli] = useState(false);
  const [trainData, setTrainData] = useState({
    name: "",
    train_from: "",
    train_to: "",
    arriveTime: "",
    departTime: "",
    days: "",
    classes: "",
  });

  // dad joke
  function generateJoke() {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))
      .catch((err) => {
        console.error(err);
      });
  }
  // dog image
  function showDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogImage(data.message))
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    showDogImage();
  }, []);
  // Predict age
  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://api.agify.io?name=${event.target.username.value}`)
      .then((res) => res.json())
      .then((data) => setAge(data.age))
      .catch((err) => {
        console.error(err);
      });
  }
  // train info btn
  function trainInfo() {
    setBtncli(true);
  }
  //card cancel button
  function btnClick() {
    setBtncli(!btncli);
  }
  // train data
  function trainSubmit(event) {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "af2f1f34bdmsha4dfd008ea1300bp1483c6jsne9b5537c8d5c",
        "X-RapidAPI-Host": "trains.p.rapidapi.com",
      },
      body: `{"search":"${event.target.trainInput.value}"}`,
    };

    fetch("https://trains.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((response) => {
        let { ...dataAPI } = response[0].data;

        let textClasses = dataAPI.classes.toString();

        let textDays = function () {
          let trainDays = [];
          for (const [key, value] of Object.entries(dataAPI.days)) {
            if (value > 0) {
              trainDays.push(key);
            }
          }
          return trainDays.toString();
        };

        setTrainData({
          name: response[0].name,
          train_from: response[0].train_from,
          train_to: response[0].train_to,
          arriveTime: dataAPI.arriveTime,
          departTime: dataAPI.departTime,
          days: textDays(),
          classes: textClasses,
        });
      })
      .catch((err) => console.error(err));
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
            <button
              type="button"
              className="btn btn-success"
              onClick={trainInfo}
            >
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
                className="btn btn-outline-primary"
                onClick={() => {
                  generateJoke();
                }}
              >
                Get Joke
              </button>
            </footer>
          </blockquote>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Predict your age of a name </h5>
            <p className="card-text">
              predicting the age of a person given their name.
            </p>
            <form className="input-group mb-3" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="First Name"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Submit
              </button>
            </form>
            <div className="mx-auto" style={{ width: "200px" }}>
              <div className="jumbotron">
                <h1 className="display-4">{age}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={dogImage} alt="" class=".card-img-top" />
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={showDogImage}
          >
            Dog Image
          </button>
        </div>
      </div>
      <div className={btncli ? "mode" : "mode hidden"}>
        {/* <div className="mode hidden"> */}
        <button className="close-modal" onClick={btnClick}>
          &times;
        </button>
        <h1>Train Info</h1>
        <form className="input-group mb-3" onSubmit={trainSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the train's number. "
            name="trainInput"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              Button
            </button>
          </div>
        </form>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name of train</th>
              <th scope="col">Departure station</th>
              <th scope="col">Departure time</th>
              <th scope="col">Termination station</th>
              <th scope="col">Termination time</th>
              <th scope="col">Days</th>
              <th scope="col">Classes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{trainData.name}</td>
              <td>{trainData.train_from}</td>
              <td>{trainData.departTime}</td>
              <td>{trainData.train_to}</td>
              <td>{trainData.arriveTime}</td>
              <td>{trainData.days}</td>
              <td>{trainData.classes}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={btncli ? "overlay" : "overlay hidden"}></div>
    </>
  );
}

export default Card;
