import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import MyAnime from './containers/MyAnimeContainer'
import AnimeCalendarContainer from "./containers/AnimeCalendarContainer";
import AnimeShow from "./components/AnimeShow";
import MyAnimeShow from "./components/MyAnimeShow"
import LogIn from "./containers/LogIn";
import SignUp from "./containers/LogIn";
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    fetch("")
  }

  handleLogIn(data) {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogOut() {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  render() {
    const { store } = this.props

    return (
    <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            {/* <Route exact path="/calendar" component={AnimeCalendarContainer} /> */}
            <Route exact path="/myanime" component={MyAnime} />
            <Route exact path="/myanime/:id" component={MyAnimeShow} />
            <Route exact path="/anime/:mal_id" component={AnimeShow} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}


export default App;