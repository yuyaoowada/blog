export default async function handler(req, res) {
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: 'Indalid token' })
  }
  try {
    await res.unstable_revalidate('/blog/schedule')
    await res.unstable_revalidate('/blog/music')
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
