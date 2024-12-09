var swiper = new Swiper(".swiper-container", {
    loop: true, // Sonsuz kaydırma
    grabCursor: true, // Fareyle kaydırmayı aktif et
    slidesPerView: 2.5, // 2.5 kart gösterecek
    spaceBetween: 30, // Kartlar arasındaki boşluk
    breakpoints: {
      1024: {
        slidesPerView: 2.5, // 1024px ve üzeri ekranlarda 2.5 kart
      },
      600: {
        slidesPerView: 1.5, // 600px ve üzeri ekranlarda 1.5 kart
      },
      0: {
        slidesPerView: 1.2, // 0 ve üzeri ekranlarda 1.2 kart
      },
    },
    touchEventsTarget: "container", // Mobilde kaydırmayı etkinleştir
  });
  // Sayıları arttıran fonksiyon
  const countUp = (elementId, start, end, duration) => {
    let startTime = null;
    const element = document.getElementById(elementId);

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const value = Math.min(
        start + (end - start) * (progress / duration),
        end
      );

      element.textContent = Math.floor(value) + "+"; // "+" işareti eklendi

      if (progress < duration) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  // Intersection Observer ile scroll'u takip etme
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp("count-1", 0, 200, 2000); // Sayı artışı
          countUp("count-2", 0, 300, 2000); // Sayı artışı
          countUp("count-3", 0, 50, 2000); // Sayı artışı
          observer.disconnect(); // Animasyon başladı, bir daha gözlemlenmesin
        }
      });
    },
    { threshold: 0.5 }
  );

  // Kartları gözlemlemeye başla
  observer.observe(document.querySelector(".grid"));
  function toggleAccordion(index) {
    const contents = document.querySelectorAll("[id^='content-']");
    const icons = document.querySelectorAll("[id^='icon-']");

    // SVG for Down icon
    const downSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.95874 26C5.95874 37.0673 14.9309 46.0417 26.0004 46.0417C37.0677 46.0417 46.0421 37.0673 46.0421 26C46.0421 14.9327 37.0677 5.95834 26.0004 5.95834C14.9309 5.95834 5.95874 14.9327 5.95874 26Z" fill="#3F50BB"/>
  <path d="M18.4795 29.125L26 21.572L33.5205 29.125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

    // SVG for Up icon
    const upSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.95874 26C5.95874 37.0673 14.9309 46.0417 26.0004 46.0417C37.0677 46.0417 46.0421 37.0673 46.0421 26C46.0421 14.9327 37.0677 5.95834 26.0004 5.95834C14.9309 5.95834 5.95874 14.9327 5.95874 26Z" fill="#EDEFFB"/>
  <path d="M18.4795 22.875L26 30.428L33.5205 22.875" stroke="#3F50BB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

    // Kapalı duruma sıfırla
    contents.forEach((content, idx) => {
      const icon = icons[idx];
      content.style.maxHeight = "0";
      icon.innerHTML = upSVG;
    });

    // Tıklanan öğeyi aç/kapat
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      content.style.maxHeight = "0";
      icon.innerHTML = upSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.innerHTML = downSVG;
    }
  }

  // Başlangıçta ilk accordion'ı aç
  document.addEventListener("DOMContentLoaded", () => {
    toggleAccordion(1); // İlk accordion'ı açmak için
  });