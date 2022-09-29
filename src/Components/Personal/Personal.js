import Swal from "sweetalert2";
import "./Personal.css";
import { useState } from "react";

const Personal = ({ cart }) => {
  const addTos = () => {
    Swal.fire("Good job!", "You Completed all Work!", "success");
  };

  let Time = 0;
  for (const product of cart) {
    Time = Time + product.Time;
  }

  return (
    <div className="personal-info">
      <div className="my-info">
        <img src="../../images/my.jpg" alt=""></img>
        <h4>Partha Protim Neogi</h4>
        <p>
          <small>Location: Tangail, Bangladesh</small>
        </p>
        <p>
          <small>Job: Instructor</small>
        </p>
        <p>
          <small>Age: 34</small>
        </p>
        <p>
          <small>Height: 5.6 Feet</small>
        </p>
        <p>
          <small>Weight: 60kg</small>
        </p>
      </div>
      <div className="break">
        <h4>Add A Break</h4>
        <Counter></Counter>
      </div>
      <div>
        <h5>Exercise Details</h5>
        <p>
          <small>Exercise time:{Time} Days</small>
        </p>
      </div>
      <button className="btn-active">
        <p onClick={addTos}>Activity Completed</p>
      </button>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 5);
  const increaseCount1 = () => setCount(count + 7);
  const increaseCount2 = () => setCount(count + 10);
  const increaseCount3 = () => setCount(count + 15);

  return (
    <div>
      <h4>BreaK-1 Time: {count} </h4>
      <button onClick={increaseCount}>5</button>
      <button onClick={increaseCount1}>7</button>
      <button onClick={increaseCount2}>10</button>
      <button onClick={increaseCount3}>15</button>
    </div>
  );
}

export default Personal;
