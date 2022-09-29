import Break from "../Break/Break";
import Swal from "sweetalert2";
import "./Personal.css";

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
        <Break></Break>
      </div>
      <div>
        <h5>Exercise Details</h5>
        <p>
          <small>Exercise time:{Time} Days</small>
        </p>
        <p>
          <small>Break time:</small>
        </p>
      </div>
      <button className="btn-active">
        <p onClick={addTos}>Activity Completed</p>
      </button>
    </div>
  );
};

export default Personal;
