type DessertCardProp = {
    name: String
}

const DessertCard = (props:DessertCardProp) => {
  return (
    <div>
        {props.name}
    </div>
 )
}

export default DessertCard