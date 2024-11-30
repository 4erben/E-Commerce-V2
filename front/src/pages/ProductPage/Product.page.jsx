import React, { useState } from 'react'
import PageAddress from '../../components/PageAddress/PageAddress'
import { useParams } from 'react-router-dom'
import useSingleProduct from '../../utils/react-query-hooks/useSingleProduct';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

import HeroProductSection from './sections/HeroProduct.section';
import InfoProductSection from './sections/ProductReviews';
export default function ProductPage() {
    const {_id} = useParams();
    const {data,isLoading,isError,error} = useSingleProduct(_id,)

  return (
    <div>
        <PageAddress address={"Product Details"} />
        <ErrorBoundary isLoading={isLoading} isError={isError} error={error}>
        <HeroProductSection product={data?.data}/>
        <InfoProductSection product={data?.data} />
        </ErrorBoundary>
    </div>
  )
}
