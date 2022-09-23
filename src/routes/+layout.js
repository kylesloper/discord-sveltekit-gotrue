export async function load({ parent, invalidated }) {
  const { session } = await parent()

  // Redirect the user if already signed in
  if (invalidated && session.user) {
    throw redirect(302, '/auth')
  }
}
