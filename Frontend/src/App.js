import { Route,Routes } from 'react-router-dom';
import MyLeftPage from './pages/myLeftPage';
import Mainpage from './pages/mainpage';
import Joinpage2 from './pages/joinpage/joinpage2';
import Joinpage1 from './pages/joinpage/joinpage1';
import Findid from './pages/findid/findid';
import Findpw from './pages/findpw/findpw';
import Infopage from './pages/infopage/infopage'
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
import neglectReportList from './pages/neglectReportList/neglectReportList';
import moveErrReportPage from './pages/moveErrReportPage/moveErrReportPage';
import moveErrReportPagetList from './pages/moveErrReportPageList/moveErrReportPagetList';
import memberBikeRank from './pages/memberBikeRank/memberBikeRank';
import opinionBoardList from './pages/opinionBoardList/opinionBoardList';
import memberInfoEdit from './pages/memberInfoEdit/memberInfoEdit';
import passwordChange from './pages/passwordChange/passwordChange';
import memberDelete from './pages/memberDelete/memberDelete';
import noticeBoard from './pages/noticeBoard/noticeBoard';
import moveUseMenuInsurance from './pages/moveUseMenuInsurance/moveUseMenuInsurance';
import moveUseMenuClauseInfo from './pages/moveUseMenuClauseInfo/moveUseMenuClauseInfo';
import InfoCoupon from './pages/infoCoupon/infoCoupon';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Mainpage} />
        <Route path="/myLeftPage" Component={MyLeftPage} />
        <Route path="/joinPage1" Component={Joinpage1} />
        <Route path="/joinPage2" Component={Joinpage2} />
        <Route path="/findid" Component={Findid} />
        <Route path="/findpw" Component={Findpw} />
        <Route path="/infopage" Component={Infopage} />
        <Route path="/infoCoupon" Component={InfoCoupon} />
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
        <Route path="/neglectReportList" Component={neglectReportList} />
        <Route path="/moveErrReportPage" Component={moveErrReportPage} />
        <Route path="/moveErrReportPagetList" Component={moveErrReportPagetList} />
        <Route path="/memberBikeRank" Component={memberBikeRank} />
        <Route path="/opinionBoardList" Component={opinionBoardList} />
        <Route path="/memberInfoEdit" Component={memberInfoEdit} />
        <Route path="/passwordChange" Component={passwordChange} />
        <Route path="/memberDelete" Component={memberDelete} />
        <Route path="/noticeBoard" Component={noticeBoard} />
        <Route path="/moveUseMenuInsurance" Component={moveUseMenuInsurance} />
        <Route path="/moveUseMenuClauseInfo" Component={moveUseMenuClauseInfo} />
        
        
        
      </Routes>  
    </div>
  );
}

export default App;
