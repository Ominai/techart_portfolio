"use client";

import { useState } from 'react';
import Masonry from 'react-masonry-css';
import { SmartImage, Flex, IconButton } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { useTranslations } from 'next-intl';
import { renderContent } from '@/app/resources';

export default function MasonryGrid() {
    console.log('MasonryGrid component loaded - NEW VERSION');
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const breakpointColumnsObj = {
        default: 4,
        1440: 3,
        1024: 2,
        560: 1
    };

    const t = useTranslations();
    const { gallery } = renderContent(t);

    const openLightbox = (index) => {
        console.log('Opening lightbox for index:', index);
        console.log('Image:', gallery.images[index]);
        setCurrentIndex(index);
        setSelectedImage(gallery.images[index]);
        console.log('Selected image state should be:', gallery.images[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % gallery.images.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(gallery.images[nextIndex]);
    };

    const goToPrevious = () => {
        const prevIndex = (currentIndex - 1 + gallery.images.length) % gallery.images.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(gallery.images[prevIndex]);
    };

    const handleKeyDown = (e) => {
        if (!selectedImage) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrevious();
    };

    // Add keyboard listener
    if (typeof window !== 'undefined') {
        window.addEventListener('keydown', handleKeyDown);
        if (!selectedImage) {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }

    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.masonryGrid}
                columnClassName={styles.masonryGridColumn}>
                {gallery.images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => openLightbox(index)}
                        style={{ cursor: 'pointer' }}
                        className={styles.gridItem}>
                        <SmartImage
                            radius="m"
                            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
                            src={image.src}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </Masonry>

            {selectedImage && (
                <Flex
                    position="fixed"
                    fillWidth
                    fillHeight
                    zIndex={9999}
                    style={{
                        top: 0,
                        left: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                    }}
                    justifyContent="center"
                    alignItems="center"
                    onClick={closeLightbox}>
                    
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '2rem'
                    }}>
                        LIGHTBOX IS OPEN - Image: {currentIndex + 1}
                    </div>
                    
                    {/* Close button */}
                    <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        zIndex: 10000
                    }}>
                        <IconButton
                            icon="close"
                            size="l"
                            onClick={closeLightbox}
                            variant="ghost"
                        />
                    </div>

                    {/* Previous button */}
                    {gallery.images.length > 1 && (
                        <div style={{
                            position: 'absolute',
                            left: '1rem',
                            zIndex: 10000
                        }}>
                            <IconButton
                                icon="chevronLeft"
                                size="l"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrevious();
                                }}
                                variant="ghost"
                            />
                        </div>
                    )}

                    {/* Image */}
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            objectFit: 'contain',
                        }}
                    />

                    {/* Next button */}
                    {gallery.images.length > 1 && (
                        <div style={{
                            position: 'absolute',
                            right: '1rem',
                            zIndex: 10000
                        }}>
                            <IconButton
                                icon="chevronRight"
                                size="l"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                variant="ghost"
                            />
                        </div>
                    )}

                    {/* Image counter */}
                    <div style={{
                        position: 'absolute',
                        bottom: '1rem',
                        color: 'white',
                        fontSize: '0.875rem',
                        zIndex: 10000
                    }}>
                        {currentIndex + 1} / {gallery.images.length}
                    </div>
                </Flex>
            )}
        </>
    );
}
