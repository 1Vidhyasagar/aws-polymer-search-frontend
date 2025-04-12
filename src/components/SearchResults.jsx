import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {results.length === 0 ? (
          <div className="col-12">
            <p>No results found.</p>
          </div>
        ) : (
          results.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.title || "Untitled"}</h5>
                  <p className="card-text">
                    {item.description || "No description available."}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
