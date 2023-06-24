import React from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import ProencaPartnership from '../assets/proenca.jpeg'

const Partnerships = () => {
    return (
        <>
        <div class="bg-body-tertiary d-grid mt-4 gap-4 container">
            <div class="p-2 bg-light">
                <h2>Os nossos parceiros</h2>
                <p>
                    Um projeto com esta dimensão tem a sorte de contar com os seguintes parceiros:
                </p>
            </div>
        </div>
         <Card className="text-white mt-4">
         <Card.Img src={ProencaPartnership} alt="Card image" />
         <Card.ImgOverlay className="container p-4">
             <img class="proencaLogo" src="https://www.cm-proencanova.pt/static/media/headerwhite.98ebd11d773bcf1bf0a5adec5c681d27.svg"/>
             <Card.Title>
                .
             </Card.Title>
             <Card.Text>
             <p>
                 A camara de Proença-a-Nova é o nosso principal parceiro.
             </p>
             ...
             </Card.Text>
             <Card.Text>Last updated 3 mins ago</Card.Text>
         </Card.ImgOverlay>
     </Card>
     <Container class="p-4 container">
     <Row class="bg-body-tertiary">
            <Col class="col-sm-6">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Parceiro 2</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card   class="col-sm-6">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Parceiro 3</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card  class="col-sm-6" >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Parceiro 4</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
               
        </Row>
     </Container>
     
  
    </>
    );
}

export default Partnerships;