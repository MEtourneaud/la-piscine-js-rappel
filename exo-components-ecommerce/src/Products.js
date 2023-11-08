function Products() {
  const productsFormDb = [
    "Billard Américain",
    "Sèche-linge",
    "Trotinette Electrique",
  ]

  return (
    <div>
      {productsFormDb.map((product) => {
        return (
          <article>
            <h2>{product}</h2>
          </article>
        )
      })}
    </div>
  )
}

export default Products

// <article>
//     <h3>Billard Américain</h3>
//     <p>800€</p>
//   </article>

//   <article>
//     <h3>Sèche-linge</h3>
//     <p>300€</p>
//   </article>

//   <article>
//     <h3>Trotinette Electrique</h3>
//     <p>500€</p>
//   </article>
