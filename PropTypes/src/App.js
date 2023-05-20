import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Romane"
        email="romane@gmail.com"
        age={29}
        isMarried={false}
        friends={["Alina", "Matt", "Jake"]}
      />
    </div>
  );
}

export default App;
