import React from 'react'
import FooterStyle from './Footer.module.css'

 const Footer = () => {
    return (
        <footer>
        <div className={['container', FooterStyle.container].join(' ')}>
          <div>
            Copyright &copy;2020.
          </div>
          <div className="textRight">
            Built with <span className="red">&hearts;</span> by
            <a
              href="https://reactjs.org/docs/create-a-new-react-app.html"
              target="_blank" rel="noreferrer"
              >Create React App</a
            >
          </div>
        </div>
      </footer>
    )
}

export default Footer
