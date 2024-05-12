import React from 'react'

const Input = ({ label, name, register, required, defaultValue }) => {
    return (
        <>
            <label >{label}</label>
            <br/>
            <input defaultValue={defaultValue} {...register(name, { required })} />
            <br/>
        </>
    )
}

export default Input