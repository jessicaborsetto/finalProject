import React, { useEffect } from "react";

function ErrorPage(){

    useEffect(() => {
        // Aggiungi una classe a #root quando il componente viene montato
        document.getElementById("root").classList.add("errorPage");
    
        // Cleanup: Rimuovi la classe quando il componente viene smontato
        return () => {
          document.getElementById("root").classList.remove("errorPage");
        };
      }, []);

    return(
        <h1 className="error">Ops..c'è stato un errore &#128534;</h1>
    )
}
export default ErrorPage