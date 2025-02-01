import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apiKey = "fc221be7bb90423dbb2d260c55cee97d";
  const [progress, setProgress] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NavBar />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />
        </div>
      ),
    },
    {
      path: "/business",
      element: (
        <div>
          <NavBar />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />
        </div>
      ),
    },
    {
      path: "/entertainment",
      element: (
        <div>
          <NavBar />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />
        </div>
      ),
    },
    {
      path: "/general",
      element: (
        <div>
          <NavBar />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />
        </div>
      ),
    },
    {
      path: "/health",
      element: (
        <div>
          <NavBar />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />
        </div>
      ),
    },
    {
      path: "/science",
      element: (
        <div>
          <NavBar />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />
        </div>
      ),
    },
    {
      path: "/sports",
      element: (
        <div>
          <NavBar />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />
        </div>
      ),
    },
    {
      path: "/technology",
      element: (
        <div>
          <NavBar />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;