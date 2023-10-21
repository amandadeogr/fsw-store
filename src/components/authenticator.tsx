"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import { Button } from './ui/button';
import { LogInIcon, LogOutIcon } from 'lucide-react';

const Authenticator = () => {
  const { status } = useSession();

  const handleLogout = async () => {
    await signOut();
}

const handleLogin = async () => {
    await signIn();
}

  return (
    <>
        { status === "authenticated" && (
            <Button variant={"outline"} className="flex gap-2 w-full justify-start" onClick={handleLogout}>
                <LogOutIcon size={16} /> Fazer Logout
            </Button>
        )}
        
        {
            status === "unauthenticated" && (
                <Button variant={"outline"} className="flex gap-2 w-full justify-start" onClick={handleLogin}>
                    <LogInIcon size={16} /> Fazer Login
                </Button>
            )
        }
    </>
    
  );
};

export default Authenticator;