import React from 'react'

export function obtenerProductos() {

    return new Promise((resolve,reject) => {

          setTimeout(() => {

            resolve(["producto1", "producto2", "producto3", "producto4", "producto5"])

          }, 3000)
       })
 }