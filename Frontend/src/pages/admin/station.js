import React from 'react';
import AdminNavbar from './AdminNavbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';



function Station()
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
            <span class="input-group-text" id="basic-addon1">대여소검색</span>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={queryword} onChange={changehandler}/>
                <button type="button" class="btn btn-primary" onClick={Search}>검색</button>
            </div>
        </Container>

        <Table striped bordered hover>
            <thead>
                <tr>
                  <th>#</th>
                  <th>대여소 이름</th>
                  <th>위도</th>
                  <th>경도</th>
                  <th>규모</th>
                  <th>운영여부</th>
                  <th>대여소 타입</th>
                  <th>개설날짜</th>
                  <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>한강한가운데</td>
                    <td>37.539143</td>
                    <td>127.108374</td>
                    <td>10</td>
                    <td>1</td>
                    <td>lent</td>
                    <td>2023-10-30 03:54:44</td>
                    <td style={{textAlign:"center"}}><Button variant="primary">수정하기</Button>{' '}</td>
                </tr>
            </tbody>
        </Table>
        </>
    )

}

export default Station;