"use client";
import GlobalApi from "@/app/_services/GlobalApi";
import React, { useEffect, useState } from "react";
import BusinessInfo from "../_components/BusinessInfo";
import SuggestedBusinessList from "../_components/SuggestedBusinessList";
import BusinessDescription from "../_components/BusinessDescription";

function BusinessDetail({ params }) {
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.businessId) {
      getBusinessById(params.businessId);
    }
  }, [params]);

  const getBusinessById = async (id) => {
    try {
      setLoading(true);
      const resp = await GlobalApi.getBusinessById(id);
      console.log("API Response:", resp);
      setBusiness(resp?.businessList || null); // 👈 singular, not plural
    } catch (error) {
      console.error("Error fetching business:", error);
      setBusiness(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading business details...</p>;
  if (!business) return <p>Business not found</p>;

  return (
    <div className="py-8 md:py-20 px-10 md:px-36">
      <BusinessInfo business={business} />

      <div className="grid grid-cols-3 mt-16">
        <div className="col-span-3 md:col-span-2 order-last md:order-first">
          <BusinessDescription business={business} />
        </div>
        <div>
          <SuggestedBusinessList business={business} />
        </div>
      </div>
    </div>
  );
}

export default BusinessDetail;
