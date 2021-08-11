import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import DetailView from './components/ItemDetail/DetailView';
import {TemplateProvider} from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import {Box} from '@material-ui/core';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop:54}}>
            <Switch>  
              <Route exact path='/' component={Home} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/products/:id' component={DetailView} />
            </Switch>
          </Box>          
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>  
  );
}

export default App;
