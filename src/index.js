import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import DocumentImp from './DocumentImp';
import FormC from './FormC';
import UseRefEx from './UseRefEx';
import WrapperOne from './WrapperOne';

import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container } from 'reactstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <FormC />
    <>
        <WrapperOne>
            <div name={'naman'}>AbCD</div>
            <div name={'jindal'}>defg</div>
        </WrapperOne>
    </>
);
