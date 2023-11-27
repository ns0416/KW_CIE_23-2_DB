import { Route,Routes } from 'react-router-dom';
import MyLeftPage from './pages/myLeftPage';
import Mainpage from './pages/mainpage';
import Joinpage from './pages/joinpage';
import Findid from './pages/findid';
import Findpw from './pages/findpw';
import Infopage from './pages/infopage'
import Test from './pages/test';
import moveMemberCardRegiView from './pages/moveMemberCardRegiView/moveMemberCardRegiView';


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
        
      </Routes>  
    </div>
  );
}

export default App;
