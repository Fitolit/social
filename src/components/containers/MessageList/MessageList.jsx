import React, { Component } from 'react'; //{Component}-для создания реактивного компонента
import './style.scss'
import Message from '@components/Message'

export default class MessageList extends Component {

    state = {
        messages: [
            { name: 'Roboto', text: 'Hello!' },
            { name: 'Roboto', text: 'How are you?' }
        ]
    };

    sendMessage = () => { 
        let textMessage = document.querySelector('.message-area').value;
        this.setState( 
            {
                messages: [...this.state.messages, { name: 'Fill', text: textMessage }]
            }
        )
    }

    handleChange = (event) => { 
        console.log(event.target.value)
    }

    handleOnKeyUp = (event) => {
        if (event.keyCode === 13) {
            let message = event.target.value;
            this.setState(
                {
                    messages: [...this.state.messages, { name: 'Fill', text: message }]
                }
            );
            event.target.value = '';
        }
    }

    componentDidUpdate() { // логика бота
        if (this.state.messages[this.state.messages.length - 1].name === 'Fill') {
            setTimeout(() =>
                this.setState(
                    { messages: [...this.state.messages, { name: 'Roboto', text: 'Не приставай ко мне. Я робот!!!' }] }
                ), 1000)
        }
    }

    render() { 

        const Messages = this.state.messages.map( 
            (element, i) => <Message
                                key={i}
                                name={element.name}
                                text={element.text}
                            />)

        return <div className="message-list">
            {Messages}
            <button onClick={this.sendMessage}>add</button>
            <input onKeyUp={this.handleOnKeyUp} className="message-area" type="text" />
               </div>
    }
}