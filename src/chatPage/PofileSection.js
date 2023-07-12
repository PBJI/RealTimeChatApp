import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


function Profile({showProfileMenu, showProfile, userData, updateName, updateAbout, toggleTextChange}) {
	const [blur, setBlur] = useState("1.0");

	return (
		<>
			<div className="col-lg-4 col-md-5 pt-3 px-0" style={{visibility:showProfileMenu, backgroundColor:"green", position:"fixed", zIndex:"100000", height:"90vh", overflow:"scroll"}}>
				
				<div style={{marginLeft:"5vh"}}>
					<Button variant="outline-light" onClick={showProfile} style={{}} ><b>{'<='}</b></Button>
					<pre className="d-inline-block">{' '}</pre>
					<p className="d-inline-block" style={{color:"white"}} ><b>Update Profile</b></p>
				</div>
				
				<Container fluid>
					<Image onMouseOver={() => {setBlur('0.3')}} onMouseLeave={() => {setBlur('1.0')}} src={userData.dpURL} roundedCircle style={{opacity:blur,margin:"3rem", width:"70%", backgroundColor:"black", cursor:"pointer"}}/> 
				</Container>
				
				<Card style={{ width: "90%", margin:"auto", marginBottom:"3vmax"}}>
			      <Card.Body>
			        <Card.Title style={{fontSize:"2vmax"}} >Your Name</Card.Title>
			        <Card.Text  contentEditable={updateName} autoFocus style={{fontSize:"1.5vmax", outline:"0",borderBottom:updateName ? '2px solid green': 'none'}} >Purshotam</Card.Text>
			        <Button variant="outline-info" onClick={() => {toggleTextChange("name")}}>Change</Button>
			      </Card.Body>
			    </Card>
			    
			    <Card style={{ width: "90%", margin:"auto",  marginTop:"10vmax", marginBottom:"3vmax"}}>
			      <Card.Body>
			        <Card.Title style={{fontSize:"2vmax"}}>About</Card.Title>
			        <Card.Text contentEditable={updateAbout} autoFocus style={{fontSize:"1.5vmax",outline:"0",borderBottom:updateAbout ? '2px solid green': 'none'}} >This is my status</Card.Text>
			        <Button variant="outline-info" onClick={() => {toggleTextChange("about")}}>Change</Button>
			      </Card.Body>
			    </Card>

			</div>
		</>
	);
}

export default Profile;