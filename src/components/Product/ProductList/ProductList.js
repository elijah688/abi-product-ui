import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { getCharacters } from "../../../api/api";

const ProductList = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const loadCharacters = async () => {
      const { results } = await getCharacters();
      setCharacters(results);
    }
    loadCharacters();
  }, [])

  // console.log(JSON.stringify(characters[0], null, 4))
  // console.log(Object.keys(characters[0]));
  // characters[0] && console.log((characters[0].url))
  // ["id", "name", "status", "species", "type", "gender", "origin", "location", "image", "episode", "url", "created"]

  const characterList = characters.map(({ id, name, image }) =>
    <ProductItem
      key={id}
      name={name}
      image={image}
    />)
  return characterList;


}

export default ProductList;

