
import './App.css';
import './assets/style/style-global.css';
import Header from './Pages/Header/header';
import Connection from './Pages/Connection/connection';
function App() {

  return (
    < >
      <div className='color-black-background '>
        <Header />
        <main>
          <Connection />
        </main>
 <footer className="bg-gray-800 text-white text-center p-4 mt-auto w-full">
      <p>&copy; 2025 Igreja Peniel. Todos os direitos reservados.</p>
    </footer>
      </div>
    </>
  )
}

export default App
