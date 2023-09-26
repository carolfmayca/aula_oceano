import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: 'Stefan Salvatore',
    imagemUrl: 'https://static1.purebreak.com.br/articles/7/84/18/7/@/313657-stefan-salvatore-de-the-vampire-diarie-700x700-3.jpg'
  }
  return (
    <>
      <Card item={item1} />
    </>
  )
}

export default App
