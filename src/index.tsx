import React from 'react';
import ReactDom from 'react-dom'

import { App}  from './app'

window.React = React

ReactDom.render(<App />, document.getElementById('root'))