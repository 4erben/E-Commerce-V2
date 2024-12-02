import React from 'react'
import PageAddress from '../../components/PageAddress/PageAddress'
import { useParams } from 'react-router-dom'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import HeroProductSection from './sections/HeroProduct.section';
import InfoProductSection from './sections/ProductReviews';
import useGetProductById from '../../utils/react-query-hooks/useGetProductById';
export default function ProductPage() {
    const {_id} = useParams();
    const {data,isLoading,isError,error} = useGetProductById(_id)
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
