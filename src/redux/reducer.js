const users =[
    { id: 1, firstName: "Liza", lastName: "Ivanova" },
    { id: 2, firstName: "Ivan", lastName: "Petrovich" },
    { id: 3, firstName: "Roma", lastName: "Pavlov" },
  ];


  const tablePageReducer = (state=users, action) => {
    switch(action.type){
      case 'ADD':
        return [...state,{
          id: action.id,
          firstName: action.firstName, 
          lastName: action.lastName, 
          description: action.description
        }]
        case 'DELETE':
          return state.filter((user) => user.id !== action.id)
      default:
        return state;
    }
  }

export default tablePageReducer;