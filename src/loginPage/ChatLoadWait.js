import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css'; 

function ChatLoadScreen({value, onLogOut, view}) {

    function onClick() {
        onLogOut("Hi");
    }
    return (

        <>
            <style type="text/css">
                    {`
                    .align-middle-horizontal-relative {
                      position:relative;
                      left: 50%;
                      transform: translateX(-50%);
                    }

                    .screen-center {
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                    }

                    .paint-it-gray {
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      background-color: rgba(100,100,100, 0.1);
                    }

                `} 
            </style>
            <div className="paint-it-gray" style={{visibility:view}} ></div>
            <Container className="screen-center px-2" style={{visibility:view}} >
                

                <Image className="align-middle-horizontal-relative" src="waiting.png" fluid style={{width:"15rem"}}/>

                <ProgressBar className="mt-3 align-middle-horizontal-relative" style={{width:"15rem"}} >
                    <ProgressBar now={ value } style={{backgroundImage:" linear-gradient(270deg, #48dace, #2eb8d4, #1697d7)"}} />
                </ProgressBar>

                <div className="mt-2 text-center" style={{fontSize: "0.7rem", color: "#4F5E65"}}>Keep clicking the below button ({ value }%)</div>

                <Button className="mt-3 align-middle-horizontal-relative" variant="outline-dark" onClick={onClick}>Log out</Button>

            </Container>
        </>
    );
}

export default ChatLoadScreen;