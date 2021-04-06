import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={Home} />
                { /* <Route component={NotFound} /> */ }
            </Switch>
        </ChakraProvider>
    );
}

export default App;
