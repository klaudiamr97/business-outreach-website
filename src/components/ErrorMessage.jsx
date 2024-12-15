import React from "react"

export function ErrorMessage(props){
    const {errorMessage} = props;

    return(
        <p className="text-h2 mx-4 mt-10 md:mt-16 items-center text-center">{errorMessage}</p>
    )
}