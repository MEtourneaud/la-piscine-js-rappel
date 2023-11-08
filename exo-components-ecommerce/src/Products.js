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
          <article>
            {product.isPublished ? (
              <>
                <h2>{product.title}</h2>
                <p>{product.price} €</p>
              </>
            ) : (
              <>
                <h2>Produit non-dispoible</h2>
              </>
            )}
          </article>
        )
      })}
    </div>
  )
}

export default Products
