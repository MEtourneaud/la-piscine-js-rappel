import "./Articles.scss"

function Articles() {
  const articles = [
    {
      title: "Article 1",
      price: 10,
      isPublished: true,
    },

    {
      title: "Article 2",
      price: 20,
      isPublished: false,
    },

    {
      title: "Article 3",
      price: 30,
      isPublished: true,
    },

    {
      title: "Article 4",
      price: 40,
      isPublished: false,
    },

    {
      title: "Article 5",
      price: 50,
      isPublished: true,
    },

    {
      title: "Article 6",
      price: 60,
      isPublished: false,
    },

    {
      title: "Article 7",
      price: 70,
      isPublished: true,
    },

    {
      title: "Article 8",
      price: 80,
      isPublished: false,
    },

    {
      title: "Article 9",
      price: 90,
      isPublished: true,
    },

    {
      title: "Article 10",
      price: 100,
      isPublished: false,
    },
  ]

  const publishedArticle = articles.filter((article) => {
    return article.isPublished === true
  })
  const lastPublishedArticle = publishedArticle.slice(-3)

  return (
    <div>
      {lastPublishedArticle.map((article) => {
        return (
          <article className="article">
            <h3>{article.title}</h3>
            <p>{article.price} €</p>
          </article>
        )
      })}
    </div>
  )
}

export default Articles
