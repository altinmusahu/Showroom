import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';

const PixiBackground = () => {
  const pixiContainer = useRef(null);

  useEffect(() => {
    // Create a Pixi application instance
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x003329,
    });

    // Append the Pixi application view to the container element
    pixiContainer.current.appendChild(app.view);

    // Load textures using the loader
    const starTextureURL = 'https://pixijs.com/assets/star.png';
    app.loader.add(starTextureURL).load(() => {
      // Once loading is complete, proceed with scene initialization
      // Create gradient background
      const gradientTexture = PIXI.Texture.fromBuffer(
        new Uint8Array([
          0x00, 0x33, 0x29, 255,  // Top color (0x003329)
          0x00, 0x21, 0x14, 255,  // Bottom color (0x002114)
        ]),
        1,
        2
      );
      const gradientSprite = new PIXI.Sprite(gradientTexture);
      gradientSprite.width = app.renderer.width;
      gradientSprite.height = app.renderer.height;
      app.stage.addChild(gradientSprite);

      // Add starfield
      const starAmount = 1000;
      let cameraZ = 0;
      const fov = 20;
      const baseSpeed = 0.025;
      let speed = 0;
      let warpSpeed = 0;
      const starStretch = 5;
      const starBaseSize = 0.05;
      const stars = [];

      const starTexture = app.loader.resources[starTextureURL].texture;
      for (let i = 0; i < starAmount; i++) {
        const star = {
          sprite: new PIXI.Sprite(starTexture),
          z: 0,
          x: 0,
          y: 0,
        };
        star.sprite.anchor.set(0.5, 0.7);
        randomizeStar(star, true);
        app.stage.addChild(star.sprite);
        stars.push(star);
      }

      function randomizeStar(star, initial) {
        star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;
        const deg = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 1;
        star.x = Math.cos(deg) * distance;
        star.y = Math.sin(deg) * distance;
      }

      setInterval(() => {
        warpSpeed = warpSpeed > 0 ? 0 : 1;
      }, 5000);

      app.ticker.add((delta) => {
        speed += (warpSpeed - speed) / 20;
        cameraZ += delta * 10 * (speed + baseSpeed);
        for (let i = 0; i < starAmount; i++) {
          const star = stars[i];
          if (star.z < cameraZ) randomizeStar(star);
          const z = star.z - cameraZ;
          star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
          star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;
          const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
          const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
          const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
          const distanceScale = Math.max(0, (2000 - z) / 2000);
          star.sprite.scale.x = distanceScale * starBaseSize;
          star.sprite.scale.y = distanceScale * starBaseSize + (distanceScale * speed * starStretch * distanceCenter) / app.renderer.screen.width;
          star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
        }
      });

      // Add bouncing text
      const text = new PIXI.Text('Welcome to Weifield Group Contracting', {
        fontFamily: 'Arial',
        fontSize: 36,
        fill: 0xffffff,
        align: 'center',
      });
      text.anchor.set(0.5);
      text.x = app.renderer.width / 2;
      text.y = app.renderer.height / 2;
      app.stage.addChild(text);

      let bounce = 0;
      app.ticker.add((delta) => {
        bounce += delta * 0.05;
        text.y = (app.renderer.height / 2) + Math.sin(bounce) * 20;
      });

      // Clean up on unmount
      return () => {
        app.destroy(true, true);
      };
    });
  }, []);

  return <div ref={pixiContainer} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default PixiBackground;
