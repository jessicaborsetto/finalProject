import React, { useEffect } from "react";

const ErrorPage = () => {

    useEffect(() => {
        // Aggiungi una classe a #root quando il componente viene montato
        document.getElementById("root").classList.add("errorPage");
    
        // Rimuovi la classe quando il componente viene smontato --> quindi quando esco dalla pagina di errore
        return () => {
          document.getElementById("root").classList.remove("errorPage");
        };
      }, []);

    return(
        <h1 className="error">Ops..c'è stato un errore &#128534;</h1>
    )
}
export default ErrorPage