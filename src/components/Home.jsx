import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <div>
        <NavLink to="/login">
          <button>Wanna log in?</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/register">
          <button>Wanna sign up?</button>
        </NavLink>
      </div>
    </>
  );
}
