'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    particlesJS: (
      tagId: string,
      options: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        particles: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        interactivity: any;
        retina_detect: boolean;
      }
    ) => void;
  }
}

export default function ParticlesBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side rendering
    setIsClient(true);

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ['#00FF94', '#00b8ff'],
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#00FF94',
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          retina_detect: false,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isClient) {
    // Avoid rendering during SSR
    return null;
  }

  return (
    <div
      id="particles-js"
      className="fixed inset-0 z-0"
      style={{
        background: 'linear-gradient(135deg, #0A0B0E 0%, #12151a 100%)',
      }}
    />
  );
}
