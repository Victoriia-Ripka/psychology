import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
const Home = React.lazy(() => import("pages/Home/Home"));

function App() {
  return (
    // Loading
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {/* <Layout /> */}
        <Route path="/" element={""}>
          <Route index element={<Home />} />
          <Route path="about" element={""} />
          <Route path="consultations" element={""} />
          <Route path="program-for-parents" element={""} />
          <Route path="articles" element={""}>
            <Route path="article" element={""} />
          </Route>
        </Route>
        {/* <NotFound /> */}
        <Route path="*" element={""}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
