import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../pages/index/Index';
import CharacterPage from '../pages/characterpage/Character';

export default function Routes(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/character/:id" component={CharacterPage} />
            <Route exact path="*" component={Index} />
        </Switch>
    );
}
