'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {  Star } from 'lucide-react';
import Doctor, { Reviews } from '@/data/doctors';

interface HomeReviewsProps {
    doctor: Doctor;
}

const HomeReviews: React.FC<HomeReviewsProps> = ({ doctor }) => {
    const { reviews, id } = doctor;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const isJayRelan = id === 'drjay';

    const getColorClasses = () => {
        if (isJayRelan) {
            return {
                bg: 'bg-red-50',
                gradient: 'from-red-600 to-red-700',
                accent: 'text-red-600',
                accentBg: 'bg-red-600',
                accentHover: 'hover:bg-red-700',
                border: 'border-red-200',
                cardBg: 'bg-white',
                starFilled: 'text-yellow-400',
                starEmpty: 'text-gray-300'
            };
        } else {
            return {
                bg: 'bg-teal-50',
                gradient: 'from-teal-600 to-teal-700',
                accent: 'text-teal-600',
                accentBg: 'bg-teal-600',
                accentHover: 'hover:bg-teal-700',
                border: 'border-teal-200',
                cardBg: 'bg-white',
                starFilled: 'text-yellow-400',
                starEmpty: 'text-gray-300'
            };
        }
    };

    const colors = getColorClasses();

    // Auto-carousel for mobile
    useEffect(() => {
        if (!isAutoPlaying || reviews.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, reviews.length]);

    // const nextReview = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    //     );
    // };

    // const prevReview = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    //     );
    // };

    const goToReview = (index: number) => {
        setCurrentIndex(index);
    };

    const renderStars = (rating: number) => {
        return (
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-4 h-4 ${star <= rating ? colors.starFilled : colors.starEmpty
                            } fill-current`}
                    />
                ))}
            </div>
        );
    };

    const ReviewCard: React.FC<{ review: Reviews; isActive?: boolean }> = ({
        review,
        isActive = false
    }) => (
        <div
            className={`
        ${colors.cardBg} 
        rounded-2xl 
        p-6 
        shadow-lg 
        ${colors.border} 
        border 
        transition-all 
        duration-300 
        hover:shadow-xl 
        hover:scale-[1.02]
        ${isActive ? 'ring-2 ring-opacity-50' : ''}
        min-h-[280px]
        flex
        flex-col
        justify-between
      `}
        >
            <div>
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                        <Image
                            src={review.pic}
                            alt={review.name}
                            width={60}
                            height={60}
                            className="rounded-full object-cover border-2 border-gray-200"
                        />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 text-lg">
                            {review.name}
                        </h4>
                        {renderStars(review.star)}
                    </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm md:text-base line-clamp-6">
                    {`"${review.review}"`}
                </p>
            </div>
        </div>
    );

    if (!reviews || reviews.length === 0) {
        return null;
    }

    return (
        <section className={`py-16 md:py-24 ${colors.bg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4`}>
                        What Our Patients Say
                    </h2>
                    <div className={`w-24 h-1 bg-gradient-to-r ${colors.gradient} mx-auto mb-6 rounded-full`}></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Real experiences from our valued patients who trust us with their health and wellness journey.
                    </p>
                </div>

                {/* Mobile Carousel */}
                <div className="block md:hidden">
                    <div className="relative">
                        {/* Review Card */}
                        <div
                            className="transition-all duration-500 ease-in-out"
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                        >
                            <ReviewCard review={reviews[currentIndex]} isActive={true} />
                        </div>

                        
                    </div>

                    {/* Dots Indicator */}
                    {reviews.length > 1 && (
                        <div className="flex justify-center mt-6 gap-2">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToReview(index)}
                                    className={`
                    w-3 h-3 rounded-full transition-all duration-200
                    ${index === currentIndex
                                            ? colors.accentBg
                                            : 'bg-gray-300 hover:bg-gray-400'
                                        }
                  `}
                                    aria-label={`Go to review ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeReviews;