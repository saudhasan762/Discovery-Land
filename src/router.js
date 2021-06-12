import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Dashboard from './Pages/dashboard'
import AboutDLC from './Pages/AboutDLC'

 const Routing = () => {
    return(
        <BrowserRouter>
        <div>
            <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route exact path='/AboutDLC' component={AboutDLC}></Route>
            </Switch>
        </div>
        </BrowserRouter>
    )
}
export default Routing