import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IPO {
  company: string;
  type: string;
  ipo_open: string;
  ipo_close: string;
}

const GROWW_TOKEN = "eyJraWQiOiJaTUtjVXciLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjI1NjI5OTM1MzEsImlhdCI6MTc3NDU5MzUzMSwibmJmIjoxNzc0NTkzNTMxLCJzdWIiOiJ7XCJ0b2tlblJlZklkXCI6XCIyODdmNzIxYS02NTlmLTQ0OTItOTA0Zi04NmNjYjk5YWJjZGRcIixcInZlbmRvckludGVncmF0aW9uS2V5XCI6XCJlMzFmZjIzYjA4NmI0MDZjODg3NGIyZjZkODQ5NTMxM1wiLFwidXNlckFjY291bnRJZFwiOlwiN2E3YmI3MDAtYWNhZi00ODYzLWEyOTItOGUwZjJmMjVjNjc4XCIsXCJkZXZpY2VJZFwiOlwiNTU3NjBkOTctMzE0Mi01ZjIwLTlmZTItNTY3NDUyMDZjOTllXCIsXCJzZXNzaW9uSWRcIjpcImFmYTUwN2VhLWEwMTYtNDBiNi1iZDYxLWQ0NDdjMDMzNWZjOFwiLFwiYWRkaXRpb25hbERhdGFcIjpcIno1NC9NZzltdjE2WXdmb0gvS0EwYktFbngrbTZTa28xclZDeHRIMndQcEpSTkczdTlLa2pWZDNoWjU1ZStNZERhWXBOVi9UOUxIRmtQejFFQisybTdRPT1cIixcInJvbGVcIjpcImF1dGgtdG90cFwiLFwic291cmNlSXBBZGRyZXNzXCI6XCIxNjAuMjAyLjM4Ljk0LDEwNC4yMi40OC4xOTEsMzUuMjQxLjIzLjEyM1wiLFwidHdvRmFFeHBpcnlUc1wiOjI1NjI5OTM1MzE2NjMsXCJ2ZW5kb3JOYW1lXCI6XCJncm93d0FwaVwifSIsImlzcyI6ImFwZXgtYXV0aC1wcm9kLWFwcCJ9.YupJ0k-8v_pbLaLyvBjqJH8W-eDEU_pS2E1HlPhzp0UPclJ0ZOiyuuX1XAYBNoWhgtMrLJI6_Ve5eNIZ4MJ3cA";
const GROWW_SECRET = "Go3C3s$J5$^ur0*6HQy13*inr9Z9CMAc";

