# signsim

I considered 3 approaches for rendering a sequence of animation frames from a JS app:
- Canvas API plus separate libraries for generating PNG then MP4
  - https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- https://www.remotion.dev/
- https://motioncanvas.io/


I began thinking about using React to build a demo. ReMotion was built for React and doesn't require integration of separate libraries for formatting bitmap frames which then need to be translated to MP4 as would be required with the basic Canvas API. ReMotion comes integrated with FFmpeg for generating MP4 and other video formats. With ReMotion grabbing my attention, I searched for its competition and discovered [this comparison between ReMotion and Motion Canvas](https://www.remotion.dev/docs/compare/motion-canvas).

My next focus was to think about getting a server to script the generation of MP4 videos from automated inputs without involving a human. Here I want the software to be able to independent from React UI. Motion Canvas has some pros and cons in this dimension given while [ReMotion supports server-side rendering from Node](https://www.remotion.dev/docs/ssr-node).

At the moment, I'm leaning toward ReMotion for a few reasons.
- The server-side rendering from Node looks more mature, better documented, and supported by a company.
- The license is reasonable although not free OSS.
- I slightly lean toward the declarative vs. procedural approach for my app.
- The knowledge I gain from using ReMotion in this app applies well to creating instructional videos.

Even if I focus on ReMotion for now, I'm glad to know about Motion Canvas as a future option.