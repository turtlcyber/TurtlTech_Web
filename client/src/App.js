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
import { userFetch } from './redux/R_Action';
function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(state);

  const handleCallbackResponse = (response) => {
    console.log('Encoded JWT ID token: ', response.credential);
    var userObject = jwtDecode(response.credential);
    dispatch(userFetch(userObject));
    console.log(userObject);
  }

  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id:'1071769691163-9qm1qs54a9vu2hst6muc7uinvvradtp0.apps.googleusercontent.com',
      callback:handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {
        theme:'outline',
        size:'large'
      }
    )
  },[])

  return (
    <div className="App">
      {/* <BlogComp/> */}
      <LoginForm/>
      {/* <div id="signInDiv"></div> */}
      <AdminRoute/>
      <Header/>
      <Helmet>
        <title>Turtl Cyber </title>
        <meta name='Cyber Security'  />
      </Helmet>
      <MainRoute/>
      <Footer/>
    </div>
  );
}

export default App;