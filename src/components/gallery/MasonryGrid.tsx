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
            {(gallery.images as GalleryImage[]).map((image, index) => (
                <Flex
                    key={index}
                    border="neutral-medium"
                    borderStyle="solid-1"
                    radius="m"
                    className={styles.gridItem}
                    fillWidth
                    onClick={() => console.log('Flex clicked', index)}>
                       <SmartImage
                           radius="m"
                           src={image.src}
                           alt={image.alt}
                           aspectRatio={`${image.width}/${image.height}`}
                           onClick={() => console.log('Image clicked!')}
                           enlarge/>
                </Flex>
            ))}
        </Masonry>
    );
}
