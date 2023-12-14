import { Route,Routes,Navigate } from 'react-router-dom';
import MyLeftPage from './pages/myLeftPage';
import Mainpage from './pages/mainpage';
import Joinpage1 from './pages/joinpage/joinpage1';
import Joinpage2 from './pages/joinpage/joinpage2';
import Joinpage3 from './pages/joinpage/joinpage3';
import Findid from './pages/findid/findid';
import Findid2 from './pages/findid/findid2';
import Findpw from './pages/findpw/findpw';
import Findpw2 from './pages/findpw/findpw2';
import Infopage from './pages/infopage/infopage';
import Test from './pages/test';
import MoveMemberCardRegiView from './pages/moveMemberCardRegiView/moveMemberCardRegiView';
import FavoriteStation from './pages/favoriteStation/favoriteStation';
import BuyTicketMenu from './pages/buyTicketMenu/buyTicketMenu';
import GetDayTicketPayInfo from './pages/getDayTicketPayInfo/getDayTicketPayInfo';
import MemberInfoMenu from './pages/memberInfoMenu/memberInfoMenu';
import NoticeBoardMenu from './pages/noticeBoardMenu/noticeBoardMenu';
import PaymentMenu from './pages/PaymentMenu/PaymentMenu';
import RentStatementMenu from './pages/rentStatementMenu/rentStatementMenu';
import NeglectReport from './pages/neglectReport/neglectReport';
import NeglectReportList from './pages/neglectReportList/neglectReportList';
import MoveErrReportPage from './pages/moveErrReportPage/moveErrReportPage';
import MoveErrReportPagetList from './pages/moveErrReportPageList/moveErrReportPagetList';
import MemberBikeRank from './pages/memberBikeRank/memberBikeRank';
import OpinionBoardList from './pages/opinionBoardList/opinionBoardList';
import MemberInfoEdit from './pages/memberInfoEdit/memberInfoEdit';
import PasswordChange from './pages/passwordChange/passwordChange';
import MemberDelete from './pages/memberDelete/memberDelete';
import NoticeBoard from './pages/noticeBoard/noticeBoard';
import NoticeBoardView from './pages/noticeBoardView/noticeBoardView';
import MoveUseMenuInsurance from './pages/moveUseMenuInsurance/moveUseMenuInsurance';
import MoveUseMenuClauseInfo from './pages/moveUseMenuClauseInfo/moveUseMenuClauseInfo';
import InfoCoupon from './pages/infoCoupon/infoCoupon';
import CommonMain from './pages/CommonMain';
import AdminStation from './pages/admin/AdminStation';
import AdminStationModify from './pages/admin/AdminStationModify';
import AdminMember from './pages/admin/AdminMember';
import AdminMemberInsert from './pages/admin/AdminMemberInsert';
import ChangeEmail1 from './pages/changeEmail/ChangeEmail1';
import SetLost from './pages/setLost/SetLost';
import AdminBoard from './pages/admin/AdminBoard';
import AdminBike from './pages/admin/AdminBike';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Navigate to ="/main"/>}/>
        <Route element={<CommonMain/>}>
          <Route path="/main" exact element={<Mainpage/>} />
          <Route path="/myLeftPage" exact element={<MyLeftPage/>} />
          <Route path="/joinPage1" exact element={<Joinpage1/>} />
          <Route path="/joinPage2" exact element={<Joinpage2/>} />
          <Route path="/joinPage3" exact element={<Joinpage3/>} />
          <Route path="/findid" exact element={<Findid/>} />
          <Route path="/findid2" exact element={<Findid2/>} />
          <Route path="/findpw" exact element={<Findpw/>} />
          <Route path="/findpw2" exact element={<Findpw2/>} />
          <Route path="/infopage" exact element={<Infopage/>} />
          <Route path="/infoCoupon" exact element={<InfoCoupon/>} />
          <Route path="/setLost" exact element={<SetLost/>} />
          <Route path="/test" exact element={<Test/>} />
          <Route path="/moveMemberCardRegiView" exact element={<MoveMemberCardRegiView/>} />
          <Route path="/favoriteStation" exact element={<FavoriteStation/>} />
          <Route path="/changeEmail" exact element={<ChangeEmail1/>} />
          <Route path="/buyTicketMenu" exact element={<BuyTicketMenu/>} />
          <Route path="/getDayTicketPayInfo" exact element={<GetDayTicketPayInfo/>} />
          <Route path="/memberInfoMenu" exact element={<MemberInfoMenu/>} />
          <Route path="/noticeBoardMenu" exact element={<NoticeBoardMenu/>} />
          <Route path="/PaymentMenu" exact element={<PaymentMenu/>} />
          <Route path="/rentStatementMenu" exact element={<RentStatementMenu/>} />
          <Route path="/neglectReport" exact element={<NeglectReport />} />
          <Route path="/neglectReportList" exact element={<NeglectReportList />} />
          <Route path="/moveErrReportPage" exact element={<MoveErrReportPage />} />
          <Route path="/moveErrReportPagetList" exact element={<MoveErrReportPagetList />} />
          <Route path="/memberBikeRank" exact element={<MemberBikeRank/>} />
          <Route path="/opinionBoardList" exact element={<OpinionBoardList/>} />
          <Route path="/memberInfoEdit" exact element={<MemberInfoEdit/>} />
          <Route path="/passwordChange" exact element={<PasswordChange/>} />
          <Route path="/memberDelete" exact element={<MemberDelete/>} />
          <Route path="/noticeBoard" exact element={<NoticeBoard/>} />
          <Route path="/noticeBoardView/:uid" exact element={<NoticeBoardView/>} />
          <Route path="/moveUseMenuInsurance" exact element={<MoveUseMenuInsurance/>} />
          <Route path="/moveUseMenuClauseInfo" exact element={<MoveUseMenuClauseInfo/>} />
          <Route path="/admin/station" exact element={<AdminStation/>}/>
          <Route path="/admin/stationModify/:uid" exact element={<AdminStationModify/>}/>
          <Route path="/admin/stationModify" exact element={<AdminStationModify/>}/>
          <Route path="/admin/member" exact element={<AdminMember/>}/>
          <Route path="/admin/memberInsert" exact element={<AdminMemberInsert/>}/>
          <Route path="/admin/memberModify/:uid" exact element={<AdminMemberInsert/>}/>
          <Route path="/admin/board" exact element={<AdminBoard/>}/>
          <Route path="/admin/bike" exact element={<AdminBike/>}/>
          
          
        </Route>        
      </Routes>  
    </div>
  );
}

export default App;
