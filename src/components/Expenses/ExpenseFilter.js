import './ExpenseFilter.css';
const ExpenseFilter = (props) => {

    const dropdownChangeHandler = (e) => {
//console.log(e.target.value);
props.onFilterChange(e.target.value);
    }


    return (
        <form className="filter-form">
            <label className="filter-label">Filter By Year</label>

<select className="filter-select" onChange={dropdownChangeHandler} value= {props.defaultYear}>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
</select>
        </form>
    )
}

export default ExpenseFilter;
