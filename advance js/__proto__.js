const parent = {
    greet() {
      console.log(`Hello, I am a parent.`);
    },
    parentProperty: "This is from the parent",
  };
  
  const child = {
    childProperty: "This is from the child",
  };
  
  child.__proto__ = parent; 
  
  console.log(child.parentProperty); 
  child.greet(); 
  
  console.log(Object.getPrototypeOf(child) === parent); 
  
