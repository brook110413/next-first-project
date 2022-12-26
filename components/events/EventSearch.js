import { useRef } from 'react';

import Button from '../ui/Button';
import classes from './event-search.module.css';

const EventSearch = ({ onSearch }) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  console.dir(yearInputRef.current);

  const months = [
    {
      value: 1,
      label: 'January',
    },
    {
      value: 2,
      label: 'February',
    },
    {
      value: 3,
      label: 'March',
    },
    {
      value: 4,
      label: 'April',
    },
    {
      value: 5,
      label: 'May',
    },
    {
      value: 6,
      label: 'June',
    },
    {
      value: 7,
      label: 'July',
    },
    {
      value: 8,
      label: 'August',
    },
    {
      value: 9,
      label: 'September',
    },
    {
      value: 10,
      label: 'October',
    },
    {
      value: 11,
      label: 'November',
    },
    {
      value: 12,
      label: 'December',
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="" id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="" id="month" ref={monthInputRef}>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventSearch;
