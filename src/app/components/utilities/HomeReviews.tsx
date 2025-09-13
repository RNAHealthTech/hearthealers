'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ExternalLink } from 'lucide-react';
import Doctor, { Reviews } from '@/data/doctors';

interface HomeReviewsProps {
    doctor: Doctor;
}

const HomeReviews: React.FC<HomeReviewsProps> = ({ doctor }) => {
    const { reviews, id, reviewLink, patient1, patient2, patient3, patient4 } = doctor;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPatientIndex, setCurrentPatientIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isPatientCarouselAutoPlaying, setIsPatientCarouselAutoPlaying] = useState(true);

    const isJayRelan = id === 'drjay';

    // Patient images array
    const patientImages = [patient1, patient2, patient3, patient4].filter(Boolean);

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

    // Auto-carousel for reviews (mobile)
    useEffect(() => {
        if (!isAutoPlaying || reviews.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, reviews.length]);

    // Auto-carousel for patient images
    useEffect(() => {
        if (!isPatientCarouselAutoPlaying || patientImages.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentPatientIndex((prevIndex) =>
                prevIndex === patientImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [isPatientCarouselAutoPlaying, patientImages.length]);

    const goToReview = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPatientImage = (index: number) => {
        setCurrentPatientIndex(index);
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

    const GoogleReviewButton = () => {
        if (!reviewLink) return null;

        return (
            <div className="flex justify-center mb-8">
                <a
                    href={reviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                        inline-flex items-center gap-3 px-6 py-3 
                        ${colors.accentBg} ${colors.accentHover} 
                        text-white font-semibold rounded-full 
                        shadow-lg hover:shadow-xl transform hover:scale-105 
                        transition-all duration-300
                    `}
                >
                    {/* Google Logo */}
                    <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span>Write Review on Google</span>
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        );
    };

    const PatientImageCarousel = () => {
        if (!patientImages.length) return null;

        // Dynamic grid classes based on number of images
        const getGridClasses = () => {
            const imageCount = patientImages.length;
            if (imageCount === 1) return 'grid-cols-1';
            if (imageCount === 2) return 'grid-cols-1 sm:grid-cols-2';
            if (imageCount === 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
            return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'; // 4 or more
        };

        // Dynamic container max width based on number of images
        const getContainerClasses = () => {
            const imageCount = patientImages.length;
            if (imageCount === 1) return 'max-w-md mx-auto';
            if (imageCount === 2) return 'max-w-2xl mx-auto';
            if (imageCount === 3) return 'max-w-4xl mx-auto';
            return 'max-w-6xl mx-auto'; // 4 or more
        };

        return (
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Happy Patients
                </h3>
                
                {/* Mobile Carousel - Always single image view */}
                <div className="block md:hidden">
                    <div 
                        className="relative h-64 rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto"
                        onMouseEnter={() => setIsPatientCarouselAutoPlaying(false)}
                        onMouseLeave={() => setIsPatientCarouselAutoPlaying(true)}
                    >
                        <Image
                            src={patientImages[currentPatientIndex] || ''}
                            alt={`Happy patient ${currentPatientIndex + 1}`}
                            fill
                            className="object-cover transition-all duration-500"
                        />
                    </div>
                    
                    {/* Patient Image Dots - Only show if more than 1 image */}
                    {patientImages.length > 1 && (
                        <div className="flex justify-center mt-4 gap-2">
                            {patientImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToPatientImage(index)}
                                    className={`
                                        w-3 h-3 rounded-full transition-all duration-200
                                        ${index === currentPatientIndex
                                            ? colors.accentBg
                                            : 'bg-gray-300 hover:bg-gray-400'
                                        }
                                    `}
                                    aria-label={`Go to patient image ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Desktop Grid - Dynamic layout based on image count */}
                <div className={`hidden md:block ${getContainerClasses()}`}>
                    <div className={`grid ${getGridClasses()} gap-4`}>
                        {patientImages.map((image, index) => (
                            <div 
                                key={index} 
                                className={`
                                    relative rounded-xl overflow-hidden shadow-lg 
                                    hover:shadow-xl transform hover:scale-105 
                                    transition-all duration-300
                                    ${patientImages.length === 1 ? 'h-80' : 'h-48'}
                                `}
                            >
                                <Image
                                    src={image || ''}
                                    alt={`Happy patient ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
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

                {/* Google Reviews Button */}
                <GoogleReviewButton />

                {/* Patient Images Carousel */}
                <PatientImageCarousel />

                {/* Mobile Carousel for Reviews */}
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

                    {/* Review Dots Indicator */}
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

                {/* Desktop Grid for Reviews */}
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
 