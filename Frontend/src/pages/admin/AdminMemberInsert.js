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
    const params  = useParams();
    const user_uid = params.uid; //id값
    const [Memberinfo,setMemberinfo] = useState({
        id:"",
        pw:"",
        email:"",
        phone:"",
        sex:"",
        age:"",
        weight:"",
        is_lost:"",
        isvalid:"",
    });
    const onChangeHandler = (e) =>{
        setMemberinfo({...Memberinfo, [e.target.name] : e.target.value});
    }
    const onSwitchHandler = (e) =>{
        setMemberinfo({...Memberinfo, [e.target.name] : !Memberinfo[e.target.name]});
    }
    const Search = ()=>{
        let param = {}
        if (user_uid!=null && user_uid != undefined){
            param['type'] = 'id'
            param['value'] = user_uid;
        }
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/service/getUserInfoList", {params:param})
        .then((res) => {
            if(res.data.result== "success") {
                //console.log(res.data);
				//console.log(res.data.data);
                if(res.data.data.length > 0){
                    setMemberinfo(res.data.data[0]);
                }
            }
            else { //대여소 조회 실패
                //console.log(res.data);
                console.log("get station error!")
            }
        })
        .catch((err) => console.log(err))
    }
    const register = ()=>{
        const Member_infonew = {
            id:Memberinfo.id,
            pw:Memberinfo.pw,
            email:Memberinfo.email,
            phone:Memberinfo.phone,
            sex:Memberinfo.sex,
            age:Number(Memberinfo.age),
            weight:Number(Memberinfo.weight),
        };
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
    const modify = ()=>{
        let Member_infonew = {
            uid:Number(Memberinfo.uid),
            pw:Memberinfo.pw,
            email:Memberinfo.email,
            phone:Memberinfo.phone,
            sex:Memberinfo.sex,
            age:Number(Memberinfo.age),
            weight:Number(Memberinfo.weight),
            is_lost:Memberinfo.is_lost == 0 ? false : true,
            isvalid:Memberinfo.is_valid == 0 ? false : true
        };
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/updateMember", Member_infonew)
        .then((res) => {
            if(res.data.result == "success") {
                if(Member_infonew.isvalid == true){
                    alert("회원 수정 완료");
                }else{
                    alert("회원 탈퇴 완료");
                }
                navigate('/admin/member');
            }
            else {
                alert("회원 수정 실패");
            }
        })
        .catch((err) => console.log(err))

    }
   
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
    useEffect(()=>{
        if (user_uid==null || user_uid == undefined)
        {
            return;
        }
        Search();
    }, [params]);
    useEffect(()=>{
        if(Memberinfo.is_valid == false)
            modify();
    }, [Memberinfo])
    function Submithandler(e){
        e.preventDefault();
        if (user_uid==null || user_uid == undefined){
            register();
        }else{
            modify();
        }
    }
    return(
        <>
        <AdminNavbar/>
        <Container>
            <h3 style={{fontWeight: "bold", margin: "30px 0"}}>{user_uid != undefined && user_uid != null ? "회원 수정" : "회원 추가"}</h3>
            <div>
            <Form noValidate onSubmit={Submithandler}>
            <Form.Group className="mb-3" controlId="id">
                <Form.Label><b>아이디</b></Form.Label>
                <Form.Control required type="text" placeholder="아이디" name="id" value={Memberinfo.id} onChange={onChangeHandler} readOnly={user_uid != undefined && user_uid != null ? true : false}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="pw">
                <Form.Label><b>비밀번호</b></Form.Label>
                <Form.Control required type="password" placeholder="비밀번호" name="pw" value={Memberinfo.pw} onChange={onChangeHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label><b>이메일</b></Form.Label>
                <Form.Control required type="email" placeholder="이메일" name="email" value={Memberinfo.email} onChange={onChangeHandler}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
                <Form.Label><b>휴대전화 번호</b></Form.Label>
                <Form.Control required type="tel" placeholder="휴대전화 번호" name="phone" value={Memberinfo.phone} onChange={onChangeHandler} />
            </Form.Group>
            <b>성별</b>
            <Form.Group className="mb-3" controlId="sex"> 
                {/* <Form.Label><b>성별</b></Form.Label> */}
                <Form.Check inline name="sex" label="남" type="radio" value="M" checked={Memberinfo.sex == 'M'} onChange={onChangeHandler} disabled={user_uid != undefined && user_uid != null ? true : false}/>
                <Form.Check inline name="sex" label="여" type="radio" value="F" checked={Memberinfo.sex == 'F'} onChange={onChangeHandler} disabled={user_uid != undefined && user_uid != null ? true : false}/>
                {/* <Form.Control required type="tel" placeholder="휴대전화 번호" /> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="age">
                <Form.Label><b>출생년도</b></Form.Label>
                <Form.Control type="number" placeholder="출생년도" name="age" value={Memberinfo.age} onChange={onChangeHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="weight">
                <Form.Label><b>몸무게</b></Form.Label>
                <Form.Control type="number" placeholder="몸무게" name="weight" value={Memberinfo.weight} onChange={onChangeHandler} />
            </Form.Group>
            <Form.Group controlId="is_lost">
                <Form.Label><b>분실여부</b></Form.Label>
                <Form.Check required type="switch" checked={Memberinfo.is_lost} name="is_lost" onChange={onSwitchHandler}/>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="is_lost">
                <Form.Label><b>분실여부</b></Form.Label>
                <Form.Control type="number" placeholder="분실여부" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="isvalid">
                <Form.Label><b>탈퇴여부</b></Form.Label>
                <Form.Control type="number" placeholder="탈퇴여부" />
            </Form.Group> */}
            <Container className="mt-5">
                <Button variant="danger" onClick={(e)=>{setMemberinfo({...Memberinfo, is_valid:false});}} style={{float: "left"}}>탈퇴처리</Button>
                <Button type="submit" style={{float: "right"}}>{user_uid != undefined && user_uid != null ? "수정하기" : "추가하기"}</Button>
            </Container>
            </Form>
            </div>
        </Container>
        </>
    );
}

export default AdminMemberInsert;