// Code EyesOnMe Component Here
import React from 'react'

const EyesOnMe = () => {
  return (
    <div>
        <form>
            <button type='submit' onBlur={event => console.log('Hey! Eyes on me!')}  onFocus={event => console.log('Good!')}> Eyes on me</button>
        </form>
    </div>
  )
}

export default EyesOnMe