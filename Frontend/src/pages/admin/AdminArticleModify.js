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

function AdminBoardModify() {
    const navigate = useNavigate();
    const params  = useParams();
    const board_name = params.uid;
    const [boardInfo,setBoardinfo] = useState({
        uid:0,
        board_name:"",
        read_level:0,
        write_level:0
    });

    const onChangeHandler = (e) =>{
        setBoardinfo({...boardInfo, [e.target.name] : e.target.value});
    }

    const insertBoard = ()=>{
        //const form = e.currentTarget;
        let board_infonew = {
            board_name:boardInfo.board_name,
            read_level:Number(boardInfo.read_level),
            write_level:Number(boardInfo.write_level)
        };
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/insertBoard", board_infonew)
            .then((res) => {
                if(res.data.result == "success") {
                    alert("게시판 추가 완료");
                    navigate('/admin/board');
                }
                else {
                    alert("게시판 추가 실패");
                }
            })
            .catch((err) => console.log(err))
    }
    const modifyBoard = ()=>{
        let board_infonew = {
            board_uid:boardInfo.uid,
            board_name:boardInfo.board_name,
            read_level:Number(boardInfo.read_level),
            write_level:Number(boardInfo.write_level)
        };
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/updateBoard", board_infonew)
        .then((res) => {
            if(res.data.result == "success") {
                alert("게시판 수정 완료");
                navigate('/admin/board');
            }
            else {
                alert("게시판 수정 실패");
            }
        })
        .catch((err) => console.log(err))
    }
    
    const getBoardInfo = ()=>{
        if (!board_name)
        {
            return;
        }
        axios.get('http://seoulbike-kw.namisnt.com:8082/rest/admin/getBoardList', {params: {query: board_name},})
        .then((res) => {
            if(res.data.result== "success") {
                setBoardinfo(res.data.data[0]);
            }
            else { //대여소 조회 실패
                console.log(res.data);
                console.log("get Board Article error!")
            }
        })
        .catch((err) => console.log(err))
    }

    const deleteBoardInfo = ()=>{
        if (!board_name || boardInfo.uid < 1)
        {
            return;
        }
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/admin/deleteBoard", {board_uid : Number(boardInfo.uid)})
        .then((res) => {
            if(res.data.result== "success") {
                alert("삭제 성공")
                window.history.back();
            }
            else { //대여소 조회 실패
                alert("삭제에 실패하였습니다. 게시판과 관련된 정보가 있습니다.")
            }
        })
        .catch((err) => console.log(err))
    }

    useEffect(()=>{
        getBoardInfo();
    }, [params]);

    useEffect(()=>{
        console.log(boardInfo)
    }, []);
    function Submithandler(e){
        e.preventDefault();
        
        if (board_name){
            modifyBoard();
        }else{
            insertBoard();
        }
    }
    return(
        <>
        <AdminNavbar/>
        <Container>
            <h3 style={{fontWeight: "bold", margin: "30px 0"}}>{!board_name || boardInfo.uid < 1 ? "게시판 수정" : "게시판 추가"}</h3>
            <div>
            <Form noValidate onSubmit={Submithandler}>
            <Form.Group className="mb-3" controlId="station_name">
                <Form.Label><b>게시판 이름</b></Form.Label>
                <Form.Control required type="text" defaultValue={boardInfo.board_name} name="board_name" onChange={onChangeHandler} placeholder="게시판 이름" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group controlId="lat">
                        <Form.Label><b>읽기권한</b></Form.Label>
                        <Form.Control required type="number" value={boardInfo.read_level} name="read_level" onChange={onChangeHandler}placeholder="읽기권한" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="lon">
                        <Form.Label><b>쓰기권한</b></Form.Label>
                        <Form.Control required type="number" value={boardInfo.write_level} name="write_level" onChange={onChangeHandler} placeholder="쓰기권한" />
                    </Form.Group>
                </Col>
            </Row>
            <Container className="mt-5">
                {
                board_name ? 
                <Button variant="danger" onClick={(e)=>{deleteBoardInfo()}} style={{float: "left"}}>삭제하기</Button>
                :
                ""
                }
                <Button type="submit" style={{float: "right"}}>{board_name ? '수정하기' : '추가하기'}</Button>
            </Container>
            </Form>
            </div>
        </Container>
        </>
    );
}

export default AdminBoardModify;