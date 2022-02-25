import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [inputs, setInputs] = useState("");
	const [items, setItems] = useState([]);
	const [toggle, setToggle] = useState(true);
	const [isEditItem , setIsEditItem] = useState(null);


  const heandlechange = (e) => {
    setInputs(e.target.value);
  };
  const additem = () => {
    if (!inputs) {

		} 
		else if(inputs && !toggle){
     setItems(items.map((elem)=>{
     if(elem.id === isEditItem){
			 return {...elem,name:inputs}
		 }
		 return elem;
		 }))
		 setToggle(true);
			setInputs('');
			setIsEditItem(null);
		}
		else {
      const allitems = { id: new Date().getTime().toString(), name: inputs };
      setItems([...items, allitems]);
      setInputs("");
    }
  };

  const del = (index) => {
    const updateditem = items.filter((elem) => {
      return index !== elem.id;
    });
	};
	
	const edit= (id)=>{
      let newedititem = items.find((elem)=>{
        return elem.id ===id;
			})
			setToggle(false);
			setInputs(newedititem.name);
			setIsEditItem(id);
	}

  return (
    <div id="main">
      <textarea id="task" value={inputs} onChange={heandlechange} />
      <button id="btn" onClick={additem}>
        Add
      </button>
      <ul>
        {items.map((elem) => {
          return (
            <li className="list" key={elem.id}>
              {elem.name}
            </li>
            <button onClick={()=>(del(elem.id)}>Delete</button>
						<button onClick={()=>edit(elem.id)}>Edit</button>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
