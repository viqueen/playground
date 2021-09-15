import React, { Component } from "react";

class Snake extends Component {
  state = {
    gravity: 0.8,
    bird: {
      x: 50,
      y: 50,
      radius: 10,
      velocity: 0,
    },
  };

  draw = () => {
    const canvas: any = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(
      this.state.bird.x,
      this.state.bird.y,
      this.state.bird.radius,
      0,
      2 * Math.PI
    );
    ctx.fill();
  };

  update = () => {
    const newV = (this.state.bird.velocity + this.state.gravity) * 0.9;
    const canvas: any = this.refs.canvas;
    this.setState({
      bird: {
        x: 50,
        y: Math.max(
          Math.min(
            this.state.bird.y + newV,
            canvas.height - this.state.bird.radius
          ),
          0
        ),
        velocity: newV,
        radius: 20,
      },
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.update();
      this.draw();
    }, 1000 / 60);
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={450} height={650} />
      </div>
    );
  }
}

export default Snake;
