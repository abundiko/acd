"use client";

import { useIndexPageState } from "@/state/indexStore";

export default function BlogBar() {
  const stories = useIndexPageState(s => s.stories);
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
