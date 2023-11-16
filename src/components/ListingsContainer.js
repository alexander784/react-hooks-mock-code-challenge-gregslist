import React, { useEffect, useState } from "react";

import ListingCard from "./ListingCard";
function ListingsContainer() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((response) => {
      if(!response.ok) {
        throw new Error('Http Error');
      }
      return response.json();
    })
    .then ((data) => setListings(data))
    .catch((error) => console.error("Error Fetching data", error));


  }
  )
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map((listing) => (
          <ListingCard
          key={listing.id}
          price={listing.price}
          image={listing.imageUrl}
          description={listing.description}
          location={listing.location}
          isFavorite={listing.isFavorite}
          />
        ))}

      </ul>
    </main>
  );
}

export default ListingsContainer;
