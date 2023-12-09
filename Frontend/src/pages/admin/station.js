import React from 'react';
import AdminNavbar from './AdminNavbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



function Station()
{
    return (
        <>
        <AdminNavbar/>
        <Container>

        <Container style={{marginTop:"30px", marginBottom: "30px"}}>
            <div class="input-group">
            <span class="input-group-text" id="basic-addon1">대여소검색</span>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-primary">검색</button>
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
                    <td>대여소 이름</td>
                    <td>위도</td>
                    <td>경도</td>
                    <td>규모</td>
                    <td>운영여부</td>
                    <td>대여소 타입</td>
                    <td>개설날짜</td>
                    <td style={{textAlign:"center"}}><Button variant="primary">수정하기</Button>{' '}</td>
                </tr>
            </tbody>
        </Table>
        </Container>
        </>
    )

}

export default Station;