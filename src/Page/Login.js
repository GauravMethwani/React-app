import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";

import "./Style/Login.css";


export default function Logig() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User login");
      window.location.href = "/to-do-list";
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="login-container">
    

      <div className="login-form">
        <form onSubmit={(e) => handleSubmit(e)} action="#" method="POST">
          <div className="form-group">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="login-input"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group">
            <div className="form-password">
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="login-input"
              placeholder="Enter Password"
            />
          </div>

          <div>
            <button type="submit" className="login-button">
              Sign in
            </button>
          </div>
        </form>

        <p>
          Not a member? <a href="/signup">Signup now</a>
        </p>
      </div>
    </div>
  );
}