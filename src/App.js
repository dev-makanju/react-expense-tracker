import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expense = [
    { 
      title:'Shoes', 
      price:238, 
      date: new Date(2022, 3, 4)
    },
    { 
      title:'Shoes', 
      price:534, 
      date: new Date(2022, 2, 4),
    },
    { 
      title:'Shoes', 
      price:334, 
      date: new Date(2022, 3, 5),
    },
    { 
      title:'Shoes',
      price:223 , 
      date: new Date(2022, 5, 6),
    }
  ];
  
  return (
      <div className="App">
        <h1>Lets get started!</h1>
        <ExpenseItem 
            title={expense[0].title}
            price={expense[0].price}
            date={expense[0].date}
        />
        <ExpenseItem 
            title={expense[1].title}
            price={expense[1].price}
            date={expense[1].date}
        />
        <ExpenseItem 
            title={expense[2].title}
            price={expense[2].price}
            date={expense[2].date}
        />
        <ExpenseItem 
            title={expense[3].title}
            price={expense[3].price}
            date={expense[3].date}
        />
      </div>
  );
}

export default App;
