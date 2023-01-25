return (
    <JobsContext.Provider value={value}>
      <div className={`${page === 'details' && 'hide'}`}>
        <Header /> <Search />
        {!_.isEmpty(errors) && (
          <div className="errorMsg">
            <p>{errors.error}</p>
          </div>
        )}
        <Results /> 
        {isLoading && <p className="loading">Loading...</p>}
        {results.length > 0 && _.isEmpty(errors) && (
          <div
            className="load-more"
            onClick={isLoading ? null : handleLoadMore}
          >
            <button
              disabled={isLoading}
              className={`${isLoading ? 'disabled' : ''}`}
            >
              Load More Jobs
            </button>
          </div>
        )}
      </div>
      <div className={`${page === 'home' && 'hide'}`}>
        {page === 'details' && <JobDetails />}
      </div>
    </JobsContext.Provider>
  );
  