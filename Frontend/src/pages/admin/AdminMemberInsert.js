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

function AdminMemberInsert() {
    const navigate = useNavigate();
    // const params  = useParams();
    // const station_uid = params.uid;
    // const [Memberinfo,setMemberinfo] = useState({
    //     id:"",
    //     pw:"",
    //     email:"",
    //     phone:"",
    //     sex:"",
    //     age:"",
    //     weight:"",
    //     is_lost:"",
    //     isvalid:"",
    // });

    // useEffect(()=>{
    //     if (station_uid === 0)
    //     {
    //         return;
    //     }
    //     axios.get('http://seoulbike-kw.namisnt.com:8082/rest/admin/updateMember', {params: {station_id: station_uid},})
    //     .then((res) => {
    //         if(res.data.result== "success") {
    //             // console.log(res.data);
    //             console.log(typeof(res.data.data.is_valid))
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
        const Member_infonew = {
            id:form.id.value,
            pw:form.pw.value,
            email:form.email.value,
            phone:Number(form.phone.value),
            sex:form.sex.value,
            age:Number(form.age.value),
            weight:Number(form.weight.value),
        };
        console.log(Member_infonew);
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/registerMember", Member_infonew)
        .then((res) => {
            if(res.data.result == "success") {
                alert("회원 추가 완료");
                navigate('/admin/member');
            }
            else {
                alert("회원 추가 실패");
            }
        })
        .catch((err) => console.log(err))

        
    }
    return(
        <>
        <AdminNavbar/>
        <Container>
            <h3 style={{fontWeight: "bold", margin: "30px 0"}}>회원 추가</h3>
            <div>
            <Form noValidate onSubmit={Submithandler}>
            <Form.Group className="mb-3" controlId="id">
                <Form.Label><b>아이디</b></Form.Label>
                <Form.Control required type="text" placeholder="아이디" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pw">
                <Form.Label><b>비밀번호</b></Form.Label>
                <Form.Control required type="password" placeholder="비밀번호" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label><b>이메일</b></Form.Label>
                <Form.Control required type="email" placeholder="이메일" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
                <Form.Label><b>휴대전화 번호</b></Form.Label>
                <Form.Control required type="tel" placeholder="휴대전화 번호" />
            </Form.Group>
            <b>성별</b>
            <Form.Group className="mb-3" controlId="sex">
                {/* <Form.Label><b>성별</b></Form.Label> */}
                <Form.Check inline name="group1" label="남" type="radio" value="M"/>
                <Form.Check inline name="group1" label="여" type="radio" value="F"/>
                {/* <Form.Control required type="tel" placeholder="휴대전화 번호" /> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="age">
                <Form.Label><b>출생년도</b></Form.Label>
                <Form.Control type="number" placeholder="출생년도" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="weight">
                <Form.Label><b>몸무게</b></Form.Label>
                <Form.Control type="number" placeholder="몸무게" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="is_lost">
                <Form.Label><b>분실여부</b></Form.Label>
                <Form.Control type="number" placeholder="분실여부" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="isvalid">
                <Form.Label><b>탈퇴여부</b></Form.Label>
                <Form.Control type="number" placeholder="탈퇴여부" />
            </Form.Group> */}
            <Button type="submit" style={{float: "right"}}>추가하기</Button>
            </Form>
            </div>
        </Container>
        </>
    );
}

export default AdminMemberInsert;