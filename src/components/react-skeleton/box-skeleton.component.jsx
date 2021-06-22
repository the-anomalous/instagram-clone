import React from 'react'
import Skeleton from 'react-loading-skeleton';

const BoxSkeleton = ({height, width}) => {
  return (
    <Skeleton height={height} width={width} />
  )
}

export default BoxSkeleton