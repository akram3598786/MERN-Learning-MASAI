import { Link } from "react-router-dom";
import React from "react";
import styled from "@emotion/styled";
import { Spinner, Box, Badge} from '@chakra-ui/react';
import "./Style.css";
import { Icon } from '@chakra-ui/react'

import { useParams } from "react-router-dom";

export default function ProductDetails(){
     let {prodId} = useParams();
    
     const [loading, setloading] = React.useState(false);
     const [error, seterror] = React.useState(false);
     const [Product, setProdlist] = React.useState({});

     React.useEffect(() => {
        setloading(true);
        getData();
    }, []);

    const getData = () => {

        fetch(`http://localhost:5000/Products/${prodId}`)
            .then((res) => res.json())
            .then((res) => setProdlist(res))
            .catch((err) => seterror(true))
            .finally(() => setloading(false));
    }

   // console.log(Product)

    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of product',
        beds: 4,
        baths: 6,
        title: `Modern ${Product.name} in city center in the heart of historic Los Angeles`,
        formattedPrice: `$ ${Product.price}`,
        reviewCount: 34,
        rating: 4,
      }

        return (
            <div id="ProductList">
                <h1 className="bold" style={{ "fontSize": "30px" }}>Products List</h1>
                <hr />
                <br />
                {loading
                    ? <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl' />
                    : error ? (<h1 style={{ "color": "red", "textAlign": "center" }}>Error occured : Something went wrong</h1>)
                    :  Product.name === undefined ? (<h1 style={{ "color": "red", "textAlign": "center" }}>Product does not exist</h1>)
                    :<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <img className="ProdIMG" src={Product.picURL} alt={property.imageAlt} />
              
                    <Box p='6'>
                      <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                          New
                        </Badge>
                        <Box
                          color='gray.500'
                          fontWeight='semibold'
                          letterSpacing='wide'
                          fontSize='xs'
                          textTransform='uppercase'
                          ml='2'
                        >
                          {property.beds} colors &bull; {property.baths} sizes
                        </Box>
                      </Box>
              
                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                      >
                        {property.title}
                      </Box>
              
                      <Box>
                        {property.formattedPrice}
                        <Box as='span' color='gray.600' fontSize='sm'>
                          / wk
                        </Box>
                      </Box>
              
                      <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                          .fill('')
                          .map((_, i) => (
                            <Icon
                              key={i}
                              color={i < property.rating ? 'teal.500' : 'gray.300'}
                            />
                          ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                          {property.reviewCount} reviews
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                        
                }
            </div>
    );
}