import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import AppLayout from '@/layouts/AppLayout'
import { useCart } from '@/context/CartContext'
import Pagination from '@/components/Pagination'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ReactElement, useCallback } from 'react'
import { fetchMedicinesPage, fetchTotalMedicinesCount } from '@/api/medicines'
import ProductList from './components/ProductList'

const ITEMS_PER_PAGE = 4

const ProductListPage = ({ medicines, currentPage, totalPages }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const { addToCart } = useCart()
  const router = useRouter()

  const handlePageChange = useCallback(
    (page: number) => {
      router.push(`/product-list/${page}`)
    },
    [router]
  )

  return (
    <AppLayout headerMode="menu">
      <main className="pb-24 px-4">

        <ProductList medicines={medicines} onAdd={addToCart} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <div className="fixed bottom-4 right-0 left-0 px-8">
          <Link href="/cart" passHref>
            <button
              type="button"
              className="w-full bg-purple-700 text-white py-3 rounded-xl text-base shadow-md font-extrabold"
              aria-label="Complete purchase and go to cart"
            >
              تکمیل خرید
            </button>
          </Link>
        </div>
      </main>
    </AppLayout>
  )
}

ProductListPage.getLayout = (page: ReactElement) => page

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const totalCount = await fetchTotalMedicinesCount()
    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)

    const paths = Array.from({ length: totalPages }, (_, i) => ({
      params: { page: String(i + 1) },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch  {
    return { paths: [], fallback: 'blocking' }
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const pageParam = context.params?.page
  const currentPage = Array.isArray(pageParam) ? Number(pageParam[0]) : Number(pageParam) || 1

  if (currentPage < 1)
    return { notFound: true }

  const { medicines, totalPages } = await fetchMedicinesPage(currentPage, ITEMS_PER_PAGE)

  if (currentPage > totalPages)
    return { notFound: true }

  return {
    props: { medicines, currentPage, totalPages },
    revalidate: 120,
  }
}

export default ProductListPage