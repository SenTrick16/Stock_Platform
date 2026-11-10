import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Apps from './App';
import Funds from './Funds';
import Holdings from './Holdings';

import Orders from './Orders';
import Positions from './Positions';
import Summary from './Summary';
import { GeneralContextProvider } from './GeneralContext';
import WatchList from './WatchList';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <GeneralContextProvider>
                <WatchList />
            </GeneralContextProvider>
            <div className='content'>
                <Routes>
                    <Route exact path="/" element={<Summary />} />
                    <Route exact path="/apps" element={<Apps />} />
                    <Route exact path="/funds" element={<Funds />} />
                    <Route exact path="/holdings" element={<Holdings />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route exact path="/positions" element={<Positions />} />
                    
                </Routes>

            </div>
        </div>
    );
};

export default Dashboard;