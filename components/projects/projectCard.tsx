"use client"

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type ProjectCardProps = {
  title: string;
  images: string[] | null;
  description: string;
};

export const ProjectCard = ({ title, images, description }: ProjectCardProps) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="mb-16">
      <label className="text-4xl">{title}</label>
      {
        images?.length ? (
          <Slider {...sliderSettings}>
            {images.map((src, idx) => (
              <div key={idx} className="relative h-96">
                <Image
                  src={src}
                  alt={title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </Slider>
        ) : <></>
      }

      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};
