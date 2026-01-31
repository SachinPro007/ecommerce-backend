const getAllFavourites = async (req, res) => {
  // Logic to get all favourites for the logged-in user
}

const toggleToFavourite = async (req, res) => {
  const { itemId } = req.params;
  // Logic to add or remove an item from favourites based on itemId
}

const getFavouriteById = async (req, res) => {
  const { itemId } = req.params;
  // Logic to get a specific favourite item by itemId
}


export { getAllFavourites, toggleToFavourite, getFavouriteById };