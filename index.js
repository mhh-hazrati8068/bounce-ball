let eBall = false;

class circle {
  color;
  x;
  y;
  left;
  top;
  element;
  hit = 0;
  constructor(color, x, y, left, top) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.left = left;
    this.top = top;
    let myDiv = document.createElement("div");
    myDiv.style.backgroundColor = color;
    myDiv.className = "circle";
    myDiv.style.top = x + "px";
    myDiv.style.left = y + "px";
    document.getElementById("wrapper").appendChild(myDiv);
    myDiv.onclick = () => {
      eBall = true;
      myDiv.remove();
      console.log(`Deleted with ${this.hit} hits`);
    };
    this.element = myDiv;
  }

  move() {
    if (this.x > 390) {
      this.top = false;
    }
    if (this.x < 5) {
      this.top = true;
    }
    if (this.y > 390) {
      this.left = false;
    }
    if (this.y < 5) {
      this.left = true;
    }
    if (this.top) {
      this.x += 4;
      this.element.style.top = this.x + "px";
    } else {
      this.x -= 4;
      this.element.style.top = this.x + "px";
    }
    if (this.left) {
      this.y += 4;
      this.element.style.left = this.y + "px";
    } else {
      this.y -= 4;
      this.element.style.left = this.y + "px";
    }
  }
  collisionDection() {
    if (this.left) {
      this.left = false;
    } else {
      this.left = true;
    }
    if (this.top) {
      this.top = false;
    } else {
      this.top = true;
    }
    this.hit++;
    console.log(`number of hits : ${this.hit}`);
  }
}
// second file
let aBalls = [];

document.getElementById("wrapper").addEventListener("click", () => {
  setTimeout(() => {
    if (eBall) {
      eBall = false;
      return 0;
    }
    aBalls.push(
      new circle(
        "#" + (((1 << 24) * Math.random()) | 0).toString(16),
        Math.floor(Math.random() * 380 + 10),
        Math.floor(Math.random() * 380 + 10),
        Math.floor(Math.random() * 2) ? true : false,
        Math.floor(Math.random() * 2) ? true : false
      )
    );
  }, 100);
});

setInterval(() => {
  for (let i = 0; i < aBalls.length; i++) {
    for (let j = 0; j < aBalls.length; j++) {
      if (i == j) continue;
      if (Math.abs(aBalls[i].x - aBalls[j].x) < 5) {
        if (Math.abs(aBalls[i].y - aBalls[j].y) < 5) {
          aBalls[i].collisionDection();
          aBalls[j].collisionDection();
        }
      }
    }
    aBalls[i].move();
  }
}, 10);

// how is works:

// so it`s just three parts : first is a class for definition , secound is an eventListener for appeareance, and third id an onterval for movment and .... .

// end of exericise
