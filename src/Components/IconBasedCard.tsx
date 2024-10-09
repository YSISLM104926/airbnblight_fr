"use client"
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, useDisclosure } from '@chakra-ui/react';

// icons images at least 20
import omg_icon from '../assets/icons/alien.jpg'
import ice_icon from '../assets/icons/alien.jpg'
import topworld_icon from '../assets/icons/topworld.jpg'
import tropical_icon from '../assets/icons/tropical.jpg'
import aframes_icon from '../assets/icons/Aframes.jpg'
import beach_icon from '../assets/icons/beach.jpg'
import campers_icon from '../assets/icons/campers.jpg'
import castles_icon from '../assets/icons/castles.jpg'
import cave_icon from '../assets/icons/cave.jpg'
import chefkitchens_icon from '../assets/icons/chefkitchens.jpg'
import desert_icon from '../assets/icons/desert.jpg'
import earthghomes_icon from '../assets/icons/earthghomes.jpg'
import farms_icon from '../assets/icons/farms.jpg'
import golf_icon from '../assets/icons/golf.jpg'
import historicalhomes_icon from '../assets/icons/historicalhomes.jpg'
import play_icon from '../assets/icons/play.jpg'
import surfing_icon from '../assets/icons/surfing.jpg'
import topcities_icon from '../assets/icons/topcities.jpg'
import towers_icon from '../assets/icons/towers.jpg'
import trending_icon from '../assets/icons/trending.jpg'
import vineyards_icon from '../assets/icons/vineyards.jpg'
import hanoks_icon from '../assets/icons/hanoks.jpg'

import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { setPrice, setPriceTwo } from '@/redux/features/priceSlice';

function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "block", background: "lightgray", borderRadius: '15px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "block", background: "lightgray", borderRadius: '15px' }}
            onClick={onClick}
        />
    );
}

