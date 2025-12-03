import { useEffect, useRef } from "react";

export default function YandexMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Yandex Maps API
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=YOUR_YANDEX_API_KEY&lang=ru_RU";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.ymaps) {
        window.ymaps.ready(initMap);
      }
    };
    document.head.appendChild(script);

    const initMap = () => {
      if (!mapContainerRef.current) return;

      const myMap = new window.ymaps.Map(mapContainerRef.current, {
        center: [50.2944, 57.1471], // Qurmet Hall coordinates (Aktobe)
        zoom: 15,
      });

      // Add marker
      const myPlacemark = new window.ymaps.Placemark(
        [50.2944, 57.1471],
        {
          balloonContent: `
            <div style="font-family: Arial; font-size: 12px;">
              <strong>Qurmet Hall</strong><br/>
              ул. Братьев Жубановых, 276/1<br/>
              Актобе, Казахстан<br/>
              <a href="tel:+77001234567">+7 (700) 123-45-67</a>
            </div>
          `,
        },
        {
          preset: "islands#redIcon",
        }
      );

      myMap.geoObjects.add(myPlacemark);
    };

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "0.5rem",
      }}
    />
  );
}

declare global {
  interface Window {
    ymaps: any;
  }
}
