import React from "react";

const blogDatas = [
  {
    id: "1",
    header: "Make Your Business More Profitable",
    name: "Ham Brouk",
    date: "Jan 21, 2020",
    news: "News",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    linkText: "Contuine Reading...",
    link: "https://www.google.com/",
  },
  {
    id: "2",
    header: "Make Your Business More Profitable",
    name: "James Arsen",
    date: "Jan 3, 2020",
    news: "News",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    linkText: "Contuine Reading...",
    link: "https://www.google.com/",
  },
  {
    id: "3",
    header: "Make Your Business More Profitable",
    name: "Kate Hamson",
    date: "Sep 21, 2020",
    news: "News",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    linkText: "Contuine Reading...",
    link: "https://www.google.com/",
  },
];

const BlogPostData = () => {
  return blogDatas.map((blogData, index) => (
    <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4 blog-col">
      <div className="blog-text p-2">
        <h1 style={{color:"black"}}>{blogData.header}</h1>
        <div className="blogger" style={{ display: "flex" }}>
          <p>{blogData.name}</p>
          <ul className="blog-ul">
            <li>{blogData.date}</li>
            <li>{blogData.news}</li>
          </ul>
        </div>
        <p>{blogData.about}</p>
        <a href={blogData.link}>{blogData.linkText}</a>
      </div>
    </div>
  ));
};

export default BlogPostData;
