import "./App.css";
import ClockHeading from "./Components/ClockHeading";
import ClockSlogen from "./Components/ClockSlogen";
import ClockTime from "./Components/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogen />
      <ClockTime />
    </center>
  );
}

export default App;
