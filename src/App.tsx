import React from "react";

import "./App.scss";
import PictureItem from "./components/PictureItem";
import { pictureList } from "./data-sample/picture-list";

function App() {
  return (
    <div className="App bg-dark">
      <h2 className="title">Taft- Multimedia Gallery</h2>
      <div className="pic-container row gx-0 gy-0 py-0">
        {pictureList.map((item) => (
          <div className="col-md-4">
            <PictureItem
              pictureUrl={item.picture_url}
              name={item.title}
              key={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
