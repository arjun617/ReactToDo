import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import { React, Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setActiveTasksPage: true,
    };
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  setCurrentPage(page){
    if(page === "active"){
      this.setState({
        setActiveTasksPage: true,
      });
    }
    if(page === "completed"){
      this.setState({
        setActiveTasksPage: false,
      });
    }
  }


  render() {
    return (
      <div className="App">
        <Header
        clickHandler = {this.setCurrentPage}
        ></Header>
        <MainContent
          setActiveTasksPage={this.state.setActiveTasksPage}
        ></MainContent>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
