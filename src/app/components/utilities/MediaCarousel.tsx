// components/MediaCarousel.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MediaCarouselProps {
  images: { src: string; alt: string; width: number; height: number }[];
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ images }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-video mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100"
      >
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FSarvodayafaridabad%2Fvideos%2F651906494628135%2F&show_text=false&width=560&t=0"
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none', overflow: 'hidden' }}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          title="Facebook Video"
        ></iframe>
      </motion.div>

      {/* Image Gallery Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            className="w-full relative overflow-hidden rounded-[2rem] shadow-lg group"
            style={{ paddingTop: `${(img.height / img.width) * 100}%` }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MediaCarousel;