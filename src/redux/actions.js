let maxid = 3;

export const addUser = (firstName, lastName) => {
  return{
    type:'ADD',
    id: ++maxid,
    firstName, 
    lastName, 
  }
}

export const deletePerson = (id) => {
  return{
    type: 'DELETE',
    id
  }
}