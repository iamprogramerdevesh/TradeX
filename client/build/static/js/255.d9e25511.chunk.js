"use strict";(self.webpackChunktradex=self.webpackChunktradex||[]).push([[255],{7255:function(e,s,t){t.r(s),t.d(s,{default:function(){return j}});var a=t(7313),l=t(6051),n=t(3709),r=t(9439),i=t(9798),c=t(8101),d=t(6672),o=t(8821),x=t(3365),m=t(4530),h=t(606),f=t(6417),u=function(e){var s=e.journal,t=s.JournalDate,l=s.TradeStatus,n=s.TotalNetPnL,u=s.Winrate,j=s.TotalTrades,N=s.TotalWins,v=s.TotalLoss,g=s.TotalFees,b=s.TotalGrossPnL,p=s.TradeDetails,w=(0,a.useState)(!1),y=(0,r.Z)(w,2),k=y[0],L=y[1];return(0,f.jsxs)("div",{className:"w-full p-4 mt-8 sm:p-4 bg-white rounded-lg shadow dark:bg-main-dark",children:[(0,f.jsxs)("div",{className:"flex justify-between",children:[(0,f.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between w-[350px]",children:[(0,f.jsx)("div",{children:(0,f.jsx)("h3",{className:"text-base font-medium dark:text-white",children:(0,i.p6)(t,"local-date")})}),(0,f.jsx)("div",{className:"hidden divider sm:flex",children:(0,f.jsx)(o.riV,{className:"h-6 w-6 text-gray-400 dark:text-gray-600"})}),(0,f.jsxs)("div",{className:"flex",children:[(0,f.jsx)("h3",{className:"text-base font-medium text-".concat(0===l.toString().localeCompare("LOSS")?"red":"green"),children:"Net PnL"}),(0,f.jsx)("div",{className:"flex mx-3 mt-1",children:(0,f.jsx)("h5",{className:"flex leading-none text-base font-semibold pb-2",children:(0,f.jsx)(c.i,{value:n})})})]})]}),(0,f.jsx)("div",{className:"col",children:(0,f.jsx)("button",{className:"w-8 h-8 bg-gray-300 dark:bg-gray-400 rounded-full flex justify-center items-center cursor-pointer",onClick:function(){return L(!k)},children:(0,f.jsx)(d.RiI,{className:"w-5 h-5"})})})]}),(0,f.jsxs)("div",{className:"grid grid-cols-2 gap-6 sm:gap-2 my-2 sm:grid-cols-3 lg:grid-cols-6 h-full",children:[(0,f.jsx)("div",{className:"chart h-[85px]",children:(0,f.jsx)(x.Z,{color:"".concat(0===l.toString().localeCompare("LOSS")?"#f23645":"#089981"),height:100,data:function(e){return(null===e||void 0===e?void 0:e.map((function(e){return e.NetPnL})))||[]}(p),seriesName:"Net P&L"})}),(0,f.jsxs)("div",{className:"flex flex-col justify-end items-center",children:[(0,f.jsx)("h3",{className:"text-sm font-normal text-gray-400",children:"Winrate"}),(0,f.jsxs)("p",{className:"text-base font-bold dark:text-white",children:[u,"%"]})]}),(0,f.jsxs)("div",{className:"flex flex-col justify-end items-center",children:[(0,f.jsx)("h3",{className:"text-sm font-normal text-gray-400",children:"Total Trades"}),(0,f.jsx)("p",{className:"text-base font-bold dark:text-white",children:j})]}),(0,f.jsxs)("div",{className:"flex flex-col justify-end items-center",children:[(0,f.jsx)("h3",{className:"text-sm font-normal text-gray-400",children:"Wins / Losses"}),(0,f.jsxs)("p",{className:"text-base font-bold dark:text-white",children:[N,"W / ",v,"L"]})]}),(0,f.jsxs)("div",{className:"flex flex-col justify-end items-center",children:[(0,f.jsx)("h3",{className:"text-sm font-normal text-gray-400",children:"Fees & Charges"}),(0,f.jsx)("p",{className:"text-base font-bold dark:text-white",children:(0,f.jsx)(c.$,{value:g})})]}),(0,f.jsxs)("div",{className:"flex flex-col justify-end items-center",children:[(0,f.jsx)("h3",{className:"text-sm font-normal text-gray-400",children:"Gross PnL"}),(0,f.jsx)("p",{className:"flex items-center text-base font-bold dark:text-white",children:(0,f.jsx)(c.i,{value:b})})]})]}),k&&(0,f.jsx)("div",{className:"mt-10 relative overflow-x-auto shadow-md sm:rounded-lg",children:(0,f.jsx)(h.Z,{columns:m.X2,data:p||[]})})]})},j=function(){var e=(0,n.v9)((function(e){var s,t;return null===(s=e.account)||void 0===s||null===(t=s.selectedAccount)||void 0===t?void 0:t.AccountId})),s=(0,l.i)({id:e},{refetchOnMountOrArgChange:!0,skip:!e}),t=s.data;s.isLoading;return(0,f.jsx)(f.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,f.jsx)(u,{journal:e})}))})}}}]);