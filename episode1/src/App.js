import "./App.css";
import { User } from "./User";

function App() {
  const users = [
    { name: "Romane", age: 21 },
    { name: "Jake", age: 32 },
    { name: "Alina", age: 25 },
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default App;
