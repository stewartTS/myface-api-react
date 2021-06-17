import logo from './logo.svg';
import './App.scss';
import { PostList } from './components/postList';
import { UserPage } from './components/user_page';
import { UserList } from './components/user_list';
import { NavBar } from './components/Nav_bar';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/posts">
            <PostList />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route path="/users/:id">
            <UserPage />
          </Route>
          <Route path="">
            <div>Sorry - that page doesn't exist, try these:</div>
            <Link to="/posts">Posts</Link>
            <Link to="/users">Users</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
