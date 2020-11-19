import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import TabCard from "./tabcard";
import React, { useState, useEffect } from "react";
import api from "../middlewares/api";
import "./tablist.css";

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
      <Container className="container">
        {tabs.map((tab) => (
          <TabCard tab={tab} key={tab._id}></TabCard>
        ))}
      </Container>
    </div>
  );
}

export default TabList;
