<<<<<<< HEAD
"use client";

import { useIndexPageState } from "@/state/indexStore";

export default function BlogBar() {
  const stories = useIndexPageState(s => s.stories);
=======

import useFetchApi from "@/hooks/useFetchApi";
import { useIndexPageState } from "@/state/indexStore";
import { API } from "@/utils/constants";
import { decompressApi } from "@/utils/functions/decompressApi";
import { ApiCompressedData } from "@/utils/types/basicTypes";
import { ApiStoryData } from "@/utils/types/companyTypes";

export default function BlogBar() {
  const { mainData:stories, setMainData } = useFetchApi<ApiCompressedData, ApiStoryData[]>(`${API}admin/blog`, _data=>{
    if(!_data) return;
    setMainData(decompressApi<ApiStoryData[]>(_data.data.data));
  });
  
  if(!stories) return <></>

>>>>>>> next-js
  const lastStory = stories[0];
  if (stories.length > 0)
    return (
      <header>
        <div className="mini_message w-full flex items-center gap-2 app-container text-white">
          <div className="size-3 bg-white" />
          <a href={lastStory.link} target="_blank">
            {lastStory.header}
          </a>
        </div>
      </header>
    );
}
