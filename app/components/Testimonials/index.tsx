import avatar from "~/assets/avatar.webp";

import {
  ClientAvatar,
  ClientName,
  ClientReview,
  Container,
  Section,
  Testimonial,
} from "./styles";

const reviews = [
  {
    img: avatar,
    name: "Rachel McDermott",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus nulla quae iste nihil suscipit error eum quaerat cum architecto?",
  },
];

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Container>
        {reviews.map((review, index) => (
          <Testimonial key={index}>
            <ClientAvatar>
              <img src={review.img} alt={review.name} />
            </ClientAvatar>
            <ClientName>{review.name}</ClientName>
            <ClientReview>{review.review}</ClientReview>
          </Testimonial>
        ))}
      </Container>
    </Section>
  );
};

export default Testimonials;
