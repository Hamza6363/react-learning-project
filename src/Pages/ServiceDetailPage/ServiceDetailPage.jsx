import React from 'react';
import { useParams } from 'react-router-dom';

function ServiceDetailPage() {
  const { serviceId } = useParams();

  return (
    <div>
      <h2>Service Detail for Service {serviceId}</h2>
      {/* Fetch and display service details based on serviceId */}
    </div>
  );
}

export default ServiceDetailPage;