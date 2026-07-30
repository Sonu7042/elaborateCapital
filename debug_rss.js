
// fetch("https://api.allorigins.win/raw?url=https://news.google.com/rss/search?q=stock+market+india")
//   .then(res => res.text())
//   .then(data => {
//     const start = data.indexOf('<item>');
//     const end = data.indexOf('</item>', start) + 7;
//   });


fetch("https://api.allorigins.win/raw?url=https://news.google.com/rss/search?q=ipo+india")
  .then(res => res.text())
  .then(data => {
    console.log(data);
  });