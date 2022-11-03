class human {
    constructor(name) {
      this.name = name;
    }
    display() {
      return 'My name is ' + this.name;
    }
  }
  class gavaskar extends human {
    constructor(name, job) {
      super(name);
      this.job = job;
    }  
    show() {
      return this.display() + ', I am a ' + this.job
    }
  }
  function Gavas_class() {
    const gavas = new gavaskar("GAVASKAR", "Trainer");
    return (
      <div className="Myapp">
        <center><h1>{gavas.show()}</h1></center>
      </div>
    );
  }
  export default Gavas_class;