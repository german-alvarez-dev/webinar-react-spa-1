import React from 'react'

/* --- STYLING --- */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

/* --- UI COMPONENTS --- */
import NavBar from './components/ui/navbar/Navbar'

/* --- PAGE COMPONENTS --- */
import IndexPage from './components/pages/index/IndexPage'
import FoodsPage from './components/pages/foods-index/FoodsIndex'

/* --- RRD COMPONENTS --- */
import { Switch, Route } from 'react-router-dom'



const App = () => {

    return (
        <>
            <NavBar />

            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/alimentos" exact component={FoodsPage} />
            </Switch>

        </>
    )
}

export default App