import { Route,Routes } from 'react-router-dom';
import MyLeftPage from './pages/myLeftPage';
import Mainpage from './pages/mainpage';
import Joinpage from './pages/joinpage';
import Findid from './pages/findid';
import Findpw from './pages/findpw';
import Infopage from './pages/infopage'
import Test from './pages/test';
import moveMemberCardRegiView from './pages/moveMemberCardRegiView/moveMemberCardRegiView';
import favoriteStation from './pages/favoriteStation/favoriteStation';
import buyTicketMenu from './pages/buyTicketMenu/buyTicketMenu';
import getDayTicketPayInfo from './pages/getDayTicketPayInfo/getDayTicketPayInfo';
import memberInfoMenu from './pages/memberInfoMenu/memberInfoMenu';
import noticeBoardMenu from './pages/noticeBoardMenu/noticeBoardMenu';
import PaymentMenu from './pages/PaymentMenu/PaymentMenu';
import rentStatementMenu from './pages/rentStatementMenu/rentStatementMenu';
import neglectReport from './pages/neglectReport/neglectReport';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Mainpage} />
        <Route path="/myLeftPage" Component={MyLeftPage} />
        <Route path="/joinPage" Component={Joinpage} />
        <Route path="/findid" Component={Findid} />
        <Route path="/findpw" Component={Findpw} />
        <Route path="/infopage" Component={Infopage} />
        <Route path="/test" Component={Test} />
        <Route path="/moveMemberCardRegiView" Component={moveMemberCardRegiView} />
        <Route path="/favoriteStation" Component={favoriteStation} />
        <Route path="/buyTicketMenu" Component={buyTicketMenu} />
        <Route path="/getDayTicketPayInfo" Component={getDayTicketPayInfo} />
        <Route path="/memberInfoMenu" Component={memberInfoMenu} />
        <Route path="/noticeBoardMenu" Component={noticeBoardMenu} />
        <Route path="/PaymentMenu" Component={PaymentMenu} />
        <Route path="/rentStatementMenu" Component={rentStatementMenu} />
        <Route path="/neglectReport" Component={neglectReport} />
      </Routes>  
    </div>
  );
}

export default App;
