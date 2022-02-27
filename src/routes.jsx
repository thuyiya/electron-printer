const Link = ReactRouterDOM.Link,
  Route = ReactRouterDOM.Route,
  Switch = ReactRouterDOM.Switch;

const home = props => <Home />
//const component = props => <component />

const Main = props => (
  <ReactRouterDOM.HashRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={home} />
    </Switch>
  </ReactRouterDOM.HashRouter>
)

document.addEventListener("DOMContentLoaded", Main)
ReactDOM.render(<Main/>, document.querySelector("#root"))