"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface ImageSequenceProps {
  frameCount: number;
  baseUrl: string;
  extension: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const ImageSequence: React.FC<ImageSequenceProps> = ({ frameCount, baseUrl, extension, containerRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentIndexRef = useRef(0);
  const requestRef = useRef<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  const renderCanvas = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;

    const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const newWidth = imgWidth * ratio;
    const newHeight = imgHeight * ratio;
    const x = (canvasWidth - newWidth) / 2;
    const y = (canvasHeight - newHeight) / 2;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(img, x, y, newWidth, newHeight);
  }, []);

  const updateFrame = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const scrollY = window.scrollY;
    
    // Calculate progress within the container's scroll range
    // We want the animation to finish when the user reaches the bottom of the container
    const scrollRange = containerHeight - window.innerHeight;
    const relativeScroll = Math.max(0, Math.min(scrollRange, scrollY - containerTop));
    const scrollFraction = relativeScroll / scrollRange;

    const index = Math.min(
      frameCount - 1,
      Math.floor(scrollFraction * frameCount)
    );

    if (index !== currentIndexRef.current) {
      currentIndexRef.current = index;
      renderCanvas(index);
    }
  }, [frameCount, renderCanvas, containerRef]);

  useEffect(() => {
    const preloadedImages: HTMLImageElement[] = [];
    imagesRef.current = preloadedImages; // Populated early
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `${baseUrl}${frameNumber}${extension}`;
      img.onload = () => {
        loadedCount++;
        // Specifically render the first frame as soon as it's ready
        if (i === 1) {
          renderCanvas(0);
        }
        if (loadedCount === frameCount) {
          setLoaded(true);
          // Final render of current index once all are done to be safe
          renderCanvas(currentIndexRef.current);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${img.src}`);
        loadedCount++; // Count it anyway to avoid stalling the 'loaded' state
      };
      preloadedImages.push(img);
    }
    imagesRef.current = preloadedImages;
  }, [frameCount, baseUrl, extension, renderCanvas]);

  useEffect(() => {
    const handleScroll = () => {
      if (requestRef.current === null) {
        requestRef.current = requestAnimationFrame(() => {
          updateFrame();
          requestRef.current = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial update
    updateFrame();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);
    };
  }, [updateFrame]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderCanvas(currentIndexRef.current);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="sticky top-0 left-0 w-full h-screen bottom-0 block z-0 pointer-events-none transition-opacity duration-500"
      style={{ opacity: loaded ? 1 : 0.5 }}
    />
  );
};

export default ImageSequence;
