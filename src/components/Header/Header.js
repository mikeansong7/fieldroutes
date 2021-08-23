import React from "react";
import logo from "../../assets/images/lobstermarketing.png"

function Header(){


    return(
        <div>
            <h2 className="logo"><img src={logo} alt= ''/> </h2>
            <div>
                <h2 className= "sublogo">LOBSTER MARKETING DEV TEST</h2>
                <div>
                    <h2 className= "lobbody">LOBSTER MARKETING 101</h2>
                    <body className= "lobbody">Lobster Marketing is the premier marketing agency focused exclusively on serving the needs of pest control companies. 
                    </body>  
                </div>
            </div>
        </div>
        )}
export default Header