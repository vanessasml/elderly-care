import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div class="bg-body-tertiary d-grid mt-4 gap-4 container">
            <div class="p-2 bg-light">
                <h2>Oficina para combater a solidão e envelhecer ativamente</h2>
            </div>
            <div class="p-2 bg-light">
                <blockquote className="blockquote mb-0">
                    <p>
                        <i> Devemos aprender durante toda a vida,
                        sem imaginar que a sabedoria vem com a velhice.</i>
                    </p>
                    <footer className="blockquote-footer">
                    <cite title="Source Title">Platão</cite>
                    </footer>
                </blockquote>
            </div>
            <div class="p-2 bg-light">
                <h2>...</h2>
                <p>
                    ...
                </p>
            </div>
            <div class="p-2 bg-light">...</div>
        </div>
    );
}

export default Home;