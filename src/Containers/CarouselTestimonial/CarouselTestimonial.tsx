import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import SmallText from '@Text/SmallText';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export interface ICarouselTestimonialProps {
    carouselTitle: string;
    carouselImage: string;
    reviewDescriptions: string[];
    reviewers: string[];
    carouselAutoplay: boolean;
    carouselInterval: number;
    carouselLoop: boolean;
}

export const CarouselTestimonial: React.FC<ICarouselTestimonialProps> = ({
    carouselTitle,
    carouselImage,
    reviewDescriptions,
    reviewers,
    carouselAutoplay,
    carouselInterval,
    carouselLoop,
}) => {
    /**
     * Returns the JSX element of each carousel item based on its index
     */
    const getCarouselItem = (index: number) => (
        <Section key={index}>
            <TitleDiv key={carouselTitle}>{carouselTitle}</TitleDiv>
            <ImageDiv key={carouselImage}>
                <img src={carouselImage} />
            </ImageDiv>
            <ReviewTextDiv>
                <SmallText color="#006aff" size="h4" bold>
                    {reviewDescriptions[index]}
                </SmallText>
            </ReviewTextDiv>
            <ReviwerDiv>
                <SmallText color="#737373" size="h7" bold>
                    {reviewers[index]}
                </SmallText>
            </ReviwerDiv>
        </Section>
    );

    /**
     * Returns all carousel items
     */
    const getCarousel = () => {
        let index = 0;
        return reviewDescriptions.map(() => getCarouselItem(index++));
    };
    return (
        <Carousel
            autoPlay={carouselAutoplay}
            interval={carouselInterval}
            infiniteLoop={carouselLoop}
        >
            {getCarousel()}
        </Carousel>
    );
};

const Section = styled.div`
    margin: 10px 0px 10px 0px;
`;
const TitleDiv = styled.div`
    font-size:16px;
    color: black;
    font-family: "Square Market", Helvetica, Arial, sans-serif;"
`;
const ImageDiv = styled.div`
    margin-top: 10px;
    max-width: 90px;
    margin-left: auto;
    margin-right: auto;
`;
const ReviewTextDiv = styled.div`
    margin-bottom: 14px;
    margin-top: 28px;
`;
const ReviwerDiv = styled.div`
    font-weight: 600;
    margin-bottom: 60px;
`;
