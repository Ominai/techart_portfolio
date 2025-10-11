"use client";

import Masonry from 'react-masonry-css';
import { Flex, SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { useTranslations } from 'next-intl';
import { renderContent } from '@/app/resources';

interface GalleryImage {
    src: string;
    alt: string;
    orientation: string;
    width: number;
    height: number;
    type?: 'image' | 'video';
}

export default function MasonryGrid() {
    const breakpointColumnsObj = {
        default: 4,
        1440: 3,
        1024: 2,
        560: 1
    };

    const t = useTranslations();
    const { gallery } = renderContent(t);

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}>
            {(gallery.images as GalleryImage[]).map((image, index) => {
                const isVideo = image.type === 'video' || 
                               image.src.endsWith('.webm') || 
                               image.src.endsWith('.mp4');
                
                return (
                    <Flex
                        key={index}
                        border="neutral-medium"
                        borderStyle="solid-1"
                        radius="m"
                        className={styles.gridItem}
                        fillWidth
                        onClick={() => console.log('Flex clicked', index)}>
                        {isVideo ? (
                            <video
                                controls
                                autoPlay
                                loop
                                muted
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    borderRadius: 'var(--radius-m)',
                                    display: 'block'
                                }}
                                onClick={() => console.log('Video clicked!')}>
                                <source src={image.src} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <SmartImage
                                radius="m"
                                src={image.src}
                                alt={image.alt}
                                aspectRatio={`${image.width}/${image.height}`}
                                onClick={() => console.log('Image clicked!')}
                                enlarge/>
                        )}
                    </Flex>
                );
            })}
        </Masonry>
    );
}
