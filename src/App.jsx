import { useRoutePage } from "./hooks/useRoutePage";
import { JobApplicantsPage } from "./pages/JobApplicantsPage";
import { LandingPage } from "./pages/LandingPage";

function App() {
  const page = useRoutePage();

  if (page === "application") {
    return <JobApplicantsPage />;
  }

  return <LandingPage />;
}

export default App;
