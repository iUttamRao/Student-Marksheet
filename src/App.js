import React, { useState } from "react";
import { Details, Marksheet } from "./page";
import {RouterProvider } from "react-router-dom";
import router from "./router/config";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  // const [studentData,setStudentData] = useState({});

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    // <div>
    //   {current === 'detail' && <Details onNext={handleSubmit}/>}
    //   {current === 'marksheet' && <Marksheet studentName={`${studentData.firstName} ${studentData.lastName}`}/>}
    // </div>
  );
}

export default App;
