import fs from 'fs';
import https from 'https';

const getJSON = (url, headers) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve(data); }
      });
    }).on('error', reject);
  });
};

const token = 'eyJraWQiOiJaTUtjVXciLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjI1NjI5OTM1MzEsImlhdCI6MTc3NDU5MzUzMSwibmJmIjoxNzc0NTkzNTMxLCJzdWIiOiJ7XCJ0b2tlblJlZklkXCI6XCIyODdmNzIxYS02NTlmLTQ0OTItOTA0Zi04NmNjYjk5YWJjZGRcIixcInZlbmRvckludGVncmF0aW9uS2V5XCI6XCJlMzFmZjIzYjA4NmI0MDZjODg3NGIyZjZkODQ5NTMxM1wiLFwidXNlckFjY291bnRJZFwiOlwiN2E3YmI3MDAtYWNhZi00ODYzLWEyOTItOGUwZjJmMjVjNjc4XCIsXCJkZXZpY2VJZFwiOlwiNTU3NjBkOTctMzE0Mi01ZjIwLTlmZTItNTY3NDUyMDZjOTllXCIsXCJzZXNzaW9uSWRcIjpcImFmYTUwN2VhLWEwMTYtNDBiNi1iZDYxLWQ0NDdjMDMzNWZjOFwiLFwiYWRkaXRpb25hbERhdGFcIjpcIno1NC9NZzltdjE2WXdmb0gvS0EwYktFbngrbTZTa28xclZDeHRIMndQcEpSTkczdTlLa2pWZDNoWjU1ZStNZERhWXBOVi9UOUxIRmtQejFFQisybTdRPT1cIixcInJvbGVcIjpcImF1dGgtdG90cFwiLFwic291cmNlSXBBZGRyZXNzXCI6XCIxNjAuMjAyLjM4Ljk0LDEwNC4yMi40OC4xOTEsMzUuMjQxLjIzLjEyM1wiLFwidHdvRmFFeHBpcnlUc1wiOjI1NjI5OTM1MzE2NjMsXCJ2ZW5kb3JOYW1lXCI6XCJncm93d0FwaVwifSIsImlzcyI6ImFwZXgtYXV0aC1wcm9kLWFwcCJ9.YupJ0k-8v_pbLaLyvBjqJH8W-eDEU_pS2E1HlPhzp0UPclJ0ZOiyuuX1XAYBNoWhgtMrLJI6_Ve5eNIZ4MJ3cA';

async function fetchGrowwData() {
  const headers = { 'Authorization': `Bearer ${token}` };
  const res = await getJSON('https://groww.in/v1/api/stocks_data/v1/ipo/all', headers);
  fs.writeFileSync('groww_response.json', JSON.stringify(res, null, 2));
}

fetchGrowwData();