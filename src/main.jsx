import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Message from './components/Message.jsx';



ReactDOM.render(<List />, document.getElementById('ingredients'));
// Message
ReactDOM.render(<Message title='This is a message from ES6' />,
                  document.getElementById('message'));
