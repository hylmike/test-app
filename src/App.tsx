import React from "react";

import "./App.scss";
import PictureItem from "./components/PictureItem";
import { pictureList } from "./data-sample/picture-list";
import { FixedSizeGrid as Grid } from "react-window";

type Props = {
  columnIndex: number;
  rowIndex: number;
};

function App() {
  const Cell = ({ columnIndex, rowIndex }: Props) => {
    const index = (rowIndex + 1) * (columnIndex + 1) - 1;
    return (
      <div className="col-md-4">
        <PictureItem
          pictureUrl={pictureList[index].picture_url}
          name={pictureList[index].title}
        />
      </div>
    );
  };

  return (
    <div className="App bg-dark">
      <h2 className="title">Taft- Multimedia Gallery</h2>
      <div className="pic-container row">
        <Grid
          columnCount={3}
          columnWidth={300}
          width={1000}
          height={800}
          rowHeight={200}
          rowCount={Math.ceil(pictureList.length / 3)}
        >
          {Cell}
        </Grid>
      </div>
    </div>
  );
}

export default App;
