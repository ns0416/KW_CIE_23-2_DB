import React from 'react';
import AdminNavbar from './AdminNavbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';


function AdminMember()
{
    const [queryword, setqueryword] = useState('');

    function changehandler(e) {
        setqueryword(e.target.value);
    }

    function Search(e) {
        // axios 연동
    }


    return (
        <>
        <AdminNavbar/>

        <Container style={{marginTop:"30px", marginBottom: "30px"}}>
            <div class="input-group">
            <span class="input-group-text" id="basic-addon1">회원검색</span>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={queryword} onChange={changehandler}/>
                <button type="button" class="btn btn-primary" onClick={Search}>검색</button>
                {/* <span style={{marginLeft: "10px"}}><Button>회원 추가</Button></span> */}
            </div>
        </Container>

        <Table striped bordered hover>
            <thead>
                <tr>
                  <th>#</th>
                  <th>아이디</th>
                  <th>이메일</th>
                  <th>전화번호</th>
                  <th>등급</th>
                  <th>성별</th>
                  <th>나이</th>
                  <th>분실여부</th>
                  <th>활성여부</th>
                  <th>생성일자</th>
                  <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>example</td>
                    <td>example@example.com</td>
                    <td>01012345678</td>
                    <td>99999</td>
                    <td>남</td>
                    <td>100</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2023-10-30 03:54:44</td>
                    <td style={{textAlign:"center"}}><Button variant="primary">수정하기</Button>{' '}</td>
                </tr>
            </tbody>
        </Table>
        </>
    )

}

export default AdminMember;