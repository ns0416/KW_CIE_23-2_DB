import React from 'react';
import AdminNavbar from './AdminNavbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminStationInsert() {
    const navigate = useNavigate();
    // const params  = useParams();
    // const station_uid = params.uid;
    // const [Station_info,setStationinfo] = useState({
    //     station_id:"",
    //     station_name:"",
    //     lat:"",
    //     lon:"",
    //     size:"",
    //     is_valid:"",
    //     station_type:"",
    //     general_cnt:"",
    //     sprout_cnt:"",
    // });

    // useEffect(()=>{
    //     if (station_uid === 0)
    //     {
    //         return;
    //     }
    //     axios.get('http://seoulbike-kw.namisnt.com:8082/rest/getStationInfo', {params: {station_id: station_uid},})
    //     .then((res) => {
    //         if(res.data.result== "success") {
    //             console.log(res.data);
    //             setStationinfo({...res.data.data,
    //                 [res.data.data.name]:res.data.data.value});
    //         }
    //         else { //대여소 조회 실패
    //             console.log(res.data);
    //             console.log("get Board Article error!")
    //         }
    //     })
    //     .catch((err) => console.log(err))
    // }, []);

    function Submithandler(e){
        e.preventDefault();
        const form = e.currentTarget;
        const Station_info = {
            station_name:form.station_name.value,
            lat:Number(form.lat.value),
            lon:Number(form.lon.value),
            size:Number(form.size.value),
            station_type:form.station_type.value,
        };
        console.log(Station_info);
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/insertStation", Station_info)
            .then((res) => {
                if(res.data.result == "success") {
                    alert("대여소 추가 완료");
                    navigate('/admin/station');
                }
                else {
                    alert("대여소 추가 실패");
                }
            })
            .catch((err) => console.log(err))
    }
    return(
        <>
        <AdminNavbar/>
        <Container>
            <h3 style={{fontWeight: "bold", margin: "30px 0"}}>대여소 추가</h3>
            <div>
            <Form noValidate onSubmit={Submithandler}>
            <Form.Group className="mb-3" controlId="station_name">
                <Form.Label><b>대여소 이름</b></Form.Label>
                <Form.Control required type="text" placeholder="대여소 명" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group controlId="lat">
                        <Form.Label><b>위도</b></Form.Label>
                        <Form.Control required type="number" placeholder="위도" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="lon">
                        <Form.Label><b>경도</b></Form.Label>
                        <Form.Control required type="number" placeholder="경도" />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="size">
                <Form.Label><b>대여소 규모</b></Form.Label>
                <Form.Control required type="number" placeholder="대여소 규모" />
            </Form.Group>
            <Form.Group controlId="station_type">
                <Form.Label><b>대여소 타입</b></Form.Label>
                <Form.Control required type="text" placeholder="대여소 타입" />
            </Form.Group>
            <Button type="submit" style={{float: "right"}}>추가하기</Button>
            </Form>
            </div>
        </Container>
        </>
    );
}

export default AdminStationInsert;