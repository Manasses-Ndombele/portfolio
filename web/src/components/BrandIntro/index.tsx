"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero-photo.png";
import "@/styles/components/brand-intro.scss";

function BrandIntro() {
  const { t } = useTranslation();

  return (
	<div id="brand-intro-overlay">
		<div id="brand-intro">
			<Image src="https://res.cloudinary.com/dl2earg2m/image/upload/v1758814298/perfil_1_fosf7f.jpg" alt="Foto de perfil" id="profile-img" width={100} height={100} />
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
		</div>
	</div>
  );
}

export default BrandIntro;
