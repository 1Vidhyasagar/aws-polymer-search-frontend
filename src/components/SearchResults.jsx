import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div
      className="container mt-4"
      style={{
        background: "rgba(255, 255, 255, 0.1)", // Glassmorphism background
        backdropFilter: "blur(10px)", // Blur effect
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)", // Soft shadow for container
        border: "1px solid rgba(255, 255, 255, 0.2)", // Light border for the container
      }}
    >
      <div className="row">
        {results.length === 0 ? (
          <div className="col-12">
            <p>No results found.</p>
          </div>
        ) : (
          results.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 mb-3"
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.15)", // Glass effect on cards
                backdropFilter: "blur(8px)", // Subtle blur for card
                borderRadius: "8px", // Rounded corners for the card
                boxShadow: "0 4px 16px rgba(31, 38, 135, 0.25)", // Soft shadow
                border: "1px solid rgba(255, 255, 255, 0.3)", // Light border for cards
              }}
            >
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
