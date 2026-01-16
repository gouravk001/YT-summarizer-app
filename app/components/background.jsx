"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function GalaxyBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      className="fixed z-[-1]"
      options={{
        background: {
          color: "#020617", 
        },
        fpsLimit: 60,
        detectRetina: true,

        particles: {
          number: {
            value: 250,
            density: {
              enable: true,
              area: 1200,
            },
          },

          color: {
            value: ["#ffffff", "#c7d2fe", "#f8fafc"],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: { min: 0.4, max: 1.0 },
            animation: {
              enable: true,
              speed: 0.3,
              sync: false,
            },
          },

          size: {
            value: { min: 0.5, max: 2.5 },
          },

          move: {
            enable: true,
            speed: 0.25,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },

          glow: {
            enable: true,
            color: "#93c5fd",
            strength: 2,
          },
        },

        interactivity: {
          
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.2,
              },
            },
          },
        },
      }}
    />
  );
}
