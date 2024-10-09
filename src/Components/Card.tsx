"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

interface CardProps {
    place: any
}

const Card: React.FC<CardProps> = ({ place }) => {
    return (
        <div className="p-4 rounded-lg shadow space-y-4">
            {place.locations.map((loc: any, index: number) => (
                <div key={index} className="space-y-2">
                    {/* Swiper for Images */}
                    <Swiper
                        navigation={true}
                        pagination={{ dynamicBullets: true }}
                        className="mySwiper rounded-lg overflow-hidden"
                        modules={[Navigation, Pagination]}
                    >
                        {loc.images.map((img: string, idx: number) => (
                            <SwiperSlide key={idx}>
                                <Image
                                    src={img}
                                    alt="Location image"
                                    height={500}
                                    width={500}
                                    style={{
                                        height: '300px'
                                    }}
                                    className="object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="">
                        <h1 className='text-lg font-semibold'>{loc.title}</h1>
                        <p className='text-sm text-gray-500'>{loc.distance} kilometers far away</p>
                        <p className='text-sm text-gray-500'>{loc.date}</p>
                        <p className='text-lg font-medium'>
                            ${loc.price} <span className="text-sm font-normal text-gray-500">/ night</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
