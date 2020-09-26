import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import TabCard from '../components/tabcard';
import React, { useState, useEffect } from 'react';
import api from '../middlewares/api';

function TabList() {

    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const response = await api.get(`/tabs`);

            setTabs(response.data);

        };
        fetchData();
    }, []);

    return (
        <div className="tablist">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">MyTabs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
            <Container className="pt-5">
                <Row className="pt-2">
                    {tabs.map((tab) => (
                        <Col key={tab._id}><TabCard tab={tab}></TabCard></Col>)
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default TabList;
