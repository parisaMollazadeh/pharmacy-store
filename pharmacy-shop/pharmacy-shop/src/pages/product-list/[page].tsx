import { GetStaticPaths, GetStaticPropsContext } from 'next'
import AppLayout from '@/layouts/AppLayout'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'
import Pagination from '@/components/Pagination'
import { Medicine } from '@/types/medicine'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ReactElement } from 'react'
import { fetchMedicinesPage, fetchTotalMedicinesCount } from '@/api/medicines'

interface Props {
  medicines: Medicine[]
  currentPage: number
  totalPages: number
}

const Page = ({ medicines, currentPage, totalPages }: Props) => {
  const { addToCart } = useCart()
  const router = useRouter()

  return (
    <AppLayout headerMode="menu">
      <div className="pb-24 px-4">
        <div className="flex flex-col gap-4 mt-4">
          {medicines.map((medicine) => (
            <ProductCard key={medicine.id} medicine={medicine} onAdd={addToCart} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => router.push(`/page/${page}`)}
        />

        <div className="fixed bottom-4 right-0 left-0 px-4">
          <Link href="/cart">
            <button className="w-full bg-primary text-white py-3 rounded-full text-sm shadow-md">
              تکمیل خرید
            </button>
          </Link>
        </div>
      </div>
    </AppLayout>
  )
}

Page.getLayout = (page: ReactElement ) => page


export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const totalCount = await fetchTotalMedicinesCount()
    const limit = 4
    const totalPages = Math.ceil(totalCount / limit)

    const paths = Array.from({ length: totalPages }, (_, i) => ({
      params: { page: `${i + 1}` },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (error) {
    console.error('Error fetching total medicines count:', error)
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const page = Number(context.params?.page || 1)
  const limit = 4

  const { medicines, totalPages } = await fetchMedicinesPage(page, limit)
  if (page > totalPages) {
    return { notFound: true }
  }

  return {
    props: {
      medicines,
      currentPage: page,
      totalPages,
    },
    revalidate: 10,
  }
}

export default Page
