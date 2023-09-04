'use client'
import './card.css';
import React from "react";

interface CardProps {
  children: React.ReactNode,
  title?: string | React.ReactNode,
  customContainerClass?: string,
  customContentClass?: string
}

function Card(
  {
    children,
    title,
    customContainerClass,
    customContentClass
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
  const contentClasses = customContentClass ? `card__contentContainer ${customContentClass}` : "card__contentContainer"
  return (
    <div className={containerClasses}>
      {renderTitle()}
      <div className={contentClasses}>
        {children}
      </div>
    </div>
  )
}

export {Card}