import React from 'react';
import { Link } from 'react-router-dom';

import Rating from './Rating';
import {
  Card,  CardText, CardBody,
  CardImg
} from 'reactstrap';



export default function Product(props){
    const {product}=props;
    return(
        <div key={product._id}>

          <Card style={{ width: '25rem' }}>
          <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
        </Link>
              <CardBody width="100%">
                      
                      
              <Link to={`/product/${product._id}`}>
                     <h2>{product.name}</h2>
                      
                      <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                      <CardText tag="h1">{product.price}</CardText>
                      </Link>
              </CardBody>
                   
          </Card>
          </div> 

    )
}

