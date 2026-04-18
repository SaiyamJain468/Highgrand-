import Link from "next/link";
import { TrendingUp, Users, ShoppingBag, Package } from "lucide-react";

export default function AdminDashboardPage() {
  // Mock Data
  const metrics = [
    { title: "TOTAL SALES", value: "₹2,45,980", icon: TrendingUp, trend: "+12.5%" },
    { title: "TOTAL ORDERS", value: "145", icon: ShoppingBag, trend: "+5.2%" },
    { title: "ACTIVE PRODUCTS", value: "32", icon: Package, trend: "0%" },
    { title: "TOTAL CUSTOMERS", value: "89", icon: Users, trend: "+18.1%" },
  ];

  const recentOrders = [
    { id: "ORD-9821", customer: "Rahul Sharma", date: "Today, 10:42 AM", total: "₹4,998", status: "PROCESSING" },
    { id: "ORD-9820", customer: "Priya Patel", date: "Yesterday, 04:15 PM", total: "₹1,999", status: "SHIPPED" },
    { id: "ORD-9819", customer: "Arjun Singh", date: "Oct 24, 02:30 PM", total: "₹8,497", status: "DELIVERED" },
    { id: "ORD-9818", customer: "Neha Gupta", date: "Oct 24, 11:15 AM", total: "₹3,498", status: "PROCESSING" },
    { id: "ORD-9817", customer: "Vikram Reddy", date: "Oct 23, 09:20 AM", total: "₹1,999", status: "DELIVERED" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-bebas text-[36px] text-brand-white mb-8 uppercase tracking-wide">DASHBOARD OVERVIEW</h1>

      {/* TASK 63: Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          const isPositive = metric.trend.startsWith('+');
          return (
            <div key={i} className="bg-brand-dark border border-brand-border p-6 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon size={64} />
              </div>
              <p className="font-inter text-[11px] text-brand-muted uppercase tracking-[0.1em] mb-2">{metric.title}</p>
              <h3 className="font-inter font-medium text-[28px] text-brand-white mb-4">{metric.value}</h3>
              <div className="flex items-center gap-2 font-inter text-[11px]">
                <span className={isPositive ? "text-brand-success" : "text-brand-muted"}>{metric.trend}</span>
                <span className="text-brand-muted">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* TASK 64: Recent Orders Table */}
      <div className="bg-brand-dark border border-brand-border">
        <div className="flex justify-between items-center p-6 border-b border-brand-border">
          <h2 className="font-bebas text-[24px] text-brand-white uppercase tracking-wide">RECENT ORDERS</h2>
          <Link href="/admin/orders" className="font-inter text-[11px] text-brand-white underline underline-offset-4 uppercase tracking-widest hover:text-brand-accent transition-colors">
            VIEW ALL
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-inter text-[13px]">
            <thead className="bg-[#111111] border-b border-brand-border text-[11px] uppercase tracking-wider text-brand-muted">
              <tr>
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium text-right">Total</th>
                <th className="p-4 font-medium text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-[#1A1A1A] transition-colors text-brand-white">
                  <td className="p-4 font-medium">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4 text-brand-muted">{order.date}</td>
                  <td className="p-4 text-right">{order.total}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-block px-2 py-1 text-[10px] uppercase tracking-wider border ${
                      order.status === 'DELIVERED' ? 'bg-brand-success/10 text-brand-success border-brand-success/20' :
                      order.status === 'PROCESSING' ? 'bg-brand-white/10 text-brand-white border-brand-white/20' :
                      'bg-brand-muted/10 text-brand-muted border-brand-muted/20'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
