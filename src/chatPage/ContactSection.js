import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';

function Contact ({name, lastMessage, unViewed, url}) {
	return (
		<ListGroup.Item as="button" className="d-flex justify-content-between align-items-start" action variant="info" >
	        <Image className="mt-auto mb-auto" src={url} roundedCircle style={{width:"10%"}}/>
	        <div className="ms-2 me-auto">
	        	<div className="fw-bold">{ name }</div>
	        	<div>{ lastMessage }</div>
	        </div>
	        <Badge className="ms-2" bg="primary" pill>
	          { unViewed }
	        </Badge>
	    </ListGroup.Item>
	);
}

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

export default Contact;