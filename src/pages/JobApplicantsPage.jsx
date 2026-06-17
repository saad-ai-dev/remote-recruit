import { ApplicantPanel } from "../components/application/ApplicantPanel";
import { CategoryTabs } from "../components/application/CategoryTabs";
import { DashboardSidebar } from "../components/application/DashboardSidebar";
import { FilterPanel } from "../components/application/FilterPanel";
import { JobPostBanner } from "../components/application/JobPostBanner";
import { MobileAppHeader } from "../components/application/MobileAppHeader";
import { MobileBottomNav } from "../components/application/MobileBottomNav";

export function JobApplicantsPage() {
  return (
    <main className="min-h-screen bg-[#F5F6FC] text-ink">
      <MobileAppHeader />
      <div className="lg:flex">
        <DashboardSidebar />
        <section className="min-w-0 flex-1 px-4 pb-24 pt-6 sm:px-7 sm:pt-7 lg:px-8 lg:pb-10 lg:pt-12 xl:px-16">
          <div className="mx-auto max-w-[1080px] xl:max-w-[1140px]">
            <button className="mb-5 inline-flex items-center gap-2 rounded-md bg-brand-800 px-4 py-2 text-xs font-bold text-white lg:hidden">
              <span aria-hidden="true">←</span>
              Back
            </button>
            <div className="mb-5 lg:mb-5">
              <p className="text-base font-semibold text-ink sm:text-2xl">
                Welcome <span className="lg:hidden">Salaria</span>
                <span className="hidden lg:inline">Bungie</span>
              </p>
              <h1 className="mt-2 whitespace-nowrap text-[30px] font-extrabold leading-none text-ink sm:text-5xl lg:text-6xl">
                Job Applicants
              </h1>
            </div>

            <JobPostBanner />
            <CategoryTabs />

            <div className="mt-7 grid min-w-0 gap-8 xl:grid-cols-[minmax(650px,1fr)_298px]">
              <ApplicantPanel />
              <FilterPanel />
            </div>
          </div>
        </section>
      </div>
      <MobileBottomNav />
    </main>
  );
}
