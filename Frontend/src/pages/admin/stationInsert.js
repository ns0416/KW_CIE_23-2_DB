import React from 'react';
import AdminNavbar from './AdminNavbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';


function StationInsert() {
    function Submithandler(e){

    }
    return(
        <>
        <AdminNavbar/>
        <Container>
            <h3 style={{fontWeight: "bold", margin: "30px 0"}}>대여소 추가</h3>
            <Form noValidate onSubmit={Submithandler}>
            <Form.Group controlId="titleInput">
                <Form.Label>제목</Form.Label>
                <Form.Control required type="email" placeholder="" />
            </Form.Group>
            <Form.Group controlId="contentText">
                <Form.Label>내용</Form.Label>
                <Form.Control required as="textarea" rows={20} />
            </Form.Group>
            </Form>
        </Container>
        </>
    );
}

export default StationInsert;