const importAll = (r) => {
  const images = {};
  // eslint-disable-next-line array-callback-return
  r.keys().map((item) => { images[item.replace('./', '')] = r(item) });
  return images;
}

const images = importAll(require.context('../assets/img/products/', false, /\.(png|jpe?g|svg)$/));

export default images;