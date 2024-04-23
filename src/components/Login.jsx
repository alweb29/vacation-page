import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let labelClassName = "p-2";
  let inputClassName ="bg-gray-200 border-2 p-1 border-black rounded-md focus-visible:border-none";

  const user = import.meta.env.VITE_USER;
  const pass = import.meta.env.VITE_PASSWORD;

  function logIn(event){
    event.preventDefault();
    if(username === user && password === pass){
        onLogin(true);
    }
  }

  return (
    <section className="bg-slate-100 w-80 my-40 py-6 mx-auto max-h[25rem]">
      <h2 className="text-center p-2">Login</h2>
      <form id="loginForm" onSubmit={logIn}>
        <div className="p-2">
          <label className={labelClassName} htmlFor="username">Username</label>
          <input className={inputClassName} type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="p-2">
          <label className={labelClassName} htmlFor="password">Password</label>
          <input className={inputClassName} type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="p-2">
          <button className="p-2 bg-cyan-200 m-2 rounded-md w-20" type="submit">Login</button>
        </div>
      </form>
    </section>
  );
}

export default Login;
