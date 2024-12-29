import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/news")
      .then((res) => {
        console.log(res.data);
        setNews(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("done");
      });
  }, []);

  return (
    <div className="container my-5">
      <div className="row text-center">
        {news.map((val) => (
          <div className="col my-3" key={val.id}> {/* Added a key prop for each item */}
            <div className="card" style={{ width: "18rem" }}>
              <img src={val.img} className="card-img-top" alt={val.headline} /> {/* Use headline as alt text */}
              <div className="card-body">
                <h5 className="card-title">{val.headline}</h5>
                <p className="card-text">{val.description}</p>
                <a href={val.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Know More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;