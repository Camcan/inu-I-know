import React from 'react';
import Styles from '../css/footer.css';

export default React.createClass({
    render: function() {
        return ( 
        	<div className={[
                    Styles.footer, 
                    "highlight"
            ].join(" ")}>
                <div className={Styles.left}>
                    <a href="mailto:campbell.hawkes@gmail.com">mr.campbell.hawkes@gmail.com</a>
                </div>
                <div className={Styles.right}>
                    <a href="https://github.com/camcan">camcan</a>
                </div>
        	</div>
        )
    }
})
