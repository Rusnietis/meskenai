import { createContext, useState } from 'react';

export const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {

   const [messages, setMessages] = useState([
        { text: 'Welcome to the Library', type: 'primary' },
        { text: 'You are good boy/girl', type: 'success'}
   ]);

    return (
        <MessagesContext.Provider value={{
            messages, setMessages
        }}>
            <>
            <div className="messages">
                {
                    messages.map((message, i) => (
                        <div key={i} className={`alert alert-${message.type}`} role="alert">
                           {message.text}
                        </div>
                    ))
                }
            </div>
            {children}
            </>
            
        </MessagesContext.Provider>
    );
}