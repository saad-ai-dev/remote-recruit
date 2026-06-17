import { lazy, Suspense } from "react";
import { ScrollToTopButton } from "./components/common/ScrollToTopButton";
import { useRoutePage } from "./hooks/useRoutePage";

const JobApplicantsPage = lazy(() =>
  import("./pages/JobApplicantsPage").then((module) => ({
    default: module.JobApplicantsPage
  }))
);

const LandingPage = lazy(() =>
  import("./pages/LandingPage").then((module) => ({
    default: module.LandingPage
  }))
);

function App() {
  const page = useRoutePage();
  const Page = page === "application" ? JobApplicantsPage : LandingPage;

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Page />
      </Suspense>
      <ScrollToTopButton />
    </>
  );
}

function PageLoader() {
  return (
    <div
      className="min-h-screen bg-[#F5F6FC]"
      role="status"
      aria-label="Loading page"
    />
  );
}

export default App;
