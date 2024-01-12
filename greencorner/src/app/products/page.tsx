"use client"
import IMAGES from '@/components/ui/Image'
import Image from 'next/image'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    Transition,
} from "framer-motion";
import { MotionDiv } from '@/components/layouts/motiondiv'
import { useRef, useEffect, useState, useCallback } from 'react'
import { CSSProperties } from 'react';
import Link from 'next/link';
// import { wrap } from "@motionone/utils";

interface ParallaxImageProps {
    src: string;
    baseVelocity: number;
    containerHeight: number;
}

function ParallaxImage({ src, baseVelocity = 100, containerHeight }: ParallaxImageProps) {
    const baseY = useMotionValue(0);

    const smoothVelocity = useSpring(baseVelocity, {
        damping: 50,
        stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });
    // const y = useTransform(baseY, (v) => `${wrap(-20, -45, v)}%`);
    const directionFactor = useRef<number>(1);

    const handleAnimationFrame = useCallback(() => {
        let moveBy = directionFactor.current * baseVelocity * (1 / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseY.set(baseY.get() + moveBy);
        console.log("baseY", baseY.get());
        console.log("moveby", moveBy);

        // Reset the position when the image goes beyond the container height
        if (baseY.get() > containerHeight) {
            baseY.set(-containerHeight);
        }
    }, [containerHeight, baseVelocity, velocityFactor, baseY]);

    useAnimationFrame(handleAnimationFrame);

    return (
        <MotionDiv
            style={{
                y: baseY,
            }}
            transition={{ duration: 3 }}
            initial={{ y: -containerHeight }} // Initial position above the container
            animate={{ y: containerHeight }}
        >
            <Image
                src={src}
                alt="Parallax Image"
                width={400} // Adjust width as needed
                height={600} // Adjust height as needed
            />
        </MotionDiv>
    )
}

export default function Products() {
    const contentRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);

    const imageref = useRef(null);


    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = contentRef.current.clientHeight;
            console.log('Content Height:', contentHeight);
            // const topheight = containerHeight.top;
            // Now you can use contentHeight as needed
            
        }

        

        // Lấy vị trí của cạnh ngoài

    }, [/* dependencies */]);

    const height = containerHeight !== undefined ? containerHeight : 0;

    return (
        <div className="h-full text-amber-50">
            <div className="grid grid-cols-12 my-6 w-3/4 m-0 m-auto text-center">
                <div className="w-52 bg-teal-700 opacity-80 px-4 py-2 rounded-3xl">Cactuses</div>
                <div className="w-52 col-start-4 bg-teal-700 opacity-80 px-4 py-2 rounded-3xl">Succulents</div>
                <div className="w-52 col-start-7 bg-teal-700 opacity-80 px-4 py-2 rounded-3xl">Flowers</div>
                <div className="w-52 col-start-10 bg-teal-700 opacity-80 px-4 py-2 rounded-3xl">Leaves</div>
            </div>
            <div className="w-4/5 h-fit m-0 m-auto grid grid-rows-6 gap-4 p-10">
                <div className="row-span-3 grid-cols-12 grid p-3 bg-zinc-50 rounded-xl">
                    <div className="col-span-6 text-teal-950 p-10">
                        <p className="uppercase text-4xl pb-10 font-medium">catus decor</p>
                        <p>It is up to you to see the beautiful of everyday things.</p>
                        <p className="pt-3">A cactus is a thick fleshy plant that grows in many hot, dry parts of the world. Cacti have no leaves and many of them are covered in prickles.</p>
                        <p className="pt-3 mb-10">Let's take some cute plants for your house!!</p>
                        <Link href="/products/3dview" className="bg-teal-700 text-amber-50 m-5 px-4 py-2 rounded-3xl">View 3D</Link>
                    </div>
                    <div className="col-span-6">
                        <div ref={contentRef}
                            className=" content grid grid-cols-8 grid-rows-8 gap-4 h-full bg-zinc-200 p-3 rounded-xl overflow-hidden">
                           
                            {[1, 2, 3, 4, 5].map((index) => (
                                <MotionDiv
                                    ref={imageref}
                                    key={index}
                                    className="image col-span-4 row-span-6 opacity-80 rounded-3xl relative "
                                // Thiết lập giá trị y ban đầu
                                >
                                    <ParallaxImage
                                        key={index}
                                        src={IMAGES.c1} // Replace with the actual image source
                                        baseVelocity={10}
                                        containerHeight={height} // Adjust the baseVelocity as needed
                                    />
                                   
                                </MotionDiv>
                            ))}
                        </div>


                    </div>
                </div>
               <div className="row-span-3 grid-cols-12 grid p-3 bg-zinc-50 rounded-xl">
                    <div className="col-span-6 text-teal-950 p-10">
                        <p className="uppercase text-4xl pb-10 font-medium">catus decor</p>
                        <p>It is up to you to see the beautiful of everyday things.</p>
                        <p className="pt-3">A cactus is a thick fleshy plant that grows in many hot, dry parts of the world. Cacti have no leaves and many of them are covered in prickles.</p>
                        <p className="pt-3 mb-10">Let's take some cute plants for your house!!</p>
                        <Link href="/products/3dview" className="bg-teal-700 text-amber-50 m-5 px-4 py-2 rounded-3xl">View 3D</Link>
                    </div>
                    <div className="col-span-6">
                        <div ref={contentRef}
                            className=" content grid grid-cols-8 grid-rows-8 gap-4 h-full bg-zinc-200 p-3 rounded-xl overflow-hidden">
                           
                            {[1, 2, 3, 4, 5].map((index) => (
                                <MotionDiv
                                    ref={imageref}
                                    key={index}
                                    className="image col-span-4 row-span-6 opacity-80 rounded-3xl relative "
                                // Thiết lập giá trị y ban đầu
                                >
                                    <ParallaxImage
                                        key={index}
                                        src={IMAGES.c1} // Replace with the actual image source
                                        baseVelocity={10}
                                        containerHeight={height} // Adjust the baseVelocity as needed
                                    />
                                   
                                </MotionDiv>
                            ))}
                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}