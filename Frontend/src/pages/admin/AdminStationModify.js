import React from 'react';
import AdminNavbar from './AdminNavbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function AdminStationModify() {
    const navigate = useNavigate();
    const params  = useParams();
    const station_uid = params.uid;
    const [Station_info,setStationinfo] = useState({
        station_id:"",
        station_name:"",
        lat:"",
        lon:"",
        size:"",
        is_valid:false,
        station_type:"lent",
    });

    const onChangeHandler = (e) =>{
        setStationinfo({...Station_info, [e.target.name] : e.target.value});
    }
    const onSwitchHandler = (e) =>{
        setStationinfo({...Station_info, [e.target.name] : !Station_info[e.target.name]});
    }

    const insertStation = ()=>{
        //const form = e.currentTarget;
        let Station_infonew = {
            station_name:Station_info.station_name,
            lat:Number(Station_info.lat),
            lon:Number(Station_info.lon),
            size:Number(Station_info.size),
            station_type:Station_info.station_type,
        };
        console.log(Station_info);
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/insertStation", Station_infonew)
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
    const modifyStation = ()=>{
        let Station_infonew = {
            uid:Number(station_uid),
            station_name:Station_info.station_name,
            lat:Number(Station_info.lat),
            lon:Number(Station_info.lon),
            size:Number(Station_info.size),
            is_valid:Boolean(Station_info.is_valid),
            station_type:Station_info.station_type,
        };
        console.log(Station_infonew);
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/updateStation", Station_infonew)
        .then((res) => {
            if(res.data.result == "success") {
                alert("대여소 수정 완료");
                navigate('/admin/station');
            }
            else {
                alert("대여소 수정 실패");
            }
        })
        .catch((err) => console.log(err))
    }
    
    const getStationInfo = ()=>{
        if (station_uid === 0)
        {
            return;
        }
        axios.get('http://seoulbike-kw.namisnt.com:8082/rest/getStationInfo', {params: {station_id: station_uid},})
        .then((res) => {
            if(res.data.result== "success") {
                setStationinfo(res.data.data);
            }
            else { //대여소 조회 실패
                console.log(res.data);
                console.log("get Board Article error!")
            }
        })
        .catch((err) => console.log(err))
    }

    const deleteStationInfo = ()=>{
        if (station_uid === 0)
        {
            return;
        }
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/deleteStation", {station_uid : Number(station_uid)})
        .then((res) => {
            if(res.data.result== "success") {
                alert("삭제 성공")
                window.history.back();
            }
            else { //대여소 조회 실패
                alert("삭제에 실패하였습니다. 대여소와 관련된 정보가 있습니다.")
            }
        })
        .catch((err) => console.log(err))
    }

    useEffect(()=>{
        getStationInfo();
    }, [params]);

    useEffect(()=>{
        console.log(Station_info)
    }, []);
    function Submithandler(e){
        e.preventDefault();
        
        if (station_uid > 0){
            modifyStation();
        }else{
            insertStation();
        }
    }
    return(
        <>
        <AdminNavbar/>
        <Container>
            <h3 style={{fontWeight: "bold", margin: "30px 0"}}>{station_uid != undefined && station_uid > 0 ? "대여소 수정" : "대여소 추가"}</h3>
            <div>
            <Form noValidate onSubmit={Submithandler}>
            <Form.Group className="mb-3" controlId="station_name">
                <Form.Label><b>대여소 이름</b></Form.Label>
                <Form.Control required type="text" defaultValue={Station_info.station_name} name="station_name" onChange={onChangeHandler} placeholder="대여소 명" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group controlId="lat">
                        <Form.Label><b>위도</b></Form.Label>
                        <Form.Control required type="number" defaultValue={Station_info.lat} name="lat" onChange={onChangeHandler}placeholder="위도" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="lon">
                        <Form.Label><b>경도</b></Form.Label>
                        <Form.Control required type="number" defaultValue={Station_info.lon} name="lon" onChange={onChangeHandler} placeholder="경도" />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="size">
                <Form.Label><b>대여소 규모</b></Form.Label>
                <Form.Control required type="number" defaultValue={Station_info.size} name="size" onChange={onChangeHandler} placeholder="대여소 규모" />
            </Form.Group>
            <Form.Group controlId="is_valid">
                <Form.Label><b>대여소 운영 여부</b></Form.Label>
                <Form.Check required type="switch" checked={Station_info.is_valid} name="is_valid" onChange={onSwitchHandler}/>
            </Form.Group>
            <Form.Group controlId="station_type">
                <Form.Label><b>대여소 타입</b></Form.Label>
                <Form.Select name="station_type" value={Station_info.station_type} onChange={onChangeHandler}>
                    <option value="lent">대여소</option>
                    <option value="inspection">정비소</option>
                </Form.Select>
            </Form.Group>
            <Container className="mt-5">
                {station_uid != undefined && station_uid > 0 ?
                    <Button variant="danger" onClick={(e)=>{deleteStationInfo()}} style={{float: "left"}}>삭제하기</Button>
                    :
                    ""
                }
                <Button type="submit" style={{float: "right"}}>{station_uid > 0 ? '수정하기' : '추가하기'}</Button>
            </Container>
            </Form>
            </div>
        </Container>
        </>
    );
}

export default AdminStationModify;