import React from "react";

function SavedStories({ stories }) {
  return (
    <div className="saved-stories"> 
      
      {stories.map((story, index) => (
        <div key={index}>
          <p>{story.quote}</p> 
        </div>
      ))}
    </div>
  );
}

export default SavedStories;
