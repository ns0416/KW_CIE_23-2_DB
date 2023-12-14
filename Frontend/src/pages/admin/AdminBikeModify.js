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

function AdminBikeModify() {
    const navigate = useNavigate();
    const params  = useParams();
    const bike_id = params.uid;
    const [bikeInfo,setBikeinfo] = useState({
        bike_type:"general",
        bike_status:"ready"
    });

    const onChangeHandler = (e) =>{
        setBikeinfo({...bikeInfo, [e.target.name] : e.target.value});
    }

    const insertBike = ()=>{
        //const form = e.currentTarget;
        let bike_infonew = {
            bike_type:bikeInfo.bike_type,
            station_uid:Number(bikeInfo.station_uid),
            bike_status:bikeInfo.bike_status
        };
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/insertBike", bike_infonew)
            .then((res) => {
                if(res.data.result == "success") {
                    alert("따릉이 추가 완료");
                    navigate('/admin/board');
                }
                else {
                    alert("따릉이 추가 실패");
                }
            })
            .catch((err) => console.log(err))
    }
    const modifyBike = ()=>{
        let bike_infonew = {
            bike_uid:bikeInfo.uid,
            bike_type:bikeInfo.bike_type,
            station_uid:Number(bikeInfo.station_uid),
            bike_status:bikeInfo.bike_status
        };
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/updateBike", bike_infonew)
        .then((res) => {
            if(res.data.result == "success") {
                alert("따릉이 수정 완료");
                navigate('/admin/board');
            }
            else {
                alert("따릉이 수정 실패");
            }
        })
        .catch((err) => console.log(err))
    }
    
    const getBikeInfo = ()=>{
        if (bike_id <=0)
        {
            return;
        }
        axios.get('http://seoulbike-kw.namisnt.com:8082/rest/admin/getBikeList', {params: {bike_id : bike_id},})
        .then((res) => {
            if(res.data.result== "success") {
                setBikeinfo(res.data.data);
            }
            else { //대여소 조회 실패
                console.log(res.data);
                console.log("get Board Article error!")
            }
        })
        .catch((err) => console.log(err))
    }

    const deleteBikeInfo = ()=>{
        if (!bike_id || bikeInfo.uid < 1)
        {
            return;
        }
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/deleteBike", {board_uid : Number(bikeInfo.uid)})
        .then((res) => {
            if(res.data.result== "success") {
                alert("삭제 성공")
                window.history.back();
            }
            else { //대여소 조회 실패
                alert("삭제에 실패하였습니다. 따릉이와 관련된 정보가 있습니다.")
            }
        })
        .catch((err) => console.log(err))
    }

    useEffect(()=>{
        getBikeInfo();
    }, [params]);

    useEffect(()=>{
        console.log(bikeInfo)
    }, []);
    function Submithandler(e){
        e.preventDefault();
        
        if (bikeInfo>0){
            modifyBike();
        }else{
            insertBike();
        }
    }
    return(
        <>
        <AdminNavbar/>
        <Container>
            <h3 style={{fontWeight: "bold", margin: "30px 0"}}>{!bike_id || bikeInfo.uid < 1 ? "게시판 수정" : "게시판 추가"}</h3>
            <div>
            <Form noValidate onSubmit={Submithandler}>
            <Form.Group className="mb-3" controlId="bike_id">
                <Form.Label><b>자전거 ID</b></Form.Label>
                <Form.Control required type="text" defaultValue={bikeInfo.bike_id} name="bike_id" placeholder="자전거 아이디" readOnly/>
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group controlId="lat">
                        <Form.Label><b>자전거 종류</b></Form.Label>
                        <Form.Select name="bike_type" value={bikeInfo.bike_type} onChange={onChangeHandler}>
                            <option value="general">일반자전거</option>
                            <option value="sprout">새싹자전거</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="lon">
                        <Form.Label><b>자전거 상태</b></Form.Label>
                        <Form.Select name="bike_status" value={bikeInfo.bike_status} onChange={onChangeHandler}>
                            <option value="ready">대기</option>
                            <option value="rent">대여중</option>
                            <option value="inspection">정비중</option>
                            <option value="lost">분실</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="station_uid">
                <Form.Label><b>최근 주차된 대여소UID</b></Form.Label>
                <Form.Control required type="text" defaultValue={bikeInfo.station_uid} name="station_uid"  onChange={onChangeHandler} placeholder="자전거 대여소"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inspection_date">
                <Form.Label><b>최근 정비일자</b></Form.Label>
                <Form.Control required type="text" defaultValue={bikeInfo.inspection_date} name="inspection_date" placeholder="최근정비일자" readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="release_date">
                <Form.Label><b>출고일자</b></Form.Label>
                <Form.Control required type="text" defaultValue={bikeInfo.release_date} name="release_date" placeholder="출고일자" readOnly/>
            </Form.Group>
            <Container className="mt-5">
                {
                bikeInfo>0 ? 
                <Button variant="danger" onClick={(e)=>{deleteBikeInfo()}} style={{float: "left"}}>삭제하기</Button>
                :
                ""
                }
                <Button type="submit" style={{float: "right"}}>{bikeInfo>0 ? '수정하기' : '추가하기'}</Button>
            </Container>
            </Form>
            </div>
        </Container>
        </>
    );
}

export default AdminBikeModify;