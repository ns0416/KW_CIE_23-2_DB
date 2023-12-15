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
    const [rent, setRent] = useState([]);
    const [return_, setReturn] = useState([]);
	useEffect(() => { //전체 대여소 조회
		getRentStatistics();
        getReturnStatistics();
	}, [])
    useEffect(() => { //전체 대여소 조회
		console.log(rent);
	}, [rent])
    const getRentStatistics = ()=>{
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/admin/getRentStationStatistics", {params:{}})
        .then((res) => {
            if(res.data.result== "success") {
                //console.log(res.data);
				//console.log(res.data.data);
                let data = res.data.data;
                let result = [];
                result.push(["station_name", "COUNT"]);
                for(var i=0; i<data.length; i++){
                    result.push(data[i]);
                }
				setRent(result);
            }
            else { //대여소 조회 실패
                //console.log(res.data);
                console.log("get rent error!")
            }
        })
        .catch((err) => console.log(err))
    }
    const getReturnStatistics = ()=>{
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/admin/getReturnStationStatistics", {params:{}})
        .then((res) => {
            if(res.data.result== "success") {
                //console.log(res.data);
				//console.log(res.data.data);
				setReturn(res.data.data);
            }
            else { //대여소 조회 실패
                //console.log(res.data);
                console.log("get return error!")
            }
        })
        .catch((err) => console.log(err))
    }
    return (
        <>
        <AdminNavbar/>

        <Container style={{marginTop:"30px", marginBottom: "30px"}}>
            <Chart 
                chartType="BarChart"
                data={rent}
                options={{
                    title:"대여가 많은 대여소 순위",
                    colors: ["#2D9D5D"],
                    titleTextStyle:{fontSize:24}
                    }
                }
            />
        </Container>

        </>
    )

}

export default AdminStatistics;