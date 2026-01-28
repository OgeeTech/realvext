import React, { useState } from "react";
import {
  FaHashtag,
  FaLock,
  FaSearch,
  FaChevronDown,
  FaChevronRight,
  FaPlus,
  FaPaperPlane,
  FaSmile,
  FaPaperclip,
  FaBars,
  FaTimes,
  FaCircle,
} from "react-icons/fa";

const Community = () => {
  // --- STATE MANAGEMENT ---
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeChannel, setActiveChannel] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");

  // Accordion States
  const [sections, setSections] = useState({
    favorites: true,
    channels: true,
    dms: true,
  });

  const toggleSection = (section) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // --- MOCK DATA ---
  const channels = [
    { id: "general", name: "general", type: "public", isFavorite: true },
    {
      id: "announcements",
      name: "announcements",
      type: "public",
      isFavorite: true,
    },
    {
      id: "investment-tips",
      name: "investment-tips",
      type: "public",
      isFavorite: false,
    },
    {
      id: "property-news",
      name: "property-news",
      type: "public",
      isFavorite: false,
    },
    {
      id: "support",
      name: "support-tickets",
      type: "private",
      isFavorite: false,
    },
  ];

  const dms = [
    { id: "u1", name: "Sarah Connor", status: "online", isFavorite: false },
    { id: "u2", name: "John Wick", status: "busy", isFavorite: true },
    { id: "u3", name: "Bruce Wayne", status: "offline", isFavorite: false },
  ];

  const messages = [
    {
      id: 1,
      user: "Sarah Connor",
      avatar: "https://i.pravatar.cc/150?u=1",
      time: "10:30 AM",
      content:
        "Has anyone checked out the new Lekki Pearl Garden listing? The ROI looks insane.",
      reactions: ["🔥", "👍"],
    },
    {
      id: 2,
      user: "John Wick",
      avatar: "https://i.pravatar.cc/150?u=2",
      time: "10:32 AM",
      content:
        "Yeah, I just bought 5 shares. The verification process was super fast.",
      reactions: [],
    },
    {
      id: 3,
      user: "You",
      avatar: "https://i.pravatar.cc/150?u=me",
      time: "10:35 AM",
      content:
        "I'm thinking of jumping in too. Is the document signing fully digital?",
      reactions: [],
    },
    {
      id: 4,
      user: "Sarah Connor",
      avatar: "https://i.pravatar.cc/150?u=1",
      time: "10:36 AM",
      content:
        "100%. realVext handles everything within the app. No paperwork needed.",
      reactions: ["❤️"],
    },
  ];

  // --- FILTERING ---
  const filteredChannels = channels.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const filteredDMs = dms.filter((u) =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const favorites = [
    ...filteredChannels.filter((c) => c.isFavorite),
    ...filteredDMs.filter((u) => u.isFavorite),
  ];

  const regularChannels = filteredChannels.filter((c) => !c.isFavorite);
  const regularDMs = filteredDMs.filter((u) => !u.isFavorite);

  return (
    <div className="flex h-[calc(100vh-80px)] bg-white font-sans overflow-hidden">
      {/* ================= SIDEBAR ================= */}
      <aside
        className={`bg-[#0f172a] text-gray-400 flex flex-col transition-all duration-300 ease-in-out z-20 absolute md:relative h-full
          ${sidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full md:w-0 md:translate-x-0 opacity-0 md:opacity-100 overflow-hidden"}
        `}
      >
        {/* Sidebar Header */}
        <div className="h-16 border-b border-gray-700 flex items-center justify-between px-4 shrink-0 bg-[#0f172a]">
          <h2 className="font-bold text-white text-lg truncate">
            realVext Community
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <FaTimes />
          </button>
        </div>

        {/* Scrollable Sidebar Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Find channel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 text-white text-sm rounded-md pl-8 pr-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-gray-600 placeholder-gray-500"
              />
              <FaSearch className="absolute left-2.5 top-2 text-gray-500 text-xs" />
            </div>
          </div>

          {/* Favorites Dropdown */}
          <SidebarSection
            title="Favorites"
            isOpen={sections.favorites}
            onToggle={() => toggleSection("favorites")}
          >
            {favorites.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                isActive={activeChannel === item.id}
                onClick={() => setActiveChannel(item.id)}
              />
            ))}
          </SidebarSection>

          {/* Channels Dropdown */}
          <SidebarSection
            title="Channels"
            isOpen={sections.channels}
            onToggle={() => toggleSection("channels")}
            canAdd
          >
            {regularChannels.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                isActive={activeChannel === item.id}
                onClick={() => setActiveChannel(item.id)}
              />
            ))}
          </SidebarSection>

          {/* Direct Messages Dropdown */}
          <SidebarSection
            title="Direct Messages"
            isOpen={sections.dms}
            onToggle={() => toggleSection("dms")}
            canAdd
          >
            {regularDMs.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                isActive={activeChannel === item.id}
                onClick={() => setActiveChannel(item.id)}
              />
            ))}
          </SidebarSection>
        </div>
      </aside>

      {/* ================= MAIN CHAT AREA ================= */}
      <main className="flex-1 flex flex-col min-w-0 bg-white">
        {/* Chat Header */}
        <header className="h-16 border-b border-gray-200 flex items-center justify-between px-4 shrink-0 bg-white">
          <div className="flex items-center gap-3">
            {/* Mobile Toggle */}
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-600 hover:text-[#0f172a] mr-2"
              >
                <FaBars size={20} />
              </button>
            )}
            {/* Desktop Toggle (When closed) */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden md:block text-gray-600 hover:text-[#0f172a] mr-2"
            >
              <FaBars size={20} />
            </button>

            <div className="flex items-center gap-2">
              <FaHashtag className="text-gray-400" />
              <h3 className="font-bold text-[#0f172a] text-lg">
                {activeChannel}
              </h3>
            </div>
            <span className="text-xs text-gray-400 hidden sm:block">
              | Property investment discussions
            </span>
          </div>

          {/* Members / Search in Chat */}
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?u=${i}`}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">
                +42
              </div>
            </div>
          </div>
        </header>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-200">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="group flex gap-4 items-start hover:bg-gray-50 -mx-4 px-4 py-2 transition-colors rounded-lg"
            >
              <img
                src={msg.avatar}
                alt={msg.user}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-[#0f172a]">{msg.user}</span>
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>
                <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                  {msg.content}
                </p>
                {/* Reactions */}
                {msg.reactions.length > 0 && (
                  <div className="flex gap-1 mt-2">
                    {msg.reactions.map((emoji, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded text-xs cursor-pointer hover:border-green-400"
                      >
                        {emoji} 1
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white shrink-0">
          <div className="border border-gray-300 rounded-xl shadow-sm bg-white focus-within:ring-1 focus-within:ring-green-500 focus-within:border-green-500 transition-all">
            {/* Toolbar */}
            <div className="flex items-center gap-2 p-2 border-b border-gray-100 bg-gray-50/50 rounded-t-xl">
              <button className="p-2 text-gray-500 hover:bg-gray-200 rounded">
                <FaPlus size={12} />
              </button>
              <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>
              <button className="p-2 text-gray-500 hover:bg-gray-200 rounded font-bold text-xs">
                B
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-200 rounded italic text-xs">
                I
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-200 rounded line-through text-xs">
                S
              </button>
            </div>

            <textarea
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder={`Message #${activeChannel}`}
              className="w-full max-h-40 min-h-[60px] p-3 focus:outline-none resize-none text-sm md:text-base rounded-b-xl"
              rows="1"
            />

            <div className="flex items-center justify-between p-2">
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-green-600">
                  <FaPaperclip />
                </button>
                <button className="p-2 text-gray-400 hover:text-yellow-500">
                  <FaSmile />
                </button>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-bold px-4">
                Send <FaPaperPlane className="text-xs" />
              </button>
            </div>
          </div>
          <div className="text-center mt-2">
            <p className="text-[10px] text-gray-400">
              <strong>Tip:</strong> You can invest directly from the chat using
              /invest command.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const SidebarSection = ({ title, isOpen, onToggle, children, canAdd }) => (
  <div className="mt-6">
    <div
      className="flex items-center justify-between px-4 group cursor-pointer text-gray-500 hover:text-white mb-1"
      onClick={onToggle}
    >
      <div className="flex items-center gap-1 font-bold text-xs uppercase tracking-wide">
        {isOpen ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
        {title}
      </div>
      {canAdd && (
        <FaPlus
          className="opacity-0 group-hover:opacity-100 hover:text-green-400 transition-opacity"
          size={10}
        />
      )}
    </div>
    {isOpen && <ul>{children}</ul>}
  </div>
);

const SidebarItem = ({ item, isActive, onClick }) => {
  const isUser = !!item.status; // Check if it's a DM based on status property

  return (
    <li
      onClick={onClick}
      className={`px-4 py-1.5 cursor-pointer flex items-center gap-2.5 text-[15px] transition-colors ${
        isActive
          ? "bg-blue-600/20 text-white border-l-4 border-green-500"
          : "text-gray-400 hover:bg-gray-800 hover:text-gray-200 border-l-4 border-transparent"
      }`}
    >
      {isUser ? (
        <div className="relative">
          <img
            src={`https://i.pravatar.cc/150?u=${item.id}`}
            className="w-4 h-4 rounded text-xs"
            alt={item.name}
          />
          <FaCircle
            className={`absolute -bottom-0.5 -right-0.5 text-[8px] border border-[#0f172a] rounded-full 
             ${item.status === "online" ? "text-green-500" : item.status === "busy" ? "text-red-500" : "text-gray-500"}`}
          />
        </div>
      ) : (
        <span className="text-gray-500">
          {item.type === "private" ? (
            <FaLock size={12} />
          ) : (
            <FaHashtag size={12} />
          )}
        </span>
      )}
      <span className="truncate">{item.name}</span>
    </li>
  );
};

export default Community;
