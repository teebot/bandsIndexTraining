import {
    Route,
    Link,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import * as React from "react";
import {BandsContainer} from "./containers/Bands.container";
import {BandContainer} from "./containers/Band.container";

export class AppContainer extends React.Component {

    render(): JSX.Element {
        return (
            <Router>
                <div>
                    <div className="nav">
                        <Link to="/"><h1>Bands</h1></Link>
                    </div>
                    <div className="stage">
                        <Switch>
                            <Route exact path="/" component={BandsContainer}/>
                            <Route path="/:id" component={BandContainer}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}