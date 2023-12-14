import { useOutletContext } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminNavbar() {
  const Commons = useOutletContext();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/admin/member">따릉이 관리자 페이지</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin/member">회원관리</Nav.Link>
            <Nav.Link href="/admin/station">대여소관리</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <button className='ms-2' onClick={Commons.logout}>로그아웃</button>
    </Navbar>
  );
}

export default AdminNavbar;