import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormSection from './components/Layout/FormSection';
import PreviewSection from './components/Layout/PreviewSection';
import CVPreview from './components/Preview/CVPreview';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <FormSection />
                        <PreviewSection />
                    </Route>
                    <Route path="/preview" component={CVPreview} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;