import React, { useEffect, useRef } from 'react';

const BubbleAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // 設置 canvas 尺寸為容器尺寸
        const updateCanvasSize = () => {
            const container = canvas.parentElement;
            const { width, height } = container.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;
            
            // 重新初始化 lava lamp
            if (window.lava0) {
                window.lava0 = new LavaLamp(width, height, 6, "#8FCFF6", "rgba(255,255,255,0)");
            }
        };

        // 初始化時調用一次
        updateCanvasSize();
        
        // 監聽視窗大小變化
        window.addEventListener('resize', updateCanvasSize);

        // 初始化 ge1doot 和 LavaLamp
        const ge1doot = {
            screen: {
                elem: canvas,
                ctx: ctx,
                width: 0,
                height: 0,
                init: function () {
                    this.width = canvas.offsetWidth;
                    this.height = canvas.offsetHeight;
                    this.elem.width = this.width;
                    this.elem.height = this.height;
                    return this;
                },
            },
        };

        const Point = function (x, y) {
            this.x = x;
            this.y = y;
            this.magnitude = x * x + y * y;
            this.computed = 0;
            this.force = 0;
        };
        Point.prototype.add = function (p) {
            return new Point(this.x + p.x, this.y + p.y);
        };

        const Ball = function (parent) {
            const min = 0.1;
            const max = 1.5;
            this.vel = new Point(
                (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.25),
                (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random())
            );
            this.pos = new Point(
                parent.width * 0.2 + Math.random() * parent.width * 0.6,
                parent.height * 0.2 + Math.random() * parent.height * 0.6
            );
            this.size =
                parent.wh / 15 + (Math.random() * (max - min) + min) * (parent.wh / 15);
            this.width = parent.width;
            this.height = parent.height;
        };

        Ball.prototype.move = function () {
            if (this.pos.x >= this.width - this.size) {
                if (this.vel.x > 0) this.vel.x = -this.vel.x;
                this.pos.x = this.width - this.size;
            } else if (this.pos.x <= this.size) {
                if (this.vel.x < 0) this.vel.x = -this.vel.x;
                this.pos.x = this.size;
            }

            if (this.pos.y >= this.height - this.size) {
                if (this.vel.y > 0) this.vel.y = -this.vel.y;
                this.pos.y = this.height - this.size;
            } else if (this.pos.y <= this.size) {
                if (this.vel.y < 0) this.vel.y = -this.vel.y;
                this.pos.y = this.size;
            }

            this.pos = this.pos.add(this.vel);
        };

        const LavaLamp = function (width, height, numBalls, c0, c1) {
            this.step = 5;
            this.width = width;
            this.height = height;
            this.wh = Math.min(width, height);
            this.sx = Math.floor(this.width / this.step);
            this.sy = Math.floor(this.height / this.step);
            this.paint = false;
            this.metaFill = createRadialGradient(width, height, width, c0, c1);
            this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0];
            this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
            this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0];
            this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1];
            this.grid = [];
            this.balls = [];
            this.iter = 0;
            this.sign = 1;

            for (let i = 0; i < (this.sx + 2) * (this.sy + 2); i++) {
                this.grid[i] = new Point(
                    (i % (this.sx + 2)) * this.step,
                    Math.floor(i / (this.sx + 2)) * this.step
                );
            }

            for (let k = 0; k < numBalls; k++) {
                this.balls[k] = new Ball(this);
            }
        };

        LavaLamp.prototype.computeForce = function (x, y, idx) {
            let force;
            const id = idx || x + y * (this.sx + 2);

            if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
                force = 0.6 * this.sign;
            } else {
                force = 0;
                const cell = this.grid[id];
                let i = 0;
                let ball;
                while ((ball = this.balls[i++])) {
                    force +=
                        (ball.size * ball.size) /
                        (-2 * cell.x * ball.pos.x -
                            2 * cell.y * ball.pos.y +
                            ball.pos.magnitude +
                            cell.magnitude);
                }
                force *= this.sign;
            }
            this.grid[id].force = force;
            return force;
        };

        LavaLamp.prototype.marchingSquares = function (next) {
            const x = next[0];
            const y = next[1];
            const pdir = next[2];
            const id = x + y * (this.sx + 2);
            if (this.grid[id].computed === this.iter) {
                return false;
            }
            let dir,
                mscase = 0;

            for (let i = 0; i < 4; i++) {
                const idn = x + this.ix[i + 12] + (y + this.ix[i + 16]) * (this.sx + 2);
                let force = this.grid[idn].force;
                if (
                    (force > 0 && this.sign < 0) ||
                    (force < 0 && this.sign > 0) ||
                    !force
                ) {
                    force = this.computeForce(
                        x + this.ix[i + 12],
                        y + this.ix[i + 16],
                        idn
                    );
                }
                if (Math.abs(force) > 1) mscase += Math.pow(2, i);
            }
            if (mscase === 15) {
                return [x, y - 1, false];
            } else {
                if (mscase === 5) dir = pdir === 2 ? 3 : 1;
                else if (mscase === 10) dir = pdir === 3 ? 0 : 2;
                else {
                    dir = this.mscases[mscase];
                    this.grid[id].computed = this.iter;
                }
                const ix =
                    this.step /
                    (Math.abs(
                        Math.abs(
                            this.grid[
                                x +
                                this.plx[4 * dir + 2] +
                                (y + this.ply[4 * dir + 2]) * (this.sx + 2)
                            ].force
                        ) - 1
                    ) /
                        Math.abs(
                            Math.abs(
                                this.grid[
                                    x +
                                    this.plx[4 * dir + 3] +
                                    (y + this.ply[4 * dir + 3]) * (this.sx + 2)
                                ].force
                            ) - 1
                        ) +
                        1);
                ctx.lineTo(
                    this.grid[
                        x + this.plx[4 * dir] + (y + this.ply[4 * dir]) * (this.sx + 2)
                    ].x +
                    this.ix[dir] * ix,
                    this.grid[
                        x +
                        this.plx[4 * dir + 1] +
                        (y + this.ply[4 * dir + 1]) * (this.sx + 2)
                    ].y +
                    this.ix[dir + 4] * ix
                );
                this.paint = true;
                return [x + this.ix[dir + 4], y + this.ix[dir + 8], dir];
            }
        };

        LavaLamp.prototype.renderMetaballs = function () {
            let i = 0,
                ball;
            while ((ball = this.balls[i++])) ball.move();
            this.iter++;
            this.sign = -this.sign;
            this.paint = false;
            ctx.fillStyle = this.metaFill;
            ctx.shadowBlur = 20;
            ctx.shadowColor = "rgba(0,0,0,0.05)";
            ctx.beginPath();
            i = 0;
            while ((ball = this.balls[i++])) {
                let next = [
                    Math.round(ball.pos.x / this.step),
                    Math.round(ball.pos.y / this.step),
                    false,
                ];
                do {
                    next = this.marchingSquares(next);
                } while (next);
                if (this.paint) {
                    ctx.fill();
                    ctx.closePath();
                    ctx.beginPath();
                    this.paint = false;
                }
            }
        };

        const createRadialGradient = function (w, h, r, c0, c1) {
            const gradient = ctx.createRadialGradient(w / 1, h / 1, 0, w / 1, h / 1, r);
            gradient.addColorStop(0, c0);
            gradient.addColorStop(0.35, "rgba(143,207,246,0.1)");
            gradient.addColorStop(0.58, "rgba(193,229,250,0.6)");
            gradient.addColorStop(1, c1);
            return gradient;
        };

        const lava0 = new LavaLamp(canvas.width, canvas.height, 6, "#8FCFF6", "rgba(255,255,255,0)");

        const run = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            lava0.renderMetaballs();
            animationFrameId = requestAnimationFrame(run);
        };

        ge1doot.screen.init();
        run();

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="bubble"/>;
};

export default BubbleAnimation;
