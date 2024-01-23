
import React , { useState }from "react";

const Form = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const changeText = () => {
        
        setIsOpen(!isOpen);
    };

    return <div className="">
        
          {<div className="m-4"  onClick={changeText} >{props.n.title}  
                        
                  
                    {isOpen && <div className="text">{props.n.text}</div>}  </div>  }
       
                  
    </div>
};

export default Form