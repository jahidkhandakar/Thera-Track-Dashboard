import React from 'react';
import { Card } from 'antd';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useEarningStatusQuery } from '../../redux/features/otherApi/earningStatus';

const EarningsChart = () => {
  const { data: earnigns } = useEarningStatusQuery();
  console.log(earnigns);
  
  // Transform your API data for the chart
  const chartData = earnigns?.data?.attributes?.map(item => ({
    month: item.month.slice(0, 3),
    totalAmountSum: parseFloat(item.totalAmountSum.toFixed(2))
  })) || [];

  const currentYear = new Date().getFullYear();
  return (
    <Card className="w-full mt-4">
      <div className="mb-2 text-right">
        <span className="text-sm text-gray-500">{currentYear}</span>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              hide
            />
            <Tooltip 
              formatter={(value) => [`${value.toFixed(2)}`, 'Earnings']}
              labelStyle={{ color: '#666' }}
            />
            <Area
              type="monotone"
              dataKey="totalAmountSum"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#colorEarnings)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default EarningsChart;