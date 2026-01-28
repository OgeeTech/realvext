import React, { useState, useMemo } from "react";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaChartLine,
  FaUsers,
  FaTag,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Marketplace = () => {
  // --- States ---
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false); // Toggle filter panel
  const [visibleCount, setVisibleCount] = useState(6); // Pagination state
  const [searchQuery, setSearchQuery] = useState("");

  // Advanced Filters State
  const [filters, setFilters] = useState({
    location: "All",
    priceRange: "All",
  });

  // --- Extended Mock Data (Duplicated to simulate more items) ---
  const initialProperties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600596542815-e36cb2907bcd?auto=format&fit=crop&w=800&q=80",
      title: "Lekki Pearl Garden",
      location: "Lekki Phase 1, Lagos",
      type: "Residential",
      price: 50000,
      priceDisplay: "₦50,000",
      returnRate: "15%",
      funded: 78,
      investors: 234,
      status: "Selling Fast",
      category: "Residential",
    },
    {
      id: 2,
      title: "Victoria Tech Hub",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      location: "Victoria Island, Lagos",
      type: "Commercial",
      price: 120000,
      priceDisplay: "₦120,000",
      returnRate: "22%",
      funded: 45,
      investors: 89,
      status: "New Listing",
      category: "Commercial",
    },
    {
      id: 3,
      title: "Abuja Green Estate",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      location: "Maitama, Abuja",
      type: "Residential",
      price: 75000,
      priceDisplay: "₦75,000",
      returnRate: "18%",
      funded: 92,
      investors: 410,
      status: "Almost Sold Out",
      category: "Residential",
    },
    {
      id: 4,
      title: "Ikeja Mall Annex",
      image:
        "https://images.unsplash.com/photo-1582037928769-181f242afcf8?auto=format&fit=crop&w=800&q=80",
      location: "Ikeja, Lagos",
      type: "Commercial",
      price: 200000,
      priceDisplay: "₦200,000",
      returnRate: "25%",
      funded: 100,
      investors: 500,
      status: "Sold Out",
      category: "Commercial",
    },
    {
      id: 5,
      title: "Student Hostels A",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      location: "Yaba, Lagos",
      type: "Student Housing",
      price: 25000,
      priceDisplay: "₦25,000",
      returnRate: "14%",
      funded: 12,
      investors: 30,
      status: "Early Bird",
      category: "Student Housing",
    },
    {
      id: 6,
      title: "Port Harcourt Warehouse",
      image:
        "https://images.unsplash.com/photo-1565514020176-db8b3a0142b7?auto=format&fit=crop&w=800&q=80",
      location: "Trans Amadi, PH",
      type: "Industrial",
      price: 90000,
      priceDisplay: "₦90,000",
      returnRate: "20%",
      funded: 60,
      investors: 150,
      status: "Selling",
      category: "Industrial",
    },
    // Duplicates to demonstrate "Load More"
    {
      id: 7,
      title: "Banana Island Loft",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      location: "Ikoyi, Lagos",
      type: "Residential",
      price: 350000,
      priceDisplay: "₦350,000",
      returnRate: "28%",
      funded: 15,
      investors: 42,
      status: "Premium",
      category: "Residential",
    },
    {
      id: 8,
      title: "Kano Logistics Center",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      location: "Kano City",
      type: "Industrial",
      price: 45000,
      priceDisplay: "₦45,000",
      returnRate: "16%",
      funded: 30,
      investors: 60,
      status: "Open",
      category: "Industrial",
    },
  ];

  // --- Filter Logic ---
  const filteredProperties = useMemo(() => {
    return initialProperties.filter((item) => {
      // 1. Category Filter
      if (activeCategory !== "All" && item.category !== activeCategory)
        return false;

      // 2. Search Query
      if (
        searchQuery &&
        !item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !item.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;

      // 3. Location Filter (Basic string match)
      if (
        filters.location !== "All" &&
        !item.location.includes(filters.location)
      )
        return false;

      // 4. Price Filter
      if (filters.priceRange !== "All") {
        if (filters.priceRange === "Under ₦50k" && item.price >= 50000)
          return false;
        if (
          filters.priceRange === "₦50k - ₦100k" &&
          (item.price < 50000 || item.price > 100000)
        )
          return false;
        if (filters.priceRange === "Above ₦100k" && item.price <= 100000)
          return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery, filters]);

  // Paginated Data
  const visibleProperties = filteredProperties.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProperties.length;

  // Handlers
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setVisibleCount(6); // Reset pagination when filtering
  };

  const clearFilters = () => {
    setFilters({ location: "All", priceRange: "All" });
    setActiveCategory("All");
    setSearchQuery("");
  };

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Student Housing",
    "Industrial",
  ];

  return (
    <div className="font-sans min-h-screen bg-gray-50/50">
      {/* ================= HEADER ================= */}
      <section className="bg-[#0f172a] text-white pt-32 pb-20 px-6 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Premium Assets, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Available Now
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Browse our curated list of high-yield real estate opportunities.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full flex items-center shadow-xl">
            <div className="pl-6 text-gray-400">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search by location or property name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-white px-4 py-3 focus:outline-none placeholder-gray-400"
            />
            <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full font-bold transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#0f172a] text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-green-500 hover:text-green-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Control Bar: Stats & Toggle Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 text-sm font-medium gap-4">
          <p className="text-gray-500">
            Showing {visibleProperties.length} of {filteredProperties.length}{" "}
            Properties
          </p>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
              showFilters
                ? "bg-green-50 border-green-200 text-green-700"
                : "bg-white border-gray-200 hover:text-[#0f172a]"
            }`}
          >
            <FaFilter /> {showFilters ? "Hide Filters" : "More Filters"}
          </button>
        </div>

        {/* Expandable Filter Panel */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${showFilters ? "max-h-48 opacity-100 mb-10" : "max-h-0 opacity-0 mb-0"}`}
        >
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* Location Select */}
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">
                Location
              </label>
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500"
              >
                <option value="All">Any Location</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Port Harcourt">Port Harcourt</option>
                <option value="Kano">Kano</option>
              </select>
            </div>

            {/* Price Select */}
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">
                Price Range
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) =>
                  handleFilterChange("priceRange", e.target.value)
                }
                className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500"
              >
                <option value="All">Any Price</option>
                <option value="Under ₦50k">Under ₦50k</option>
                <option value="₦50k - ₦100k">₦50k - ₦100k</option>
                <option value="Above ₦100k">Above ₦100k</option>
              </select>
            </div>

            {/* Clear Button */}
            <button
              onClick={clearFilters}
              className="p-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <FaTimes /> Clear All
            </button>
          </div>
        </div>

        {/* Property Grid */}
        {visibleProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                    {property.type}
                  </div>
                  <div
                    className={`absolute top-4 right-4 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md ${property.funded === 100 ? "bg-gray-800" : "bg-green-500"}`}
                  >
                    {property.status}
                  </div>

                  {property.funded === 100 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-white font-bold text-2xl border-4 border-white px-6 py-2 rounded-xl transform -rotate-12">
                        SOLD OUT
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#0f172a] mb-1 group-hover:text-green-600 transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <FaMapMarkerAlt className="text-green-500" />
                      {property.location}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Price / Share
                      </p>
                      <p className="text-[#0f172a] font-bold">
                        {property.priceDisplay}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1 flex items-center justify-end gap-1">
                        Annual Return <FaChartLine className="text-green-500" />
                      </p>
                      <p className="text-green-600 font-bold">
                        {property.returnRate}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-gray-500">
                        Funded: {property.funded}%
                      </span>
                      <span className="text-[#0f172a] flex items-center gap-1">
                        <FaUsers className="text-gray-400" />{" "}
                        {property.investors} Investors
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-green-500 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${property.funded}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide flex items-center gap-1">
                      <FaTag /> Investment
                    </span>
                    <Link
                      to={`/property/${property.id}`}
                      className={`font-bold text-sm ${
                        property.funded === 100
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-green-600 hover:text-green-700 hover:underline"
                      }`}
                    >
                      {property.funded === 100
                        ? "View Details"
                        : "Invest Now >"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-400">
              No properties found
            </h3>
            <p className="text-gray-400">Try adjusting your filters.</p>
          </div>
        )}

        {/* Load More Button - Only shows if there are more items */}
        {hasMore && (
          <div className="text-center mt-20">
            <button
              onClick={handleLoadMore}
              className="px-10 py-4 border-2 border-[#0f172a] text-[#0f172a] rounded-full font-bold hover:bg-[#0f172a] hover:text-white transition-all duration-300"
            >
              Load More Properties
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Marketplace;
