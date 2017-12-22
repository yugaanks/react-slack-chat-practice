import "babel-polyfill";
import React, { Component } from 'react';
import { ReactSlackChat } from 'react-slack-chat';

import logo from './logo.svg';
import './App.css';
import World from './components/world'
class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <World/>
            </div>
            <div className="App-body">
                <ReactSlackChat
                    botName='Demon'
                    apiToken='eG94Yi0yOTA0MDkwMTI4NjgtU29ROGVXb2tvTXM4RWVVMEJYT2FPT3lQ'
                    channels={[
                        {
                            name: 'random'
                        },
                        {
                            name: 'test',
                            id: '',
                            icon: ''
                        }
                    ]}
                    helpText='Optional Help Text'
                    themeColor='#856090'
                    userImage='http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg'
                    debugMode={true}
                    hooks={[
                        {
                            // My custom Hook
                            id: 'getSystemInfo',
                            actions: ()=> 'My System Info'
                        }
                    ]}
                />
            </div>
        </div>
    );
  }
}

export default App;
