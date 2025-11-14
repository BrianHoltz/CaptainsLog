(() => {
  const canvas = document.getElementById('dinoCanvas');
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('score');

  const W = canvas.width;
  const H = canvas.height;

  let lastTime = 0;
  let speed = 4;
  let gravity = 0.6;
  let gameOver = false;
  let score = 0;

  const dino = {
    x: 50,
    y: H - 50,
    w: 44,
    h: 44,
    vy: 0,
    onGround: true,
    draw() {
      ctx.fillStyle = '#e6e6e6';
      ctx.fillRect(this.x, this.y - this.h, this.w, this.h);
      ctx.fillStyle = '#0b0b0b';
      ctx.fillRect(this.x + 28, this.y - this.h + 12, 6, 6);
    },
    update() {
      this.vy += gravity;
      this.y += this.vy;
      if (this.y >= H - 6) {
        this.y = H - 6;
        this.vy = 0;
        this.onGround = true;
      } else {
        this.onGround = false;
      }
    },
    jump() {
      if (this.onGround) {
        this.vy = -12;
        this.onGround = false;
      }
    }
  };

  const ground = {
    y: H - 2,
    draw(offset) {
      ctx.fillStyle = '#2b2b2b';
      ctx.fillRect(0, this.y, W, 2);
      ctx.strokeStyle = '#1f1f1f';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = -offset % 30; i < W; i += 30) {
        ctx.moveTo(i, this.y + 1);
        ctx.lineTo(i + 15, this.y + 1);
      }
      ctx.stroke();
    }
  };

  const obstacles = [];
  function spawnObstacle() {
    const h = 20 + Math.random() * 30;
    obstacles.push({
      x: W + 20,
      y: H - 6,
      w: 12 + Math.round(Math.random()*18),
      h: h,
      draw() {
        ctx.fillStyle = '#cfcfcf';
        ctx.fillRect(this.x, this.y - this.h, this.w, this.h);
      },
      update(dt) {
        this.x -= speed * dt;
      }
    });
  }

  function rectsCollide(a, b) {
    return !(a.x + a.w < b.x || a.x > b.x + b.w || a.y - a.h > b.y || a.y < b.y - b.h);
  }

  let obstacleTimer = 0;
  let spawnInterval = 1500; // ms
  let groundOffset = 0;

  function reset() {
    obstacles.length = 0;
    score = 0;
    speed = 4;
    gameOver = false;
    dino.y = H - 6;
    dino.vy = 0;
  }

  function update(now) {
    if (!lastTime) lastTime = now;
    const dtMs = Math.min(50, now - lastTime);
    const dt = dtMs / 16.67; // normalize to ~60fps
    lastTime = now;

    if (gameOver) {
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#fff';
      ctx.font = '18px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Game Over — Click or press R to restart', W/2, H/2);
      return;
    }

    // background
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = '#0b0b0b';
    ctx.fillRect(0,0,W,H);

    groundOffset += speed * dt;
    ground.draw(groundOffset);

    // spawn obstacles
    obstacleTimer += dtMs;
    if (obstacleTimer > spawnInterval) {
      obstacleTimer = 0;
      spawnInterval = 900 + Math.random() * 1600;
      spawnObstacle();
    }

    // update and draw obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      const ob = obstacles[i];
      ob.update(dt);
      ob.draw();
      // collision
      if (rectsCollide({x: dino.x, y: dino.y, w: dino.w, h: dino.h}, ob)) {
        gameOver = true;
      }
      if (ob.x + ob.w < -50) obstacles.splice(i,1);
    }

    dino.update();
    dino.draw();

    // score & speed ramp
    score += dtMs * 0.01;
    if (score > 0 && Math.floor(score) % 100 === 0) {
      speed = 4 + Math.floor(score / 100) * 0.5;
    }
    scoreEl.textContent = Math.floor(score);

    requestAnimationFrame(update);
  }

  // input
  window.addEventListener('keydown', e => {
    if (e.code === 'Space') {
      e.preventDefault();
      if (gameOver) {
        reset();
        lastTime = 0;
        requestAnimationFrame(update);
      } else {
        dino.jump();
      }
    }
    if (e.code === 'KeyR' && gameOver) {
      reset();
      lastTime = 0;
      requestAnimationFrame(update);
    }
  });
  canvas.addEventListener('click', () => {
    if (gameOver) {
      reset();
      lastTime = 0;
      requestAnimationFrame(update);
    } else {
      dino.jump();
    }
  });

  // start
  reset();
  requestAnimationFrame(update);
})();
