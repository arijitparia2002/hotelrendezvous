import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const LINKS = [
  "https://momento360.com/e/u/a775d836362b4cda9947eaea99e45b79?utm_campaign=embed&utm_source=other&heading=79.8&pitch=20.8&field-of-view=75&size=medium&display-plan=true",
  "https://momento360.com/e/u/70a4fe77a87f49a89a578ca8e6aa21d4?utm_campaign=embed&utm_source=other&heading=156.01&pitch=34.82&field-of-view=75&size=medium&display-plan=true",
  "https://momento360.com/e/u/bad83727f9f34f6188fcdbfe70e9f3aa?utm_campaign=embed&utm_source=other&heading=231.6&pitch=-32.4&field-of-view=75&size=medium&display-plan=true",
];

const View3d = () => {
  const iframeRef = useRef(null);
  const { roomId } = useParams();
  const index = roomId % 3;

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleEnterFullscreen = () => {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    };

    const handleLoad = () => {
      const iframeWindow = iframe.contentWindow;
      if (iframeWindow) {
        iframeWindow.addEventListener("load", handleEnterFullscreen);
      }
    };

    iframe.addEventListener("load", handleLoad);

    return () => {
      const iframeWindow = iframe.contentWindow;
      if (iframeWindow) {
        iframeWindow.removeEventListener("load", handleEnterFullscreen);
      }
      iframe.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <iframe
      id="fullscreen-iframe"
      src={LINKS[index]}
      frameBorder="0"
      style={{ width: "100vw", height: "100vh", border: "none" }}
      ref={iframeRef}
    />
  );
};

export default View3d;
