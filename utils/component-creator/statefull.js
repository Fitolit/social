const fs = require('fs');
const path = require('path');

module.exports = componentName => {
    const content = `
    
    import React, { Component } from 'react'; //{Component}-для создания реактивного компонента
    import './style.scss'
    import Message from '@components/Message'


export default class MessageList extends Component {

    state = {
        
    };

    render() { 
            return  <div className="${componentName.toLowerCase}">
              
            </div>;
    }
}
    
                    `;

    fs.writeFileSync(
        path.resolve(__dirname, '..', '..', 'src', 'components', componentName, `${componentName}.jsx`),
        content
    );
};