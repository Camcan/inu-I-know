import React from 'react'
import Styles from './css/human.css'


export default React.createClass({
    render: function() {
        return ( 
        	<div>
        	<img className={Styles.logo} src={"./img/montagnes.svg"}/>
            <h1>Cam, a human</h1> 
            </div>
        )
    }
})