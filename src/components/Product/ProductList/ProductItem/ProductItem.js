import React from 'react';

const ProductItem = ({ name, image }) => {

  return (
    <>
      <ion-card>
        <img src={image} />
        <ion-card-header>
          <ion-card-title>{name}</ion-card-title>
          <ion-card-subtitle>{name}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>
    </>
  )
}

export default ProductItem;