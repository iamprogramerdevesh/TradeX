"use strict";(self.webpackChunktradex=self.webpackChunktradex||[]).push([[62],{5795:function(e,r,a){a(7313);var t=a(6417);r.Z=function(e){var r=e.label,a=e.id,n=e.type,i=e.placeholder,s=e.disabled,c=e.handleChange,l=e.htmlName,d=e.value,o=e.errorMsg,u="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100";return"file"===n&&(u="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:a,className:"block mb-2 text-sm font-medium ".concat(o?"text-red-700 dark:text-red-500":"text-gray-900 dark:text-white"),children:r}),"textArea"===n?(0,t.jsx)("textarea",{id:a,rows:"8",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:i}):(0,t.jsx)("input",{disabled:s,type:n,id:a,placeholder:i,value:d,className:o?"bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":u,name:l,onChange:c}),o&&(0,t.jsx)("p",{className:"mt-2 text-sm text-red-600 dark:text-red-500",children:(0,t.jsx)("span",{className:"font-medium",children:o})})]})}},2030:function(e,r,a){a(7313);var t=a(9798),n=a(6417);r.Z=function(e){var r=e.value,a=(null===r||void 0===r?void 0:r.toLowerCase())||"";return(0,n.jsx)("span",{className:(0,t.AK)("px-3 py-1 uppercase leading-wide font-bold text-xs rounded-xl shadow-sm",a.startsWith("win")?"border-2 border-green text-green":null,a.startsWith("pending")?"bg-yellow-100 text-yellow-800":null,a.startsWith("loss")?"border-2 border-red text-red":null),children:a})}},4530:function(e,r,a){a.d(r,{TA:function(){return o},Vv:function(){return c},X2:function(){return l},cm:function(){return u},d$:function(){return d}});var t=a(2030),n=a(9798),i=a(8101),s=a(6417),c=[{accessorKey:"Symbol",header:function(){return(0,s.jsx)("span",{children:"Symbol"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"uppercase",children:r.getValue("Symbol")})}},{accessorKey:"TradeStatus",header:function(){return(0,s.jsx)("span",{children:"Status"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:(0,s.jsx)(t.Z,{value:r.getValue("TradeStatus")})})}},{accessorKey:"EntryDate",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Open Date"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:(0,n.p6)(r.getValue("EntryDate"),"dd/mm/yyyy")})}},{accessorKey:"ExitDate",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Close Date"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:(0,n.p6)(r.getValue("ExitDate"),"dd/mm/yyyy")})}},{accessorKey:"Action",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Action"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"uppercase",children:r.getValue("Action")})}},{accessorKey:"NetPnL",header:function(){return(0,s.jsx)("div",{className:"capitalize text-center",children:"Net P&L"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"text-center whitespace-nowrap capitalize font-medium",children:(0,s.jsx)(i.i,{value:r.getValue("NetPnL")})})}},{accessorKey:"NetRoi",header:function(){return(0,s.jsx)("div",{className:"capitalize text-center",children:"Net ROI"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"text-center whitespace-nowrap capitalize font-medium",children:(0,s.jsx)(i.i,{value:r.getValue("NetRoi"),showPercentage:!0,showCurrency:!1})})}}],l=[{accessorKey:"Symbol",header:function(){return(0,s.jsx)("span",{children:"Symbol"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"uppercase",children:r.getValue("Symbol")})}},{accessorKey:"TradeStatus",header:function(){return(0,s.jsx)("span",{children:"Status"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:(0,s.jsx)(t.Z,{value:r.getValue("TradeStatus")})})}},{accessorKey:"EntryDate",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Open Date"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:(0,n.p6)(r.getValue("EntryDate"),"dd/mm/yyyy")})}},{accessorKey:"ExitDate",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Close Date"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:(0,n.p6)(r.getValue("ExitDate"),"dd/mm/yyyy")})}},{accessorKey:"Action",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Action"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"uppercase",children:r.getValue("Action")})}},{accessorKey:"NetPnL",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Net P&L"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"flex items-center capitalize font-medium",children:(0,s.jsx)(i.i,{value:r.getValue("NetPnL")})})}},{accessorKey:"NetRoi",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Net ROI"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"flex items-center capitalize font-medium",children:(0,s.jsx)(i.i,{value:r.getValue("NetRoi"),showPercentage:!0,showCurrency:!1})})}},{accessorKey:"EntryPrice",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Entry Price"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:(0,s.jsx)(i.$,{value:r.getValue("EntryPrice")})})}},{accessorKey:"ExitPrice",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Exit Price"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:(0,s.jsx)(i.$,{value:r.getValue("ExitPrice")})})}},{accessorKey:"StopLoss",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Stop Loss"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:(0,s.jsx)(i.$,{value:r.getValue("StopLoss")})})}},{accessorKey:"Quantity",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Quantity"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize font-medium",children:r.getValue("Quantity")})}},{accessorKey:"Setup",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Setup"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("Setup")})}},{accessorKey:"EntryReason",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Entry Reason"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("EntryReason")})}},{accessorKey:"ExitReason",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Exit Reason"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("ExitReason")})}},{accessorKey:"Emotions",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Emotions"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("Emotions")})}},{accessorKey:"MarketCondition",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Market Condition"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("MarketCondition")})}},{accessorKey:"AdditionalInfo",header:function(){return(0,s.jsx)("div",{className:"capitalize",children:"Additional Info"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("AdditionalInfo")})}}],d=[{accessorKey:"AccountName",header:function(){return(0,s.jsx)("span",{children:"Account Name"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("AccountName")})}},{accessorKey:"Broker",header:function(){return(0,s.jsx)("span",{children:"Broker"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("Broker")})}},{accessorKey:"InitialBalance",header:function(){return(0,s.jsx)("span",{children:"Balance"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("InitialBalance")})}},{accessorKey:"Currency",header:function(){return(0,s.jsx)("span",{children:"Currency"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("Currency")})}}],o=[{accessorKey:"TagName",header:function(){return(0,s.jsx)("span",{children:"Tag Name"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("TagName")})}},{accessorKey:"TagType",header:function(){return(0,s.jsx)("span",{children:"Type"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("TagType")})}},{accessorKey:"TagDesc",header:function(){return(0,s.jsx)("span",{children:"Description"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("TagDesc")})}}],u=[{accessorKey:"Imported On",header:function(){return(0,s.jsx)("span",{children:"Imported On"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("Imported On")})}},{accessorKey:"Broker Name",header:function(){return(0,s.jsx)("span",{children:"Broker Name"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("Broker Name")})}},{accessorKey:"Account Name",header:function(){return(0,s.jsx)("span",{children:"Account Name"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("Account Name")})}},{accessorKey:"Total Trades",header:function(){return(0,s.jsx)("span",{children:"Total Trades"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("Total Trades")})}},{accessorKey:"File",header:function(){return(0,s.jsx)("span",{children:"File"})},cell:function(e){var r=e.row;return(0,s.jsx)("div",{className:"capitalize",children:r.getValue("File")})}}]},8520:function(e,r,a){a.d(r,{h:function(){return l},v:function(){return c}});a(7313);var t=a(4325),n=a(7432),i=a(2539),s=a(6417),c=function(e){var r=e.data;return(0,s.jsx)("div",{className:"relative overflow-x-auto no-scrollbar shadow-md dark:shadow-2xl",children:(0,s.jsx)("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:(0,s.jsx)("tbody",{children:r.map((function(e,r){return(0,s.jsxs)("tr",{className:"border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 ".concat(r%2===0?"bg-gray-100 dark:bg-primary-dark":"bg-white dark:bg-main-dark"),children:[(0,s.jsx)("td",{className:"px-2 py-1 break-words capitalize",children:e.key}),(0,s.jsx)("td",{className:"px-2 py-1 break-words",children:e.value})]},r)}))})})})},l=function(e){var r=e.columns,a=e.data,c=e.isEdit,l=e.handleClick,d=e.handleEditClick,o=e.handleDeleteClick,u=e.Id,h=(0,t.b7)({data:a,columns:r,getCoreRowModel:(0,n.sC)()});return(0,s.jsx)("div",{className:"relative overflow-x-auto no-scrollbar shadow-md dark:shadow-2xl",children:(0,s.jsxs)("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[(0,s.jsx)("thead",{className:"text-md text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600",children:h.getHeaderGroups().map((function(e){return(0,s.jsxs)("tr",{children:[e.headers.map((function(e){return(0,s.jsx)("th",{className:"capitalize px-6 py-3 text-center whitespace-nowrap",children:e.isPlaceholder?null:(0,t.ie)(e.column.columnDef.header,e.getContext())},e.id)})),c&&(0,s.jsx)("th",{scope:"col",className:"capitalize px-6 py-3 text-center whitespace-nowrap"})]},e.id)}))}),(0,s.jsx)("tbody",{children:h.getRowModel().rows.length?h.getRowModel().rows.map((function(e,r){return(0,s.jsxs)("tr",{onClick:function(){var r;return l&&l(null===e||void 0===e||null===(r=e.original)||void 0===r?void 0:r[u])},className:"border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 ".concat(l&&"cursor-pointer"," ").concat(r%2===0?"bg-white dark:bg-main-dark":"bg-gray-100 dark:bg-primary-dark"),children:[e.getVisibleCells().map((function(e){return(0,s.jsx)("td",{className:"px-6 py-4 text-center whitespace-nowrap",children:(0,t.ie)(e.column.columnDef.cell,e.getContext())},e.id)})),c&&(0,s.jsxs)("td",{className:"py-4 w-16 flex items-center justify-between",children:[(0,s.jsx)("button",{className:"font-medium text-gray-900 dark:text-white hover:underline",onClick:function(){var r;return d(null===e||void 0===e||null===(r=e.original)||void 0===r?void 0:r[u])},children:(0,s.jsx)(i.zmo,{className:"w-5 h-5"})}),(0,s.jsx)("button",{className:"font-medium text-red-600 dark:text-red-500 hover:underline",onClick:function(){var r;return o(null===e||void 0===e||null===(r=e.original)||void 0===r?void 0:r[u])},children:(0,s.jsx)(i.F1H,{className:"w-5 h-5"})})]})]},e.id)})):(0,s.jsx)("tr",{className:"text-center h-32",children:(0,s.jsx)("td",{colSpan:12,children:"No Record Found!"})})})]})})}},8101:function(e,r,a){a.d(r,{$:function(){return s},i:function(){return c}});a(7313);var t=a(3709),n=a(7864),i=a(6417),s=function(e){var r=e.value,a=void 0===r?0:r,n=((0,t.v9)((function(e){return e.account.selectedCurrency}),[])||"")+parseFloat(a).toFixed(2);return(0,i.jsx)(i.Fragment,{children:n})},c=function(e){var r=e.value,a=void 0===r?0:r,s=e.showCurrency,c=void 0===s||s,l=e.showPlusMinus,d=void 0===l||l,o=e.showPercentage,u=void 0!==o&&o,h=e.showIcon,m=void 0!==h&&h,x=e.showBracket,p=void 0!==x&&x,g=(0,t.v9)((function(e){return e.account.selectedCurrency}),[])||"",v=parseInt(a),f=(d?v>0?"+":v<0?"-":"":"")+(c&&!u?g:"")+Math.abs(parseFloat(a)).toFixed(2)+(u?"%":"");return(0,i.jsxs)(i.Fragment,{children:[m?v<0?(0,i.jsx)(n.i0B,{className:"text-red mr-1"}):(0,i.jsx)(n.Vs3,{className:"text-green mr-1"}):null,(0,i.jsx)("span",{className:v<0?"text-red":v>0?"text-green":"dark:text-white",children:p?"("+f+")":f})]})}},8142:function(e,r,a){a.d(r,{EQ:function(){return n},K5:function(){return l},f8:function(){return s},nB:function(){return d},sI:function(){return c},zG:function(){return i}});var t=a(1933),n=t.Ry().shape({Email:t.Z_().email().required("Email is required"),UserName:t.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Username is required"),Password:t.Z_().required("Password is required").min(8,"too short - should be 8 chars minimum"),ConfirmPassword:t.Z_().required("You should repeat the password").oneOf([t.iH("Password"),null],"Type the correct password")}),i=t.Ry().shape({Email:t.Z_().email().required("Email is required"),Password:t.Z_().required("Password is required").min(8,"too short - should be 8 chars minimum")}),s=t.Ry().shape({AccountName:t.Z_().required("Account Name is required"),Market:t.Z_().required("Select Market"),Broker:t.Z_().required("Select Broker"),InitialBalance:t.Rx().positive().integer().required("Initial Balance is required"),Currency:t.Z_().required("Select Currency")}),c=t.Ry().shape({TagName:t.Z_().required("Tag Name is required"),TagType:t.Z_().required("Select Tag Type"),TagDesc:t.Z_().required("Tag Description is required")}),l=t.Ry().shape({Account:t.Z_().required("Select Account"),Market:t.Z_().required("Select Market"),Broker:t.Z_().required("Select Broker"),Setup:t.Z_().required("Select Setup"),Symbol:t.Z_().required("Symbol is required"),EntryDate:t.hT().required("Entry Date is required"),ExitDate:t.hT().required("Exit Date is required").min(t.iH("EntryDate")),EntryPrice:t.Rx().positive().integer().required("Entry Price is required"),ExitPrice:t.Rx().positive().integer().required("Initial Balance is required"),StopLoss:t.Rx().positive().integer().required("Stop Loss is required"),Quantity:t.Rx().positive().integer().required("Quantity is required")}),d=t.Ry().shape({account:t.Z_().required("Select Account"),broker:t.Z_().required("Select Broker")})},5481:function(e,r,a){a(7313);var t=a(8467),n=a(2135),i=a(9835),s=a(9798),c=a(6417);r.Z=function(){var e=(0,t.TH)();return(0,c.jsx)("section",{className:"sm:flex flex-col justify-center items-center",children:(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"my-3 mt-6",children:[(0,c.jsx)("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"OVERVIEW"}),(0,c.jsx)("h3",{className:"text-2xl font-medium dark:text-white",children:"Account"})]}),(0,c.jsx)("div",{className:"sm:w-760 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700",children:(0,c.jsx)("ul",{className:"flex flex-nowrap overflow-x-auto no-scrollbar -mb-px",children:i.Z.tabs.map((function(r){return(0,c.jsx)("li",{className:"mr-2",children:(0,c.jsx)(n.OL,{to:"/".concat(r.path),children:(0,c.jsx)("span",{className:(0,s.AK)("text-sm inline-block p-4 border-b-2 rounded-t-lg whitespace-nowrap",(a=r.path,e.pathname.includes(a)?"active text-brand-100 border-brand-100 dark:text-white dark:border-brand-100":"border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")),children:r.name})})},r.id);var a}))})})]})})}},62:function(e,r,a){a.r(r),a.d(r,{default:function(){return E}});var t=a(4165),n=a(5861),i=a(9439),s=a(7313),c=a(8467),l=a(2135),d=a(5481),o=a(3394),u=a(3420),h=a(8520),m=a(4530),x=a(1413),p=a(7410),g=a(5795),v=a(7609),f=a(8142),y=a(9687),j=a(2438),N=a(4683),b=j.Z.injectEndpoints({endpoints:function(e){return{getTagDetails:e.query({query:function(){return"tags/getTagDetails/".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)},onQueryStarted:function(e,r){return(0,n.Z)((0,t.Z)().mark((function e(){var a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.queryFulfilled,n=r.dispatch,e.prev=1,e.next=4,(0,N.p)(a,n);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()},transformResponse:function(e){return e.success?e.tag:[]},providesTags:["Tags"]}),createUpadateTags:e.mutation({query:function(e){return{url:"tags/createUpdateTag",method:"POST",body:(0,x.Z)({},e)}},onQueryStarted:function(e,r){return(0,n.Z)((0,t.Z)().mark((function e(){var a,n,i,s,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.queryFulfilled,n=r.dispatch,e.prev=1,e.next=4,(0,N.p)(a,n);case 4:c=e.sent,(null===(i=c.data)||void 0===i?void 0:i.success)&&y.F.success(null===(s=c.data)||void 0===s?void 0:s.message),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},invalidatesTags:["Tags"]}),deleteTag:e.mutation({query:function(e){return{url:"tags/deleteTag",method:"DELETE",body:(0,x.Z)({},e)}},onQueryStarted:function(e,r){return(0,n.Z)((0,t.Z)().mark((function e(){var a,n,i,s,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.queryFulfilled,n=r.dispatch,e.prev=1,e.next=4,(0,N.p)(a,n);case 4:c=e.sent,(null===(i=c.data)||void 0===i?void 0:i.success)&&y.F.success(null===(s=c.data)||void 0===s?void 0:s.message),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},invalidatesTags:["Tags"]})}},overrideExisting:!0}),w=b.useGetTagDetailsQuery,k=b.useCreateUpadateTagsMutation,T=b.useDeleteTagMutation,S=a(6417),z=function(e){var r=e.setShowTagForm,a=new URLSearchParams((0,c.TH)().search).get("tagId"),l=w(a,{refetchOnMountOrArgChange:!0,skip:!a}),d=l.data,o=l.isLoading,h=d?(0,x.Z)({},d):{TagName:"",TagType:"",TagDesc:""},m=(0,p.TA)({initialValues:h,validationSchema:f.sI,onSubmit:function(e){R(e)}}),y=m.values,j=m.errors,N=m.touched,b=m.isSubmitting,T=m.handleChange,z=m.handleSubmit,E=m.handleBlur,Z=m.setValues,q=k(),C=(0,i.Z)(q,2),V=C[0],D=C[1],K=D.isSuccess,A=D.data;(0,s.useEffect)((function(){K&&r(!1),d&&Z(h)}),[K,A,d,o,Z]);var R=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a&&(r.TagId=a),e.next=4,V(r).unwrap();case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}();return(0,S.jsx)("form",{onSubmit:z,children:(0,S.jsxs)("div",{className:"grid gap-4 sm:grid-cols-2 sm:gap-6",children:[(0,S.jsx)("div",{className:"w-full",children:(0,S.jsx)(g.Z,{label:"Tag Name",placeholder:"Ex.: Setup Created",id:"tag-name",type:"text",htmlName:"TagName",value:y.TagName,handleChange:T,onBlur:E,errorMsg:j.TagName&&N.TagName&&j.TagName})}),(0,S.jsx)("div",{className:"w-full",children:(0,S.jsx)(v.Z,{label:"Select Tag Type",id:"ddTags",htmlName:"TagType",errorMsg:j.TagType&&N.TagType&&j.TagType,onChange:T,onBlur:E,value:y.TagType,children:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("option",{children:"Select Type"}),(0,S.jsx)("option",{children:"SETUP"}),(0,S.jsx)("option",{children:"MISTAKE"}),(0,S.jsx)("option",{children:"CUSTOM"})]})})}),(0,S.jsx)("div",{className:"sm:col-span-2",children:(0,S.jsx)(g.Z,{label:"Description",placeholder:"Add Description",id:"tag-description",type:"text",htmlName:"TagDesc",value:y.TagDesc,handleChange:T,onBlur:E,errorMsg:j.TagDesc&&N.TagDesc&&j.TagDesc})}),(0,S.jsxs)("div",{className:"flex flex-row items-center mt-5",children:[(0,S.jsx)(u.JK,{id:"reset",children:"Reset"}),(0,S.jsx)(u.Mm,{type:"submit",id:"profileBtn",disabled:b,children:"Submit"})]})]})})},E=function(){var e=(0,c.s0)(),r=(0,s.useState)(!1),a=(0,i.Z)(r,2),x=a[0],p=a[1],g=w(),v=g.data,f=(g.isLoading,T()),y=(0,i.Z)(f,2),j=y[0],N=(y[1].isLoading,function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j({TagId:r}).unwrap();case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(r){return e.apply(this,arguments)}}()),b=function(r,a){return e("".concat(r,"?").concat((0,l.fW)(a)))};return(0,S.jsxs)("div",{children:[(0,S.jsx)(d.Z,{}),(0,S.jsx)("div",{className:"flex flex-col justify-center items-center",children:(0,S.jsx)("div",{className:"w-full max-w-3xl p-6 mt-8 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-main-dark",children:(0,S.jsxs)("div",{className:"py-8 px-1 max-w-2xl lg:py-2",children:[!x&&(0,S.jsxs)("div",{className:"grid gap-4 sm:grid-cols-2 sm:gap-6",children:[(0,S.jsx)("div",{className:"w-full",children:(0,S.jsx)("h2",{className:"mb-2 sm:mb-2 text-sm font-bold text-gray-900 dark:text-white",children:"MANAGE TAGS"})}),(0,S.jsx)("div",{className:"w-full flex sm:justify-end sm:items-start",children:(0,S.jsx)(u.Mm,{id:"add-account",onClick:function(){p(!x),e("/settings/tags-mmanagements")},children:"+ ADD TAGS"})}),(0,S.jsx)("div",{className:"sm:col-span-2 relative overflow-x-auto shadow-md sm:rounded-lg",children:(0,S.jsx)(h.h,{data:v||[],columns:m.TA,isEdit:!0,handleDeleteClick:N,handleEditClick:function(e){p(!0),b("/settings/tags-mmanagements",{tagId:e})},Id:"TagId"})})]}),x&&(0,S.jsxs)("div",{children:[(0,S.jsxs)("div",{className:"flex justify-between items-center border-b dark:border-gray-600 pb-4 mb-4 sm:mb-5",children:[(0,S.jsx)("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Add Tags"}),(0,S.jsx)("button",{className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:function(){return p(!x)},children:(0,S.jsx)(o.bjh,{className:"w-6 h-6"})})]}),(0,S.jsx)(z,{setShowTagForm:p})]})]})})})]})}}}]);