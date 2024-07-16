import { useEffect } from "react";
import Lenis from "lenis";

import Gallery from "./components/Gallery";
import styles from "./index.module.scss";

function App() {
    useEffect(() => {
        const lenis = new Lenis();

        lenis.on("scroll", (e) => {
            console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <div className={styles.appContainer}>
            <h1>Zoom Parallax Effect!</h1>
            <Gallery />
            <div className={styles.content}>
                <h1>
                    Range Rover <span>SVR</span>
                </h1>

                <p>
                    The Range Rover SVR, from Land Rover's Special Vehicle
                    Operations, is the ultimate in performance and luxury. With
                    a 5.0-liter supercharged V8 engine producing 575 horsepower,
                    it offers exceptional acceleration and top speed. This
                    high-performance SUV combines off-road capability with
                    sporty handling. Inside, the SVR features premium materials
                    like Windsor leather and carbon fiber, alongside advanced
                    technology including the Touch Pro Duo infotainment system
                    and a Meridian Surround Sound System. Its exterior boasts an
                    aggressive, muscular design with a unique SVR body kit and
                    quad exhausts. Perfect for both city driving and rugged
                    terrains, the Range Rover SVR epitomizes luxury, power, and
                    versatility.
                </p>
            </div>
        </div>
    );
}

export default App;
