"use strict";(self.webpackChunktradex=self.webpackChunktradex||[]).push([[166],{8101:function(e,t,s){s.d(t,{$:function(){return r},i:function(){return m}});s(7313);var a=s(3709),i=s(7864),n=s(6417),r=function(e){var t=e.value,s=void 0===t?0:t,i=e.isFixed,r=void 0===i?1:i,m=(0,a.v9)((function(e){return e.account.selectedCurrency}),[])||"",d=1==r?m+parseFloat(s).toFixed(2):m+parseFloat(s);return(0,n.jsx)(n.Fragment,{children:d})},m=function(e){var t=e.value,s=void 0===t?0:t,r=e.showCurrency,m=void 0===r||r,d=e.showPlusMinus,x=void 0===d||d,l=e.showPercentage,c=void 0!==l&&l,o=e.showIcon,h=void 0!==o&&o,u=e.showBracket,f=void 0!==u&&u,j=(0,a.v9)((function(e){return e.account.selectedCurrency}),[])||"",N=Number(parseFloat(s).toFixed(2)),y=(x?N>0?"+":N<0?"-":"":"")+(m&&!c?j:"")+Math.abs(parseFloat(s)).toFixed(2)+(c?"%":"");return(0,n.jsxs)(n.Fragment,{children:[h?N<0?(0,n.jsx)(i.i0B,{className:"text-red mr-1"}):(0,n.jsx)(i.Vs3,{className:"text-green mr-1"}):null,(0,n.jsx)("span",{className:N<0?"text-red":N>0?"text-green":"dark:text-white",children:f?"("+y+")":y})]})}},9166:function(e,t,s){s.r(t);var a=s(9439),i=s(3420),n=s(7313),r=s(8960),m=s(5958),d=s(3709),x=s(4068),l=s(8467),c=s(8101),o=s(9798),h=s(6417);t.default=function(){var e=(0,n.useState)(!1),t=(0,a.Z)(e,2),s=t[0],u=t[1],f=(0,l.s0)(),j=(0,n.useState)(new URLSearchParams((0,l.TH)().search).get("id")),N=(0,a.Z)(j,2),y=N[0],p=N[1],k=(0,d.v9)((function(e){var t,s;return null===(t=e.account)||void 0===t||null===(s=t.selectedAccount)||void 0===s?void 0:s.AccountId})),w=(0,x.gC)({id:k,tradeId:y},{refetchOnMountOrArgChange:!0,skip:!k}),v=w.data,g=(w.isLoading,w.refetch),b=v||[],F=b.TradeName,C=b.Setup,R=b.EntryDate,P=b.EntryPrice,E=b.ExitPrice,I=b.StopLoss,L=b.Quantity,T=b.EntryReason,S=b.ExitReason,A=b.MarketCondition,M=b.Emotions,$=b.AdditionalInfo,O=b.TradeStatus,U=b.NetPnL,B=b.GrossPnL,D=b.NetRoi,W=b.Fees,G=b.TradeRisk,Q=b.RiskReward,Z=b.previousTradeId,H=b.nextTradeId;return(0,h.jsxs)("section",{className:"min-h-screen h-full w-full max-w-2xl flex flex-col ",children:[(0,h.jsxs)("div",{className:"flex justify-between items-center my-3 mt-8 md:my-4",children:[(0,h.jsx)("div",{children:(0,h.jsxs)(i.hU,{onClick:function(){return f(-1)},children:[(0,h.jsx)(r.Wuc,{className:"mr-2"}),"Back"]})}),(0,h.jsxs)("div",{className:"flex items-center",children:[(0,h.jsxs)(i.hU,{disabled:!Z,onClick:function(){Z&&(p(Z),g())},children:[(0,h.jsx)(r.Wuc,{className:"mr-2"}),"Previous"]}),(0,h.jsxs)(i.hU,{disabled:!H,onClick:function(){H&&(p(H),g())},children:["Next",(0,h.jsx)(r.dhL,{className:"ml-2"})]})]})]}),(0,h.jsxs)("div",{className:"p-6 m-2 space-y-5 sm:p-8 bg-white rounded-lg shadow-md dark:bg-main-dark",children:[(0,h.jsxs)("div",{className:"py-2 border-b dark:border-gray-600",children:[(0,h.jsx)("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-400 uppercase",children:F}),(0,h.jsx)("span",{className:"text-sm font-medium text-gray-900 dark:text-gray-400 ",children:(0,o.p6)(R,"date_time")})]}),(0,h.jsxs)("div",{className:"pnl-section flex justify-between items-center",children:[(0,h.jsx)("h3",{className:"text-lg font-medium my-2 ".concat("WIN"===O?"text-green":"text-red"),children:"Net P&L"}),(0,h.jsx)("div",{className:"flex items-center",children:(0,h.jsx)("h5",{className:"text-lg font-semibold",children:(0,h.jsx)(c.i,{value:U})})})]}),(0,h.jsxs)("div",{className:"flex justify-between items-center",children:[(0,h.jsxs)("div",{className:"headers flex flex-col",children:[(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Net ROI"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Commission & Fees"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Gross P&L"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Quantity Traded"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Stop Loss"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Entry Price"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Initial Target"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Exit Price"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Trade Risk"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Risk Reward"})]}),(0,h.jsxs)("div",{className:"data flex flex-col",children:[(0,h.jsx)("span",{className:"text-sm font-medium my-2 text-right",children:(0,h.jsx)(c.i,{value:D,showPercentage:!0})}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:(0,h.jsx)(c.$,{value:W})}),(0,h.jsx)("span",{className:"text-sm font-medium my-2 text-right",children:(0,h.jsx)(c.i,{value:B})}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:null===L||void 0===L?void 0:L.toFixed(2)}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:null===I||void 0===I?void 0:I.toFixed(2)}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:(0,h.jsx)(c.$,{value:P,isFixed:0})}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:"-"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:(0,h.jsx)(c.$,{value:E,isFixed:0})}),(0,h.jsx)("span",{className:"text-sm font-medium text-red my-2 text-right",children:(0,h.jsx)(c.$,{value:G})}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:null===Q||void 0===Q?void 0:Q.toFixed(2)})]})]}),s&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{children:(0,h.jsx)("h2",{className:"pb-4 col-span-2 text-xl border-b font-semibold text-gray-900 dark:text-white dark:border-gray-600",children:"Additional Details"})}),(0,h.jsxs)("div",{className:"h-auto flex justify-between items-start",children:[(0,h.jsxs)("div",{className:"headers flex flex-col justify-start items-start",children:[(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Setup"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Tags"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Entry Reason"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Exit Reason"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Emotions"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Market Conditions"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2",children:"Additional Information"})]}),(0,h.jsxs)("div",{className:"data flex flex-col justify-start items-end",children:[(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:C}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:"-"}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:T}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:S}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:M}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:A}),(0,h.jsx)("span",{className:"text-sm font-medium dark:text-white my-2 text-right",children:$})]})]})]}),(0,h.jsx)("div",{className:"flex flex-row items-center justify-center my-4 sm:my-8",children:(0,h.jsxs)("button",{onClick:function(){return u(!s)},className:"flex flex-col items-center justify-center",children:[s&&(0,h.jsx)(m.jRD,{className:"dark:text-white cursor-pointer"}),(0,h.jsx)("h3",{className:"text-base dark:text-white cursor-pointer",children:s?"Less":"More"}),!s&&(0,h.jsx)(m.OrA,{className:"dark:text-white cursor-pointer"})]})})]})]})}}}]);