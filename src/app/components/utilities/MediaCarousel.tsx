// components/MediaCarousel.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface MediaCarouselProps {
  images: { src: string; alt: string; width: number; height: number }[];
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ images }) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      {/* Video Section */}
      <div className="relative w-full aspect-video mb-12 rounded-lg overflow-hidden shadow-2xl">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FSarvodayafaridabad%2Fvideos%2F651906494628135%2F&show_text=false&width=560&t=0"
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none', overflow: 'hidden' }}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          title="Facebook Video"
        ></iframe>
      </div>

      {/* Image Gallery Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            style={{ paddingTop: `${(img.height / img.width) * 100}%` }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaCarousel;