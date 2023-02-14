import ExpenseItem from './ExpenseItem';
import './Expenses.css'


function Expenses(props) {

    return (
        <div className="expenses">
        <ExpenseItem 
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
        id={props.items[0].id}
        />
        <ExpenseItem
       title={props.items[1].title}
       date={props.items[1].date}
       amount={props.items[1].amount}
       id={props.items[1].id}     
       />
        <ExpenseItem 
       title={props.items[2].title}
       date={props.items[2].date}
       amount={props.items[2].amount}
       id={props.items[2].id}      
       />      
        <ExpenseItem 
       title={props.items[3].title}
       date={props.items[3].date}
       amount={props.items[3].amount}
       id={props.items[3].id}      
      />    
        </div>
    );
}

export default Expenses;