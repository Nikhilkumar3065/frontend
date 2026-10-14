import Card from './components/Card'
import shahi from './assets/shahi.avif'
import deepa from './assets/deepa.jpg'
import praka from './assets/praka.jpg'
import './App.css'

function App() {

  return (
    <div className='card-container'>
      <i class="fa-solid fa-chevron-left arrowz"></i>
    <Card name = "Prem Shahi" role = "Web Developer" src = {shahi}/>
    <Card name = "Deepa Chand" role = "App Developer" src = {deepa}/>
    <Card name = "Praka Shahi" role = "Web Developer" src = {praka}/>
    <i class="fa-solid fa-angle-right arrowz"></i>
    </div>
  )
}

export default App
