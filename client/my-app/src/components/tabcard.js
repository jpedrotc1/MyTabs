import React from 'react';
import { Card } from 'react-bootstrap';
import {BsFillStarFill} from 'react-icons/bs';

function TabCard({ tab }) {

   
    //Ainda precisa de muitos ajustes, fiz apenas o grosso.
    return (
        <Card >
            <Card.Body>
                <Card.Title>{tab.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{tab.artist}</Card.Subtitle>
                <Card.Text>
                    <p>
                        Instrument: {tab.instrument}
                    
                        Difficulty : {tab.difficulty}
                    </p>
                </Card.Text>
                <Card.Link href="#">View Tab</Card.Link>
            </Card.Body>
        </Card>

    )
}

export default TabCard;