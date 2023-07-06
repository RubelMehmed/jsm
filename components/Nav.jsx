"use client";

import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {

    const { data: session } = useSession()

    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

useEffect(() => {
    const setUpProviders = async () => {
        const response = await getProviders()
        setProviders(response)
    }
    setUpProviders()
},[])


  return (
    <nav className="flex-between w-full mb-16">
        <Link href="/" className="flec gap-2">
            <Image
                src={session?.user?.image}
                alt="logo"
                width={30}
                height={30}
                className="obejct-contain"
                />
                <p className="logo_text">Promptopia</p>
        
        </Link>
        {/* desktop navigation */}
        <div className="sm:flex hidden">
            {session?.user ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className="black_btn">
                    Create Post
                    </Link>
                    <button type="button" onClick={signOut} className="outline_btn">
                        sign Out
                    </button>
                    <Link href="/profile">
                        <Image 
                            src={session?.user?.image}
                            width={37}
                            height={37}
                            className="round-full"
                            alt="profile"
                            onClick={() => setToggleDropdown((prev) => !prev)}
                        />  

                        {toggleDropdown && (
                            <div className='dropdown'>
                                <Link
                                href="/profile"
                                classname="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                                >
                                My Profile
                                </Link>
                                <Link
                                href="/create-prompt"
                                classname="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                                >
                                Create Prompt
                                </Link>
                                <button
                                type='button'
                                onClick={() => {
                                    setToggleDropdown(false)
                                    signOut()
                                }}
                                className="mt-5 w-full black_btn"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}  
                    </Link>
                </div>
            ) : (
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button key={provider.id} type="button" onClick={() => signIn(provider.id)} className="outline_btn black_btn">
                        Sign in with {provider.name}
                    </button>
                ))}
                </>
            )}

        </div>
        {/* mobile navigation */}
        <div className="sm:hidden flex relative">
            {session?.user?(
                <div className='flex'>
                   <Image 
                            src={session?.user?.image}
                            width={37}
                            height={37}
                            className="round-full"
                            alt="profile"
                            onClick={() => signIn(provider.id)}
                        />     
                </div>
            ):(
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button key={provider.key} type="button" onClick={() => signIn(provider.id)} className="outline_btn black_btn">
                        Sign in with {provider.name}
                    </button>
                ))}
                </>
            )}

        </div>
    </nav>
  )
}

export default Nav