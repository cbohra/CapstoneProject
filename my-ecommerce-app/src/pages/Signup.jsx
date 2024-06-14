import React from "react";

export const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};
export default Signup;
