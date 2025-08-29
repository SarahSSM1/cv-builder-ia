import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FormSection from './components/Layout/FormSection';
import PreviewSection from './components/Layout/PreviewSection';
import CVPreview from './components/Preview/CVPreview';
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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