import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { isLoggedIn } from '@/utils/auth_storage';

const RouterGuard: React.FC = ({ children }) => {
    const router = useRouter();

    const [authorized, setAuthorized] = useState<boolean>(false);

    const authorize = (): void => {
        const pathname = router.pathname;
        const publicPaths: string[] = ['/login', '/forgot-password'];

        if (!isLoggedIn() && !publicPaths.includes(pathname)) {
            setAuthorized(false);
            router.push('/login');
        } else {
            setAuthorized(true);
        }
    };

    useEffect(() => {
        authorize();
    }, [router.pathname]);

    if (!authorized) {
        return <p>กำลังโหลด...</p>;
    }

    return <React.Fragment>{children}</React.Fragment>;
};

export default RouterGuard;
