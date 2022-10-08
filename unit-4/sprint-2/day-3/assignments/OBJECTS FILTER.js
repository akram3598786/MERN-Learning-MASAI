

let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
  let out=users.filter((el)=>{
    return (el.place=="Banglore");
  }).map((el)=>{
    return m_out=el.firstName+" "+el.lastName; 
  })
  console.log(out)