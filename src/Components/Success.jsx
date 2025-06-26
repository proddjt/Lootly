import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { FaCheck } from "react-icons/fa6";

function Success ({ text }) {
    const [isVisible, setIsVisible] = useState(true);
    setTimeout(() => {
        setIsVisible(false);
    }, 5000);
    return (
        <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        key="box"
                        className="absolute z-50 flex w-3/4 h-24 overflow-hidden bg-neutral-900 shadow-lg max-w-96 rounded-xl error-box border-1 border-green-500 text-normal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="96" width="16">
                            <path
                            strokeLinecap="round"
                            strokeWidth="2"
                            stroke="oklch(72.3% 0.219 149.579)"
                            fill="oklch(72.3% 0.219 149.579)"
                            d="M 8 0 
                                    Q 4 4.8, 8 9.6 
                                    T 8 19.2 
                                    Q 4 24, 8 28.8 
                                    T 8 38.4 
                                    Q 4 43.2, 8 48 
                                    T 8 57.6 
                                    Q 4 62.4, 8 67.2 
                                    T 8 76.8 
                                    Q 4 81.6, 8 86.4 
                                    T 8 96 
                                    L 0 96 
                                    L 0 0 
                                    Z"
                            ></path>
                        </svg>
                        <div className="mx-2.5 overflow-hidden w-full">
                            <p
                            className="mt-1.5 text-xl font-bold text-green-500 leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap"
                            >
                            Evvai!
                            </p>
                            <p className="overflow-hidden leading-5 break-all text-white max-h-10">
                                {text}
                            </p>
                        </div>
                    </motion.div>
                ) : null}
        </AnimatePresence>
    )
}

export default Success