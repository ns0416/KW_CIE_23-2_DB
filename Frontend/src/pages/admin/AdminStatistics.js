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
import { Chart } from "react-google-charts";


function AdminStatistics()
{
    const navigate = useNavigate();
    const [queryword, setqueryword] = useState('');
    const [bikes, setBikes] = useState([]);
	useEffect(() => { //전체 대여소 조회
		Search();
	}, [])

    const Search = ()=>{
        let param = {}
        if(queryword != ''){
            param['query'] = queryword;
        }
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/admin/getBikeList", {params:param})
        .then((res) => {
            if(res.data.result== "success") {
                //console.log(res.data);
				//console.log(res.data.data);
				setBikes(res.data.data);
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
        navigate('/admin/stationModify');
    }
    return (
        <>
        <AdminNavbar/>

        <Container style={{marginTop:"30px", marginBottom: "30px"}}>
            
        </Container>

        </>
    )

}

export default AdminBike;