import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Activities = () => {
    return (
        <Container>
            <div class="bg-body-tertiary d-grid mt-4 gap-4">
                <h1>Welcome to Our Elderly Care Services</h1>
                <p>
                    We provide comprehensive care services for the elderly.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </div>
        </Container>
    );
}

export default Activities;