# chamika-design

> This is basic CSS framewok

[![NPM](https://img.shields.io/npm/v/chamika-design.svg)](https://www.npmjs.com/package/chamika-design) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save chamika-design
```

## Usage

```jsx
import React, { Component } from 'react'
import { Row, Col } from 'chamika-design'
import 'chamika-design/dist/index.css'

class Example extends Component {
  render() {
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

    </div>
    )
  }
}
```

## License

MIT © [](https://github.com/)
