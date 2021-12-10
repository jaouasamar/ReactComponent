import React from 'react'

const Suggestion = () => {
    const urlList = [
        {
          src:"https://www.youtube.com/embed/Law7wfdg_ls?list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE",
          title: "React router dom - Dev Ed",
        },
        {
          src: "https://www.youtube.com/embed/vjf774RKrLc",
          title: "Rest Api — Dev Ed",
        },
        {
          src: "https://www.youtube.com/embed/zQRrXTSkvfw?list=RDCMUClb90NQQcskPUGDIXsQEz5Q",
          title: "Learn Node JS — Dev Ed",
        },
        {
          src:
            "https://www.youtube.com/embed/CVpUuw9XSjY?list=RDCMUClb90NQQcskPUGDIXsQEz5Q",
          title: "Learn Redux — Dev ED",
        }
      ];
   
    return (
        <div>
            {urlList.map(url => 
            <div>
         <iframe
         
         width="300"
         height="300"
         src={url.src}
       
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen
       ></iframe>
          
            <p>{url.title}</p>
            </div>
            )};
        </div>
    )
}

export default Suggestion
