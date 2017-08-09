import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import Styles from '../css/timeline.css'
import DB from '../../db.json'

import Timeline from './timeline.jsx'

export default React.createClass({
   render:function(){
      return(
         <div className={Styles.container}>
            <Timeline />
         </div>
      )
   }
})
