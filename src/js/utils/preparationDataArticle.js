const DATE = {
  locale: 'ru-RU',
  options: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
};

function UpperCaseFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

function descriptionCorrect(description) {
  if (description.includes('<li>')) {
    return 'Нет описания';
  }
  return description;
}

const dateFormat = (datePublished) => {
  const formatter = new Intl.DateTimeFormat(DATE.locale, DATE.options);
  const [
    { value: day },, { value: month },, { value: year },
  ] = formatter.formatToParts(new Date(datePublished));

  return `${day} ${month}, ${year}`;
};

export const preparationDataArticle = function (article, keyword) {
  const articleData = {};
  articleData.keyword = UpperCaseFirst(keyword);
  articleData.title = article.title;
  articleData.text = descriptionCorrect(article.description);
  articleData.source = article.source.name;
  articleData.date = dateFormat(article.publishedAt);
  articleData.link = article.url;
  articleData.image = article.urlToImage || 'https://www.dom-textilya.ru/images/no_image.png';
  return articleData;
};

export const frequentElement = function (arr) {
  let count1 = 0;
  let count2 = 0;
  let item;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) count1++;
      if (count2 < count1) {
        count2 = count1;
        item = arr[i];
      }
    }
    count1 = 0;
  }
  return item;
};
