import React from "react"
import { Container, Row, Col } from "react-bootstrap"
const App = () => {
  return (
    <Container fluid className="hikayat-background">
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Col md={8} className="text-center">
          <h1 className="display-3 text-muted">Hikayat.app is coming</h1>
          <p className="lead text-muted">
            A unique escape into the world of wisdom through stories, parables,
            and riddles.
          </p>
          {/* Add more content or components here */}
        </Col>
      </Row>
    </Container>
  )
}

export default App
