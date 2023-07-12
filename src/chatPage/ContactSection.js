import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';

function Contact ({name, lastMessage, unViewed, url}) {
	return (
		<ListGroup.Item as="button" className="d-flex justify-content-between align-items-start" action variant="info" >
	        <Image className="mt-auto mb-auto" src={url} roundedCircle style={{width:"15%"}}/>
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

export default Contact;