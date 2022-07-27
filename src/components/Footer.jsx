import React from "react";

function Footer () {
    return (
        // displays copyright with dynamically updated year
        <footer> 
            <p>Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;