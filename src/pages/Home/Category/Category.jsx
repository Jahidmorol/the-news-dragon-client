import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCart from "../NewsCart/NewsCart";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  // console.log(categoryNews);
  // console.log(id);
  return (
    <div>
      {id && <h5>its category component : {categoryNews.length}</h5>}
      {categoryNews.map((news) => (
        <NewsCart key={news._id} news={news}></NewsCart>
      ))}
    </div>
  );
};

export default Category;
