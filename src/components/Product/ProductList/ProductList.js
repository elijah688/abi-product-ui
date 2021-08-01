import { IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import React, { useEffect, useState, useCallback} from "react";
import ProductItem from "./ProductItem";
import { getCharacters } from "../../../api/api";

const ProductList = () => {
  const [characters, setCharacters] = useState([])
  const [url, setUrl] = useState(null);
  const [tmp, setTmp]  = useState(null);
  const [count, setCount] = useState(0);

  const infiniteLoad = (event) => {
    setUrl(tmp);
    event.target.complete();
  } 

  useEffect(() => {
    const loadCharacters = async () => {
      const { results, info: { next } } = await getCharacters(url);
      setCharacters([...characters, ...results]);
      setTmp(next);
      console.log(next);
    }
    try {
       loadCharacters();
    }
    catch (error) {
      console.log(error);
    }
  }, [url])

  const productList =
    characters.map(({ id, name, image }) =>
      <ProductItem
        key={id}
        name={name}
        image={image}
      />
    )
  return (
    <>
      {productList}
      <IonInfiniteScroll threshold="100px"
        // disabled={disableInfiniteScroll}
        onIonInfinite={infiniteLoad}>
        <IonInfiniteScrollContent
          loadingText="Loading more good doggos...">
        </IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </>
  )
}

export default ProductList;

