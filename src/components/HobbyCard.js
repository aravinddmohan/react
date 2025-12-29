import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HobbyCard() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const isStudent=true;

  const [hobbyInput, setHobbyInput] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const [message, setMessage] = useState(
    "Click the button to see my enthusiasm!"
  );

  function handleAddHobby() {
    if (hobbyInput.trim() === "") return;
    setHobbies(prev => [...prev, hobbyInput]);
    setHobbyInput("");
  }

  function handleMessage() {
    setMessage("Hello from React! I love my hobbies!");
  }

  // FOR LOOP list
  const hobbyItemsForLoop = [];
  for (let i = 0; i < hobbies.length; i++) {
    hobbyItemsForLoop.push(<li key={i}>{hobbies[i]}</li>);
  }

  return (
    <div className="container mt-4">
      <div className="card mx-auto shadow" style={{ maxWidth: "500px" }}>
        <div className="card-body text-center">

          <h3
            className="card-title mb-3"
            style={{ backgroundColor: "lightblue", padding: "10px" }}
          >
            Welcome to React Learning
          </h3>

          {/* Inputs */}
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="form-control mb-2"
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            className="form-control mb-2"
            type="text"
            placeholder="Enter a hobby"
            value={hobbyInput}
            onChange={(e) => setHobbyInput(e.target.value)}
          />

          <button
            className="btn btn-primary mb-3"
            onClick={handleAddHobby}
          >
            Add Hobby
          </button>

          {/* Personal Info */}
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Student:</strong> {isStudent.toString()}</p>

          {/* Hobby Lists */}
          <h5>Hobbies (for loop)</h5>
          <ul>{hobbyItemsForLoop}</ul>

          <h5>Hobbies (map)</h5>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>

          {/* Message Button */}
          <button
            className="btn btn-success mt-3"
            onClick={handleMessage}
          >
            Show Enthusiasm
          </button>

          <p className="mt-2">{message}</p>

        </div>
      </div>
    </div>
  );
}
