"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SidebarDashboard = () => {
  const pathname = usePathname();
  const spiltPathname = pathname.split('/')[1];

  const sidebarItems = [
    {
      title: "MAIN",
      items: [
        {
          href: "/dashboard-home",
          icon: "flaticon-discovery",
          text: "Dashboard",
        },
        {
          href: "/dashboard-add-novel",
          icon: "flaticon-new-tab",
          text: "Add New Novel",
        },
        {
          href: "/dashboard-my-novel",
          icon: "flaticon-home",
          text: "My Novel",
        },
        {
          href: "/dashboard-my-favourites",
          icon: "flaticon-like",
          text: "My Favorites",
        },
        {
          href: "/dashboard-income",
          icon: "fa-thin fa-money-bill",
          text: "Income"
        },
        {
          href: "/dashboard-notification",
          icon: "fa-thin fa-bell",
          text: "Notification"
        }
      ],
    },
    {
      title: "TOP UP",
      items: [
        {
          href: "/dashboard-my-wallet",
          icon: "fa-thin fa-wallet",
          text: "Wallet",
        },
      ],
    },
    {
      title: "PROMOTION",
      items: [
        {
          href: "/dashboard-invite-friends",
          icon: "fa-light fa-user-group",
          text: "Refer a friend",
        },
      ],
    },
    {
      title: "MANAGE ACCOUNT",
      items: [
        {
          href: "/dashboard-my-profile",
          icon: "flaticon-user",
          text: "My Profile",
        },
        {
          href: "/login",
          icon: "flaticon-logout",
          text: "Logout",
        },
      ],
    },
  ];

  return (
    <div className="dashboard__sidebar d-none d-lg-block">
      <div className="dashboard_sidebar_list">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <p
              className={`fz15 fw400 ff-heading ${
                sectionIndex === 0 ? "mt-0" : "mt30"
              }`}
            >
              {section.title}
            </p>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="sidebar_list_item">
                <Link
                  href={item.href}
                  className={`items-center   ${
                      `/${spiltPathname}` == item.href ? "-is-active" : ""
                  } `}
                >
                  <i className={`${item.icon} mr15`} />
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboard;
