import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import HttpRequests from "./components/test/HttpRequests"
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Routes>
              <Route exact path="/" Component={Contacts} />
              <Route exact path="/contact/add" Component={AddContact} />
              <Route exact path="/about/:id" element={<About />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/test" Component={HttpRequests} />
              <Route path="*" Component={NotFound}/>
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
