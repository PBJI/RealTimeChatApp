import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Contact from './ContactSection.js';
const contact_data = require('./contactsList.json');

export function SearchUser (props) {

	function onInput(event) {
		props.searchContact(event.currentTarget.value);
		// console.log(event.currentTarget.value);
	}

	return (
		<InputGroup className="">
	        <InputGroup.Text id="basic-addon1" style={{borderRadius:"0px"}}>@</InputGroup.Text>
	        <Form.Control
	          placeholder="Search Contact"
	          aria-label="Username"
	          aria-describedby="basic-addon1"
	          style={{borderRadius:"0px", outline:"false"}}
	          onInput={onInput}
	        />
	    </InputGroup>
	);
}



function UserContacts ({view}) {
	const [currentContacts, setCurContacts] = useState(contact_data);

	const [contacts, setContacts] = useState(currentContacts.map((user) => {
		return (
			<Contact name={user["name"]} lastMessage={user["lastMessage"]} unViewed={user["unViewed"]} url={user["profileUrl"]}/>
		)
	})
	);




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
			<div className="row" style={{visibility:view}}>
				<div  className="col-lg-4 col-md-5" style={{paddingRight:"0"}}>
				
				</div>
				<div className="col-lg-8 col-md-7" style={{backgroundColor:"yellow"}}>
			    </div>
			</div>
			
			<div className="row" style={{visibility:view}}>

				<div  className="col-lg-4 col-md-5" style={{paddingRight:"0"}}>
					<SearchUser searchContact={searchContact}/>
				</div>
			</div>


			<div className="row" style={{visibility:view}}>
				
				<div className="col-lg-4 col-md-5 pr-0 " style={{position:"relative",height:"80vh",paddingRight:"0",overflow:"scroll",backgroundColor:"red"}}>
				    
				    <ListGroup className="" as="ol" style={{borderRadius:"0px"}}>
					    {contacts}
				    </ListGroup>

				</div>

			    <div className="col-lg-8 col-md-7" style={{backgroundColor:"blue"}}>
			    </div>

			</div>
		</>
  	);
}

export default UserContacts;