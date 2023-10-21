"use client"
import { useSession } from 'next-auth/react';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';

const Profile = () => {
  const { status, data } = useSession();

  return (
    <div>
        {
            status === "authenticated" && data?.user && (
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center py-4">
                        <Avatar>
                            <AvatarFallback>
                                {data.user.name?.[0].toUpperCase()}
                            </AvatarFallback>
                            {data.user.image && <AvatarImage src={data.user.image} />}
                        </Avatar>
                        <div className="flex flex-col">
                            <p className='font-medium'>{data.user.name}</p>
                            <p className="text-sm opacity-60">Boas compras!</p>
                        </div>
                    </div>
                        <Separator />
                </div>
            )
        }
    </div>
  )
}

export default Profile;