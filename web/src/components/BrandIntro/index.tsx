"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/coding.png";
import "@/styles/components/brand-intro.scss";

function BrandIntro() {
  const { t } = useTranslation();

  return (
    <div id="brand-intro">
      <div id="brand-intro-content">
        <h1>
          {t("main-copy.title")}
          <strong>{t("main-copy.title.strong")}</strong>
        </h1>
        <p>{t("main-copy.description")}</p>
        <Link href="#contacts-container">
          <button type="button" className="main-cta">
            {t("main-copy.cta-btn")}
          </button>
        </Link>
      </div>
      <div id="brand-intro-video">
        <Image src={heroImg} alt="Computador e códigos" unoptimized />
      </div>
    </div>
  );
}

export default BrandIntro;
