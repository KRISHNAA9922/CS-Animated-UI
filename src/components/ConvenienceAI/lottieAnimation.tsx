"use client";

import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';

export const LottieAnimation: React.FC = () => {
    const [animationData, setAnimationData] = useState<object | null>(null);

    useEffect(() => {
        fetch(
            'https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/680bcc5659a2c1e948cfcd64_AI.json'
        )
            .then(res => res.json())
            .then(setAnimationData)
            .catch(console.error);
    }, []);
    return (
        <div className="flex items-center justify-center flex-col w-full lg:w-[45%] py-6">
            <div
                style={{
                    backgroundImage: `url(
                'https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e316617d05e7865b020856_card-bg.avif'
            )`,
                }}
                className="w-full  flex items-center justify-center h-[500px] max-h-[500px] rounded-2xl md:rounded-4xl relative"
            >
                <Lottie animationData={animationData} loop={true} autoplay={true} />

                <div className="flex justify-center items-center w-[5rem] h-[5rem] absolute bottom-[1.5rem] right-[1.5rem] z-100 ">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 "
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M67.8775 27.8235C67.9592 27.2145 68 26.6067 68 26C68 17.6735 60.4995 10.992 52.1765 12.1225C49.751 7.807 45.131 5 40 5C34.869 5 30.249 7.807 27.8235 12.1225C19.483 10.992 12 17.6735 12 26C12 26.6067 12.0408 27.2145 12.1225 27.8235C7.807 30.2525 5 34.8725 5 40C5 45.1275 7.807 49.7475 12.1225 52.1765C12.042 52.781 12.0011 53.3901 12 54C12 62.3265 19.483 68.9905 27.8235 67.8775C30.249 72.193 34.869 75 40 75C45.131 75 49.751 72.193 52.1765 67.8775C60.4995 68.9905 68 62.3265 68 54C68 53.3933 67.9592 52.7855 67.8775 52.1765C72.193 49.7475 75 45.1275 75 40C75 34.8725 72.193 30.2525 67.8775 27.8235Z"
                            fill="#9FE29E"
                        ></path>
                        <path
                            d="M35.5093 45.0666L29.3545 38.8685L29.3526 38.8667C28.8955 38.4111 28.3351 38.1724 27.6956 38.1708C27.0541 38.1693 26.4921 38.4088 26.0336 38.8673C25.5788 39.3221 25.3321 39.8778 25.3136 40.5134C25.2948 41.1591 25.527 41.7261 25.9878 42.1869L33.8711 50.0702C34.3252 50.5243 34.8778 50.7667 35.508 50.7667C36.1382 50.7667 36.6908 50.5243 37.1449 50.0702L37.1454 50.0697L53.9651 33.2041C53.9654 33.2039 53.9656 33.2037 53.9658 33.2035C54.4235 32.7471 54.6622 32.1858 54.6622 31.5447C54.6622 30.9033 54.4233 30.3415 53.9657 29.8839C53.5116 29.4298 52.959 29.1875 52.3288 29.1875C51.6987 29.1875 51.1461 29.4298 50.692 29.8839L35.5093 45.0666Z"
                            fill="#032D2A"
                            stroke="#032D2A"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-10">
                <p className="text-[1.5rem] font-[400]  ">Fast approvals</p>
                <p className="text-[1.12rem] text-[#66687c] w-full   text-center">
                    Get next-day approval for non-dilutive payment solutions with AI-powered data
                    integrations and pre-qualification.
                </p>
            </div>
        </div>
    );
};
