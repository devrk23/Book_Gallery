import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Row,Col,Card,Button } from 'antd';
import './fetch.css'
function Fetchdata() {
    const [books,setBooks]= useState([])

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/photos")
          .then((res) => {
            console.log(res.data);
            setBooks(res.data);
          })
      }, []);
  return (
    <div className='container'>
      <Row gutter={15}>
      {books.map((value) => (
        <Col className='cards' span={8}>
          <Card className='card'>
            <img src='{value.thumbnailUrl}'></img>
            <p>{value.title}</p>
            <Button type="link" style={{textDecoration:'underline',marginBottom:'3%'}}><p>Know More..</p></Button>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default Fetchdata