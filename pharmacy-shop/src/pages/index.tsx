import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/product-list/1',
      permanent: false,
    },
  }
}

export default function RedirectToFirstPage() {
  return null
}