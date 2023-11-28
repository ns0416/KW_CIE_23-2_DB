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
        
      </Routes>  
    </div>
  );
}

export default App;
