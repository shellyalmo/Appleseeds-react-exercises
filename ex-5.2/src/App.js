import React from "react";
import Card from "./components/Card";
import img1 from "./assets/articles.jpg";
import img2 from "./assets/photo-gallery.jpg";
import img3 from "./assets/videos.jpg";

function App() {
  const cards = [
    {
      Img: img1,
      Title: "Articles",
      Desc: "Read our latest articles",
      Link1: "https://www.google.co.il/",
      Link2: "https://www.youtube.com/",
    },
    {
      Img: img2,
      Title: "Images",
      Desc: "Watch our latest images",
      Link1: "https://www.google.co.il/",
      Link2: "https://www.youtube.com/",
    },
    {
      Img: img3,
      Title: "Videos",
      Desc: "watch our latest videos",
      Link1: "https://www.google.co.il/",
      Link2: "https://www.youtube.com/",
    },
  ];
  const returned = cards.map((e) => {
    return (
      <Card
        className="card-frame"
        Title={e.Title}
        Img={e.Img}
        Desc={e.Desc}
        Link1={e.Link1}
        Link2={e.Link2}
      ></Card>
    );
  });

  return returned;
}

export default App;
