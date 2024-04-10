import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import NavbarCom from "./components/NavbarCom";
import SidebarCom from "./components/SidebarCom";
import Content from "./components/Content";
import DataTable from "./components/DataTable";
import "./App.css";

function App() {

  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (newData) => {
    setFormData((prevData) => [...prevData, newData]);
  };

  const handleDelete = (indexToDelete) => {
    setFormData(formData.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <NavbarCom />
      <Container fluid>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <SidebarCom data={formData} onDelete={handleDelete} />
          </Col>

          <Col className="content" xs={12} md={8} lg={8}>
            <Content onFormSubmit={handleFormSubmit} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
