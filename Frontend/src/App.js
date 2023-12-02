import { Route,Routes } from 'react-router-dom';
import MyLeftPage from './pages/myLeftPage';
import Mainpage from './pages/mainpage';
//import Joinpage from './pages/joinpage/joinpage';
import Joinpage1 from './pages/joinpage/joinpage1';
import Findid from './pages/findid/findid';
import Findpw from './pages/findpw/findpw';
import Infopage from './pages/infopage/infopage'
import Test from './pages/test';
import moveMemberCardRegiView from './pages/moveMemberCardRegiView/moveMemberCardRegiView';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Mainpage} />
        <Route path="/myLeftPage" Component={MyLeftPage} />
        <Route path="/joinPage1" Component={Joinpage1} />
        <Route path="/findid" Component={Findid} />
        <Route path="/findpw" Component={Findpw} />
        <Route path="/infopage" Component={Infopage} />
        <Route path="/test" Component={Test} />
        <Route path="/moveMemberCardRegiView" Component={moveMemberCardRegiView} />
        
      </Routes>  
    </div>
  );
}

export default App;
