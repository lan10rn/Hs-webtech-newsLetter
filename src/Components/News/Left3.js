import React from 'react'
import { news } from '../../constants/data'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Left3 = (props) => {
    return (
        <>
            <div className='display-inline-block px-0 pt-2' style={{ borderBottom: `2px solid ${props.color}` }}>
                <span className='' style={{ color: props.textColor, backgroundColor: props.color, fontSize: "12px", margin: "0", padding: "4px" }}>{props.type}</span>
            </div>
            <Container style={{ padding: "10px" }}>
                <Row>
                {news.filter((cate) => cate.id < 4 ).map((news) => (
                    
                        <Col xs={12} sm={6} md={4}>
                        <Card.Img className='p-0' src={news.img} alt="FooterDemoImage" style={{ aspectRatio: "1.53" }} />
                            <Card className='m-0'style={{ width: '100%', backgroundColor: "transparent", color: "#ffffff", border: "0px" }}>
                                <Card.Body style={{ backgroundColor: "transparent", border: "0px", padding: "0" }}>
                                    <Card.Text style={{ color: "black", fontWeight: "500", fontSize: "14px", width: "auto", height: "auto" }}>
                                        {news.title}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                ))}
                </Row>
            </Container>
        </>
    )
}

export default Left3