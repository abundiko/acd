import { Search } from "react-huge-icons/outline";

export default function Topbar() {
  return (
    <header className="flex gap-4 items-center p-3 border-b">
      <div className="relative md:w-3/12">
        <Search className="absolute top-1/2 left-2 -translate-y-1/2" />
        <input
          type="text"
          name=""
          id=""
          className="px-4 pl-8 py-2 border rounded-md outline-primary"
          placeholder="Search"
        />
      </div>
      <div className="w-6/12 border rounded-md flex items-stretch text-dark-text h-full overflow-hidden divide-x-2 ">
        <select name="" id="" className="topbar-select">
          <option value="">Federal Government</option>
        </select>
        <select name="" id="" className="topbar-select">
          <option value="">Abuja</option>
        </select>
        <select name="" id="" className="topbar-select">
          <option value="">Aso Rock Presidetial Villa</option>
        </select>
      </div>
      <button className="w-3/12 bg-primary text-light font-semibold rounded-md py-2 hover:bg-primary-dark">
        Check Accessibility
      </button>
    </header>
  );
}
