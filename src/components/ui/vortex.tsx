import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { createNoise3D } from 'simplex-noise';
import { motion } from 'motion/react';

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || '#000000';
  const tick = useRef(0); // Use useRef for tick
  const noise3D = useMemo(() => createNoise3D(), []); // Memoize noise3D instance
  const particleProps = useRef(new Float32Array(particlePropsLength)); // Use useRef for particleProps

  // Initialize particleProps.current based on particlePropsLength
  useEffect(() => {
    particleProps.current = new Float32Array(particlePropsLength);
  }, [particlePropsLength]);

  // Wrap center array in useMemo to prevent it from changing on every render
  const center = useMemo<[number, number]>(() => [0, 0], []);

  const TAU: number = 2 * Math.PI;
  // Memoize utility functions
  const rand = useCallback((n: number): number => n * Math.random(), []);
  const randRange = useCallback((n: number): number => n - rand(2 * n), [rand]); // Depends on rand
  const fadeInOut = useCallback((t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  }, []);
  const lerp = useCallback(
    (n1: number, n2: number, speed: number): number =>
      (1 - speed) * n1 + speed * n2,
    []
  );

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        resize(canvas);
        initParticles();
        draw(canvas, ctx);
      }
    }
  }, [draw, initParticles, resize]); // Added dependencies

  const initParticles = useCallback(() => {
    // Wrapped in useCallback
    tick.current = 0; // Use tick.current
    // simplex = new SimplexNoise();
    // Ensure particleProps.current is initialized before use
    if (
      !particleProps.current ||
      particleProps.current.length !== particlePropsLength
    ) {
      particleProps.current = new Float32Array(particlePropsLength);
    }

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  }, [
    particlePropsLength,
    particlePropCount,
    // center, // Captured by initParticle
    // rangeY, // Captured by initParticle
    // baseTTL, // Captured by initParticle
    // rangeTTL, // Captured by initParticle
    // baseSpeed, // Captured by initParticle
    // rangeSpeed, // Captured by initParticle
    // baseRadius, // Captured by initParticle
    // rangeRadius, // Captured by initParticle
    // baseHue, // Captured by initParticle
    // rangeHue, // Captured by initParticle
    initParticle,
  ]);

  const initParticle = useCallback(
    (i: number) => {
      // This is called by initParticles, if initParticles is useCallback, this might also need to be, or be part of it.
      // For now, assuming it's okay as a direct call from a useCallback'd function if its own dependencies are stable or passed in.
      // However, it uses canvasRef.current directly which can be an issue if canvasRef itself changes.
      // Let's add its dependencies for now.
      const canvas = canvasRef.current;
      if (!canvas) return;

      const x = rand(canvas.width);
      const y = center[1] + randRange(rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(rangeHue);

      particleProps.current.set(
        [x, y, vx, vy, life, ttl, speed, radius, hue],
        i
      ); // Use particleProps.current
    },
    [
      center,
      rangeY,
      baseTTL,
      rangeTTL,
      baseSpeed,
      rangeSpeed,
      baseRadius,
      rangeRadius,
      baseHue,
      rangeHue,
      // particleProps, // particleProps.current is used, ref itself is stable
      rand,
      randRange,
    ]
  );

  const draw = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      // Wrapped in useCallback
      tick.current++; // Use tick.current

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawParticles(ctx);
      renderGlow(canvas, ctx);
      renderToScreen(canvas, ctx);

      window.requestAnimationFrame(() => draw(canvas, ctx));
    },
    [
      backgroundColor,
      particlePropsLength,
      particlePropCount,
      noise3D, // from useMemo
      // xOff, // Constant
      // yOff, // Constant
      // zOff, // Constant
      // noiseSteps, // Constant
      // TAU, // Constant
      lerp, // useCallback
      checkBounds, // useCallback
      initParticle, // useCallback
      fadeInOut, // useCallback
      renderGlow, // useCallback
      renderToScreen, // useCallback
      updateParticle, // useCallback
      drawParticles, // useCallback
    ]
  );

  const drawParticles = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      // Wrapped in useCallback
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i, ctx);
      }
    },
    [particlePropsLength, particlePropCount, updateParticle]
  ); // Added dependencies

  // Wrapped in useCallback
  const updateParticle = useCallback(
    (i: number, ctx: CanvasRenderingContext2D) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const i2 = 1 + i;
      const i3 = 2 + i;
      const i4 = 3 + i;
      const i5 = 4 + i;
      const i6 = 5 + i;
      const i7 = 6 + i;
      const i8 = 7 + i;
      const i9 = 8 + i;

      const x = particleProps.current[i]; // Use particleProps.current
      const y = particleProps.current[i2]; // Use particleProps.current
      const n =
        noise3D(x * xOff, y * yOff, tick.current * zOff) * noiseSteps * TAU; // Use tick.current
      const vx = lerp(particleProps.current[i3], Math.cos(n), 0.5); // Use particleProps.current
      const vy = lerp(particleProps.current[i4], Math.sin(n), 0.5); // Use particleProps.current
      let life = particleProps.current[i5]; // Use particleProps.current
      const ttl = particleProps.current[i6]; // Use particleProps.current
      const speed = particleProps.current[i7]; // Use particleProps.current
      const x2 = x + vx * speed;
      const y2 = y + vy * speed;
      const radius = particleProps.current[i8]; // Use particleProps.current
      const hue = particleProps.current[i9]; // Use particleProps.current

      drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

      life++;

      particleProps.current[i] = x2; // Use particleProps.current
      particleProps.current[i2] = y2; // Use particleProps.current
      particleProps.current[i3] = vx; // Use particleProps.current
      particleProps.current[i4] = vy; // Use particleProps.current
      particleProps.current[i5] = life; // Use particleProps.current

      if (checkBounds(x, y, canvas) || life > ttl) {
        initParticle(i);
      }
    },
    [
      noise3D,
      xOff,
      yOff,
      zOff,
      noiseSteps,
      TAU,
      lerp,
      checkBounds, // Now a memoized callback
      initParticle,
      fadeInOut,
      // particleProps, // Ref itself is stable, .current is used
      drawParticle, // Now a memoized callback
    ]
  );

  const drawParticle = useCallback(
    (
      x: number,
      y: number,
      x2: number,
      y2: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number,
      ctx: CanvasRenderingContext2D
    ) => {
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineWidth = radius;
      ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    [fadeInOut]
  ); // Added fadeInOut dependency

  const checkBounds = useCallback(
    (x: number, y: number, canvas: HTMLCanvasElement) => {
      return x > canvas.width || x < 0 || y > canvas.height || y < 0;
    },
    []
  ); // No external dependencies from component scope

  const resize = useCallback(
    (canvas: HTMLCanvasElement) => {
      const { innerWidth, innerHeight } = window;

      canvas.width = innerWidth;
      canvas.height = innerHeight;

      center[0] = 0.5 * canvas.width;
      center[1] = 0.5 * canvas.height;
    },
    [center]
  );

  const renderGlow = useCallback(
    (
      // Wrapped in useCallback
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D
    ) => {
      ctx.save();
      ctx.filter = 'blur(8px) brightness(200%)';
      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();

      ctx.save();
      ctx.filter = 'blur(4px) brightness(200%)';
      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    },
    []
  ); // No external dependencies

  const renderToScreen = useCallback(
    (
      // Wrapped in useCallback
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D
    ) => {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    },
    []
  ); // No external dependencies

  useEffect(() => {
    setup();
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        resize(canvas);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setup, resize]);

  return (
    <div className={cn('relative h-full w-full', props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className='absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center'
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn('relative z-10', props.className)}>
        {props.children}
      </div>
    </div>
  );
};
