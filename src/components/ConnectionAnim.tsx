import React from "react";
import anim1 from "../assets/anim1.mp4"
import anim2 from "../assets/anim2.mp4"

interface ConnectionAnimProps {
    connType: string;
  }
  
  // Correct way to destructure `connType` from props with type definition
  export default function ConnectionAnim({ connType }: ConnectionAnimProps) {
    return (
        <>
            {connType === 'stateful' ? (
            <>
                    <video autoPlay loop muted>
                        <source src={anim1} type="video/mp4" />
                    </video>
                </>
                ) : (
                <>
                <video autoPlay loop muted>
                    <source src={anim2} type="video/mp4" />
                </video>
            </>
        )}
        </>
    );
  };