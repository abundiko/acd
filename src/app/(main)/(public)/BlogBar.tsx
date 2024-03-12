"use client";

import { useIndexPageState } from "@/state/indexStore";

export default function BlogBar() {
  const stories = useIndexPageState(s => s.stories);
  const lastStory = stories[stories.length - 1];
  if (stories.length > 0)
    return (
      <header>
        <div className="mini_message w-full">
          <label
            htmlFor="article-confirmation"
            id="mini-msg-txt"
            className="container"
          >
            <p>
              <a href={lastStory.link} target="_blank">
                {lastStory.header}
              </a>
            </p>
          </label>
        </div>
      </header>
    );
}
