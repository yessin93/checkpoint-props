import React from 'react'
import propTypes from 'prop-types'


function Myprofile({fn , b , pro , hand ,children} ) {
  return (
    <div>
      <h1> {fn} </h1>
      <h2> {b} </h2>
      <h3> {pro} </h3>
      {children}
     <button onClick={() => hand(fn)}>Click Here</button>   
    </div>
  )
  };


  Myprofile.defaultProps = {fn :'myname'}
  Myprofile.propTypes={
    fn : propTypes.string
  };
  
  








export default Myprofile