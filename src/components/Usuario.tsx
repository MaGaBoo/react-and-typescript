import { useState } from "react";

interface User {
    dni: string;
    name: string
};

const tempUser: User = {
  dni: '987654',
  name: 'Fefi'
}

export const Usuario = () => {
  const [user, setUser] = useState<User>(tempUser);

  const login = () => {
    setUser({
      dni: "123456",
      name: "MaGaBoo",
    });
  };

  return (
    <div className="mt-5">
      <h3>User: useState</h3>
      <button 
      className="btn btn-outline-primary"
      onClick={login}
      >Login</button>
      {
        (!user)
        ?
        <pre>No users found</pre>
        :
        <pre>{JSON.stringify(user)}</pre>
      }

    </div>
  );
};
