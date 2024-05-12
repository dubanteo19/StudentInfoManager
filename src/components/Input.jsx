import React from 'react'

const Input = ({ label, name, register, required, defaultValue }) => {
    return (
        <>
            <strong><label >{label}</label></strong>
            <br/>
            <input style={{padding:5}} defaultValue={defaultValue} {...register(name, { required })} />
            <br/>
        </>
    )
}

export default Input