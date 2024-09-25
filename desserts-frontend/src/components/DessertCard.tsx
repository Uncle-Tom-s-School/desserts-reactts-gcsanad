import AddToCardBtn from "./AddToCardBtn"

export type DessertCardProp = {
    name: String,
    category: String,
    price: number,
    image:{
      thumbnail: string,
      mobile: string,
      tablet: string,
      desktop: string,
    }
}

const DessertCard = (props:DessertCardProp) => {
  return (
    <div className="dessert-card">
        <img src={props.image.desktop} />
        <AddToCardBtn/>
        <h4>{props.category}</h4>
        <h2>{props.name}</h2>
        <h3>${props.price}</h3>
    </div>
 )
}

export default DessertCard