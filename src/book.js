export class Book {
  constructor(id, title, author, img) {
    this.id = id
    this.title = title
    this.author = author
    this.img = img
  }
}

export const Abook = ({ id, title, author, img }) => {
  return (
    <article className="book">
      <img src={img} alt="img" />
      <h3>{title}</h3>
      <h3>{author}</h3>
      <p>{id}</p>
    </article>
  )
}
