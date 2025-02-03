'use client';

import React from 'react';
import { Heart, ArrowRight, Coffee, Gift, Coins } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Donate() {
  const donationAmounts = [10, 25, 50, 100];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Heart className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Your donation helps us provide mental health support to those who need it most. Every contribution makes a difference.
            </p>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Choose Donation Amount</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    className="p-4 border-2 border-orange-500 rounded-lg text-center hover:bg-orange-500 hover:text-white transition group"
                  >
                    <div className="text-2xl font-bold text-orange-500 group-hover:text-white">${amount}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-white/90">One-time</div>
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-orange-500 pl-8"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2">
                Donate Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <Coffee className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">$10</h3>
                <p className="text-muted-foreground">Provides a therapy session to someone in need</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <Gift className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">$25</h3>
                <p className="text-muted-foreground">Supports our 24/7 crisis helpline for a day</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <Coins className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">$50</h3>
                <p className="text-muted-foreground">Funds mental health workshops for communities</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}