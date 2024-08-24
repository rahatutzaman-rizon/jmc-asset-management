import React from 'react';
import Image from 'next/image';

export default function Achievement() {
  return (
    <div className="bg-gray-100 text-primary min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Achievement</h1>
          <p className="text-lg text-primary max-w-2xl mx-auto">
          At JMC, we pride ourselves on delivering exceptional asset management solutions that optimize performance and drive value for our clients.
          </p>
        </section>

        <div className="space-y-20">
          <AchievementSection
            imageUrl="https://i.ibb.co/djcTRSS/design1.png"
            altText="Modern office building"
            description="With our innovative data analytics tools we have empowered clients to make informed decisions, leading to a 25% increase in asset lifecycle and a significant reduction in operational costs."
            isReversed={false}
          />

          <AchievementSection
            imageUrl="https://i.ibb.co/djcTRSS/design1.png"
            altText="Innovative architectural design"
            description="With our innovative data analytics tools, we have empowered clients to make informed decisions, leading to a 25% increase in asset lifecycle and a significant reduction in operational costs."
            isReversed={true}
          />
        </div>
      </div>
    </div>
  );
}

function AchievementSection({ imageUrl, altText, description, isReversed }) {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center bg-white rounded-lg shadow-lg overflow-hidden`}>
      <div className="md:w-1/2">
        <Image
          src={imageUrl}
          alt={altText}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-8">
        <p className="text-lg leading-relaxed text-primary">{description}</p>
      </div>
    </div>
  );
}
