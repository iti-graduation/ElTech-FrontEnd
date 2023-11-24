import * as React from 'react';
import { PieChart,pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function HomePie({ categoryProducts }) {
    const filteredData = categoryProducts.filter(category => category.productsCount !== 0);


    return (
      <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data: filteredData.map((category) => ({
            id: category.id,
            value: category.productsCount,
            label: category.name,
          })),
        },
      ]}
        sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontWeight: 'bold',
            },
            marginTop:'20px',
            marginLeft:'0',
          }}
        width={800}
        height={400}
      />
    );
  }