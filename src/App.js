import React from 'react'
import { Col } from 'react-bootstrap'
import Row from 'react-bootstrap/cjs/Row'
import Comments from './Components/Comments/Comments'
import MauinVideo from './Components/MainVideo/MauinVideo'
import Suggestion from './Components/Suggestions/Suggestion'

const App = () => {
    return (
        
             <Row>
    <Col  md={8}>
        
    <MauinVideo />
           <Comments/>
    </Col>
    <Col md={4}>
        <Suggestion/>
    </Col>
    </Row>
    
    
    )
}

export default App
