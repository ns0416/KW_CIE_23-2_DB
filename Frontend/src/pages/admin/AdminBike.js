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



function AdminBike()
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
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">따릉이 검색</InputGroup.Text>
                <Form.Control
                  placeholder="search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={queryword}
                  onChange={changehandler}
                />
                <Button onClick={Search}>검색</Button>
                <span style={{marginLeft: "10px"}}><Button onClick={moveInsert}>대여소 추가</Button></span>
            </InputGroup>
        </Container>

        <Table striped bordered hover>
            <thead>
                <tr>
                  <th>#</th>
                  <th>자전거번호</th>
                  <th>자전거타입</th>
                  <th>상태</th>
                  <th>최근정비일자</th>
                  <th>출고일자</th>
                  <th>수정일자</th>
                  <th></th>
                </tr>
            </thead>
            <tbody>
                    {
                        bikes.map(function(a, i){
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{a.bike_id}</td>
                                    <td>{a.bike_type}</td>
                                    <td>{a.status}</td>
                                    <td>{a.inspection_date}</td>
                                    <td>{a.release_date}</td>
                                    <td>{a.updated_date}</td>
                                    <td style={{textAlign:"center"}}><Link to='/'><Button variant="outline-primary">수정하기</Button></Link><Button variant="outline-danger">삭제하기</Button></td>
                                </tr>
                            );
                        })
                    }
            </tbody>
        </Table>
        </>
    )

}

export default AdminBike;