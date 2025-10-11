"use client";

import Masonry from 'react-masonry-css';
import { Flex, SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { useTranslations } from 'next-intl';
import { renderContent } from '@/app/resources';

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
            {gallery.images.map((image, index) => (
                <Flex
                    key={index}
                    border="neutral-medium"
                    borderStyle="solid-1"
                    radius="m"
                    className={styles.gridItem}
                    minWidth={image.width} 
                    height={image.height}
                    onClick={() => console.log('Flex clicked', index)}>
                       <SmartImage
                           radius="m"
                           sizes={image.width.toString()}
                           src={image.src}
                           alt={image.alt}
                           onClick={() => console.log('Image clicked!')}
                           enlarge/>
                </Flex>
            ))}
        </Masonry>
    );
}
