import React from 'react';
import { Card } from 'react-bootstrap';
import './tabcard.css';

function TabCard({ tab }) {

    //Ainda precisa de muitos ajustes, fiz apenas o grosso.
    return (
        <Card className="Card">
            <Card.Header>
                <h5>{tab.instrument}</h5>
            </Card.Header>
            <Card.Body>
                <Card.Title>{tab.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{tab.artist}</Card.Subtitle>
                <Card.Text>
                    <p>
                        Difficulty : {tab.difficulty}
                    </p>
                </Card.Text>
                <Card.Link href="#">View Tab</Card.Link>
            </Card.Body>
        </Card>


    )
}

export default TabCard;