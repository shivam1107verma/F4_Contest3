import "../src/Style.css";
import NavBar from "./Components/NavBar";
import MoreBooks from "./Components/MoreBooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BookBanner from "./Components/BookBanner";

const App = () => {
  const [bookLists, setBookLists] = useState([]);
  const [previewlist, setPreviewList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyBLKk4qpY1tMkGM7IXSuszRvqf5BnFJ6dY"
      )
      .then((request) => {
        updateLists(request.data.items);
        //setPreviewList(request.data.items.slice(0, 3));
        //console.log(previewlist);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes&key=AIzaSyBLKk4qpY1tMkGM7IXSuszRvqf5BnFJ6dY"
      )
      .then((request) => {
        updateLists(request.data.items);
        //setPreviewList(request.data.items.slice(0, 3));
        //console.log(previewlist);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

  function updateLists(list) {
    setBookLists((prevItem) => prevItem.concat(list));
    setPreviewList(list.slice(0, 3));
  }

  return (
    <div>
      <NavBar setBookLists={setBookLists} setPreviewList={setPreviewList} />
      <BookBanner previewlist={previewlist} />
      <MoreBooks bookLists={bookLists} className="gallery" />
    </div>
  );
};

export default App;