"use strict";(self.webpackChunktradex=self.webpackChunktradex||[]).push([[905],{5795:function(e,r,a){a(7313);var t=a(6417);r.Z=function(e){var r=e.label,a=e.id,i=e.type,d=e.placeholder,n=e.disabled,o=e.handleChange,s=e.htmlName,l=e.value,c=e.errorMsg,u="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100";return"file"===i&&(u="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:a,className:"block mb-2 text-sm font-medium ".concat(c?"text-red-700 dark:text-red-500":"text-gray-900 dark:text-white"),children:r}),"textArea"===i?(0,t.jsx)("textarea",{id:a,rows:"8",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:d}):(0,t.jsx)("input",{disabled:n,type:i,id:a,placeholder:d,value:l,className:c?"bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":u,name:s,onChange:o}),c&&(0,t.jsx)("p",{className:"mt-2 text-sm text-red-600 dark:text-red-500",children:(0,t.jsx)("span",{className:"font-medium",children:c})})]})}},8142:function(e,r,a){a.d(r,{EQ:function(){return i},K5:function(){return s},f8:function(){return n},nB:function(){return l},sI:function(){return o},zG:function(){return d}});var t=a(1933),i=t.Ry().shape({Email:t.Z_().email().required("Email is required"),UserName:t.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Username is required"),Password:t.Z_().required("Password is required").min(8,"too short - should be 8 chars minimum"),ConfirmPassword:t.Z_().required("You should repeat the password").oneOf([t.iH("Password"),null],"Type the correct password")}),d=t.Ry().shape({Email:t.Z_().email().required("Email is required"),Password:t.Z_().required("Password is required").min(8,"too short - should be 8 chars minimum")}),n=t.Ry().shape({AccountName:t.Z_().required("Account Name is required"),Market:t.Z_().required("Select Market"),Broker:t.Z_().required("Select Broker"),InitialBalance:t.Rx().positive().integer().required("Initial Balance is required"),Currency:t.Z_().required("Select Currency")}),o=t.Ry().shape({TagName:t.Z_().required("Tag Name is required"),TagType:t.Z_().required("Select Tag Type"),TagDesc:t.Z_().required("Tag Description is required")}),s=t.Ry().shape({Account:t.Z_().required("Select Account"),Market:t.Z_().required("Select Market"),Broker:t.Z_().required("Select Broker"),Setup:t.Z_().required("Select Setup"),Symbol:t.Z_().required("Symbol is required"),EntryDate:t.hT().required("Entry Date is required"),ExitDate:t.hT().required("Exit Date is required").min(t.iH("EntryDate")),EntryPrice:t.Rx().required("Entry Price is required"),ExitPrice:t.Rx().required("Initial Balance is required"),StopLoss:t.Rx().required("Stop Loss is required"),Quantity:t.Rx().positive().integer().required("Quantity is required")}),l=t.Ry().shape({account:t.Z_().required("Select Account"),broker:t.Z_().required("Select Broker")})},9905:function(e,r,a){a.r(r);var t=a(4165),i=a(5861),d=a(9439),n=(a(7313),a(7609)),o=a(3420),s=a(5795),l=a(5798),c=a(8142),u=a(7410),m=a(4068),p=a(6417);r.default=function(){var e=(0,u.TA)({initialValues:{account:"",broker:"",description:"",file:""},validationSchema:c.nB,onSubmit:function(e){j(e)}}),r=e.values,a=e.errors,h=e.touched,x=(e.isSubmitting,e.handleChange),g=e.handleSubmit,b=e.handleBlur,k=e.setFieldValue,y=(0,m.dt)(),f=(0,d.Z)(y,2),q=f[0],j=(f[1].isLoading,function(){var e=(0,i.Z)((0,t.Z)().mark((function e(r){var a,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i in e.prev=0,r.AccountId=parseInt(r.account),delete r.account,a=new FormData,r)a.append(i,r[i]);return e.next=7,q(a).unwrap();case 7:e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}());return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"flex",children:(0,p.jsx)("div",{className:"w-full max-w-3xl p-6 mt-8 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-main-dark",children:(0,p.jsxs)("div",{className:"py-8 px-1 max-w-2xl lg:py-2",children:[(0,p.jsx)("h2",{className:"pb-4 mb-4 sm:mb-5 text-xl border-b font-bold text-gray-900 dark:text-white dark:border-gray-600",children:"Import Your Trades"}),(0,p.jsx)("form",{onSubmit:g,children:(0,p.jsxs)("div",{className:"grid gap-4 sm:grid-cols-2 sm:gap-6",children:[(0,p.jsx)("div",{className:"col-span-2 sm:col-span-1",children:(0,p.jsx)(n.Z,{label:"Select Broker",id:"ddBroker",htmlName:"broker",errorMsg:a.broker&&h.broker&&a.broker,onChange:x,onBlur:b,value:r.broker,children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("option",{children:"Select Broker"}),(0,p.jsx)("option",{children:"ZERODHA"}),(0,p.jsx)("option",{children:"ANGLE ONE"}),(0,p.jsx)("option",{children:"UPSTOX"}),(0,p.jsx)("option",{children:"DHAN"})]})})}),(0,p.jsx)("div",{className:"col-span-2 sm:col-span-1",children:(0,p.jsx)(l.d,{label:"Select Account",htmlName:"account",errorMsg:a.account&&h.account&&a.account,onChange:x,onBlur:b,value:r.account})}),(0,p.jsx)("div",{className:"col-span-2",children:(0,p.jsx)(s.Z,{label:"Upload Your Excel File",placeholder:"Choose a file",id:"fileimport",type:"file",htmlName:"file",handleChange:function(e){k("file",e.target.files[0])}})}),(0,p.jsx)("div",{className:"col-span-2",children:(0,p.jsx)(s.Z,{label:"Description",placeholder:"Add Description",id:"tag-description",type:"textArea",htmlName:"description",errorMsg:a.description&&h.description&&a.description,handleChange:x,onBlur:b,value:r.description})}),(0,p.jsxs)("div",{className:"flex flex-row items-start mt-5",children:[(0,p.jsx)(o.JK,{id:"reset",children:"Reset"}),(0,p.jsx)(o.Mm,{id:"importTrade",children:"Submit"})]})]})})]})})})})}}}]);