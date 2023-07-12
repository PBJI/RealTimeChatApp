import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Contact from './ContactSection.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Profile from './PofileSection.js';

export function SearchUser (props) {

	function onInput(event) {
		props.searchContact(event.currentTarget.value);
		// console.log(event.currentTarget.value);
	}

	return (
		<InputGroup className="">
	        <InputGroup.Text id="basic-addon1" style={{fontSize:"2vmax",borderRadius:"0px"}}>@</InputGroup.Text>
	        <Form.Control
	          placeholder="Search Contact"
	          aria-label="Username"
	          aria-describedby="basic-addon1"
	          style={{borderRadius:"0px", outline:"false",fontSize:"2vmax"}}
	          onInput={onInput}
	        />
	    </InputGroup>
	);
}



function UserContacts ({view, currentContacts, userData}) {
	//contact_data is dynamic and as per user
	const [showProfileMenu, setProfileMenu] = useState('hidden');
	const [updateName, setUpdateName] = useState(false);
	const [updateAbout, setUpdateAbout] = useState(false);

	const [contacts, setContacts] = useState(currentContacts.map((user) => {
			return (
				<Contact name={user["name"]} lastMessage={user["lastMessage"]} unViewed={user["unViewed"]} url={user["profileUrl"]}/>
			)
		})
	);

	function toggleTextChange(change) {
		switch (change) {
			case "name":
				updateName ? setUpdateName(false): setUpdateName(true);
				break;
			case "about":
				updateAbout? setUpdateAbout(false): setUpdateAbout(true);
				break;
		}
	}

	function showProfile() {
		if (showProfileMenu == 'hidden') {
			setProfileMenu('visible')
		}
		else {
			setProfileMenu('hidden')
		}
	}

	function searchContact(value) {
		console.log("hi");
		let filteredContacts = currentContacts.filter(({name}) => {
			return (name.toLowerCase()).search(value.toLowerCase()) == 0;
		});
		if (filteredContacts.length > 0) {
			console.log(filteredContacts);
			setContacts(filteredContacts.map((user) => {
				return (
					<Contact name={user["name"]} lastMessage={user["lastMessage"]} unViewed={user["unViewed"]} url={user["profileUrl"]}/>
				);
			}));
		}
		else if (value.length > 0) {
			setContacts(() => {
				return (
					<Alert key="danger" variant="danger" style={{borderRadius:"0"}}>
			          No matching contacts.
			        </Alert>
				)}
			);
		}
	}

	return (
		<>  
			<Container fluid style={{visibility:view}}>

				<div className="row" style={{height:"10vh"}}>

					<div  className="col-lg-4 col-md-5" style={{paddingRight:"0", paddingLeft:"0", height:"100%", backgroundColor:"yellow"}}>
						<Image onClick={showProfile} src={userData.dpURL} roundedCircle style={{cursor:"pointer",marginTop:"1vh", marginLeft:"1vh", marginBottom:"1vh",position:"relative", height:"8vh", backgroundColor:"black"}}/> 
					</div>
					
					<Profile showProfileMenu={showProfileMenu} showProfile={showProfile} userData={userData} updateName={updateName} updateAbout={updateAbout} toggleTextChange={toggleTextChange} />

					<div className="col-lg-8 col-md-7" style={{backgroundColor:"red"}}>
				    </div>

				</div>

				<div className="row">
					
					<div className="col-lg-4 col-md-5 pr-0 " style={{position:"relative",maxHeight:"90vh",minHeight:"80vh",paddingRight:"0", paddingLeft:"0",overflow:"scroll",backgroundColor:"red"}}>
					    
					    <div className="sticky-top" style={{zIndex:"900",paddingRight:"0", paddingLeft:"0"}}>
							<SearchUser searchContact={searchContact}/>
						</div>


					    <ListGroup className="" as="ol" style={{fontSize:"2vmax",borderRadius:"0px"}}>
						    {contacts}
					    </ListGroup>

					</div>

				    <div className="col-lg-8 col-md-7" style={{backgroundColor:"blue"}}>
				    </div>

				</div>
			</Container>
		</>
  	);
}

export default UserContacts;