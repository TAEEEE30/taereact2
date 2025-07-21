import Phaser from 'phaser';

export default class MarioGame extends Phaser.Scene {
  constructor() {
    super('MarioGame');
  }

  preload() {
    this.load.image('sky', '/images/sky.jpg'); 
    this.load.image('clound', '/images/clound.png');
  }

  create() {
    const centerX = this.scale.width / 2;
    const centerY = this.scale.height / 2;
    
    this.add.image(300, 150, 'sky');
    this.add.image(centerX, -200, 'clound');

    this.add.text(200, 250, 'เริ่มเขียนเกม Mario แล้ว!', {
      font: '20px Arial',
      color: '#fff',
    });
  }
}
