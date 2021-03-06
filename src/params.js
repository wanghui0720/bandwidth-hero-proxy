const DEFAULT_QUALITY = 40

function params(req, res, next) {
  let url = req.query.url
  if (Array.isArray(url)) url = url.join('&url=')
  if (!url) {
    res.setHeader('Location', 'https://bandwidth-hero.com')
    return res.status(302).end()
  }

  req.params.url = url
  req.params.webp = req.headers.accept && req.headers.accept.includes('image/webp')
  req.params.grayscale = req.query.bw != 0
  req.params.quality = parseInt(req.query.l, 10) || DEFAULT_QUALITY

  next()
}

module.exports = params
