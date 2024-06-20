import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { messaging } from './firebaseConfig';
import { getToken, onMessage } from 'firebase/messaging';
import { toast, ToastContainer } from "react-toastify";
import Message from "./components/Message";
import "react-toastify/dist/ReactToastify.css";

function App() {
  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "QCiJGklZSF2fYdJa8Zdfr2-G9ZFxG8NeD-QjJcPcg64",
      });

      //We can send token to server
      console.log("Token generated : ", token);
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification");
    }

  }
  
  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
  });

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
