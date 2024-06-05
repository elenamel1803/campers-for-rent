import {
  HomeWrap,
  Paragraph,
  Section,
  Service,
  Services,
  SubTitle,
  Title,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeWrap>
      <Section>
        <Title>Camper Rental in Ukraine</Title>
        <SubTitle>Welcome to Our Company!</SubTitle>
        <Paragraph>
          We offer modern and comfortable campers for rent for your journey
          across Ukraine. Discover the beauty of our country with maximum
          comfort and convenience.
        </Paragraph>
        <Services>
          <Service>
            <h3>Camper Rentals</h3>
            <p>
              Our campers are equipped with everything you need for a
              comfortable stay: cozy sleeping areas, a kitchen, shower, toilet,
              and more.
            </p>
          </Service>
          <Service>
            <h3>Route Planning</h3>
            <p>
              We help you plan the perfect travel route, taking into account
              your preferences and interests.
            </p>
          </Service>
          <Service>
            <h3>24/7 Support</h3>
            <p>
              Our support team is available 24/7 to ensure your safety and
              comfort during your journey.
            </p>
          </Service>
        </Services>
      </Section>
    </HomeWrap>
  );
};

export default HomePage;
