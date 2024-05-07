import React from "react";
import { useKeenSlider } from "keen-slider/react";
import iphone from "assets/images/iphone.png";
import "keen-slider/keen-slider.min.css";
import "styles/sliderProducts.css";

function ManaSliderProducts() {
  const pics = [
    { id: 1, image: iphone },
    { id: 2, image: iphone },
    { id: 3, image: iphone },
    { id: 4, image: iphone },
    { id: 5, image: iphone },
    { id: 6, image: iphone },
    { id: 7, image: iphone },
  ];

  function ThumbnailPlugin(mainRef) {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active");
        });
      }
      function addActive(idx) {
        slider.slides[idx].classList.add("active");
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx);
          });
        });
      }

      slider.on("created", () => {
        if (!mainRef.current) return;
        addActive(slider.track.details.rel);
        addClickEvents();
        mainRef.current.on("animationStarted", (main) => {
          removeActive();
          const next = main.animator.targetIdx || 0;
          addActive(main.track.absToRel(next));
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
        });
      });
    };
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className="slider">
      <div ref={sliderRef} className="keen-slider">
        {pics.map((item) => (
          <div key={item.id} className="keen-slider__slide number-slide1">
            <img
              src={item.image}
              alt={""}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>

      <div
        ref={thumbnailRef}
        className="keen-slider thumbnail"
        style={{ marginTop: "2.5rem" }}
      >
        {pics.map((item) => (
          <div key={item.id} className="keen-slider__slide number-slide1">
            <img
              src={item.image}
              alt={""}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManaSliderProducts;
