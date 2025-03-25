import React from 'react'
import logoSvg from '../../assets/imagens/logo.svg'
import '../../assets/style/style-global.css'
import './header.css'
function header() {
  return (
    <header className='container'>
      <div className='flex justify-center py-4'>
        <img src={logoSvg} alt="Logo da Igreja Peniel" className='width-40' />
      </div>
      {/* <div>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div> */}
    </header>
  )
}

export default header