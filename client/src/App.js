import './App.css';
import './prism2.css';
import Header from './components/headers.jsx';
import MainRoute from './routes';
import Footer from './components/footer.jsx';
import { Helmet } from 'react-helmet';
import AdminRoute from './routes/adminRoute';
import BlogComp from './admin/components/BlogComp';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { companyInfoFetch, userFetch } from './redux/R_Action';
import {gapi} from 'gapi-script'
import Spinner from './components/Spinner';
import { getTurtlsInfoApi } from './apis/Apis';
function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  let clientId = "1071769691163-9qm1qs54a9vu2hst6muc7uinvvradtp0.apps.googleusercontent.com";
  console.log(state);

  const fetchCompanyInfo = async () => {
    await getTurtlsInfoApi().then(res => {
      dispatch(companyInfoFetch(res.data.data));
    }).catch(err => {
      console.log(err);
    })
  }


  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:''
      })
    };
    gapi.load('client:auth2', start);
    fetchCompanyInfo();
  },[])

  return (
    <div className="App">
      {/* <BlogComp/> */}
      {state.SpinnerOpenClose && <Spinner/>} 
      <LoginForm/>
      {/* <div id="signInDiv"></div> */}
      <AdminRoute/>
      <Header/>
      <Helmet>
        <title>Turtl Cyber</title>
      </Helmet>
      <MainRoute/>
      <Footer/>
    </div>
  );
}

export default App;