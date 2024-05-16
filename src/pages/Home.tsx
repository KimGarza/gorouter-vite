import './Home.css'
import router from '../assets/router.png'
import { useEffect, useState } from 'react';

import { GoArrowUp } from "react-icons/go";
import GetProtocol from '../components/GetProtocol';
import { Protocol } from '../types/protocol.types';
import ConnectionAnim from '../components/ConnectionAnim';

function Home() {
  const [protocolInput, setProtocolInput] = useState<string>(''); // user input (the entered protocol by port or name)
  const [protocol, setProtocol] = useState<Protocol>(); // upon GET protocol request, result is returned and set here
  const [connType, setConnType] = useState<string>('');
  const [multipleConnTypes, setMultipleConnTypes] = useState<boolean>(false);


  useEffect(() => {
    console.log("connType:", connType);
  }, [connType])

  
// invokes GetProtocol using user input of port or name
// checks connection type and updates useState values
  async function handleGetProtocol() {
    
    const result = await GetProtocol(protocolInput);

    if (result) {
      setProtocol(result)
      
      if (result.connectionType.length === 1) {
        setConnType(result.connectionType[0])
      } else {
        setMultipleConnTypes(true);
      }

    } else {
      console.log("error first second layer")
    }
  }


  // checks if user pressed enter after entering protocol value
  const handleKeyDownProtocol = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {

    if (event.key === 'Enter') {
      event.preventDefault();  // Prevent default to stop adding a new line in the textarea
      handleGetProtocol();
      console.log(protocol)
    }
  };


  return (
    <>
    <p className='title'>GOROUTER.IO</p>

    <div className="container">

      <div className="item">
        <img className="router" src={router} alt="router"/>
      

        {connType ? (
                <>
                  <ConnectionAnim connType={connType} />
                </>
              ) : <></>}

      </div>

      <div className="item">
        <p>ITEM</p>
      </div>

      <div className="item">

          <div className="protocol">
            <div className="protocol-title">Analyze by Protocol:</div>
            <div className="protocol-input-container">
              <textarea className="protocol-textarea" placeholder="Protocol" maxLength={20} 
              onChange={event => setProtocolInput(event.target.value)}
              onKeyDown={handleKeyDownProtocol}
              />
              <button className="protocol-submit"
              onClick={handleGetProtocol}><GoArrowUp /></button>
            </div>

            

            <div className="protocol-connection">
              {multipleConnTypes && connType == '' ? ( // if active protocol has possibility of either state, user picks which they would like to set
                <>
                <div className='protocol-connection-multiple'>
                  <div>Multiple Connection Options:</div>
                  <div className="protocol-connection-buttons">
                    <button onClick={() => setConnType("stateful")}>Stateful</button>
                    <button onClick={() => setConnType("stateless")}>Stateless</button>
                  </div>
                </div>
                </>
              ) : connType ? (

                <>
                <div className='protocol-connection-single'>
                  <div>Connection Type:</div>
                  <div>{`${connType}`}</div>
                </div>
                </>
                
            ) : <></>}
            </div>
            
          </div>

        <p>ITEM</p>
      </div>

    </div>
    </>
  )
}

export default Home;
