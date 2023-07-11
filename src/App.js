import ChatLoadScreen from './loginPage/ChatLoadWait.js';
import UserContacts from './chatPage/UserChatPage.js';
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(10);
  const [visibility, setVisibile] = useState([0, 1]);
  const visValue = ['visible', 'hidden'];

  function logOut(value) {
    if (progress == 100) {
      setVisibile([1, 0]);
    }
    else if (progress <= 100 && progress >= 0) {
      setProgress(progress + 10);
      console.log(progress);
    }   
  }

  return (
    <>
      <ChatLoadScreen value={progress} onLogOut={logOut} view={visValue[visibility[0]]}/>
      <UserContacts view={visValue[visibility[1]]} />
    </>
  );
}

export default App;
