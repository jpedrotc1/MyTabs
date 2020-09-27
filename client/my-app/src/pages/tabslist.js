import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import TabCard from '../components/tabcard';
import React, { useState, useEffect } from 'react';
import api from '../middlewares/api';
import './tablist.css'

function TabList() {

    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const response = await api.get(`/tabs`);

            setTabs(response.data);

        };
        fetchData();
    }, []);

    //Ainda precisa de muitos ajustes, fiz apenas o grosso.
    return (
        <div className="tablist">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">MyTabs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
            <Container className="container" >
                
                    {tabs.map((tab) => (
                        <TabCard tab={tab} key={tab._id}></TabCard>)
                    )}
                
            </Container>
            
        </div>
    );
}

export default TabList;
