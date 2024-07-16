import { useRef } from "react";
import {
    useMotionValueEvent,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import styles from "./Gallery.module.scss";
import img__1 from "../assets/pic_1.jpg";
import img__2 from "../assets/pic_2.jpg";
import img__3 from "../assets/pic_3.jpg";
import img__4 from "../assets/pic_4.jpg";
import img__5 from "../assets/pic_5.jpg";
import img__6 from "../assets/pic_6.jpg";
import img__7 from "../assets/pic_7.jpg";

function Gallery() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log(latest);
    // });
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale2 = useTransform(scrollYProgress, [0, 1], [1, 2]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale12 = useTransform(scrollYProgress, [0, 1], [1, 12]);

    const imgs = [
        {
            src: img__1,
            scale: scale6,
        },
        {
            src: img__2,
            scale: scale2,
        },
        {
            src: img__3,
            scale: scale8,
        },
        {
            src: img__4,
            scale: scale4,
        },
        {
            src: img__5,
            scale: scale12,
        },
        {
            src: img__6,
            scale: scale4,
        },
        {
            src: img__7,
            scale: scale5,
        },
    ];

    return (
        <div className={styles.targetContainer} ref={ref}>
            <div className={styles.galleryContainer__1}>
                {imgs.map((img, index) => (
                    <motion.div
                        key={index}
                        style={{ scale: img.scale }}
                        className={styles.galleryContainer__2}
                    >
                        <div className={styles.gallery_imgBox} key={index}>
                            <img
                                src={img.src}
                                alt="A car"
                                className={styles.gallery_img}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
