import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface HomeServicesSectionProps {
  subdomain: string
}

const HomeServicesSection: React.FC<HomeServicesSectionProps> = ({ subdomain }) => {
  const router = useRouter();
  const filteredServices = services.filter(service => service.subdomain === subdomain);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current){
      const {scrollLeft, clientWidth} = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // adjust as needed
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h3 className="text-gray-700 uppercase tracking-wider text-sm font-medium">
             Our Treatments 
            </h3>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900">
              Advanced Cardiac
              <span className={` ${subdomain === 'drjay' ? 'text-amber-600' : 'text-teal-700'} `}>
                {' '}Care Treatments
              </span>
            </h2>
          </div>
          <div className='relative'>
            <button 
            className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white'
            onClick={() => scroll('left')}
    aria-label="Scroll left"
    type="button"
    >

      <ArrowLeft className='w-6 h-6 text-gray-700' />
    </button>

          {/* Cards Container */}
          <div
          /// <reference path=" />
          ref={scrollRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 py-8 px-4"
            style={{
              scrollSnapType: 'x mandatory',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            {filteredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="no-underline"
              >
                <motion.div
                  className="relative flex-none w-[300px] h-[400px] rounded-xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ scrollSnapAlign: 'center' }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.symptoms?.slice(0, 2).map((symptom) => (
                        <span
                          key={symptom}
                          className="text-xs px-3 py-1 bg-white/20 rounded-full"
                        >
                          {symptom}
                        </span>
                      ))}
                      {service.procedureInfo && (
                        <span className="text-xs px-3 py-1 bg-white/20 rounded-full">
                          {service.procedureInfo}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          type="button"
          >
    <ArrowRight className="w-6 h-6 text-gray-700" />

          </button>
          </div>
        </motion.div>
     </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => router.push("/services")}
          className={`mt-8 rounded-lg px-8 py-4 text-lg transition duration-300 text-white ${subdomain === 'drjay' ? 'bg-red-800 hover:bg-red-900' : subdomain === 'dranupam' ? 'bg-teal-700 hover:bg-teal-800' : 'bg-gray-400 hover:bg-gray-500'}`}
        >
          Explore All Services 
        </button>
      </div>
      </section>
  
  );
};

export default HomeServicesSection;