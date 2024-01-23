
import React , { useState }from "react";

const Form = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const changeText = () => {
        
        setIsOpen(!isOpen);
    };

    return <div className="form text-start">
        
          {<div className="title">{props.n.title}  <button onClick={changeText} className="q-btn">
                        
                    </button> 
                    {isOpen && <div className="text">{props.n.text}</div>}  </div>  }
       
                  
    </div>
};

export default Form