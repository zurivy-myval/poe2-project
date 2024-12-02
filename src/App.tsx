import { useState } from "react";
import CardItem from "./components/CardItem.tsx";
import "./App.css";

function App() {
  return (
    <>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-12 xl:col-span-4">
          {" "}
          <CardItem />
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4">
          {" "}
          <CardItem />
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4">
          {" "}
          <CardItem />
        </div>

        <div class="col-span-12 md:col-span-12 xl:col-span-4">
          {" "}
          <CardItem />
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4">
          {" "}
          <CardItem />
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4">
          {" "}
          <CardItem />
        </div>
      </div>
    </>
  );
}

export default App;
