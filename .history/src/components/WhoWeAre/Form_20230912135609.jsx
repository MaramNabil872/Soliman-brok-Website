
import React , { useState }from "react";

const Form = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const changeText = () => {
        
        setIsOpen(!isOpen);
    };

    return <div className="">
        
          {<div className="m-4">{props.n.title}  <buttonclassName="q-btn">
                        
                    </button> 
                    {isOpen && <div className="text">{props.n.text}</div>}  </div>  }
       
                  
    </div>
};

export default Form