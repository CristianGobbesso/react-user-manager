import React from 'react'

export const getUsers= async () => {
    const response = await fetch( "https://jsonplaceholder.typicode.com/users");

    if(!response.ok){
        throw new Error("No se encontraron los usuarios");
    }

  return response.json()

}
