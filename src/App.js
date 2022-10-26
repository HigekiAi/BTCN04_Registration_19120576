import { useState } from "react";
import "./App.css";
import AccountList from "./components/AccountList";
import SignUp from "./components/SignUp";

function App() {
  const [updated, setUpdated] = useState(true);
  return (
    <div className="App">
      <SignUp updated={updated} setUpdated={setUpdated}></SignUp>
      <AccountList updated={updated} setUpdated={setUpdated}></AccountList>
    </div>
  );
}

export default App;
