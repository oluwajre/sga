"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ReferralTracker() {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("ref");

  useEffect(() => {
    if (!referralCode) return;

    document.cookie = `sga_referral_code=${encodeURIComponent(
      referralCode
    )}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
  }, [referralCode]);

  return null;
}