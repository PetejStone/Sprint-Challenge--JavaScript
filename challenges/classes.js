// 1. Copy and paste your prototype in here and refactor into class syntax.

/* ===== Prototype Practice ===== */

/* Task: You are to build a cuboid maker that can return values for a cuboid's
volume or surface area. Cuboids are similar to cubes but do not have even sides.
Follow the steps in order to accomplish this challenge. */



class CuboidMaker {
  constructor(dimensions) {
    this.length = dimensions.length,
    this.width = dimensions.width,
    this.height = dimensions.height
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}

class CubeMaker extends CuboidMaker {
  constructor(dimensions) {
    super(dimensions);
  }
  cubeVolume() {
    return this.length * this.width * this.height;
  }
  cubeSurfaceArea() {
    return (this.length * this.length * 6)
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

const cube = new CubeMaker({
  length: 5,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
//console.log(cuboid.volume()); // 100
//console.log(cuboid.surfaceArea()); // 130


/* Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
 Find out the formulas for volume and surface area for cubes and create those methods
 using the dimension properties from CuboidMaker.  Test your work by logging
 out your volume and surface area. */
 //console.log(cube.cubeVolume()); // 125
 //console.log(cube.cubeSurfaceArea()); // 150
