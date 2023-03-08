import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/restaurants');
  }, [router]);

  return null;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;