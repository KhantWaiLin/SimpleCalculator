import React from 'react'
import {ACTIONS} from '../App'

const DIgitButton = ({digit,dispatch}) => {
  return (
    <button onClick={()=>{
        dispatch({type: ACTIONS.ADD_DIGIT,payload: {digit} })
    }}>{digit}</button>
  )
}

export default DIgitButton;