import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBus, faCloudSun, faPlaneDeparture, faStar, faTrain } from "@fortawesome/free-solid-svg-icons";
import sectionImage1 from '../../../images/sectionOne-1.jpg'
import sectionImage2 from '../../../images/sectionOne-2.jpg'
import sectionImage3 from '../../../images/sectionOne-3.jpg'
import sectionImage4 from '../../../images/sectionOne-4.jpg'

// extra section----1

const SectionOne = () => {
  return (
    <Container className="mt-5">
     <div className="text-center bg-info bg-opacity-25 p-2 rounded-pill">
     <h1 className="display-3 fw-bold">Top Sight Seeing In This Month</h1>
      <p className="lead fw-bold">
        World's leading tour and travels Booking website,Over 30,000 packages
        worldwide. Book travel packages and enjoy your holidays with distinctive
        experience
      </p>
     </div>

      <Row xs={1} md={3} className="g-4 mt-2">
          <Col>
            <Card className="">
              <Card.Img className="" variant="top" src= {sectionImage1} />
              <Card.Body>
                <Card.Title>Honeymoon Package</Card.Title>
                <Card.Title className="text-secondary">7 DAYS / 6 NIGHTS <FontAwesomeIcon className="text-success" icon={faCloudSun} /></Card.Title>
                <Card.Text>
                Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs. The mountainous interior includes Black River Gorges National Park, with rainforests.
                </Card.Text>
                <Button className="me-3">More Info</Button>
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-info ms-3" icon={faBus} />
                <FontAwesomeIcon className="text-danger ms-3" icon={faTrain} />
                <FontAwesomeIcon className="text-success ms-3" icon={faPlaneDeparture} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="">
              <Card.Img className="" variant="top" src= {sectionImage2} />
              <Card.Body>
                <Card.Title>Weekend Package</Card.Title>
                <Card.Title className="text-secondary">3 DAYS / 2 NIGHTS <FontAwesomeIcon className="text-success" icon={faCloudSun} /></Card.Title>
                <Card.Text>
                Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs. The mountainous interior includes Black River Gorges National Park, with rainforests.
                </Card.Text>
                <Button className="me-3">More Info</Button>
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-info ms-3" icon={faBus} />
                <FontAwesomeIcon className="text-danger ms-3" icon={faTrain} />
                <FontAwesomeIcon className="text-success ms-3" icon={faPlaneDeparture} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="">
              <Card.Img className="" variant="top" src= {sectionImage3} />
              <Card.Body>
                <Card.Title>Family Package</Card.Title>
                <Card.Title className="text-secondary">15 DAYS / 14 NIGHTS <FontAwesomeIcon className="text-success" icon={faCloudSun} /></Card.Title>
                <Card.Text>
                Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs. The mountainous interior includes Black River Gorges National Park, with rainforests.
                </Card.Text>
                <Button className="me-3">More Info</Button>
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-info ms-3" icon={faBus} />
                <FontAwesomeIcon className="text-danger ms-3" icon={faTrain} />
                <FontAwesomeIcon className="text-success ms-3" icon={faPlaneDeparture} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="">
              <Card.Img className="" variant="top" src= {sectionImage4} />
              <Card.Body>
                <Card.Title>Group Package</Card.Title>
                <Card.Title className="text-secondary">10 DAYS / 11 NIGHTS <FontAwesomeIcon className="text-success" icon={faCloudSun} /></Card.Title>
                <Card.Text>
                Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs. The mountainous interior includes Black River Gorges National Park, with rainforests.
                </Card.Text>
                <Button className="me-3">More Info</Button>
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-info ms-3" icon={faBus} />
                <FontAwesomeIcon className="text-danger ms-3" icon={faTrain} />
                <FontAwesomeIcon className="text-success ms-3" icon={faPlaneDeparture} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="">
              <Card.Img className="" variant="top" src= {sectionImage1} />
              <Card.Body>
                <Card.Title>Honeymoon Package</Card.Title>
                <Card.Title className="text-secondary">7 DAYS / 6 NIGHTS <FontAwesomeIcon className="text-success" icon={faCloudSun} /></Card.Title>
                <Card.Text>
                Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs. The mountainous interior includes Black River Gorges National Park, with rainforests.
                </Card.Text>
                <Button className="me-3">More Info</Button>
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-info ms-3" icon={faBus} />
                <FontAwesomeIcon className="text-danger ms-3" icon={faTrain} />
                <FontAwesomeIcon className="text-success ms-3" icon={faPlaneDeparture} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="">
              <Card.Img className="" variant="top" src= {sectionImage2} />
              <Card.Body>
                <Card.Title>Weekend Package</Card.Title>
                <Card.Title className="text-secondary">2 DAYS / 3 NIGHTS <FontAwesomeIcon className="text-success" icon={faCloudSun} /></Card.Title>
                <Card.Text>
                Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs. The mountainous interior includes Black River Gorges National Park, with rainforests.
                </Card.Text>
                <Button className="me-3">More Info</Button>
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-info ms-3" icon={faBus} />
                <FontAwesomeIcon className="text-danger ms-3" icon={faTrain} />
                <FontAwesomeIcon className="text-success ms-3" icon={faPlaneDeparture} />
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  );
};

export default SectionOne;
