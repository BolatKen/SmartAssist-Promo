// components/PortfolioSection.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FocusLock from "react-focus-lock";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Проект: SmartAssist",
    description: "Современный лендинг для агентства цифрового маркетинга.",
    images: [
      "/portfolio/smartassist-1.png",
      "/portfolio/smartassist-2.jpg",
      "/portfolio/smartassist-3.jpeg",
    ],
    url: "https://smartassist.kz",
  },
  {
    title: "Интеграция Amo-CRM для вашего бизнеса",
    description: "Лендинг для SaaS-компании с упором на UI/UX.",
    images: ["/portfolio/bolat&co-1.jpeg", "/portfolio/bolat&co-2.jpeg", "/portfolio/bolat&co-3.jpeg"],
    url: "https://crmbolat.kz",
  },
];

export default function PortfolioSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (projectIndex: number, imageIndex: number) => {
    setActiveProjectIndex(projectIndex);
    setActiveImageIndex(imageIndex);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    const images = projects[activeProjectIndex].images;
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = projects[activeProjectIndex].images;
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Наши работы</h2>

        <div className="grid gap-12">
          {projects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {project.images.map((src, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative h-52 sm:h-60 md:h-48 lg:h-40 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => openModal(projectIndex, imageIndex)}
                  >
                    <Image
                      src={src}
                      alt={`Screenshot ${imageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              <Link
                href={project.url}
                target="_blank"
                className="inline-block mt-2 px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                Посетить сайт →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
  className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4"
  onClick={closeModal}
>
  <FocusLock>
    <div
      className="relative w-full h-full max-w-6xl max-h-[95vh] flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
                src={projects[activeProjectIndex].images[activeImageIndex]}
                alt="Modal Image"
                width={1200}
                height={800}
                className="rounded-lg object-contain w-full max-h-[80vh] mx-auto"
              />
    </div>

    {/* Кнопка закрытия */}
    <button
      onClick={closeModal}
      className="fixed top-3 right-3 sm:top-4 sm:right-4 text-white bg-black/40 hover:bg-black/60 rounded-full p-2 z-50"
    >
      <X size={24} className="sm:size-7" />
    </button>

    {/* Стрелки */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        prevImage();
      }}
      className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 z-50"
    >
      <ArrowLeft size={24} className="sm:size-7" />
    </button>
    <button
      onClick={(e) => {
        e.stopPropagation();
        nextImage();
      }}
      className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 z-50"
    >
      <ArrowRight size={24} className="sm:size-7" />
    </button>
  </FocusLock>
</div>

      )}
    </section>
  );
}
