import React from 'react'

import { Row, Col } from 'chamika-design'
import 'chamika-design/dist/index.css'

const App = () => {
  return (
    <div>
      <Row >
        <Col size={3}>
          <h2> Hello World</h2>
        </Col>
        <Col size={3}>
          <h2> Good Morning</h2>
        </Col>
      </Row>

    </div>)
}

export default App
