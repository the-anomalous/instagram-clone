import React from 'react'
import Skeleton from 'react-loading-skeleton';

const AccountSkeleton = ({ count, circleWidth, circleHeight, rowWidth, rowHeight, className }) => {
  return (
    <div className={className} >
      <Skeleton circle={true} width={circleWidth} height={circleHeight} />
      <Skeleton width={rowWidth} height={rowHeight} count={count} className='ml-3 mt-3' />
    </div>
  )
}

export default AccountSkeleton