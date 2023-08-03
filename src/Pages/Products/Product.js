import Card from 'react-bootstrap/Card';

const Product = ({product, id}) => {
    let description = product.description.slice(0,20);

    const addTocart = () => {
        console.log("Add to cart")
    }

    return (
        <>
            <div className="col">
                <Card className ="product-card" style={{ width: '18rem'}} key={id}>
                <Card.Img variant="top" className="product-image" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text limit={10}>
                        {description}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="cursor-pointer text-center" onClick={addTocart}>
                  <span>Add to cart</span>
                </Card.Footer>
                </Card>
            </div>
        </>
    )
}

export default Product;
