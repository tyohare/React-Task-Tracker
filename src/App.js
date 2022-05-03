import { Header } from "./Components/Header";
import { Button } from "./Components/Button";
import { Tasks } from "./Components/Tasks";

function App() {
  return (
    <div className="container">
      <Header />
      {/* <Button color={"hotpink"} text="Add"/> */}
      <Tasks />
    </div>

  );
}

export default App;
