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
import { get } from 'jquery';

function AdminArticleModify() {
    const navigate = useNavigate();
    const params  = useParams();
    const uid = params.uid;
    const [ArticleInfo,setArticleInfo] = useState({
        art_uid:0,
        board_name:"",
        art_title:"",
        art_content:"",
    });

    const onChangeHandler = (e) =>{
        setArticleInfo({...ArticleInfo, [e.target.name] : e.target.value});
    }

    const insertArticle = ()=>{
        //const form = e.currentTarget;
        let article_infonew = {
            board_name:ArticleInfo.board_name,
            art_title:ArticleInfo.art_title,
            art_content:ArticleInfo.art_content,
        };
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/service/writeArticle", article_infonew)
            .then((res) => {
                if(res.data.result == "success") {
                    alert("게시글 추가 완료");
                    navigate('/admin/article');
                }
                else {
                    alert("게시글 추가 실패");
                }
            })
            .catch((err) => console.log(err))
    }
    const modifyArticle = ()=>{
        let article_infonew = {
            art_uid:ArticleInfo.art_uid,
            art_title:ArticleInfo.art_title,
            art_content:ArticleInfo.art_content,
        };
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/service/updateArticle", article_infonew)
        .then((res) => {
            if(res.data.result == "success") {
                alert("게시글 수정 완료");
                navigate('/admin/article');
            }
            else {
                alert("게시글 수정 실패");
            }
        })
        .catch((err) => console.log(err))
    }
    const getArticleInfo = ()=>{
        if (uid < 1)
        {
            return;
        }
        axios.get('http://seoulbike-kw.namisnt.com:8082/rest/admin/getBoardArticleList')
        .then((res) => {
            if(res.data.result== "success") {
                setArticleInfo(res.data.data[0]);
            }
            else { //대여소 조회 실패
                console.log(res.data);
                console.log("get Board Article error!")
            }
        })
        .catch((err) => console.log(err))
    }

    const deleteArticleInfo = ()=>{
        if (uid < 1)
        {
            return;
        }
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/service/deleteArticle", {art_uid : Number(ArticleInfo.art_uid)})
        .then((res) => {
            if(res.data.result== "success") {
                alert("삭제 성공")
                window.history.back();
            }
            else { //대여소 조회 실패
                alert("삭제에 실패하였습니다. 게시글과 관련된 정보가 있습니다.")
            }
        })
        .catch((err) => console.log(err))
    }

    useEffect(()=>{
        getArticleInfo();
    }, []);

    useEffect(()=>{
        console.log(ArticleInfo);
    }, []);
    function Submithandler(e){
        e.preventDefault();
        
        if (uid > 0){
            modifyArticle();
        }else{
            insertArticle();
        }
    }
    return(
        <>
        <AdminNavbar/>
        <Container>
            <h3 style={{fontWeight: "bold", margin: "30px 0"}}>{uid ? "게시글 수정" : "게시글 작성"}</h3>
            <div>
            <Form noValidate onSubmit={Submithandler}>
            <Form.Group className="mb-3" controlId="station_name">
                <Form.Label><b>게시판 이름</b></Form.Label>
                <Form.Control required type="text" defaultValue={ArticleInfo.board_name} name="board_name" onChange={onChangeHandler} placeholder="게시글 이름" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group controlId="lat">
                        <Form.Label><b>게시글 제목</b></Form.Label>
                        <Form.Control required type="number" value={ArticleInfo.art_title} name="art_title" onChange={onChangeHandler}placeholder="게시글 제목" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="lon">
                        <Form.Label><b>게시글 내용</b></Form.Label>
                        <Form.Control required type="number" value={ArticleInfo.art_content} name="art_content" onChange={onChangeHandler} placeholder="게시글 내용" />
                    </Form.Group>
                </Col>
            </Row>
            <Container className="mt-5">
                {
                uid ? 
                <Button variant="danger" onClick={(e)=>{deleteArticleInfo()}} style={{float: "left"}}>삭제하기</Button>
                :
                ""
                }
                <Button type="submit" style={{float: "right"}}>{uid ? '수정하기' : '추가하기'}</Button>
            </Container>
            </Form>
            </div>
        </Container>
        </>
    );
}

export default AdminArticleModify;