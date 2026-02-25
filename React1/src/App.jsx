import React from "react";
import "./App.css";
import Card from "./conponent/Card.jsx";
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div className="Parent">
      <div className="card">
        <div className="top">
          <img
            src="https://i.pinimg.com/1200x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg"
            alt=""
          />
          <button>
            Save <Bookmark />
          </button>
        </div>
        <div className="center">
          <h3>
            Amezon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX designer</h2>
          <div>
            <h4>Part time</h4>
            <h4>Senior level</h4>
          </div>
        </div>
        <div className="Bottom">
          <div>
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai,India</p>
            </div>
            <div>
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
