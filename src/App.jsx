import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'routes';

import useScrollToTop from './hooks/useScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Price from './pages/Price';
import Barber from './pages/Barber';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
import Social from './components/Social';
import Header from './components/Header';
import Footer from './components/Footer';
import BackTop from './components/BackTop';

import './styles/global.scss';

const App = () => {
  useScrollToTop();

  return (
    <div style={{ maxWidth: 1366, margin: '0 auto' }}>
      <Social />
      <Header />
      <main>
        <Switch>
          <Route path={routes.HOME} exact component={Home} />
          <Route path={routes.ABOUT} component={About} />
          <Route path={routes.SERVICE} component={Service} />
          <Route path={routes.PRICE} component={Price} />
          <Route path={routes.BARBER} component={Barber} />
          <Route path={routes.GALLERY} component={Gallery} />
          <Route path={routes.CONTACT} component={Contact} />
          <Route component={Page404} />
        </Switch>
      </main>
      <Footer />
      <BackTop />
    </div>
  );
};

export default App;
