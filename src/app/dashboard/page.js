'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        router.push('/login'); // Redirect if not logged in
      } else {
        setUser(data.user);
      }
    };

    getUser();
  }, [router]);

  if (!user) {
    return <p className="text-center mt-20 text-gray-600">Checking session...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-[#0b2239]">Welcome to your Dashboard</h1>
      <p className="text-gray-700">You’re logged in as <span className="font-medium">{user.email}</span>.</p>

      <div className="mt-8">
        {/* Add more dashboard widgets here */}
        <p className="text-sm text-gray-500">More dashboard features coming soon...</p>
      </div>
    </div>
  );
}
