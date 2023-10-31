import { getServerSession } from 'next-auth/server';

export default async (req, res) => {
  const session = await getServerSession({ req });

  if (session) {
    res.redirect('/pages/dashboard'); // Redirect to the dashboard page if the user is authenticated.
  } else {
    // Handle cases when the user is not authenticated.
    // You can send an error message or redirect to the login page.
    res.redirect('/pages/login');
  }
};