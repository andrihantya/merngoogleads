import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCampaignOverview } from '../redux/actions/campaignActions';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Overview = () => {
  const dispatch = useDispatch();
  const campaignOverview = useSelector((state) => state.campaign.overview);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    dispatch(fetchCampaignOverview());
  }, [dispatch]);

  useEffect(() => {
    if (campaignOverview) {
      const data = campaignOverview.map((item) => ({
        date: item.date,
        clicks: item.clicks,
        impressions: item.impressions,
        cost: item.cost,
      }));
      setChartData(data);
    }
  }, [campaignOverview]);

  return (
    <div className="overview-container">
      <h2>Overview</h2>
      <div className="overview-metrics">
        <div className="metric">
          <h3>Total Pengeluaran</h3>
          <p>{campaignOverview ? campaignOverview.totalCost : '0'}</p>
        </div>
        <div className="metric">
          <h3>Total Klick</h3>
          <p>{campaignOverview ? campaignOverview.totalClicks : '0'}</p>
        </div>
        <div className="metric">
          <h3>Total Impresi</h3>
          <p>{campaignOverview ? campaignOverview.totalImpressions : '0'}</p>
        </div>
        {/* Tambahkan metrics lainnya sesuai kebutuhan */}
      </div>
      <div className="overview-chart">
        <LineChart width={730} height={250} data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#f5f5f5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="clicks" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="impressions" stroke="#82ca9d" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="cost" stroke="#ffc658" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  );
};

export default Overview;
