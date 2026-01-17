import React from "react";

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="m-4 p-4 border border-black">
      <h3 className="font-bold text-3xl">{title}</h3>
      {isActive ? (
        <p className="pt-2">{children}</p>
      ) : (
        <button
          onClick={onShow}
          className="border bordr-black p-2 mt-4 bg-black text-white rounded-lg px-4"
        >
          Show
        </button>
      )}
    </section>
  );
}

export default Panel;
