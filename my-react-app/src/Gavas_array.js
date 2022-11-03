const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>{item}</p>)
function Gavas_array() {
    return (
      <div className="Myapp">
        <center><h1>{myList}</h1></center>
      </div>
    );
  }
  export default Gavas_array;
