
let React = require('react')
let IconBase = require('react-icon-base')

export default class FaGithub extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" height="24px" width="24px" {...this.props}>
                <path  d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"/>
            </IconBase>
        )
    }
}