import "./App.css";
// import Contact from "./components/Contact";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        {/* <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact
          name="Karen Smith"
          email="karenith@gmail.com"
          phone="555-333-5555"
        /> */}
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
