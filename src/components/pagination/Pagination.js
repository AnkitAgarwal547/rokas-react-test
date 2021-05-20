import classes from './Pagination.module.css'
const Pagination = ({ currentPage, perPage, totalData, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalData / perPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className={classes.pagination}>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={number === currentPage ? classes.active : ''}
        >
          {number}
        </button>
      ))}
    </div>
  )
}

export default Pagination
