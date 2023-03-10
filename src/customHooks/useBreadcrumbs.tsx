import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Breadcrumb = {
  href: string;
  label: string;
}[];

function useBreadcrumbs() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb>();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0];
    let pathArray = pathWithoutQuery.split('/');
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== '');

    const breadcrumbs = pathArray.map((path, index) => {
      const href = `/${pathArray.slice(0, index + 1).join('/')}`;
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return [breadcrumbs];
}

export default useBreadcrumbs;
