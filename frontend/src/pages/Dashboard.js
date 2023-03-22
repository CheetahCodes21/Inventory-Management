import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <h5 className="card-title">Total Products</h5>
              <h3 className="card-text">120</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <h5 className="card-title">Total Stock</h5>
              <h3 className="card-text">980</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <h5 className="card-title">Total Revenue</h5>
              <h3 className="card-text">$15,000</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <h5 className="card-title">New Orders</h5>
              <h3 className="card-text">24</h3>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <h5 className="card-title">Low Stock Products</h5>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Product 1
                  <span className="badge bg-danger rounded-pill">3</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Product 2
                  <span className="badge bg-warning rounded-pill">5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Product 3
                  <span className="badge bg-warning rounded-pill">7</span>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <h5 className="card-title">Top Selling Products</h5>
              <ol className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Product 1
                  <span className="badge bg-success rounded-pill">$500</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Product 2
                  <span className="badge bg-success rounded-pill">$350</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Product 3
                  <span className="badge bg-success rounded-pill">$300</span>
                </li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
