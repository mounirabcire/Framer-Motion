import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import { useMousePostion } from "./hooks/useMousePostion";

function App() {
    const ref = useRef(null);
    const mousePosition = useMousePostion();
    const [entered, setEntered] = useState(false);
    const size = entered ? 300 : 50;

    return (
        <>
            <div className="h-screen text-9xl font-semibold leading-normal flex justify-center items-center text-center">
                <h1 className="max-w-[100rem]">Hello I'm A</h1>
            </div>
            <motion.div
                ref={ref}
                animate={{
                    maskPosition: `${mousePosition.x - size / 2}px ${
                        mousePosition.y - size / 2
                    }px`,
                    maskSize: `${size}px`,
                }}
                transition={{
                    duration: 0.0,
                    ease: "backOut",
                }}
                className="masked absolute w-full top-0 left-0  h-screen text-9xl font-semibold leading-normal flex justify-center items-center text-center"
            >
                <h1
                    onMouseEnter={() => setEntered(true)}
                    onMouseLeave={() => setEntered(false)}
                    className=" max-w-[100rem] z-40 p-20"
                >
                    Front-end Develper!
                </h1>
            </motion.div>
        </>
    );
}

export default App;
