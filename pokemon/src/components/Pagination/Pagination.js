

const Pagination = ({ changeOffset,page,pageCount }) => {
    return(
        <div className='pagination'>
            <button className='btnPages' onClick={() => changeOffset('prev')}>
                Prev
            </button>
            {page}
            /
            {pageCount}
            <button className='btnPages' onClick={() => changeOffset('next')}>
                Next
            </button>
        </div>
    )
}

export default Pagination;