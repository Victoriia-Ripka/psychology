import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
const HomePage = React.lazy(() => import("pages/Home/Home"));
const AboutPage = React.lazy(() => import("pages/About/About"));
const ConsultationsPage = React.lazy(() =>
  import("pages/Consultations/Consultation")
);
const ProgramPage = React.lazy(() => import("pages/Program/Program"));
const ArticlesPage = React.lazy(() => import("pages/Articles/Articles"));
const NotFoundPage = React.lazy(() => import("pages/NotFound/NotFound"));
const Layout = React.lazy(() => import("./Layout"));

function App() {
  return (
    // Loading
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="consultations" element={<ConsultationsPage />} />
          <Route path="program-for-parents" element={<ProgramPage />} />
          <Route path="articles" element={<ArticlesPage />}>
            {/* id article */}
            <Route path="article" element={""} />
          </Route>
        </Route>
        {/* <NotFound /> */}
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
