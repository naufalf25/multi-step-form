import React from 'react';

function Card({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.JSX.Element;
}) {
  return (
    <div className="relative z-10 rounded-xl bg-white px-6 py-8 shadow-md lg:bg-transparent lg:px-16 lg:shadow-none">
      <h1 className="text-2xl font-bold text-blue-950">{title}</h1>
      <p className="text-grey-500 mt-2 text-lg">{description}</p>
      {children}
    </div>
  );
}

export default Card;
