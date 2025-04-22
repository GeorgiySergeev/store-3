const categoriesHandler = (categories) => {
  const categoriesArray = [];

  categories.map((cat) => {
    if (cat._parentId === '') {
      categoriesArray.push({
        ...cat,
        children: categories.filter((subcat) => subcat._parentId === cat._id),
      });
    }
  });
  return categoriesArray;
};

export default categoriesHandler;
