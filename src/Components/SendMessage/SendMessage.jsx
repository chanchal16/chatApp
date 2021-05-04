import React,{useEffect, useState} from 'react'

import Messages from '../Messages';

export default function SendMessage() {
    const [input,setInput] = useState('');
    const [messages,setMessagaes] = useState([]);
    const [username,setUsername] = useState('');
    console.log(messages);

    /*useEffect(() => {
        setUsername(prompt('enter ur name'))
    }, [])*/

    const sendMsg = (e)=>{
        e.preventDefault();
        setMessagaes([...messages,input]);
        setInput('');
    }
    return (
        <div>
            <form>
                <input value={input} onChange={e=>{setInput(e.target.value)}}></input>
                <button type='submit' disabled={!input} onClick={sendMsg}>send</button>
            </form>

            {
                messages.map(msg=>{
                    <Messages  msg={msg} />
                    
                })
            }
        </div>
    )
}
