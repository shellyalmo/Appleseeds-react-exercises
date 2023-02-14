import React, { useState } from "react";
import Form from "./components/Form";
import FormReview from "./components/FormReview";

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="App">
      {data ? <FormReview data={data} /> : <Form setParentState={setData} />}
    </div>
  );
}

export default App;
