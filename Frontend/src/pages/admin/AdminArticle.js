import React from 'react';
import AdminNavbar from './AdminNavbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';



function AdminArticle()
{
    const navigate = useNavigate();
    const [article, setArticle] = useState([]);
    const [queryword, setqueryword] = useState('');
	useEffect(() => { //전체 대여소 조회
		Search();
	}, [])

    const Search = ()=>{
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/admin/getBoardArticleList")
        .then((res) => {
            if(res.data.result== "success") {
                //console.log(res.data);
				//console.log(res.data.data);
				setArticle(res.data.data);
            }
            else { //대여소 조회 실패
                //console.log(res.data);
                console.log("get board error!")
            }
        })
        .catch((err) => console.log(err))
    }
    function changehandler(e) {
        setqueryword(e.target.value);
    }
    function moveInsert() {
        navigate('/admin/writeArticle');
    }
    return (
        <>
        <AdminNavbar/>

        <Container style={{marginTop:"30px", marginBottom: "30px"}}>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">게시글 검색</InputGroup.Text>
                <Form.Control
                  placeholder="search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={queryword}
                  onChange={changehandler}
                />
                <Button onClick={Search}>검색</Button>
                <span style={{marginLeft: "10px"}}><Button onClick={moveInsert}>게시글 추가</Button></span>
            </InputGroup>
        </Container>

        <Table striped bordered hover>
            <thead>
                <tr>
                  <th>#</th>
                  <th>게시판 이름</th>
                  <th>작성자 id</th>
                  <th>게시글 제목</th>
                  <th>내용</th>
                  <th>생성일자</th>
                  <th>수정일자</th>
                  <th></th>
                </tr>
            </thead>
            <tbody>
                    {
                        article.map(function(a, i){
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{a.board_name}</td>
                                    <td>{a.id}</td>
                                    <td>{a.title}</td>
                                    <td>{a.content}</td>
                                    <td>{a.updated_date}</td>
                                    <td>{a.created_date}</td>
                                    <td style={{textAlign:"center"}}><Link to={'/admin/articeModify/'+a.uid}><Button variant="outline-primary">수정하기</Button></Link></td>
                                </tr>
                            );
                        })
                    }
            </tbody>
        </Table>
        </>
    )

}

export default AdminArticle;