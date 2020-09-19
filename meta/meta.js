const meta = {
  title: "tameblog | 今日も一日",
  description: "WEBに関する学びをぼちぼちつづるブログ",
  site: "tameblog | 今日も一日",
  image: "/images/ogp/ogp.jpg",
  type: "website"
}

export default args => {
  const {title, description, site, image, type} = {...meta, ...args};
  return [
    {hid: 'og:site_name',property: 'og:site_name', content: site },
    {hid: 'og:type', property: 'og:type', content: type},
    {hid: 'og:title', property: 'og:title', content: title},
    {hid: 'og:image', property: 'og:image', content: image},
    {hid: 'og:description', property: 'og:description', content: description},
    {hid: 'description', property: 'description', content: description},
  ]
}

