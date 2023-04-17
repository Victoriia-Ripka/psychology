import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
const HomePage = React.lazy(() => import("pages/Home/Home"));
const Layout = React.lazy(() => import("./Layout"))

function App() {
  return (
    // Loading
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={""} />
          <Route path="consultations" element={""} />
          <Route path="program-for-parents" element={""} />
          <Route path="articles" element={""}>
            {/* id article */}
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
