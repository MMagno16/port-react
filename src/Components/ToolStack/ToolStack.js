import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGithub,
  SiVisualstudiocode,
  SiInsomnia,
  SiMysql,
  
  
} from "react-icons/si";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInsomnia />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql/>
      </Col>
    </Row>
  );
}

export default ToolStack;