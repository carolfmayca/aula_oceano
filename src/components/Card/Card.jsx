import "./Card.css"

export default function Card() {
    return <div className="card">
    <h2>Stefan Salvatore</h2>

    <div className="tags">
      <div className="tag">Status: Vivo</div>
      <div className="tag">Espécie: Vampiro</div>
      <div className="tag">Nascimento: 01/11/1846</div>
    </div>

    <img src="https://static1.purebreak.com.br/articles/7/84/18/7/@/313657-stefan-salvatore-de-the-vampire-diarie-700x700-3.jpg"/>
  </div>
}