/**
 * Componente VideoPlayer
 */

import React from 'react';

interface VideoPlayerProps {
  url: string;
  title?: string;
  autoPlay?: boolean;
}

export function VideoPlayer({
  url,
  title = 'Video de apresentação',
  autoPlay = false,
}: VideoPlayerProps) {
  return (
    <div className="w-full">
      <div className="relative w-full bg-black aspect-video">
        <iframe
          src={url}
          title={title}
          className="absolute inset-0 w-full h-full rounded-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