const IconBasedCard = () => {
    const { isOpen: isOpenFirstModal, onOpen: onOpenFirstModal, onClose: onCloseFirstModal } = useDisclosure();
    const { isOpen: isOpenSecondModal, onOpen: onOpenSecondModal, onClose: onCloseSecondModal } = useDisclosure();
    const [option, setOption] = useState<string | null>('');
    const [selectedDates, setSelectedDates] = useState<DateRange | undefined>(undefined);
    const [date, setDate] = useState<string | null>(null);
    const handleSelect = (dates: any) => {
        setSelectedDates(dates);
    };

    const FromMonthNumber = selectedDates?.from?.toISOString().slice(8, 10);
    const selectedMonth = selectedDates?.from?.toISOString().slice(5, 7);
    const FromMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const FromMonthName = FromMonthNames[parseInt(selectedMonth || '0') - 1];

    const ToMonthNumber = selectedDates?.to?.toISOString().slice(8, 10);
    const selectedMonthTwo = selectedDates?.to?.toISOString().slice(5, 7);
    const ToMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const ToMonthName = ToMonthNames[parseInt(selectedMonthTwo || '0') - 1];
    let newDate;

    useEffect(() => {
        if (FromMonthName !== ToMonthName) {
            newDate = `${FromMonthName} ${FromMonthNumber} - ${ToMonthName} ${ToMonthNumber}`;
        } else if (FromMonthNumber === ToMonthNumber) {
            newDate = `${FromMonthName} ${FromMonthNumber}`;
        } else {
            newDate = `${FromMonthName} ${FromMonthNumber} - ${ToMonthNumber}`;
        }
        setDate(newDate);
    }, [FromMonthName, ToMonthName, FromMonthNumber, ToMonthNumber]);



    const cloze: () => void = () => { // Explicitly define the return type as void
        onCloseFirstModal()
    };

    const closeDate: () => void = () => { // Explicitly define the return type as void
        onCloseFirstModal(),
            setSelectedDates(undefined);
    };

    useEffect(() => {
        console.log(option);
    }, [option])

    const settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 16,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const price = useSelector((state: any) => state.price)
    const dispatch = useDispatch();
    // console.log(price);
    return (
        <div>
            <div className='bg-white border border-spacing-1 w-1/2 rounded-[150px] mx-auto flex mt-0 mb-20'>
                <input type="text" className=' hover:shadow-lg  hover:bg-gray-100 rounded-[200px]  p-4 w-1/3 border-none hover:border-none' placeholder='Search destinations' />
                <button onClick={onOpenFirstModal} className='hover:bg-gray-100 hover:shadow-lg hover:border rounded-[200px] p-4 w-1/3'>
                    <p>Check in</p>
                    <p className='text-gray-400'>{FromMonthName !== undefined ? date : 'Add dates'}</p>
                </button>
                <button className='hover:bg-gray-100 hover:border   rounded-[200px] p-4 w-1/3 gap-6 flex justify-end items-center' >
                    <div className='bg-pink-700 hover:shadow-lg flex gap-6 justify-center items-center  px-3 py-3 rounded-[200px] text-white'>
                        <Search className='' />
                        <p className='font-medium text-xl'>Search</p>
                    </div>
                </button>
            </div>

            <Modal onClose={cloze} isOpen={isOpenFirstModal} isCentered>
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pb={40}>
                        <DayPicker mode="range" selected={selectedDates}
                            onSelect={handleSelect} />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={closeDate} className='me-4'>Clear Date</Button>
                        <Button onClick={cloze}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <hr />
            <div className='flex items-center gap-4 mt-8 mb-4'>
                <div className="slider-container w-[1300px] mx-20">
                    <Slider {...settings}>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption('omg')}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={omg_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>OMG!</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer hover:shadow-b hover:shadow-bottom' onClick={() => setOption('ice')}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={ice_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Ice</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("topworld")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={topworld_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Top World</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("tropical")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={tropical_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Tropical</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("aframes")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={aframes_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>AFrames</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("beach")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={beach_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Beach</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("campers")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={campers_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Campers</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("castles")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={castles_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Castles</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("cave")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={cave_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Cave</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("chefkitchen")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={chefkitchens_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Chef Kitchens</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("desert")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={desert_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Desert</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("earthhomes")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={earthghomes_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Earth Homes</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("farms")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={farms_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Farms</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("golf")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={golf_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Golf</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("historical")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={historicalhomes_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Historical Homes</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("play")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={play_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm' >Play</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("surfing")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={surfing_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm' >Surfing</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("topcities")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={topcities_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Top Cities</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("towers")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={towers_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Towers</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("trending")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={trending_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Trending</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("vineyards")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={vineyards_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Vineyards</p>
                            </div>
                        </div>

                        <div className='transition-all w-1/2 mx-auto hover:cursor-pointer' onClick={() => setOption("hanoks")}>
                            <div className='flex flex-col w-[100px] items-center'>
                                <Image src={hanoks_icon} height={25} width={25} alt='' />
                                <p className='text-center text-sm'>Hanoks</p>
                            </div>
                        </div>

                    </Slider>
                </div>
                <div onClick={onOpenSecondModal} className="flex items-center  border border-gray-200 rounded-2xl p-3 transition-all cursor-pointer">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                </div>
                <Modal onClose={onCloseSecondModal} isOpen={isOpenSecondModal} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Filter</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <h1>Select your price range</h1>
                            <RangeSlider onChange={(value: any) => {
                                dispatch(setPrice(`${value[0]}`)),
                                    dispatch(setPriceTwo(`${value[1]}`))
                            }} aria-label={['min', 'max']} min={0} max={1000} defaultValue={[200, 500]}>
                                <RangeSliderTrack>
                                    <RangeSliderFilledTrack />
                                </RangeSliderTrack>
                                <RangeSliderThumb index={0} />
                                <RangeSliderThumb index={1} />
                            </RangeSlider>
                            <Input htmlSize={4} width='auto' placeholder={'$' + price.price} />
                            <Input htmlSize={4} width='auto' placeholder={'$' + price.priceTwo} className='ms-4' />
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onCloseSecondModal}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <div className="flex items-center  border border-gray-200 rounded-2xl p-3.5 transition-all cursor-pointer">
                    <span className="text-sm text-muted-foreground">Display total before taxes</span>
                    <Switch />
                </div>
            </div>
        </div>
    )
}

export default IconBasedCard