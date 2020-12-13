class App {
  constructor(name) {
    this.name = name
  }
  showName() {
    console.log(this.name)
  }
}

const app = new App('webpack-starter-plus')
app.showName()
