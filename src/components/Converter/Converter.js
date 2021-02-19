import React, { useState, useEffect } from 'react'
import classes from './Converter.module.css'

const show = (value, fromUnit, tounit) => {
        const result = (value*fromUnit) / tounit
        return +result.toFixed(2)
}

export const Converter = () => {
    const [value, setValue] = useState()
    const [answer, setAnswer] = useState(0)
    const [fromUnit, setFromUnit] = useState ()
    const [toUnit, setToUnit] = useState ()

    const units = [
        {name: 'grams', gram: 1},
        {name: 'spoon', gram: 20},
        {name: 'glass', gram: 200},
        {name: 'dessert spoon', gram: 10},
    ]

    useEffect(() => {
        let ans = show(value, fromUnit, toUnit)
        if (fromUnit && toUnit && value>0) {
            setAnswer(ans)
        }else {
            setAnswer('')
        }
        }, [value, fromUnit, toUnit, answer])

    return(
        <div className={classes.wrapper}>
            <h1 className={classes.header}>Converter</h1>
            <div className={classes.flex}>
                <input className={classes.field}
                    type="number"
                    onChange={e => setValue(e.target.value)}
                >
                </input>
                <select
                    className={classes.field}
                    onChange={e => setFromUnit(e.target.value)}>
                    <option>Choose unit</option>
                    {units.map((unit, i) => (
                        <option key = {i} value={unit.gram}>{unit.name}</option>
                    ))}
                </select>
                <select
                    className={classes.field}
                    onChange={e => setToUnit(e.target.value)}>
                    <option>Choose unit</option>
                    {units.map((unit, i) => (
                        <option key = {i} value={unit.gram}>{unit.name}</option>
                    ))}
                </select>
            </div>
            <p className={classes.result}>{answer}</p>
        </div>
        
    )
}