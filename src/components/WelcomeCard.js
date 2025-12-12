import { useState } from "react";

export default function WelcomeCard() {
  const [user, setUser] = useState("user");
  const msg = `Welcome to React ${user}`;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUser(e.target.value)}
        className="form-control w-50 mx-auto"
      />

      <h2 className="mt-3">{msg}</h2>

      {/* Internal images from public/assets */}

      <img
        src="/assets/totoro.gif"
        alt="totoro pixel"
        className="img-fluid mt-3"
      />
    </div>
  );
}
