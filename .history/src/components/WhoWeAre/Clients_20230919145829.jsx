import React, { useState } from "react";
import "./WhoWeAre.css";
const WhoWeAre = () => {
    const about = [
        {
            title: "Who We Are",
            text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
        },
        {
            title: "What We Present",
            text: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
        },
        {
            title: "What Is Special For Medical Clients",
            text: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
        },
    ];
    const [active, setActive] = useState(0);
    function handleActiveClick(index) {
        setActive(index);
    }
    return (
        <div>
           {" "}
            <div className="m-4" id="contain">
                
                <h2 className="m-4 lightBlue text-center">Why Soliman Brok?</h2>
                <div className="d-flex ">
                    <h6 className="text-left m-4">
              
                        {about.map((n, indx) => (
                            <div
                                className="text-left m-4 grey "
                                id="title2"
                                onClick={() => handleActiveClick(indx)}
                            >
                                {n.title}{" "}
                            </div>
                        ))}
                  
                    </h6>
                    <div className="m-4 grey  w-50 pt-4" id="text">{about[active].text}</div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
