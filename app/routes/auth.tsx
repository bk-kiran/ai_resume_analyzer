import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter'
export const meta = () => ([
    {title: 'AI Resume Analyzer | Auth'},
    {name: 'description', content: "Login to Account"}
])

const auth = () => {
    const {isLoading, auth} = usePuterStore(); /* allow us to use any puter function  */
    const location = useLocation(); /* User's current page */
    const next = location.search.split('next=')[1]; /* Page user wants to visit next */
    const navigate = useNavigate();

    {/* If a user tries to access a blocked route they will be redirected to auth but after authenticated will be automatically 
redirected to the page they were orignally blocked from */}

    useEffect(() => { 
        if (auth.isAuthenticated) navigate(next); /* If authenticated navigate to the next page user wants to visit */
    }, [auth.isAuthenticated, next])


  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className='gradient-border shadow-lg'>
            <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
                <div className='flex flex-col items-center gap-2 text-center'>
                    <h1>Welcome</h1>
                    <h2>Login to access your account</h2>
                </div>

                <div>
                    {isLoading ? ( /*If loading create auth button*/
                        <button className='auth-button animate-pulse'>
                            <p>Signing you in...</p>
                        </button>
                    ): ( /*else */
                        <>
                            {auth.isAuthenticated ? ( /*If already authenticated generate a log out button */
                                <button className='auth-button' onClick={auth.signOut}> {/* Calling puter .signOut function */}
                                    Log Out
                                </button>
                            ): ( /* else if not authenticated then generate log in button */
                                <button className='auth-button' onClick={auth.signIn}> {/* Calling puter .signIn function */}
                                Log In
                                </button>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    </main>
  )
}

export default auth
