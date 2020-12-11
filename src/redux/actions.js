let maxid = 3;

export const addUser = (firstName, lastName, description) => {
  return{
    type:'ADD',
    id: ++maxid,
    firstName, 
    lastName, 
    description
  }
}

export const deletePerson = (id) => {
  return{
    type: 'DELETE',
    id
  }
}

export const onOpen = () => {
  return{
    type: 'OPEN',
  }
}

export const onClose = () => {
  return{
    type: 'CLOSE',
  }
}