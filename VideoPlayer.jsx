// components/VideoPlayer.jsx
import ReactPlayer from "react-player";
export const VideoPlayer = () => (
  <section className="p-6 text-center">
    <h3 className="text-2xl font-bold mb-4">🎬 Demo Vidéo</h3>
    <div className="max-w-3xl mx-auto">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="100%"
        controls
      />
    </div>
  </section>
);
