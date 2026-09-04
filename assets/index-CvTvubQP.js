import{a as f,bU as _,G as D,r as l,j as e,B as S,C as E,h as b,i as N}from"./index-D8SWrkkL.js";import{B as w}from"./BreadCrumb-DEupYY98.js";import{A}from"./AlertDialogContainer-ByvGAX7s.js";import{T as k}from"./ToastContainer-DXqkJv4a.js";import{A as T}from"./AppSelect-CvuCfD2e.js";import{S as u}from"./Skeleton-BcakMCY4.js";/* empty css                 */import"./AlertDialog-6SItw02W.js";import"./bodyScrollLock-GiXtmoed.js";const Y=["PPE_CHECK_DAY","TPE_CHECK_DAY","LADDER_CHECK_DAY","FIREX_CHECK_DAY"],I=s=>{if(!s.success||s.data==null)throw new Error(s.error?.message??"เกิดข้อผิดพลาดจากเซิร์ฟเวอร์");return s.data},P=s=>{const n=new Map(s.map(a=>[a.key,a]));return Y.map(a=>{const r=n.get(a);return{key:a,label:r?.description??a,value:r?String(r.value):""}})},j={list:async()=>{const s=await f.get(D);return P(s.data??[])},update:async s=>{const n={items:s.items.map(r=>({key:r.key,value:r.value}))},a=await f.post(_,n,void 0,{showMessage:!0,successMessage:{title:"บันทึกสำเร็จ",sub:"วันที่ตรวจอุปกรณ์ถูกอัปเดตเรียบร้อย"}});I(a)}},H=()=>{const[s,n]=l.useState(!1),a=l.useCallback(async r=>{n(!0);try{await j.update(r)}catch(c){throw new Error(c?.message??"เกิดข้อผิดพลาด กรุณาลองใหม่")}finally{n(!1)}},[]);return{saving:s,saveCheckDay:a}},K={PPE_CHECK_DAY:"ri-shield-check-line",TPE_CHECK_DAY:"ri-tools-line",LADDER_CHECK_DAY:"ri-stairs-line",FIREX_CHECK_DAY:"ri-fire-line"},C={PPE_CHECK_DAY:"วันที่ของทุกเดือนที่ต้องตรวจ PPE",TPE_CHECK_DAY:"วันที่ของทุกเดือนที่ต้องตรวจ TPE",LADDER_CHECK_DAY:"วันที่ของทุกเดือนที่ต้องตรวจบันได",FIREX_CHECK_DAY:"วันที่ของทุกเดือนที่ต้องตรวจถังดับเพลิง"},g=220,O=Array.from({length:31},(s,n)=>{const a=String(n+1);return{value:a,label:a}}),y=`
  .tt-panel--responsive .tt-panel-body,
  .tt-panel--responsive .tt-panel-footer {
    padding-left: 24px;
    padding-right: 24px;
    box-sizing: border-box;
  }
  .app-select__menu-list {
    max-height: 200px !important;
  }
  .tt-panel {    overflow: visible;}
  .tt-panel--responsive .tt-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid var(--ds-border, #eef0f2);
  }
  .tt-panel--responsive .tt-row:last-child {
    border-bottom: none;
  }
  .tt-panel--responsive .tt-row-main {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1 1 auto;
    min-width: 0;
  }
  .tt-panel--responsive .tt-row-main > div {
    min-width: 0;
  }
  .tt-panel--responsive .tt-row-icon {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    font-size: 22px;
  }
  .tt-panel--responsive .tt-row-icon i {
    font-size: 22px;
    line-height: 1;
  }
  .tt-panel--responsive .tt-row-input-col {
    flex: 0 0 ${g}px;
    width: ${g}px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .tt-panel--responsive .tt-input-wrap {
    width: 100%;
  }
  @media (max-width: 576px) {
    .tt-panel--responsive .tt-panel-body,
    .tt-panel--responsive .tt-panel-footer {
      padding-left: 16px;
      padding-right: 16px;
    }
    .tt-panel--responsive .tt-panel-footer button {
      width: 100%;
    }
    .tt-panel--responsive .tt-row {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }
    .tt-panel--responsive .tt-row-input-col {
      flex: 0 0 auto;
      width: 100%;
    }
    .tt-panel--responsive .tt-input-wrap,
    .tt-panel--responsive .tt-input-wrap > * {
      width: 100%;
      box-sizing: border-box;
    }
  }
`,R=({items:s,loading:n,saving:a,onSubmit:r})=>{const[c,m]=l.useState({}),[p,d]=l.useState({});l.useEffect(()=>{if(!n){const t={};s.forEach(i=>{t[i.key]=i.value}),m(t),d({})}},[n]);const h=(t,i)=>{m(v=>({...v,[t]:i})),p[t]&&d(v=>({...v,[t]:void 0}))},x=()=>{const t={};return s.forEach(i=>{c[i.key]?.trim()||(t[i.key]="กรุณาเลือกวันที่")}),d(t),Object.keys(t).length===0},o=async()=>{if(!x())return;const t={items:s.map(i=>({...i,value:c[i.key]??i.value}))};await r(t)};return n?e.jsxs("div",{className:"tt-panel tt-panel--responsive",children:[e.jsx("style",{children:y}),e.jsx("div",{className:"tt-panel-body",children:[0,1,2,3].map(t=>e.jsxs("div",{className:"tt-row",children:[e.jsxs("div",{className:"tt-row-main",children:[e.jsx(u,{height:38,width:38,circle:!0}),e.jsx(u,{height:14,width:"70%"})]}),e.jsx("div",{className:"tt-row-input-col",children:e.jsx(u,{height:34,width:"100%"})})]},t))}),e.jsx("div",{className:"tt-panel-footer",children:e.jsx(u,{height:42,width:110})})]}):e.jsxs("div",{className:"tt-panel tt-panel--responsive",children:[e.jsx("style",{children:y}),e.jsx("div",{className:"tt-panel-body",children:s.map(t=>e.jsxs("div",{className:"tt-row",children:[e.jsxs("div",{className:"tt-row-main",children:[e.jsx("div",{className:"tt-row-icon",children:e.jsx("i",{className:K[t.key]??"ri-calendar-line"})}),e.jsxs("div",{children:[e.jsx("div",{className:"tt-row-label",children:t.label}),C[t.key]&&e.jsx("div",{className:"tt-row-desc",children:C[t.key]})]})]}),e.jsxs("div",{className:"tt-row-input-col",children:[e.jsx("div",{className:"tt-input-wrap",children:e.jsx(T,{value:c[t.key]??"",options:O,hasError:!!p[t.key],placeholder:"เลือกวันที่...",onChange:i=>h(t.key,i)})}),p[t.key]&&e.jsx("span",{className:"tt-row-error",children:p[t.key]})]})]},t.key))}),e.jsx("div",{className:"tt-panel-footer",children:e.jsx(S,{variant:"primary",size:"lg",leftIcon:"ri-save-3-line",loading:a,disabled:a,onClick:()=>{o()},children:"บันทึก"})})]})},X=()=>{l.useEffect(()=>{document.title="วันที่ตรวจอุปกรณ์ | Settings Safety Equipment"},[]);const{saving:s,saveCheckDay:n}=H(),[a,r]=l.useState([]),[c,m]=l.useState(!0),[p,d]=l.useState(null),h=l.useCallback(async()=>{m(!0),d(null);try{const o=await j.list();r(o)}catch(o){d(o instanceof Error?o.message:"เกิดข้อผิดพลาด")}finally{m(!1)}},[]);l.useEffect(()=>{h()},[h]);const x=l.useCallback(async o=>{try{await n(o),h()}catch{}},[n,h]);return p&&a.length===0?e.jsx("div",{className:"page-content",children:e.jsxs(E,{fluid:!0,children:[e.jsx(w,{title:"วันที่ตรวจอุปกรณ์",pageTitle:"Settings Safety Equipment"}),e.jsx("div",{className:"outer-wrapper"})]})}):e.jsxs("div",{className:"page-content",children:[e.jsxs(E,{fluid:!0,children:[e.jsx(w,{title:"วันที่ตรวจอุปกรณ์",pageTitle:"Settings Safety Equipment"}),e.jsx("div",{className:"outer-wrapper",children:e.jsx(b,{children:e.jsx(N,{children:e.jsx(R,{items:a,loading:c,saving:s,onSubmit:x})})})})]}),e.jsx(k,{}),e.jsx(A,{})]})};export{X as default};
