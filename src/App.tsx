import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { messaging } from './firebaseConfig';
import { getToken, onMessage } from 'firebase/messaging';
import { toast, ToastContainer } from "react-toastify";
import Message from "./components/Message";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [token, setToken] = useState<string>('')
  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BOahF2M0a6QCg1MOQB2i-UJlvLUoAj9jDWDvc1Dtf8amStSs0ZVzt12D6Pf5qmlxtpuqEz8vr51RY3avlbPbT_c",
      });
      setToken(token)
      console.log("Token generated : ", token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }

  }
  
  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
  });

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: "flex", alignItems: "center", flexDirection: 'column',flexWrap: "wrap", color: "white", fontSize: "10px", textWrap: "wrap"}}>
          <button style={{ padding: "1rem", borderRadius: "1rem", width: "fit-content", margin: '1rem 0'}} onClick={requestPermission}>Click for permission</button>
          <p>{token}</p>
        </div>
        {/* <h3 style={{ color: "#fff"}}>{token}</h3> */}
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
