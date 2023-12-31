 import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
 const ExpenseItem = (props) => {
 
    return ( 
        <li>
<Card className="expense-item">
           <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price ">
                <h2>${props.amount}</h2>
            </div>
        </Card>
        </li>      
        
    )
}
export default ExpenseItem;