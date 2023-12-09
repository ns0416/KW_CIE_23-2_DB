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



function AdminStation()
{
    const navigate = useNavigate();
    const [queryword, setqueryword] = useState('');
    const [stations, setstations] = useState([]);
	useEffect(() => { //전체 대여소 조회
		axios.get("http://seoulbike-kw.namisnt.com:8082/rest/getStationList")
        .then((res) => {
            if(res.data.result== "success") {
                //console.log(res.data);
				//console.log(res.data.data);
				setstations(res.data.data);
            }
            else { //대여소 조회 실패
                //console.log(res.data);
                console.log("get station error!")
            }
        })
        .catch((err) => console.log(err))
	}, [])


    function changehandler(e) {
        setqueryword(e.target.value);
    }

    function Search(e) {
        // axios 연동
    }

    function moveInsert() {
        navigate('/admin/stationInsert');
    }
    return (
        <>
        <AdminNavbar/>

        <Container style={{marginTop:"30px", marginBottom: "30px"}}>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">대여소 검색</InputGroup.Text>
                <Form.Control
                  placeholder="search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <Button onClick={Search}>검색</Button>
                <span style={{marginLeft: "10px"}}><Button onClick={moveInsert}>대여소 추가</Button></span>
            </InputGroup>
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
                  <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* <td>1</td>
                    <td>한강한가운데</td>
                    <td>37.539143</td>
                    <td>127.108374</td>
                    <td>10</td>
                    <td>1</td>
                    <td>lent</td>
                    <td style={{textAlign:"center"}}><Link to='/'><Button variant="outline-primary">수정하기</Button>{' '}</Link><Button variant="outline-danger">삭제하기</Button>{' '}</td> */}
                </tr>
                {stations.map(function(a,idx) {
							return (<>
								<tr>
									<td>{idx+1}</td>
									<td>{a.station_name}</td>
                                    <td>{a.lat}</td>
                                    <td>{a.lon}</td>
                                    <td>{a.size}</td>
                                    <td>{a.is_valid ? ("O"):("X")}</td>
                                    <td>{a.station_type}</td>
                                    <td style={{textAlign:"center"}}><Link to={{pathname: "/admin/stationModify/"+a.station_uid}}><Button variant="outline-primary">수정하기</Button>{' '}</Link></td>								
                                </tr>
							</>)
						})}
            </tbody>
        </Table>
        </>
    )

}

export default AdminStation;