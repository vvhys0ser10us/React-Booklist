import ReactDom from 'react-dom'
import list from './data'
import { Abook } from './book'
import './style.css'

function Booklist() {
  return (
    <section className="booklist">
      {list.map((item) => {
        return <Abook key={item.id} {...item}></Abook>
      })}
    </section>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
