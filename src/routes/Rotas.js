import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import Quiz from "../pages/Quiz/Quiz"
import Portfolio from "../pages/Portfolio/Portfolio"
import Contato from "../pages/Contato/Contato"

function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/quiz" component={Quiz}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contato" component={Contato}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;
