import { useState } from "react";
import { CategoryPills } from "./components/CategoryPills";
import { VideoGrid } from "./components/VideoGrid";
import { categories, videos } from "./data/home";
import {PageHeader} from "./layouts/Pageheader";
import { Sidebar } from "./components/SideBar";

function App() {
  const [selectedCategory, setSelectedCategory]= useState(categories[0])
  return (
    <div className="max-h-screen flex flex-col bg-white">
     <PageHeader />
     <div className="flex flex-1 overflow-hidden">
        <Sidebar/>
        
      <div className="flex-1 flex flex-col overflow-hidden pr-8">
        <div className="sticky top-0 bg-white z-10 pb-4 pt-4 px-8">
          <CategoryPills categories={categories}
          selectedCategory={selectedCategory}
           onSelect={setSelectedCategory}
           />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="mt-6 px-8">
            <VideoGrid videos={videos} />
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App
