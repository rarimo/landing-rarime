/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  webpack(config) {
    const svgIconsRegex = /assets\/icons\/.+\.svg$/
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg'),
    )
    fileLoaderRule.exclude = svgIconsRegex

    config.module.rules.push({
      test: svgIconsRegex,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default config
