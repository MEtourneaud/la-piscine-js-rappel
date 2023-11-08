function Products() {
  const productsFormDb = [
    {
      title: "Billard Américain",
      price: 800,
      isPublished: true,
    },
    {
      title: "Sèche-linge",
      price: 300,
      isPublished: false,
    },
    {
      title: "Trotinette Electrique",
      price: 500,
      isPublished: true,
    },
  ]

  return (
    <div>
      {productsFormDb.map((product) => {
        return (
          <>
            {product.isPublished && (
              <article>
                <h2>{product.title}</h2>
                <p>{product.price} €</p>
              </article>
            )}
          </>
        )
      })}
    </div>
  )
}

export default Products
