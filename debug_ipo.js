async function checkApi() {
  const targetUrl = 'https://www.nseindia.com/api/ipo-calendar?type=equity';
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("Status:", res.status);
    if (data.contents) {
      console.log("Contents length:", data.contents.length);
      console.log("Snippet:", data.contents.substring(0, 100));
      try {
        const inner = JSON.parse(data.contents);
        console.log("Success! Data length:", inner.data.length);
      } catch (e) {
        console.log("Inner content is not JSON");
      }
    }
  } catch (err) {
    console.log("Error:", err.message);
  }
}

checkApi();
