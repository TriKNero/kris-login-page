'use client'
import './card.css';
import React from "react";

interface CardProps {
  children: React.ReactNode,
  title?: string | React.ReactNode,
  customContainerClass?: string
}

function Card(
  {
    children,
    title,
    customContainerClass
  }: CardProps) {
  const renderTitle = () => {
    if (!title) return null;
    return (
      <div className="card__title">
        {title}
      </div>
    )
  }
  const containerClasses = customContainerClass ? `card__container ${customContainerClass}` : "card__container"
  return (
    <div className={containerClasses}>
      {renderTitle()}
      <div className="card__contentContainer">
        {children}
      </div>
    </div>
  )
}

export {Card}