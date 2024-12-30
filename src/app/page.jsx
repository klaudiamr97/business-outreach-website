'use client';
import ListBlock from '@/components/ListBlock';
import CaseStudies from '@/components/CaseStudies';
import CallToAction from '@/components/CTA';
import Hero from '@/components/Hero';
import ImageText from '@/components/ImageText';
import ImagePack from '@/assets/Intro_image.png';
import Restaurant from '@/assets/veganic_home-1_small.webp';
import DigivateLogo from '@/assets/white-logo.svg';
import VeganicLogo from '@/assets/logo_veganic_restaurant_jasne.webp';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col space-y-8 overflow-x-hidden">
      <Hero
        title="Hello Veganic!"
        description="We’ve been inspired by your incredible work and wanted to share something special with you."
        heroImg={Restaurant}
        companyLogo={VeganicLogo}
        digivateLogo={DigivateLogo}
      />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
        <ImageText imgSrc={ImagePack}>
          <h2 className="text-h2 text-veganic-gold mb-6">What We Love About Veganic</h2>
          <p className="text-p leading-relaxed mt-4 max-w-prose">
            Your commitment to sustainability, plant-based living, and serving delicious, organic food truly caught our
            eye. The impact you’re making in the culinary world is not only inspiring but essential to a better, greener
            future. We believe in your mission, and we’d love to help amplify your reach and success even further.
            Together, we can share your story with a broader audience and drive even more food lovers to your doors.
          </p>
        </ImageText>

        <ListBlock
          title="What We Love About Veganic"
          listElements={[
            {
              label: 'Commitment to Sustainability:',
              description:
                'Your focus on organic, locally sourced ingredients is something we deeply admire, setting a new standard in the plant-based dining industry.',
            },
            {
              label: 'Innovative Menu:',
              description:
                'From your mouthwatering vegan tacos to decadent desserts, every dish is a celebration of flavor and ethical dining.',
            },
            {
              label: 'Connection to Community:',
              description:
                'Your dedication to supporting local farmers and reducing your environmental footprint shows how much you care about both people and the planet.',
            },
          ]}
        />
        <ListBlock
          title="Opportunities to Build on Your Success"
          listElements={[
            {
              label: 'Elevate Your Visibility:',
              description:
                'Implement a customized SEO strategy to attract eco-conscious diners and plant-based food enthusiasts, bringing more visibility to your mission and menu.',
            },
            {
              label: 'Expand Your Reach:',
              description:
                'Launch targeted PPC campaigns to connect with local customers who value sustainable dining and crave innovative vegan cuisine.',
            },
            {
              label: 'Enhance Guest Experience:',
              description:
                'Optimize your website to create a seamless journey from discovery to booking, ensuring visitors are excited to dine with you or order online.',
            },
          ]}
        />
        <CaseStudies title="Our Work That Aligns with Your Vision" />
        <CallToAction
          heading="We’d Love to Collaborate"
          description="If you’re ready to take your impact to the next level, let’s connect! We’d be thrilled to discuss how we can help Veganic shine even brighter and reach more guests who share your passion for sustainable, plant-based dining."
          buttonText="Book a call"
          buttonLink="#"
        />
      </div>
    </div>
  );
}
