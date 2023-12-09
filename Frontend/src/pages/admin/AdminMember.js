import React from 'react';
import AdminNavbar from './AdminNavbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';


function AdminMember()
{
    const navigate = useNavigate();
    const [queryword, setqueryword] = useState('');
    const [members, setmembers] = useState([]);
    useEffect(() => { //전체 회원 조회
		axios.get("http://seoulbike-kw.namisnt.com:8082/rest/service/getUserInfoList")
        .then((res) => {
            if(res.data.result== "success") {
                //console.log(res.data);
				console.log(res.data.data);
				setmembers(res.data.data);
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
        navigate('/admin/memberInsert');
    }

    return (
        <>
        <AdminNavbar/>

        <Container style={{marginTop:"30px", marginBottom: "30px"}}>
            <div class="input-group">
            <span class="input-group-text" id="basic-addon1">회원검색</span>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={queryword} onChange={changehandler}/>
                <button type="button" class="btn btn-primary" onClick={Search}>검색</button>
                <span style={{marginLeft: "10px"}}><Button onClick={moveInsert}>회원 추가</Button></span>
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
                  <th>체중</th>
                  <th>분실여부</th>
                  <th>활성여부</th>
                  <th>생성일자</th>
                  <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>0</td>
                    <td>example</td>
                    <td>example@example.com</td>
                    <td>01012345678</td>
                    <td>99999</td>
                    <td>M</td>
                    <td>20</td>
                    <td>50</td>
                    <td>X</td>
                    <td>O</td>
                    <td style={{textAlign:"center"}}><Button variant="primary">수정하기</Button>{' '}</td>
                </tr>
                {members.map(function(a,idx) {
							return (<>
								<tr>
									<td>{idx+1}</td>
                                    <td>{a.id}</td>
                                    <td>{a.email}</td>
                                    <td>{a.phone}</td>
                                    <td>{a.level}</td>
                                    <td>{a.sex}</td>
                                    <td>{a.age}</td>
                                    <td>{a.weight}</td>
                                    <td>{a.is_lost ? ("O"):("X")}</td>
                                    <td>{a.is_valid ? ("O"):("X")}</td>
                                    <td style={{textAlign:"center"}}><Link to={{pathname: "/admin/memberModify/"+a.station_uid}}><Button variant="outline-primary">수정하기</Button>{' '}</Link></td>								
                                </tr>
							</>)
						})}
            </tbody>
        </Table>
        </>
    )

}

export default AdminMember;