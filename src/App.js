import React, { Component, useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store/index";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Piano from "./pages/Piano";
import Lessons from "./pages/Lessons";
import PrivateRoute from './privateRoute';
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}


const App = () => {
  // const [lesson, setLesson] = useState(0);

  // const onChangeLessonHandler = (lesson) => {
  //   setLesson(lesson);
  // }

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* <Route exact path='/' element={<PrivateRoute/>}> */}
            <Route exact path='/' element={<Lessons/>} />
            {/* </Route> */}
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}




// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//           <div className="App">
//             <BrowserRouter>
//               <Routes>
//                 {/* <Route exact path='/' element={<PrivateRoute/>}> */}
//                   <Route exact path='/' element={<Piano/>}/>
//                 {/* </Route> */}
//                 <Route exact path='/register' element={<Register/>}/>
//                 <Route exact path='/login' element={<LoginPage/>}/>
//               </Routes>
//             </BrowserRouter>
//           </div>
//       </Provider>
//     );
//   }
// }
export default App;
