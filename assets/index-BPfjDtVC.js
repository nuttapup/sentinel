import{a as f,bU as k,G as b,r as l,j as e,B as E,C as w,h as N,i as _}from"./index-D8SWrkkL.js";import{B as T}from"./BreadCrumb-DEupYY98.js";import{A}from"./AlertDialogContainer-ByvGAX7s.js";import{T as C}from"./ToastContainer-DXqkJv4a.js";import{T as I}from"./TimePicker-BNiRJe37.js";import{S as h}from"./Skeleton-BcakMCY4.js";/* empty css                 */import"./AlertDialog-6SItw02W.js";import"./bodyScrollLock-GiXtmoed.js";const L=["SAFETY_TALK_START","SAFETY_TALK_END"],F=s=>{if(!s.success||s.data==null)throw new Error(s.error?.message??"เกิดข้อผิดพลาดจากเซิร์ฟเวอร์");return s.data},Y=s=>{const i=new Map(s.map(a=>[a.key,a]));return L.map(a=>{const r=i.get(a);return{key:a,label:r?.description??a,value:r?String(r.value):""}})},S={list:async()=>{const s=await f.get(b);return Y(s.data??[])},update:async s=>{const i={items:s.items.map(r=>({key:r.key,value:r.value}))},a=await f.post(k,i,void 0,{showMessage:!0,successMessage:{title:"บันทึกสำเร็จ",sub:"เวลา Safety Talk ถูกอัปเดตเรียบร้อย"}});F(a)}},P=()=>{const[s,i]=l.useState(!1),a=l.useCallback(async r=>{i(!0);try{await S.update(r)}catch(c){throw new Error(c?.message??"เกิดข้อผิดพลาด กรุณาลองใหม่")}finally{i(!1)}},[]);return{saving:s,saveTalkTime:a}},K={SAFETY_TALK_START:"ri-play-circle-line",SAFETY_TALK_END:"ri-stop-circle-line"},g={SAFETY_TALK_START:"เวลาเปิดระบบ Safety Talk",SAFETY_TALK_END:"เวลาปิดระบบ Safety Talk ประจำวัน"},y=220,j=`
  .tt-panel--responsive .tt-panel-body,
  .tt-panel--responsive .tt-panel-footer {
    padding-left: 24px;
    padding-right: 24px;
    box-sizing: border-box;
  }
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
  /* ฝั่ง label — ยึดพื้นที่ "ที่เหลือ" หลังหัก input-col ไปแล้ว
     ไม่ใช่ยึดไปหมดก่อนแบบเดิม (flex-basis 240px + grow:1) */
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
  /* icon เดิมเล็กไป — บังคับขนาดวงกลม + ตัว icon ให้ใหญ่ขึ้นชัดเจน */
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
  /* ฝั่ง input — ให้ความกว้าง "คงที่และใหญ่พอ" แทนการปล่อย auto
     ตามเนื้อหา (ซึ่งทำให้ TimePicker ดูเล็กบีบเวลา label ยาว) */
  .tt-panel--responsive .tt-row-input-col {
    flex: 0 0 ${y}px;
    width: ${y}px;
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
    /* TimePicker root มักมี width ตายตัวของตัวเอง (inline-block)
       บังคับแค่ "ชั้นแรก" ที่ห่อ TimePicker ให้เต็มจอพอ
       ห้ามไล่ลึกลงไปถึง input/button ข้างใน เพราะปุ่มตัวเลข
       แต่ละอันใน dropdown (08, 09, AM, PM ฯลฯ) ก็เป็น <button>
       เหมือนกัน ถ้าบังคับ width:100% ทุกปุ่มจะพัง layout ของ
       wheel picker ทันที (คอลัมน์ชิดกัน ตัวเลขดูเล็ก/บีบ) */
    .tt-panel--responsive .tt-input-wrap,
    .tt-panel--responsive .tt-input-wrap > * {
      width: 100%;
      box-sizing: border-box;
    }
  }
`,O=({items:s,loading:i,saving:a,onSubmit:r})=>{const[c,u]=l.useState({}),[p,d]=l.useState({});l.useEffect(()=>{if(!i){const t={};s.forEach(n=>{t[n.key]=n.value}),u(t),d({})}},[i]);const m=(t,n)=>{u(v=>({...v,[t]:n})),p[t]&&d(v=>({...v,[t]:void 0}))},x=()=>{const t={};return s.forEach(n=>{c[n.key]?.trim()||(t[n.key]="กรุณาระบุเวลา")}),d(t),Object.keys(t).length===0},o=async()=>{if(!x())return;const t={items:s.map(n=>({...n,value:c[n.key]??n.value}))};await r(t)};return i?e.jsxs("div",{className:"tt-panel tt-panel--responsive",children:[e.jsx("style",{children:j}),e.jsx("div",{className:"tt-panel-body",children:[0,1].map(t=>e.jsxs("div",{className:"tt-row",children:[e.jsxs("div",{className:"tt-row-main",children:[e.jsx(h,{height:38,width:38,circle:!0}),e.jsx(h,{height:14,width:"70%"})]}),e.jsx("div",{className:"tt-row-input-col",children:e.jsx(h,{height:34,width:"100%"})})]},t))}),e.jsx("div",{className:"tt-panel-footer",children:e.jsx(h,{height:42,width:110})})]}):e.jsxs("div",{className:"tt-panel tt-panel--responsive",children:[e.jsx("style",{children:j}),e.jsx("div",{className:"tt-panel-body",children:s.map(t=>e.jsxs("div",{className:"tt-row",children:[e.jsxs("div",{className:"tt-row-main",children:[e.jsx("div",{className:"tt-row-icon",children:e.jsx("i",{className:K[t.key]??"ri-time-line"})}),e.jsxs("div",{children:[e.jsx("div",{className:"tt-row-label",children:t.label}),g[t.key]&&e.jsx("div",{className:"tt-row-desc",children:g[t.key]})]})]}),e.jsxs("div",{className:"tt-row-input-col",children:[e.jsx("div",{className:"tt-input-wrap",children:e.jsx(I,{value:c[t.key]??"",minuteStep:5,invalid:!!p[t.key],onChange:n=>m(t.key,n)})}),p[t.key]&&e.jsx("span",{className:"tt-row-error",children:p[t.key]})]})]},t.key))}),e.jsx("div",{className:"tt-panel-footer",children:e.jsx(E,{variant:"primary",size:"lg",leftIcon:"ri-save-3-line",loading:a,disabled:a,onClick:()=>{o()},children:"บันทึก"})})]})},$=()=>{l.useEffect(()=>{document.title="เวลาอบรม | Settings Safety Talk"},[]);const{saving:s,saveTalkTime:i}=P(),[a,r]=l.useState([]),[c,u]=l.useState(!0),[p,d]=l.useState(null),m=l.useCallback(async()=>{u(!0),d(null);try{const o=await S.list();r(o)}catch(o){d(o instanceof Error?o.message:"เกิดข้อผิดพลาด")}finally{u(!1)}},[]);l.useEffect(()=>{m()},[m]);const x=l.useCallback(async o=>{try{await i(o),m()}catch{}},[i,m]);return p&&a.length===0?e.jsx("div",{className:"page-content",children:e.jsxs(w,{fluid:!0,children:[e.jsx(T,{title:"เวลาอบรม",pageTitle:"Settings Safety Talk"}),e.jsx("div",{className:"outer-wrapper"})]})}):e.jsxs("div",{className:"page-content",children:[e.jsxs(w,{fluid:!0,children:[e.jsx(T,{title:"เวลาอบรม",pageTitle:"Settings Safety Talk"}),e.jsx("div",{className:"outer-wrapper",children:e.jsx(N,{children:e.jsx(_,{children:e.jsx(O,{items:a,loading:c,saving:s,onSubmit:x})})})})]}),e.jsx(C,{}),e.jsx(A,{})]})};export{$ as default};
