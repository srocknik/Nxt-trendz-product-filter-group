import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    onChangeSearchInput,
    searchInput,
    onResetFilters,
    onChangeTitleSearch,
  } = props

  const onClickReset = () => {
    onResetFilters()
  }

  const onSearchInput = event => {
    onChangeSearchInput(event.target.value)
  }

  const onPressEnter = event => {
    if (event.key === 'Enter') {
      onChangeTitleSearch()
    }
  }

  const displayCategory = () => {
    const {categoryOptions, onChangeCategory, category} = props

    return (
      <div className="category-container">
        <h1 className="category-heading">Category</h1>
        <ul className="unorder-category-container">
          {categoryOptions.map(each => {
            const onSelectCategory = () => {
              onChangeCategory(each.name, each.categoryId)
            }
            const highLitedText =
              category === each.categoryId ? 'customized-text' : null
            return (
              <li key={each.categoryId} className="list-container">
                <button
                  type="button"
                  className="category-btn"
                  onClick={onSelectCategory}
                >
                  <p className={`category-text ${highLitedText}`}>
                    {each.name}
                  </p>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const displayRatings = () => {
    const {ratingsList, onChangeRating} = props

    return (
      <div className="category-container">
        <h1 className="category-heading">Rating</h1>
        <ul className="unorder-category-container">
          {ratingsList.map(each => {
            const onSelectRating = () => {
              onChangeRating(each.ratingId)
            }
            const {ratingId, imageUrl} = each
            return (
              <li key={ratingId} className="list-container">
                <button
                  type="button"
                  className="rating-btn category-btn"
                  onClick={onSelectRating}
                >
                  <img src={imageUrl} alt={ratingId} className="rating-img" />
                  <p className="rating-text">& up</p>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          type="search"
          className="filter-search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onSearchInput}
          onKeyDown={onPressEnter}
        />
        <BsSearch className="search-icon" />
      </div>
      {displayCategory()}
      {displayRatings()}
      <button type="button" className="clear-filter-btn" onClick={onClickReset}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
