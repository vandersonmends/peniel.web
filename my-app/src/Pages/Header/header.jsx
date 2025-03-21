import React from 'react'
import logoSvg from '../../assets/imagens/logo.svg'
import '../../assets/style/style-global.css'

function header() {
  return (
    <header className='container'>
      <div className='flex justify-center items-center'>
        <img src={logoSvg} alt="Logo da Igreja Peniel" className='p-10 m-10' />
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