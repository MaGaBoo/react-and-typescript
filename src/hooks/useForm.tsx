import  { ChangeEvent, useState } from 'react'
// Este custom hook se puede reutilizar para cualquier formulario en la app
// Puedes añadir otros tipos así: < T extends Object | T extends Array>
export const useForm = <T extends Object>(initState: T) => {

    const [formulario, setFormulario] = useState(initState)

    // ChangeEvent hay que importarlo de React y especificar qué tipo de dato es
    const handleChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target
        setFormulario({
            ...formulario,
            [name]: value
        })
    }
    return {
        formulario,
        handleChange
    }
}