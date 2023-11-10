import Header from "../component/header/Header"
import Footer from "../component/footer/Footer"

import "../component/Poney.scss"

function Poney() {
  const poneys = [
    {
      id: 1,
      name: "Poney 1",
      color: "red",
      age: 2,
      isMagic: true,
      img: "https://i.pinimg.com/736x/57/48/2e/57482e2dd1ffa6ba82a185183366bf43.jpg"
    },
    {
      id: 2,
      name: "Poney 2",
      color: "blue",
      age: 3,
      isMagic: false,
      img: "https://buzzsharer.com/wp-content/uploads/2015/07/funny-horse-face.jpg"
    }, 
    {
      id: 3,
      name: "Poney 3",
      color: "green",
      age: 4,
      isMagic: true,
      img: "https://m.media-amazon.com/images/I/51NAWZRdzTL.jpg"
    },
    {
      id: 4,
      name: "Poney 4",
      color: "yellow",
      age: 5,
      isMagic: false,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66edYn0t-SwbtksRrB_MChwARsXxz5ulvaCzIwROPpOzy-y9ah7ouu0mh5vdiPWQ1SSU&usqp=CAU"
    },
    {
      id: 5,
      name: "Poney 5",
      color: "purple",
      age: 6,
      isMagic: true,
      img: "https://img.huffingtonpost.com/asset/5d0295f02500004e12e60129.jpeg?ops=scalefit_720_noupscale"
    },
    {
      id: 6,
      name: "Poney 6",
      color: "pink",
      age: 7,
      isMagic: false,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66edYn0t-SwbtksRrB_MChwARsXxz5ulvaCzIwROPpOzy-y9ah7ouu0mh5vdiPWQ1SSU&usqp=CAU"
    },
    {
      id: 7,
      name: "Poney 7",
      color: "black",
      age: 8,
      isMagic: true,
      img: "https://as1.ftcdn.net/v2/jpg/01/19/70/48/1000_F_119704819_jVvPzEueauhHgkPZMAGxJh7UiU00vOAU.jpg"
    },
    {
      id: 8,
      name: "Poney 8",
      color: "white",
      age: 9,
      isMagic: false,
      img: "https://thumbs.dreamstime.com/z/funny-pony-portrait-white-30904552.jpg"
    },
    {
      id: 9,
      name: "Poney 9",
      color: "brown",
      age: 10,
      isMagic: true,
      img: "https://i.pinimg.com/736x/b3/76/a1/b376a182feef3efca406cd8369682b37.jpg"
    },
    {
      id: 10,
      name: "Poney 10",
      color: "grey",
      age: 11,
      isMagic: false,
      img: "https://cdn11.bigcommerce.com/s-o3ewkiqyx3/images/stencil/1280x1280/products/4590/9578/cd15895-cowboy-cat-riding-small-white-pony-funny-birthday-card__05283.1656352980.jpg?c=1"
    },
  ];
      
    return(
        <div className="poney">
        <Header />
            <h1>Mes Petits Poneys</h1>
            <div className="ponies-container">
                {poneys.map((poney) => {
                    return(
                        <article className="pony-container">
                            <img className="pony" src={poney.img} alt=""></img>
                            <p>{poney.name}</p>
                        </article>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Poney