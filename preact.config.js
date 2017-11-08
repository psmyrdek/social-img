export default function (config, env, helpers) {
  const PUBLIC_PATH = env.production ? '/social-img/' : ''
  config.output.publicPath = PUBLIC_PATH
}