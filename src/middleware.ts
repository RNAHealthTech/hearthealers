// middleware.ts 
// this file is used to handle the subdomain routing for the doctor's  
// it will redirect the request to the 

import {NextRequest, NextResponse} from 'next/server';


const DOCTOR_SUBDOMAINS = ['drjay','dranupam'];

export function middleware(request: NextRequest){
    const hostname = request.headers.get('host') || ""; 
    const url = request.nextUrl.clone();

    let subdomain = '';

    if (hostname.includes('localhost')){

        const parts = hostname.split('.');
        subdomain = parts.length > 1 && parts[0] !== 'localhost' ? parts[0] : '';
    } else {
        // production : drjay.hearthealers.in
        const parts = hostname.split('.');
        subdomain = parts.length > 2 ? parts[0] : ''; 
    }

    if (DOCTOR_SUBDOMAINS.includes(subdomain)){
        const pathname = url.pathname;

        if (!pathname.startsWith(`/doctor/${subdomain}`)){
            url.pathname = `/doctor/${subdomain}${pathname}`;
            return NextResponse.rewrite(url);
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ]
}


