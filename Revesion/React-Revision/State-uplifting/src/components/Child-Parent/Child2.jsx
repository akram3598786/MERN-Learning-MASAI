

export default function Child2_Fun({ decrement }) {

    const handleClick=()=>{
      decrement((prev)=> prev-1);
    }
  
    return (
    <div>
      <h2>Child Fun</h2>
      <button onClick={handleClick}>Decrease by child-2</button>
    </div>
    )
  }