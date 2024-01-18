// App.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';

const firstName = 'Moncef'; // Name

const App = () => {
  return (
    <Container className="mt-4">
      <Card className="text-center border-primary shadow">
        <Card.Header className="bg-primary text-white">
          <h1>{product.name}</h1>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} className="mb-3">
              {firstName && <Image />} {/* Conditionally render the Image component */}
            </Col>
            <Col md={6}>
              <div className="text-left">
                <Name />
                <Price />
                <Description />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <p className="mt-3 text-center">
        {firstName ? `Hello, ${firstName}!` : 'Hello, there!'}
      </p>
    </Container>
  );
};

export default App;