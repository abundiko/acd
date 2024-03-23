'use client'

import useFetchApi from "@/hooks/useFetchApi";
import { API } from "@/utils/constants";
import { decompressApi } from "@/utils/functions/decompressApi";
import { ApiCompressedData } from "@/utils/types/basicTypes";
import { ApiStoryData } from "@/utils/types/companyTypes";

export default function BlogBar() {
  const { mainData: stories, setMainData } = useFetchApi<
    ApiCompressedData,
    ApiStoryData[]
  >(`${API}admin/blog`, (_data) => {
    if (!_data) return;
    setMainData(decompressApi<ApiStoryData[]>(_data.data.data));
  });

  if (!stories) return <></>;

  const lastStory = stories[0];
  if (stories.length > 0)
    return (
      <header className="relative z-40">
        <div className="mini_message bg-[#fa17d6] text-xs py-1 w-full flex items-center gap-2 app-container text-white">
          <div className="size-2 bg-white" />
          <a href={lastStory.link} target="_blank">
            {lastStory.header}
          </a>
        </div>
      </header>
    );
}
