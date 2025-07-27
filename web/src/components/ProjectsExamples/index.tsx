"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
import { data } from "@/data/projects";
import { useTranslation } from "react-i18next";
import "swiper/swiper-bundle.css";
import "@/styles/components/project-examples.scss";

export default function ProjectsExamples() {
  const { t } = useTranslation();
  return (
    <div id="projects-examples">
      <div id="projects-examples-copy">
        <h2>{t("projects-container.title")}</h2>
        <p>{t("projects-container.description")}</p>
      </div>
      <Swiper
        id="swiper-projects"
        modules={[Navigation, A11y, Pagination]}
        slidesPerView={1}
        navigation
        spaceBetween={50}
        speed={1500}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSlideChange={() => {
          console.log("slide change");
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
      >
        <SwiperSlide>
          <ProjectCard
            imgSrc={data[11].img}
            projectName={data[11].name}
            tags={data[11].categories}
            styleClass="card-a"
            projectId={11}
            imgAlt={data[11].imgAlt}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            imgSrc={data[12].img}
            projectName={data[12].name}
            tags={data[12].categories}
            styleClass="card-a"
            projectId={12}
            imgAlt={data[12].imgAlt}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            imgSrc={data[13].img}
            projectName={data[13].name}
            tags={data[13].categories}
            styleClass="card-a"
            projectId={13}
            imgAlt={data[13].imgAlt}
          />
        </SwiperSlide>
      </Swiper>
      <div id="projects-cta-container">
        <Link href="/projects">
          <span>{t("projects-container.btn-action")}</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
