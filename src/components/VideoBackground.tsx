interface VideoBackgroundProps {
  opacity?: number;
}

export default function VideoBackground({ opacity = 0.5 }: VideoBackgroundProps) {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ opacity }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/animation_background.mp4" type="video/mp4" />
      </video>
      {/* Overlay that adapts to theme via CSS */}
      <div className="absolute inset-0 video-overlay" />
    </div>
  );
}