export default function IpoPage() {

  const [data, setData] = useState<IPO[]>([]);
  const [loading, setLoading] = useState(true);
  const [ipAddress, setIpAddress] = useState<string>("");

  useEffect(() => {

    const fetchUserIp = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const ipData = await res.json();
        setIpAddress(ipData.ip);
      } catch (e) {
        console.error("Failed to fetch IP", e);
      }
    };
    fetchUserIp();

    const fetchData = async () => {

      try {
        let growwMainboard: IPO[] = [];
        let growwSme: IPO[] = [];
        
        try {
          // Primary fetch from Groww API with the provided keys
          const headers: HeadersInit = {
            "Authorization": `Bearer ${GROWW_TOKEN}`,
            "x-api-secret": GROWW_SECRET,
            "Content-Type": "application/json"
          };
          
          const growwRes = await fetch("https://groww.in/v1/api/stocks_data/v1/ipo/active", { headers });
          if (growwRes.ok) {
            const growwData = await growwRes.json();
            if (growwData && growwData.ipoRecords) {
              growwMainboard = growwData.ipoRecords.map((i: any) => ({
                company: i.companyName,
                type: "mainboard",
                ipo_open: i.issueStartDate,
                ipo_close: i.issueEndDate
              }));
            }
          }
        } catch (growwErr) {
          console.error("Groww API fetch failed (check CORS or URL):", growwErr);
        }

        if (growwMainboard.length === 0) {
          // Fallback to NSE/BSE if Groww API returns empty, throws error, or hits CORS
          const [mainRes, smeRes, bseRes] = await Promise.all([

            fetch(
              "https://api.allorigins.win/raw?url=https://www.nseindia.com/api/ipo-calendar?type=equity"
            ),

            fetch(
              "https://api.allorigins.win/raw?url=https://www.nseindia.com/api/ipo-calendar?type=sme"
            ),

            fetch(
              "https://api.allorigins.win/raw?url=https://api.bseindia.com/BseIndiaAPI/api/IPOCorpAnnouncement/w"
            )

          ]);

          const mainData = await mainRes.json();
          const smeData = await smeRes.json();
          const bseData = await bseRes.json();

          const mainboard = (mainData.data || []).map((i: any) => ({
            company: i.companyName,
            type: "mainboard",
            ipo_open: i.issueStartDate,
            ipo_close: i.issueEndDate
          }));

          const sme = (smeData.data || []).map((i: any) => ({
            company: i.companyName,
            type: "sme",
            ipo_open: i.issueStartDate,
            ipo_close: i.issueEndDate
          }));

          const bse = (bseData.Table || []).map((i: any) => ({
            company: i.SCRIP_NAME,
            type: "mainboard",
            ipo_open: i.ISSUE_OPEN_DATE,
            ipo_close: i.ISSUE_CLOSE_DATE
          }));

          setData([...mainboard, ...sme, ...bse]);
        } else {
          setData([...growwMainboard, ...growwSme]);
        }

      } catch (err) {

        console.log("API Error:", err);

        setData(FALLBACK_DATA);

      }

      setLoading(false);
    };

    fetchData();

  }, []);

  const mainboard = data.filter((i) => i.type === "mainboard");
  const sme = data.filter((i) => i.type === "sme");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-14 px-6">

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">
          IPO Tracker 2026
        </h1>
        {ipAddress && (
          <div className="text-sm px-3 py-1 bg-gray-100 rounded text-gray-700 font-medium font-mono border">
            IP: {ipAddress}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        <Table title="Mainboard IPOs & FPOs 2026" rows={mainboard} />

        <Table title="SME IPOs & FPOs 2026" rows={sme} />

      </div>

    </div>
  );
}

function Table({ title, rows }: { title: string; rows: IPO[] }) {

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border rounded-xl overflow-hidden"
    >

      <div className="p-5 border-b">
        <h2 className="font-bold text-lg">
          {title}
        </h2>
      </div>

      <table className="w-full text-sm">

        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">Company</th>
            <th className="p-4 text-right">Issue Dates</th>
          </tr>
        </thead>

        <tbody>

          {rows.length === 0 ? (

            <tr>
              <td colSpan={2} className="text-center p-10 text-gray-400">
                No IPO data available
              </td>
            </tr>

          ) : (

            rows.map((ipo, index) => (

              <tr key={index} className="border-t">

                <td className="p-4 text-blue-600 font-medium">
                  {ipo.company}
                </td>

                <td className="p-4 text-right text-gray-600">
                  {formatDateRange(ipo.ipo_open, ipo.ipo_close)}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </motion.div>

  );
}

function formatDateRange(start: string, end: string) {

  if (!start || !end) return "TBA";

  const s = new Date(start);
  const e = new Date(end);

  const startDay = s.getDate();
  const endDay = e.getDate();
  const month = e.toLocaleString("en", { month: "short" });

  return `${startDay} - ${endDay} ${month}`;
}

const FALLBACK_DATA: IPO[] = [

  { company: "Skyways Air Services", type: "mainboard", ipo_open: "2026-03-18", ipo_close: "2026-03-20" },

  { company: "Raajmarg Infra", type: "mainboard", ipo_open: "2026-03-11", ipo_close: "2026-03-13" },

  { company: "Innovision Ltd", type: "mainboard", ipo_open: "2026-03-10", ipo_close: "2026-03-12" },

  { company: "Apsis Aerocom", type: "sme", ipo_open: "2026-03-11", ipo_close: "2026-03-13" },

  { company: "Srinibas Pradhan", type: "sme", ipo_open: "2026-03-06", ipo_close: "2026-03-10" }

];