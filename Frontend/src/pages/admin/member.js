import React from 'react';
import AdminNavbar from './AdminNavbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



function Member()
{
    return (
        <>
        <AdminNavbar/>
        <Container>

        <Container style={{marginTop:"30px", marginBottom: "30px"}}>
            <div class="input-group">
            <span class="input-group-text" id="basic-addon1">회원검색</span>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-primary">검색</button>
            </div>
        </Container>

        <Table striped bordered hover>
            <thead>
                <tr>
                  <th>#</th>
                  <th>id</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>level</th>
                  <th>sex</th>
                  <th>age</th>
                  <th>is_lost</th>
                  <th>isvalid</th>
                  <th>created_date</th>
                  <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#</td>
                    <td>id</td>
                    <td>email</td>
                    <td>phone</td>
                    <td>level</td>
                    <td>sex</td>
                    <td>age</td>
                    <td>is_lost</td>
                    <td>isvalid</td>
                    <td>created_date</td>
                    <td style={{textAlign:"center"}}><Button variant="primary">수정하기</Button>{' '}</td>
                </tr>
            </tbody>
        </Table>
        </Container>
        </>
    )

}

export default Member;