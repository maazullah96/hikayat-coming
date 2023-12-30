// import React from "react"
// import { Container, Row, Col } from "react-bootstrap"
// const App = () => {
//   return (
//     <Container fluid className="hikayat-background">
//       <Row
//         className="justify-content-center align-items-center"
//         style={{ height: "100vh" }}
//       >
//         <Col md={8} className="text-center">
//           <h1 className="display-3 text-muted">Hikayat.app is coming</h1>
//           <p className="lead text-muted">
//             A unique escape into the world of wisdom through stories, parables,
//             and riddles.
//           </p>
//           {/* Add more content or components here */}
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default App

// import React from "react"
// import { Container, Row, Col } from "react-bootstrap"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faTwitter,
//   faFacebook,
//   faInstagram,
//   faPinterest,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons"

// const App = () => {
//   return (
//     <Container fluid className="hikayat-background">
//       <Row
//         className="justify-content-center align-items-center"
//         style={{ height: "100vh" }}
//       >
//         <Col md={8} className="text-center">
//           <h1 className="display-3 text-muted">Hikayat.app is coming</h1>
//           <p className="lead text-muted">
//             A unique escape into the world of wisdom through stories, parables,
//             and riddles.
//           </p>
//           {/* Social Media Icons */}
//           <Row className="justify-content-center mt-4">
//             <a href="https://twitter.com/Hikayat_App" className="social-icon">
//               <FontAwesomeIcon icon={faTwitter} size="2x" />
//             </a>
//             <a
//               href="https://www.facebook.com/profile.php?id=100088725561982"
//               className="social-icon"
//             >
//               <FontAwesomeIcon icon={faFacebook} size="2x" />
//             </a>
//             <a
//               href="https://www.instagram.com/hikayat_app/"
//               className="social-icon"
//             >
//               <FontAwesomeIcon icon={faInstagram} size="2x" />
//             </a>
//             <a
//               href="https://www.pinterest.com/hikayatapp/"
//               className="social-icon"
//             >
//               <FontAwesomeIcon icon={faPinterest} size="2x" />
//             </a>
//             <a
//               href="https://www.youtube.com/@Inspirational_Hikayat"
//               className="social-icon"
//             >
//               <FontAwesomeIcon icon={faYoutube} size="2x" />
//             </a>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default App

import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"

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

          {/* Social Media Icons in a single row */}
          <Row className="justify-content-center mt-4">
            <Col xs="auto">
              <a href="https://twitter.com/Hikayat_App" className="social-icon">
                <FontAwesomeIcon icon={faXTwitter} size="2xl" color="black" />
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="https://www.facebook.com/profile.php?id=100088725561982"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faFacebook} size="2xl" />
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="https://www.instagram.com/hikayat_app/"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="https://www.pinterest.com/hikayatapp/"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faPinterest} size="2xl" color="red" />
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="https://www.youtube.com/@Hikayat_app"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faYoutube} size="2xl" color="red" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default App
