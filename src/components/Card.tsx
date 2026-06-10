import React from 'react';
import './Card.css';

type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return <div className="Card">{children}</div>;
}

export default Card;