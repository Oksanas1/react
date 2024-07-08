import React from 'react';
import Clock from './Clock';


export default function App() {
  return (
    <>
      <Clock location="London" offset={ 1 } />
      <Clock location="Kiev" offset={ 3 } />
      <Clock location="New York" offset={ -4 } />
    </>
  )
}