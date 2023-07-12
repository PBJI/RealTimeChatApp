import ChatLoadScreen from './loginPage/ChatLoadWait.js';
import UserContacts from './chatPage/UserChatPage.js';
import { useState } from 'react';
const contact_data = require('./chatPage/contactsList.json');

function App() {
  const [progress, setProgress] = useState(10);
  const [visibility, setVisibile] = useState([0, 1]);
  const visValue = ['visible', 'hidden'];
  const [currentContacts, setCurContacts] = useState(contact_data); //Will be changed due to new features, new methods are discovered.
  const [userData, setUserData] = useState({"name":"john the bipper", "dpURL":"./waiting.png", "contactlistID":0}); //Will be changed due to new features, new methods are discovered

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
      <UserContacts view={visValue[visibility[1]]} currentContacts={currentContacts} userData={userData} />
    </>
  );
}

export default App;
