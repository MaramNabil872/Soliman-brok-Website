import React from 'react'
import React , { useState }from "react";

const Form = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const changeText = () => {
        
        setIsOpen(!isOpen);
    };

    return <div className="form">
        
          {<div className="title">{props.n.title}  <button onClick={changeText} className="q-btn">{isOpen? '-':'+'}
                        
                    </button> 
                    {isOpen && <div className="text">{props.n.text}</div>}  </div>  }
       
                  
    </div>
};

export default Form