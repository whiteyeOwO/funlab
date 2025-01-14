import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const MatterComponent = () => {
  const matterBoxRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const Body = Matter.Body;
    const Events = Matter.Events;

    let hasStarted = false;

    const startSimulation = () => {
      if (hasStarted) return;
      hasStarted = true;

      // Add rectangular elements
      const matterElems = Array.from(document.querySelectorAll('.dm-matter-elem'));
      const elemBodies = matterElems.map((matterElem) => {
        const elemWidth = matterElem.offsetWidth;
        const elemHeight = matterElem.offsetHeight;
        const elemPosX = matterElem.offsetLeft + elemWidth / 2;
        const elemPosY = matterElem.offsetTop + elemHeight / 2;

        const elemBody = Bodies.rectangle(elemPosX, elemPosY, elemWidth, elemHeight, {
          density: 0.01,
          friction: 0.1,
          restitution: 0.2,
          render: {
            opacity: 0,
          },
        });
        Composite.add(engine.world, elemBody);
        return elemBody;
      });

      // Add circular elements
      const matterCircles = Array.from(document.querySelectorAll('.dm-matter-elem-circle'));
      const circleBodies = matterCircles.map((circleElem) => {
        const radius = Math.max(circleElem.offsetWidth, circleElem.offsetHeight) / 2;
        const posX = circleElem.offsetLeft + radius;
        const posY = circleElem.offsetTop + radius;

        const circleBody = Bodies.circle(posX, posY, radius, {
          density: 0.01,
          friction: 0.1,
          restitution: 0.2,
          render: {
            opacity: 0,
          },
        });
        Composite.add(engine.world, circleBody);
        return circleBody;
      });

      // Add pill-shaped elements
      const matterPills = Array.from(document.querySelectorAll('.dm-matter-elem-pill'));
      const pillBodies = matterPills.map((pillElem) => {
        const pillWidth = pillElem.offsetWidth;
        const pillHeight = pillElem.offsetHeight;
        const pillPosX = pillElem.offsetLeft + pillWidth / 2;
        const pillPosY = pillElem.offsetTop + pillHeight / 2;
        const pillRadius = pillHeight / 2;

        const leftCircle = Bodies.circle(pillPosX - pillWidth / 2 + pillRadius, pillPosY, pillRadius, {
          render: { opacity: 0 },
        });

        const rightCircle = Bodies.circle(pillPosX + pillWidth / 2 - pillRadius, pillPosY, pillRadius, {
          render: { opacity: 0 },
        });

        const rect = Bodies.rectangle(pillPosX, pillPosY, pillWidth - pillHeight, pillHeight, {
          render: { opacity: 0 },
        });

        const pillBody = Body.create({
          parts: [leftCircle, rightCircle, rect],
          friction: 0.1,
          restitution: 0.2,
        });

        Composite.add(engine.world, pillBody);
        return pillBody;
      });

      // Update positions for all elements
      Events.on(engine, 'afterUpdate', () => {
        elemBodies.forEach((body, index) => {
          const elem = matterElems[index];
          updateElementPosition(elem, body);
        });

        circleBodies.forEach((body, index) => {
          const elem = matterCircles[index];
          updateElementPosition(elem, body);
        });

        pillBodies.forEach((body, index) => {
          const elem = matterPills[index];
          updateElementPosition(elem, body);
        });
      });

      // Create runner
      const runner = Runner.create();
      runnerRef.current = runner;

      // Run engine and renderer
      Runner.run(runner, engine);
    };

    const updateElementPosition = (elem, body) => {
      const { x, y } = body.position;
      const angle = body.angle;

      elem.style.left = `${x - elem.offsetWidth / 2}px`;
      elem.style.top = `${y - elem.offsetHeight / 2}px`;
      elem.style.transform = `rotate(${angle}rad)`;
    };

    // Create engine
    const engine = Engine.create();
    engineRef.current = engine;

    // Select container
    const matterBox = matterBoxRef.current;
    if (!matterBox) return;

    // Create renderer
    const render = Render.create({
      element: matterBox,
      engine: engine,
      options: {
        width: matterBox.clientWidth,
        height: matterBox.clientHeight,
        wireframes: false,
        background: 'transparent',
        pixelRatio: window.devicePixelRatio,
      },
    });
    renderRef.current = render;

    // Add boundaries

    const boundaries = [
      Bodies.rectangle(matterBox.clientWidth / 2, matterBox.clientHeight, matterBox.clientWidth, 10, {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
        },
      }),
      Bodies.rectangle(0, matterBox.clientHeight / 2, 1, matterBox.clientHeight, {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
        },
      }),
      Bodies.rectangle(matterBox.clientWidth, matterBox.clientHeight / 2, 1, matterBox.clientHeight, {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
        },
      }),
      Bodies.rectangle(matterBox.clientWidth / 2, 0, matterBox.clientWidth, 10, {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
        },
      }),
    ];
    Composite.add(engine.world, boundaries);

    // Scroll event listener
    const handleScroll = () => {
      const dropText = document.querySelector('#index-dropText');
      if (dropText) {
        const rect = dropText.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          startSimulation();
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Run renderer
    Render.run(render);

    // Clean up
    return () => {
      Render.stop(render);
      Composite.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={matterBoxRef} className="matter-box">
      <div className="tag1 dm-matter-elem-pill">
        <p>Fresh Fruits</p>
      </div>
      <div className="tag2 dm-matter-elem-pill">
        <p>滑順牛乳</p>
      </div>
      <div className="tag3 dm-matter-elem-pill">
        <p>QQ彈彈珍珠</p>
      </div>
      <div className="tag4 dm-matter-elem-pill">
          <img src="images/icon/graph-smileWhite .svg" alt="" />
          <img src="images/icon/graph-smileWhite .svg" alt="" />
      </div>
      <div className="tag5 dm-matter-elem-pill">
          <img src="images/icon/graph-HeartWhite.svg" alt="" />
      </div>
      <div className="tag6 dm-matter-elem-pill">
        <p>Fabulous Drink</p>
      </div>
      <div className="tag7 dm-matter-elem">
        <p>植物鮮奶</p>
      </div>
      <div className="tag8 dm-matter-elem-pill">
        <p>快樂加倍</p>
      </div>
      <div className="tag9 dm-matter-elem">
        <p>鮮甜水果</p>
      </div>
      <div className="tag10 dm-matter-elem-pill">
        <p>FUN LAB放飲</p>
      </div>
    </div>
  );
};

export default MatterComponent;
