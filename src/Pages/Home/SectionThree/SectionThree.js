import React from "react";
import { Accordion, Container } from "react-bootstrap";


// extra section ---3
const SectionThree = () => {
  return (
    <Container className="mb-5 bg-info bg-opacity-25 pb-3">
      <h1 className="display-4 text-center mb-4 fw-bold text-success">FAQ</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Why Choose Us ?</Accordion.Header>
          <Accordion.Body>
          It’s our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative, while keeping a close eye on the calendar and your budget.It’s our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative, while keeping a close eye on the calendar and your budget.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why Should You Buy Our Service?</Accordion.Header>
          <Accordion.Body>
          There are a whole range of reasons why customers buy a product or service. They usually buy to solve either real or perceived problems. They want to move away from pain and towards pleasure. They want to feel better after having made the decision to buy a product or service than they did before.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default SectionThree;
